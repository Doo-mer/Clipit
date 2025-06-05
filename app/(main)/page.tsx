"use client";

import React from "react";
import { useState, useEffect } from "react";
import MainContent from "../widget/MainContent";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
        console.log("Ctrl+V 또는 Cmd+V 감지됨 (keydown)");
      }
    };

    const handlePaste = (event: ClipboardEvent) => {
      const pastedText = event.clipboardData?.getData('text');
      if (pastedText) {
        console.log("붙여넣기 내용:", pastedText);
        router.push('/new-post');
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
