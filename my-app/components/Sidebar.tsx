import { Home, BarChart2, Settings, BookOpen, Globe, Monitor, Layers } from "lucide-react";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";

export default function Sidebar() {
  return (
    <aside className="bg-gray-50 dark:bg-gray-900 h-screen w-60 flex flex-col p-4 border-r border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2 mb-8">
        <Layers className="text-blue-500" size={28} />
        <span className="text-xl font-bold tracking-tight">Clipit</span>
      </div>
      <nav className="flex-1 flex flex-col gap-2">
        <SidebarLink href="#" icon={Home}>
          홈
        </SidebarLink>
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
      <div className="mt-auto">
        <SidebarLink href="#" icon={Settings}>
          설정
        </SidebarLink>
      </div>
    </aside>
  );
} 