"use client";

import React from "react";
import Tag from "./Tag"; // Tag 컴포넌트가 있다고 가정
import { useRouter } from 'next/navigation';
import Image from "next/image";

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
      <div className="border-2 border-dashed border-neutral-300 rounded-lg flex flex-col items-center justify-center h-[298px] cursor-pointer transition">
        <span className="text-neutral-500">Paste any posts!</span>
      </div>
    );
  }

  const router = useRouter()

  // 일반 ContentCard (뉴스클립 등)
  return (
    <div className="rounded-xl shadow-md flex flex-col hover:bg-neutral-900 group mb-4"
      onClick={()=>{router.push("view")}}
    >
      {imageSrc && (
        // 이미지 컨테이너: w-full, aspect-[4/3] 추가
        <div className="relative w-full aspect-[8/5] rounded-xl">
          <img
            src={imageSrc}
            alt={imageAlt || "content image"}
            className="absolute inset-0 w-full h-full object-cover group-hover:-translate-y-2 transition-transform duration-300 rounded-xl" 
          />
        </div>
      )}

      {/* 텍스트 내용 영역: p-4 패딩, flex-1 (남은 세로 공간 채움) 추가 */}
      <div className="flex flex-col flex-1 py-3">
        {date && <div className="text-sm text-neutral-400 mb-3 font-semibold">{date}</div>}
        {title && <div className="font-semibold text-lg leading-tight mb-2 line-clamp-2">{title}</div>}
        {description && <div className="text-sm text-neutral-500 mb-3 line-clamp-2">{description}</div>} {/* mb-3 추가로 태그와 간격 */}

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
    </div>
  );
}