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
    setActiveText(text);
  };

  const IconComponent = typeof icon === 'string' ? null : icon;
  const iconPath = typeof icon === 'string' ? icon : null;

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition whitespace-nowrap text-sm
        ${isActive ? "bg-neutral-700 text-white" : "text-neutral-400 hover:bg-neutral-800"}
      `}
    >
      {IconComponent && <IconComponent size={20} />}
      {iconPath && (
        <div className="w-[20px] h-[20px] flex items-center justify-center">
          <img src={iconPath} alt="icon" className="max-w-full max-h-full" />
        </div>
      )}
      {children}
    </Link>
  );
} 