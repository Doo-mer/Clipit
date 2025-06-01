import React from "react";
import Tag from "./Tag"; // Tag 컴포넌트가 있다고 가정

interface ContentCardProps {
  imageSrc?: string;
  imageAlt?: string;
  date?: string;
  title?: string;
  description?: string;
  tags?: { text: string; color: string }[];
  isEmpty?: boolean; // 이 prop이 true이면 "Paste any posts!" 형태의 박스
  showSmallIcon?: boolean; // 우측 하단 아이콘 표시 여부
}

export default function ContentCard({
  imageSrc,
  imageAlt,
  date,
  title,
  description,
  tags,
  isEmpty = false,
  showSmallIcon = false,
}: ContentCardProps) {
  // isEmpty prop이 true일 경우, Paste 박스와 동일한 스타일로 렌더링
  if (isEmpty) {
    return (
      // MainContent.js의 Paste 박스 로직을 여기에 통합
      <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center h-[298px] cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition">
        {/* PlusSquare 아이콘은 MainContent에서 직접 전달하거나, 여기에 import해서 사용 */}
        {/* 여기서는 PlusSquare 아이콘을 ContentCard가 직접 렌더링하는 대신,
            MainContent에서 ContentCard에 isEmpty=true를 주고 PlusSquare를 별도로 렌더링하는 것을 권장.
            아니면 ContentCard 내부에서 PlusSquare를 import 해야 함.
            일단 MainContent에서 PlusSquare를 유지하는 것으로 가정하고 여기서는 제거.
            만약 PlusSquare를 ContentCard 내부에서 처리하려면, lucide-react import 필요
        */}
        {/* <PlusSquare size={48} className="text-gray-400 mb-2" /> */}
        <span className="text-gray-500">Paste any posts!</span>
      </div>
    );
  }

  // 일반 ContentCard (뉴스클립 등)
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-900 flex flex-col">
      {imageSrc && (
        // 이미지 컨테이너: w-full, aspect-video (16:9), overflow-hidden 추가
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt || "content image"}
            className="absolute inset-0 w-full h-full object-cover" // 이미지가 컨테이너를 꽉 채우도록
          />
        </div>
      )}

      {/* 텍스트 내용 영역: p-4 패딩, flex-1 (남은 세로 공간 채움) 추가 */}
      <div className="p-4 flex flex-col flex-1">
        {date && <div className="text-xs text-gray-400 mb-1">{date}</div>}
        {title && <div className="font-semibold text-base leading-tight mb-1 line-clamp-2">{title}</div>}
        {description && <div className="text-xs text-gray-500 mb-3 line-clamp-2">{description}</div>} {/* mb-3 추가로 태그와 간격 */}

        {/* 태그 영역: mt-auto (아래로 밀어냄) 제거 또는 flex-col의 끝에 붙도록 재배치 필요
            flex-col flex-1 안에 있으면 mt-auto는 효과 없음.
            대신 부모 div에 flex flex-col을 주고 그 안에 text, tags, icon 등을 배치하는 구조가 일반적
        */}
        {tags && tags.length > 0 && (
          <div className="mt-auto flex gap-2 text-xs flex-wrap"> {/* flex-wrap 추가 */}
            {tags.map((tag, index) => (
              <Tag key={index} text={tag.text} color={tag.color} />
            ))}
          </div>
        )}
      </div>

      {showSmallIcon && (
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-pink-500 rounded-full flex items-center justify-center shadow-md">
          <div className="w-4 h-4 rounded-full bg-white opacity-20" />
        </div>
      )}
    </div>
  );
}