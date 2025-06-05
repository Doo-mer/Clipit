import React from 'react';
import { Search, Bell, Settings, Trash2, FileDown, Star, Share2, Copy } from 'lucide-react';

interface HeaderProps {
  variant?: 'main' | 'newpost';
}


export default function Header({ variant = 'main' }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 h-16 z-50 bg-neutral-900">
      <div className="h-full px-6 flex items-center justify-between">
        <div></div>
        {variant === 'main' && (
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={22} />
              <input
                type="text"
                placeholder="검색..."
                className="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-md text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-600"
              />
            </div>
          </div>
        )}

        {/* 우측 메뉴 */}
        <div className="flex items-center gap-3">
          {variant === 'main' ? (
            <>
              <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                <Bell size={24} />
              </button>
              <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                <Settings size={24} />
              </button>
              <div className="h-9 w-9 rounded-full bg-neutral-600 flex items-center justify-center ml-1">
                <span className="text-sm font-medium text-white">U</span>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={()=>{}}
                className="flex items-center text-neutral-400 hover:bg-neutral-800 transition-colors mr-3 p-2 rounded-xl"
                title="링크 복사"
              >
                <Copy size={22} />
              </button>
              <button
                onClick={()=>{}}
                className="flex items-center text-blue-300 bg-neutral-800 transition-colors mr-3 px-3 py-2 rounded-xl"
                title="공유"
              >
                <Share2 size={22} className="mr-3" />
                Share
              </button>
              <button
                onClick={()=>{}}
                className="flex items-center text-yellow-400 hover:bg-neutral-800 transition-colors p-2 rounded-xl"
                title="즐겨찾기"
              >
                <Star size={22} fill={'none'} />
              </button>
              <button
                onClick={()=>{}}
                className="flex items-center text-neutral-400 hover:bg-neutral-800 transition-colors p-2 rounded-xl"
                title="마크다운으로 내보내기"
              >
                <FileDown size={22} />
              </button>
              <button
                onClick={()=>{}}
                className="flex items-center text-neutral-400 hover:bg-neutral-800 transition-colors p-2 rounded-xl"
                title="삭제"
              >
                <Trash2 size={22} />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
} 