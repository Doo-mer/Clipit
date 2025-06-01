import Link from "next/link";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export default function SidebarLink({ href, icon: Icon, children }: SidebarLinkProps) {
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition whitespace-nowrap">
      <Icon size={18} />
      {children}
    </Link>
  );
} 