"use client";

import { useEffect } from "react";
import MainContent from "@/widget/MainContent";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAtom } from "jotai";
import { contentAtom } from "../atom/atom";

export default function Home() {
  const router = useRouter();
  const [, setContent] = useAtom(contentAtom);

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
          // 먼저 new-post 페이지로 이동
          router.push('/new-post');
          
          // 이후 gemini 에게 신호를 보내서 요약 정보를 얻음ㅇ
          const response = await axios.post('http://localhost:8000/chat/', {
            prompt: pastedText
          });
          
          // 응답 데이터를 contentAtom에 저장
          await setContent({
            reply: response.data.reply,
            og_title: response.data.og_title,
            og_description: response.data.og_description,
            og_image: response.data.og_image
          });
          
          console.log('API 응답:', response.data);
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
  }, [router, setContent]);

  return (
    <div className="flex min-h-screen bg-white dark:bg-neutral-900">
      <div className="flex-1 transition-all duration-300">
        <MainContent />
      </div>
    </div>
  );
}
