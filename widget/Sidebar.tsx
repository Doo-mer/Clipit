// components/Sidebar.tsx

"use client";

import { FolderPlus, Folder, X } from "lucide-react";
import { useState, useCallback } from "react";

interface Folder {
  id: number;
  name: string;
  color: string;
  count: number;
}

export default function Sidebar() {
  const [isAddingFolder, setIsAddingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [folders, setFolders] = useState<Folder[]>([]);
  const [dragOverFolder, setDragOverFolder] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent, folderId: number) => {
    e.preventDefault();
    setDragOverFolder(folderId);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOverFolder(null);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, folderId: number) => {
    e.preventDefault();
    setDragOverFolder(null);
    // 여기에 드롭 처리 로직 추가
  }, []);

  const handleAddFolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newFolderName.trim()) {
      const newFolder: Folder = {
        id: Date.now(),
        name: newFolderName.trim(),
        color: '#6366f1', // 기본 색상
        count: 0
      };
      setFolders([...folders, newFolder]);
      setNewFolderName('');
      setIsAddingFolder(false);
    } else if (e.key === 'Escape') {
      setIsAddingFolder(false);
      setNewFolderName('');
    }
  };

  return (
    <div className="w-[250px] h-screen bg-neutral-900 p-4 mt-4 flex flex-col">
      <nav className="flex-1">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold ml-2">폴더</h2>
        </div>

        <nav className="space-y-2">
          <ul className="space-y-2">
            <div className="mt-4">
              {isAddingFolder ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    onKeyDown={handleAddFolder}
                    placeholder="폴더 이름 입력"
                    className="flex-1 py-2 px-3 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                </div>
              ) : (
                <button
                  onClick={() => setIsAddingFolder(true)}
                  className="w-full flex items-center gap-2 py-2 px-4 text-gray-400 hover:text-white hover:bg-neutral-700 bg-neutral-800 rounded-lg transition-colors"
                >
                  <FolderPlus size={20} />
                  <span>새 폴더</span>
                </button>
              )}
            </div>
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
                  fill={folder.color}
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
      </nav>



      {/* 드래그 중일 때 표시되는 힌트 */}
      {isDragging && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center transition-opacity duration-300">
          <div className="bg-neutral-800/90 text-white px-4 py-2 rounded-lg shadow-lg">
            폴더에 드래그하여 이동
          </div>
        </div>
      )}
    </div>
  );
}
