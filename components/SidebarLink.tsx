import Link from "next/link";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: string | React.ElementType;
  children: React.ReactNode;
  activeText: string;
  setActiveText: React.Dispatch<React.SetStateAction<string>>;
  text: any;
}

export default function SidebarLink({ href, icon, children, activeText, setActiveText, text }: SidebarLinkProps) {
  const isActive = activeText === text;

  const handleClick = () => {
    if (isActive) {
      setActiveText("");
    } else {
      setActiveText(text);
    }
  };

  const IconComponent = typeof icon === 'string' ? null : icon;
  const iconPath = typeof icon === 'string' ? icon : null;

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`flex items-center gap-3 px-3 py-2 rounded transition whitespace-nowrap
        ${isActive ? "bg-blue-500 text-white" : "hover:bg-neutral-200 dark:hover:bg-neutral-800"}
      `}
    >
      {IconComponent && <IconComponent size={24} fill={isActive ? "currentColor" : "none"} />}
      {iconPath && (
        <div className={`w-[24px] h-[24px] flex items-center justify-center ${isActive ? "" : "bg-white rounded-sm p-1"}`}>
          <img src={iconPath} alt="icon" className={`max-w-full max-h-full ${isActive ? "filter brightness-0 invert" : ""}`} />
        </div>
      )}
      {children}
    </Link>
  );
} 