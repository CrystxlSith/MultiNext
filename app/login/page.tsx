'use client'

import Link from "next/link";
import { LoginForm } from "@/app/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <LoginForm />
    </main>
  );
}