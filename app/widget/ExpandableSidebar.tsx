import React, { useState } from "react";
import SidebarLink from "./SidebarLink";
// import SidebarCategory from "./SidebarCategory"; // Removed unused import
import { Home, BookOpen, Star } from "lucide-react";
import { useRouter } from 'next/navigation';

interface SidebarCategoryItem {
  type: "category";
  title: string;
}

interface SeparatorItem {
  type: "separator";
}

const sidebarMenu: (SidebarCategoryItem | { type: "link"; href: string; icon: string | React.ElementType; text: string; } | SeparatorItem)[] = [
  {
    type: "link",
    href: "#",
    icon: Home,
    text: "홈",
  },
  {
    type: "link",
    href: "#",
    icon: BookOpen,
    text: "그래프",
  },
  {
    type: "link",
    href: "#",
    icon: Star,
    text: "중요",
  },
  {
    type: "separator",
  },
  {
    type: "link",
    href: "#",
    icon: "/logo_web/tistory.svg",
    text: "티스토리",
  },
  {
    type: "link",
    href: "#",
    icon: "/logo_web/velog.jpg",
    text: "벨로그",
  },
  {
    type: "link",
    href: "#",
    icon: "/logo_web/medium.svg",
    text: "미디움",
  },
  {
    type: "link",
    href: "#",
    icon: "/logo_web/youtube.svg",
    text: "유튜브",
  },
  {
    type: "link",
    href: "#",
    icon: "/logo_web/eo.svg",
    text: "eo",
  },
];

export default function ExpandableSidebar() {
  const [activeText, setActiveText] = useState("/"); // 기본 활성 경로 설정
  const router = useRouter()

  return (
    <aside
      className={`h-screen flex flex-coltransition-all duration-300 overflow-hidden w-60 p-4 bg-neutral-900`}
    >
      <div className={`flex flex-col flex-1 transition-opacity duration-300 opacity-100`}>
        {/* Content of the sidebar */}
        <div className="flex items-center gap-2 mb-8 hover:cursor-pointer"
          onClick={() => router.push('/')}
        >
          <img src="/logo.svg" alt="Clipit Logo" className="w-7 h-7 filter invert-0 saturate-200 hue-rotate-[200deg] brightness-75" />
          <span className="text-xl font-bold tracking-tight">Clipit</span>
        </div>
        <nav className="flex-1 flex flex-col">
          {sidebarMenu.map((item, index) => {
            if (item.type === "link") {
              return (
                <SidebarLink
                  key={index}
                  href={item.href}
                  text={item.text}
                  icon={item.icon}
                  activeText={activeText}
                  setActiveText={setActiveText}
                >
                  {item.text}
                </SidebarLink>
              );
            } else if (item.type === "separator") {
              return <hr key={index} className="my-6 border-t border-neutral-300 dark:border-neutral-700" />;
            }
            return null;
          })}
        </nav>
      </div>
    </aside>
  );
} 