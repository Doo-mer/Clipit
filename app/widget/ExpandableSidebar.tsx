import React, { useEffect, useState } from "react";
import SidebarLink from "./SidebarLink";
// import SidebarCategory from "./SidebarCategory"; // Removed unused import
import { Home, BookOpen, Star, Settings, Flag, HelpCircle, MessageSquareWarning } from "lucide-react";
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
  {
    type: "separator",
  },
  {
    type: "link",
    href: "#",
    icon: Settings,
    text: "설정",
  },
  {
    type: "link",
    href: "#",
    icon: Flag,
    text: "신고 기록",
  },
  {
    type: "link",
    href: "#",
    icon: HelpCircle,
    text: "고객센터",
  },
  {
    type: "link",
    href: "#",
    icon: MessageSquareWarning,
    text: "의견 보내기",
  },
];

export default function ExpandableSidebar() {
  const [activeText, setActiveText] = useState("홈"); // 기본 활성 경로 설정
  const router = useRouter()

  useEffect(()=> {
    console.log(activeText)
  }, [activeText])

  return (
    <aside
      className={`h-screen flex flex-col transition-all duration-300 overflow-hidden w-60`}
    >
      <div className={`flex flex-col flex-1 transition-opacity duration-300 opacity-100 overflow-y-auto custom-scrollbar`}>
        {/* Content of the sidebar */}
        <div className="p-4">
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
                return <hr key={index} className="my-3 border-t border-neutral-300 dark:border-neutral-700" />;
              }
              return null;
            })}
          </nav>
          <hr className="my-3 border-t border-neutral-300 dark:border-neutral-700" />
          <div className="text-[0.75rem] text-neutral-400 leading-relaxed p-4">
            저희 AI 글 및 영상 요약 서비스를 이용해 주셔서 감사합니다. 본 서비스는 인공지능 기술을 활용하여 텍스트와 영상 콘텐츠의 핵심 내용을 빠르고 효율적으로 요약해 드립니다.

            <div className="mt-4">
              <p className="font-medium text-neutral-300 mb-2">주의사항:</p>

              <p className="mb-2">
                요약 결과의 정확성: 저희 AI는 최신 기술을 기반으로 하지만, 모든 콘텐츠의 뉘앙스나 맥락을 완벽하게 이해하지 못할 수 있습니다. 따라서 요약된 정보는 참고용으로만 사용하시길 권장합니다. 중요한 결정에 활용하기 전에는 반드시 원본 콘텐츠를 확인해 주세요.
              </p>

              <p className="mb-2">
                저작권 및 책임: 사용자가 요약 요청한 글 또는 영상 콘텐츠의 저작권은 전적으로 사용자에게 있습니다. 저희 서비스는 콘텐츠를 요약하는 기술적 도구를 제공할 뿐이며, 요약된 콘텐츠의 내용, 사용 목적, 또는 이로 인해 발생할 수 있는 모든 법적 문제에 대해 어떠한 책임도 지지 않습니다.
              </p>

              <p className="mt-4">
                본 서비스를 이용함으로써 귀하는 위 고지 사항에 동의하는 것으로 간주됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
} 