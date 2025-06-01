import { ChevronLeft, ChevronRight, Layers, BookOpen, Globe, Monitor, BarChart2 } from "lucide-react";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";

interface ExpandableSidebarProps {
  isExpanded: boolean;
}

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
          <SidebarCategory title="Education" />
          <SidebarLink href="#" icon={BookOpen}>
            Productivity
          </SidebarLink>
          <SidebarLink href="#" icon={BookOpen}>
            Research
          </SidebarLink>
          <SidebarCategory title="Language Learning" />
          <SidebarLink href="#" icon={Globe}>
            Language Learning
          </SidebarLink>
          <SidebarCategory title="Technology" />
          <SidebarLink href="#" icon={Monitor}>
            Technology
          </SidebarLink>
          <SidebarCategory title="Website" />
          <SidebarLink href="#" icon={BarChart2}>
            Website
          </SidebarLink>
        </nav>
      </div>
    </aside>
  );
} 