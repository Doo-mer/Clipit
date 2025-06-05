import { PlusSquare } from "lucide-react";
import TabButton from "./TabButton";
import ContentCard from "./ContentCard";
import SelectInput from "./SelectInput";
import Sidebar from "./Sidebar";

export default function MainContent() {

  return (
    <main className="flex-1 flex flex-row justify-center">
      <Sidebar/>
      <div className="mt-10">
        <main className="flex-1 flex flex-col gap-8 justify-between w-250 mx-auto">
          {/* 콘텐츠 영역 */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-6 gap-y-6 px-8">
            {/* Paste 박스 */}
            <div className="border-2 border-dashed border-neutral-300 rounded-lg flex flex-col items-center justify-center h-[298px] cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
              <PlusSquare size={48} className="text-neutral-400 mb-2" />
              <span className="text-neutral-500">Paste any posts!</span>
            </div>
            {/* 예시 카드 */}
            <ContentCard
              imageSrc="thumnail.jpg"
              date="뉴스클립 | 2025.05.30"
              title="우리나라 재택 근무 입수가 세계 꼴찌인 이유"
              description="자료: 근무와 사회 문화의 관계"
              tags={[
                { text: "조직", color: "text-blue-500" },
                { text: "문화·HR", color: "text-blue-500" },
              ]}
              showSmallIcon
            />
            {/* 빈 카드 */}
            <ContentCard
              imageSrc="thumnail.jpg"
              date="뉴스클립 | 2025.05.30"
              title="우리나라 재택 근무 입수가 세계 꼴찌인 이유"
              description="자료: 근무와 사회 문화의 관계"
              tags={[
                { text: "조직", color: "text-blue-500" },
                { text: "문화·HR", color: "text-blue-500" },
              ]}
              showSmallIcon
            />
            <ContentCard
              imageSrc="thumnail.jpg"
              date="뉴스클립 | 2025.05.30"
              title="우리나라 재택 근무 입수가 세계 꼴찌인 이유"
              description="자료: 근무와 사회 문화의 관계"
              tags={[
                { text: "조직", color: "text-blue-500" },
                { text: "문화·HR", color: "text-blue-500" },
              ]}
              showSmallIcon
            />
            <ContentCard
              imageSrc="thumnail.jpg"
              date="뉴스클립 | 2025.05.30"
              title="우리나라 재택 근무 입수가 세계 꼴찌인 이유"
              description="자료: 근무와 사회 문화의 관계"
              tags={[
                { text: "조직", color: "text-blue-500" },
                { text: "문화·HR", color: "text-blue-500" },
              ]}
              showSmallIcon
            />
            <ContentCard
              imageSrc="thumnail.jpg"
              date="뉴스클립 | 2025.05.30"
              title="우리나라 재택 근무 입수가 세계 꼴찌인 이유"
              description="자료: 근무와 사회 문화의 관계"
              tags={[
                { text: "조직", color: "text-blue-500" },
                { text: "문화·HR", color: "text-blue-500" },
              ]}
              showSmallIcon
            />
            <ContentCard
              imageSrc="thumnail.jpg"
              date="뉴스클립 | 2025.05.30"
              title="우리나라 재택 근무 입수가 세계 꼴찌인 이유"
              description="자료: 근무와 사회 문화의 관계"
              tags={[
                { text: "조직", color: "text-blue-500" },
                { text: "문화·HR", color: "text-blue-500" },
              ]}
              showSmallIcon
            />
          </div>
        </main>
      </div>
    </main>
  );
} 