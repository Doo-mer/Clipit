import React from "react";

interface ContentCardProps {
  imageSrc?: string;
  imageAlt?: string;
  date?: string;
  title?: string;
  description?: string;
  tags?: { text: string; color: string }[];
  isEmpty?: boolean;
  showSmallIcon?: boolean;
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
  if (isEmpty) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg w-[292px] h-[298px] flex-shrink-0" />
    );
  }

  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col gap-2 w-[292px] h-[298px] flex-shrink-0">
      {imageSrc && (
        <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded mb-2 flex items-center justify-center overflow-hidden">
          <img src={imageSrc} alt={imageAlt || "content image"} className="h-full w-full object-cover" />
        </div>
      )}
      {date && <div className="text-xs text-gray-400 mb-1">{date}</div>}
      {title && <div className="font-semibold text-base leading-tight mb-1 line-clamp-2">{title}</div>}
      {description && <div className="text-xs text-gray-500 line-clamp-2">{description}</div>}
      {tags && tags.length > 0 && (
        <div className="mt-auto flex gap-2 text-xs">
          {tags.map((tag, index) => (
            <span key={index} className={`${tag.color}`}>
              {tag.text}
            </span>
          ))}
        </div>
      )}
      {showSmallIcon && (
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-pink-500 rounded-full flex items-center justify-center shadow-md">
          <div className="w-4 h-4 rounded-full bg-white opacity-20" />
        </div>
      )}
    </div>
  );
} 