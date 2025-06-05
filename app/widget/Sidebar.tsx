// components/Sidebar.tsx

"use client";

import { FolderPlus, Folder } from "lucide-react";
import { useState, useCallback } from "react";

const folders = [
  { id: 1, name: '프로젝트', color: '#FF6B6B', count: 12 },
  { id: 2, name: '개발 노트', color: '#4ECDC4', count: 8 },
  { id: 3, name: '아이디어', color: '#FFD93D', count: 5 },
  { id: 4, name: '참고자료', color: '#95E1D3', count: 15 },
  { id: 5, name: '학습', color: '#FF8B94', count: 7 },
];

export default function Sidebar() {
  const [dragOverFolder, setDragOverFolder] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent, folderId: number) => {
    e.preventDefault();
    if (dragOverFolder !== folderId) {
      setDragOverFolder(folderId);
    }
  }, [dragOverFolder]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    
    // 요소의 경계를 벗어났을 때만 상태 변경
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setDragOverFolder(null);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, folderId: number) => {
    e.preventDefault();
    setDragOverFolder(null);
    setIsDragging(false);
    // 여기에 드롭 처리 로직 추가
  }, []);

  return (
    <aside className="w-64 bg-[#1E1E1E] text-white p-4 space-y-4 sticky top-23 h-fit overflow-y-auto custom-scrollbar rounded-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold ml-2">폴더</h2>
      </div>

      <nav className="space-y-2">
        <ul className="space-y-2">
          {folders.map((folder) => (
            <li 
              key={folder.id} 
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer group relative
                ${dragOverFolder === folder.id ? 'bg-neutral-700' : 'hover:bg-neutral-800'}
                transition-colors duration-300 ease-in-out`}
              onDragOver={(e) => handleDragOver(e, folder.id)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, folder.id)}
            >
              <Folder 
                size={20} 
                style={{ color: folder.color }}
                className="flex-shrink-0"
                fill={ folder.color }
              />
              <span className="flex-1 text-gray-300 group-hover:text-white transition-colors text-lg">
                {folder.name}
              </span>
              <span className="text-md text-gray-500">
                {folder.count}
              </span>
              
              {/* 드래그 오버 시 표시되는 힌트 */}
              {dragOverFolder === folder.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-700/30 rounded-lg transition-opacity duration-300">
                  <span className="text-sm text-blue-400">여기에 놓기</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button className="w-full flex items-center gap-2 py-2 px-4 text-gray-400 hover:text-white hover:bg-neutral-700 bg-neutral-800 rounded-lg transition-colors">
        <FolderPlus size={20} />
        <span>새 폴더</span>
      </button>

      {/* 드래그 중일 때 표시되는 힌트 */}
      {isDragging && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center transition-opacity duration-300">
          <div className="bg-neutral-800/90 text-white px-4 py-2 rounded-lg shadow-lg">
            폴더에 드래그하여 이동
          </div>
        </div>
      )}
    </aside>
  );
}
  