'use client';
import { SessionProvider as NextAuthSessionProvider, useSession } from "next-auth/react";

function AuthStatus() {
  const { data: session, status } = useSession();
  console.log("Provider Status:", status);
  console.log("Provider Session:", session);
  return null;
}

export default function SessionProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthSessionProvider 
      basePath="https://streamapp.com:3000/api/auth"
      baseUrl="https://streamapp.com:3000"
    >
      <AuthStatus />
      {children}
    </NextAuthSessionProvider>
  );
} 