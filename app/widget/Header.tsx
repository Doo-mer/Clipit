import React from 'react';
import { Search, Bell, Settings, Trash2, FileDown, Star, Share2, Copy, User } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  variant?: 'main' | 'newpost' | 'sub';
}

export default function Header({ variant = 'main' }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-neutral-900 z-50 border-b border-neutral-700">
      <div className="h-full max-w-screen flex items-center justify-between px-4">
        {/* 좌측: 로고 + 검색 */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center mx-2">
            <Image
              src="/logo.png"
              alt="Clipit Logo"
              width={60}
              height={20}
              className="h-8 w-auto"
            />
          </Link>
          {variant === 'main' && (
            <div className="relative">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="w-[300px] h-9 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-800"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          )}
        </div>

        {/* 우측: 아이콘들 */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
} 