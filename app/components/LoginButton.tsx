'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        로그아웃
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn('google')}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
    >
      구글로 로그인
    </button>
  );
} 