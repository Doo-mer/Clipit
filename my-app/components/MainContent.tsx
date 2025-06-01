import { PlusSquare } from "lucide-react";
import TabButton from "./TabButton";
import ContentCard from "./ContentCard";
import SelectInput from "./SelectInput";

export default function MainContent() {
  const subjectOptions = ["언어", "개발", "인문학", "기타"];
  const platformOptions = ["유튜브", "velog", "eo", "branch", "기타"];
  const tagOptions = ["커스텀태그1", "커스텀태그2", "커스텀태그3"]; // Example custom tags

  return (
    <main className="flex-1 flex flex-col py-8 gap-8 justify-between">
      {/* 탭 영역 */}
      <div className="flex gap-4 mb-4 px-8">
        <SelectInput options={subjectOptions} defaultValue="주제" className="w-32" />
        <SelectInput options={platformOptions} defaultValue="플랫폼" className="w-32" />
        <SelectInput options={tagOptions} defaultValue="태그" className="w-32" />
        <TabButton className="ml-auto">정렬</TabButton>
      </div>
      {/* 콘텐츠 영역 */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(292px,1fr))] gap-x-8 gap-y-8 px-8">
        {/* Paste 박스 */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center h-[298px] cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition">
          <PlusSquare size={48} className="text-gray-400 mb-2" />
          <span className="text-gray-500">Paste any posts!</span>
        </div>
        {/* 예시 카드 */}
        <ContentCard
          imageSrc="thumnail.jpg"
          date="뉴스클립 | 2025.05.30"
          title="우리나라 재택 근무 입수가 세계 꼴찌인 이유는?"
          description="자료: 근무와 사회 문화의 관계"
          tags={[
            { text: "조직", color: "text-blue-500" },
            { text: "문화·HR", color: "text-gray-400" },
          ]}
          showSmallIcon
        />
        {/* 빈 카드 */}
        <ContentCard
          imageSrc="thumnail.jpg"
          date="뉴스클립 | 2025.05.30"
          title="우리나라 재택 근무 입수가 세계 꼴찌인 이유는?"
          description="자료: 근무와 사회 문화의 관계"
          tags={[
            { text: "조직", color: "text-blue-500" },
            { text: "문화·HR", color: "text-gray-400" },
          ]}
          showSmallIcon
        />
        <ContentCard
          imageSrc="thumnail.jpg"
          date="뉴스클립 | 2025.05.30"
          title="우리나라 재택 근무 입수가 세계 꼴찌인 이유는?"
          description="자료: 근무와 사회 문화의 관계"
          tags={[
            { text: "조직", color: "text-blue-500" },
            { text: "문화·HR", color: "text-gray-400" },
          ]}
          showSmallIcon
        />
        <ContentCard
          imageSrc="thumnail.jpg"
          date="뉴스클립 | 2025.05.30"
          title="우리나라 재택 근무 입수가 세계 꼴찌인 이유는?"
          description="자료: 근무와 사회 문화의 관계"
          tags={[
            { text: "조직", color: "text-blue-500" },
            { text: "문화·HR", color: "text-gray-400" },
          ]}
          showSmallIcon
        />
        <ContentCard
          imageSrc="thumnail.jpg"
          date="뉴스클립 | 2025.05.30"
          title="우리나라 재택 근무 입수가 세계 꼴찌인 이유는?"
          description="자료: 근무와 사회 문화의 관계"
          tags={[
            { text: "조직", color: "text-blue-500" },
            { text: "문화·HR", color: "text-gray-400" },
          ]}
          showSmallIcon
        />
        <ContentCard
          imageSrc="thumnail.jpg"
          date="뉴스클립 | 2025.05.30"
          title="우리나라 재택 근무 입수가 세계 꼴찌인 이유는?"
          description="자료: 근무와 사회 문화의 관계"
          tags={[
            { text: "조직", color: "text-blue-500" },
            { text: "문화·HR", color: "text-gray-400" },
          ]}
          showSmallIcon
        />
      </div>
    </main>
  );
} 