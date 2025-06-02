"use client";

import { useState, useEffect } from "react";
import ThinSidebar from "../components/ThinSidebar";
import ExpandableSidebar from "../components/ExpandableSidebar";
import MainContent from "../components/MainContent";
import SidebarContainer from "../components/SidebarContainer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(true);
  const router = useRouter();

  const thinSidebarWidth = 80; // w-20 = 80px
  const expandableSidebarExpandedWidth = 240; // w-60 = 240px
  const expandableSidebarCollapsedWidth = 0; // w-0 = 0px

  const totalSidebarWidth = thinSidebarWidth + (isExpanded ? expandableSidebarExpandedWidth : expandableSidebarCollapsedWidth);

  const mainContentLeftMargin = totalSidebarWidth;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl+V 또는 Cmd+V 감지
      if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
        console.log("Ctrl+V 또는 Cmd+V 감지됨 (keydown)");
        // TODO: 글 생성 탭으로 이동 및 링크 정보 처리 로직 구현
        // 실제 붙여넣기 내용은 paste 이벤트에서 처리해야 함
      }
    };

    const handlePaste = (event: ClipboardEvent) => {
      // 여기에 실제 붙여넣기 내용 처리 로직 추가
      const pastedText = event.clipboardData?.getData('text');
      if (pastedText) {
        console.log("붙여넣기 내용:", pastedText);
        // TODO: pastedText를 이용하여 링크 정보 가져오기 (현재는 콘솔 출력만)
        // 하드코딩된 링크 정보 처리 로직이 여기에 들어갈 수 있습니다.
        // /new-post 페이지로 이동
        router.push('/new-post');
        // 기본 붙여넣기 동작 방지 (원치 않는 곳에 텍스트가 붙여넣어지는 것을 막음)
        // event.preventDefault(); // 필요한 경우 주석 해제
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
    <div className="flex min-h-screen bg-white dark:bg-gray-950">
      <SidebarContainer isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className="flex-1 transition-all duration-300" style={{ marginLeft: `${mainContentLeftMargin}px` }}>
        <MainContent />
      </div>
    </div>
  );
}
