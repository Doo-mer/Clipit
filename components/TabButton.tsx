import React from "react";

interface TabButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function TabButton({ children, isActive = false, onClick, className }: TabButtonProps) {
  const baseClasses = "px-4 py-2 rounded text-sm font-medium transition";
  const activeClasses = "bg-blue-500 text-white";
  const inactiveClasses = "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700";

  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
} 