import Link from "next/link";
import { Home, BarChart2, Settings } from "lucide-react";
import React from "react";

interface ThinSidebarLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function ThinSidebarLink({ href, icon: Icon, label }: ThinSidebarLinkProps) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center p-3 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition group">
      <Icon size={20} className="mb-1" />
      <span className="text-xs group-hover:text-gray-900 dark:group-hover:text-white">{label}</span>
    </Link>
  );
}

export default function ThinSidebar() {
  return (
    <aside className="bg-gray-100 dark:bg-gray-900 h-screen w-20 flex flex-col items-center p-4 border-r border-gray-200 dark:border-gray-800 z-20">
      <div className="mb-8 mt-2">
        {/* Placeholder for Clipit logo/icon */}
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">C</div>
      </div>
      <nav className="flex-1 flex flex-col gap-4">
        <ThinSidebarLink href="#" icon={Home} label="홈" />
        <ThinSidebarLink href="#" icon={BarChart2} label="그래프" />
      </nav>
      <div className="mt-auto mb-2">
        <ThinSidebarLink href="#" icon={Settings} label="설정" />
      </div>
    </aside>
  );
} 