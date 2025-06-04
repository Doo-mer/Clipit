import React from "react";

interface SidebarCategoryProps {
  title: string;
}

export default function SidebarCategory({ title }: SidebarCategoryProps) {
  return (
    <div className="mt-4 mb-1 text-xs text-neutral-500 font-semibold px-3">
      {title}
    </div>
  );
} 