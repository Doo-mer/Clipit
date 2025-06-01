import Link from "next/link";
import React from "react";
import { Icons } from "../utils/icons";

interface ThinSidebarLinkProps {
  href: string;
  icon: string;
  label: string;
}

function ThinSidebarLink({ href, icon, label }: ThinSidebarLinkProps) {
  const IconComponent = Icons[icon];

  return (
    <Link href={href} className="flex flex-col items-center justify-center p-3 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition group">
      {IconComponent && <IconComponent size={20} className="mb-1" />}
      <span className="text-xs group-hover:text-gray-900 dark:group-hover:text-white">{label}</span>
    </Link>
  );
}

const topLinks = [
  { href: "#", icon: "Home", label: "홈" },
  { href: "#", icon: "BarChart2", label: "그래프" },
];

const bottomLinks = [
  { href: "#", icon: "Settings", label: "설정" },
];

export default function ThinSidebar() {
  return (
    <aside className="bg-gray-100 dark:bg-gray-900 h-screen w-20 flex flex-col items-center p-4 border-r border-gray-200 dark:border-gray-800 z-20">
      <div className="mb-8 mt-2">
        {/* Placeholder for Clipit logo/icon */}
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">C</div>
      </div>
      <nav className="flex-1 flex flex-col gap-4">
        {topLinks.map((link, index) => (
          <ThinSidebarLink key={index} href={link.href} icon={link.icon} label={link.label} />
        ))}
      </nav>
      <div className="mt-auto mb-2">
        {bottomLinks.map((link, index) => (
          <ThinSidebarLink key={index} href={link.href} icon={link.icon} label={link.label} />
        ))}
      </div>
    </aside>
  );
} 