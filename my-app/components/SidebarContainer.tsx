import React, { Dispatch, SetStateAction } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ThinSidebar from "./ThinSidebar";
import ExpandableSidebar from "./ExpandableSidebar";

interface SidebarContainerProps {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

export default function SidebarContainer({ isExpanded, setIsExpanded }: SidebarContainerProps) {
  const thinSidebarWidth = 80; // w-20 = 80px
  const expandableSidebarExpandedWidth = 240; // w-60 = 240px
  const expandableSidebarCollapsedWidth = 0; // w-0 = 0px

  const totalSidebarWidth = thinSidebarWidth + (isExpanded ? expandableSidebarExpandedWidth : expandableSidebarCollapsedWidth);

  return (
    <div
      className={`fixed top-0 left-0 h-screen flex transition-all duration-300 z-10`} // Container is fixed
      style={{ width: `${totalSidebarWidth}px` }} // Dynamic width based on expanded state
    >
      <ThinSidebar />
      <ExpandableSidebar isExpanded={isExpanded} />
      {/* Toggle button is now inside the container, positioned relative to it */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`absolute top-8 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition z-50
          right-[-1.25rem]
        `}
      >
        {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
    </div>
  );
} 