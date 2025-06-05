"use client";

import React from "react";
import { useState, useEffect } from "react";
import MainContent from "../widget/MainContent";
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Home() {
  const router = useRouter();
  const [clipboardContent, setClipboardContent] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
        console.log("Ctrl+V 또는 Cmd+V 감지됨 (keydown)");
      }
    };

    const handlePaste = async (event: ClipboardEvent) => {
      const pastedText = event.clipboardData?.getData('text');
      if (pastedText) {
        try {
          const response = await axios.post('http://localhost:8000/chat/', {
            prompt: pastedText
          });
          
          // 응답 데이터를 상태에 저장
          setClipboardContent(response.data);
          
          // new-post 페이지로 이동하면서 데이터 전달
          router.push(`/new-post?content=${encodeURIComponent(response.data.reply)}`);
        } catch (error) {
          console.error('API 요청 실패:', error);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("paste", handlePaste);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("paste", handlePaste);
    };
  }, [router]);

  return (
    <div className="flex min-h-screen bg-white dark:bg-neutral-900">
      <div className="flex-1 transition-all duration-300">
        <MainContent />
      </div>
    </div>
  );
}
