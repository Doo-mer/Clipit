'use client';

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import type { ClientSafeProvider } from "next-auth/react";

export default function SignIn() {
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            로그인
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name} className="flex justify-center">
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  className="group relative flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {provider.name}로 로그인
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
} 