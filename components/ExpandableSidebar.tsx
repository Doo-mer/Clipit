import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";
import { Icons } from "../utils/icons";

interface ExpandableSidebarProps {
  isExpanded: boolean;
}

interface SidebarCategoryItem {
  type: "category";
  title: string;
}

interface SidebarLinkItem {
  type: "link";
  href: string;
  icon: string;
  text: string;
}

type SidebarMenuItem = SidebarCategoryItem | SidebarLinkItem;

const sidebarMenu: SidebarMenuItem[] = [
  {
    type: "category",
    title: "Education",
  },
  {
    type: "link",
    href: "#",
    icon: "BookOpen",
    text: "Productivity",
  },
  {
    type: "link",
    href: "#",
    icon: "BookOpen",
    text: "Research",
  },
  {
    type: "category",
    title: "Language Learning",
  },
  {
    type: "link",
    href: "#",
    icon: "Globe",
    text: "Language Learning",
  },
  {
    type: "category",
    title: "Technology",
  },
  {
    type: "link",
    href: "#",
    icon: "Monitor",
    text: "Technology",
  },
  {
    type: "category",
    title: "Website",
  },
  {
    type: "link",
    href: "#",
    icon: "BarChart2",
    text: "Website",
  },
];

export default function ExpandableSidebar({ isExpanded }: ExpandableSidebarProps) {
  return (
    <aside
      className={`h-screen flex flex-col border-r border-gray-200 dark:border-gray-800 transition-all duration-300 bg-gray-50 dark:bg-gray-900 overflow-hidden
        ${isExpanded ? "w-60 p-4" : "w-0 p-0"}
      `}
    >
      <div className={`flex flex-col flex-1 transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}>
        {/* Content of the sidebar */}
        <div className="flex items-center gap-2 mb-8">
          <Layers className="text-blue-500" size={28} />
          <span className="text-xl font-bold tracking-tight">Clipit</span>
        </div>
        <nav className="flex-1 flex flex-col gap-2">
          {sidebarMenu.map((item, index) => {
            if (item.type === "category") {
              return <SidebarCategory key={index} title={item.title} />;
            } else if (item.type === "link") {
              return (
                <SidebarLink key={index} href={item.href} icon={item.icon}>
                  {item.text}
                </SidebarLink>
              );
            }
            return null;
          })}
        </nav>
      </div>
    </aside>
  );
} 