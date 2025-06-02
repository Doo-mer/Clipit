import Link from "next/link";
import React from "react";
import { Icons } from "../utils/icons";

interface SidebarLinkProps {
  href: string;
  icon: string;
  children: React.ReactNode;
}

export default function SidebarLink({ href, icon, children }: SidebarLinkProps) {
  const IconComponent = Icons[icon];

  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition whitespace-nowrap">
      {IconComponent && <IconComponent size={18} />}
      {children}
    </Link>
  );
} 