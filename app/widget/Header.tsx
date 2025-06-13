'use client';

import React from 'react';
import { Search, Bell, Settings, Trash2, FileDown, Star, Share2, Copy, User } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react';

interface HeaderProps {
  variant?: 'main' | 'newpost' | 'sub';
}

export default function Header({ variant = 'main' }: HeaderProps) {
  const { data: session } = useSession();

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
        </div>

        {/* 우측: 아이콘들 */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          {session ? (
            <div className="flex items-center gap-2">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <button
                onClick={() => signOut()}
                className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors"
              >
                <User size={20} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn('google')}
              className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors"
            >
              <User size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
} 