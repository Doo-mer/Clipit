import React from "react";
import ExpandableSidebar from "./ExpandableSidebar";

interface SidebarContainerProps {
  // isExpanded: boolean;
  // setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

export default function SidebarContainer({ /*isExpanded, setIsExpanded*/ }: SidebarContainerProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-screen flex transition-all duration-300 z-10 w-60`} // Container is fixed
    >
      <ExpandableSidebar/>
    </div>
  );
} 