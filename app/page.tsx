'use client'

import Image from "next/image";
import { LoginForm } from "@/app/components/login-form";
import Link from "next/link";
import React from "react";


export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <LoginForm  />
      </div>
    </div>  
  );
}
