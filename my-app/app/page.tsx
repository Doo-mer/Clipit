"use client";

import { useState } from "react";
import ThinSidebar from "../components/ThinSidebar";
import ExpandableSidebar from "../components/ExpandableSidebar";
import MainContent from "../components/MainContent";
import SidebarContainer from "../components/SidebarContainer";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(true);

  const thinSidebarWidth = 80; // w-20 = 80px
  const expandableSidebarExpandedWidth = 240; // w-60 = 240px
  const expandableSidebarCollapsedWidth = 0; // w-0 = 0px

  const totalSidebarWidth = thinSidebarWidth + (isExpanded ? expandableSidebarExpandedWidth : expandableSidebarCollapsedWidth);

  const mainContentLeftMargin = totalSidebarWidth;

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950">
      <SidebarContainer isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className="flex-1 transition-all duration-300" style={{ marginLeft: `${mainContentLeftMargin}px` }}>
        <MainContent />
      </div>
    </div>
  );
}
