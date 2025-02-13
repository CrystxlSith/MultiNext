'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Progress } from "@/app/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { useState, useEffect } from "react";
import { Navbar1 } from "@/app/components/Navbar1";

export function SocialButtons() {
  return (
    <div className="flex gap-2 justify-center">
      <Button variant="outline" size="icon" className="h-12 w-12">
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </Button>
      <Button variant="outline" size="icon" className="h-12 w-12">
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.417 22 12c0-5.523-4.477-10-10-10"
            fill="currentColor"
          />
        </svg>
      </Button>
      <Button variant="outline" size="icon" className="h-12 w-12">
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z"
            fill="#9146FF"
          />
        </svg>
      </Button>
    </div>
  )
}

export function LoginForm() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => 
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 75);

    return () => clearInterval(interval);
  }, [progress]);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-muted-foreground">Chargement</p>
        <Progress value={progress} className="w-[60%]" />
      </div>
    );
  }

  if (session) {
    return (
    <div>
        <Navbar1 />
        <div className="flex flex-col gap-4 items-center">
            <Card>
            <CardHeader>
                <CardTitle>Connexion réussie</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Debug session: {JSON.stringify(session, null, 2)}</p>
                <p>Vous êtes connecté avec {session.user?.email} {session.user?.role}</p>
            </CardContent>
            </Card>
        </div>
    </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Connexion</h1>
        <p className="text-muted-foreground">
          Connectez-vous avec votre compte Twitch ddddd
        </p>
      </div>
      <Button
        onClick={() => signIn('twitch', { callbackUrl: '/' })}
        className="flex items-center gap-2"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z"
            fill="#9146FF"
          />
        </svg>
        Se connecter avec Twitch
      </Button>
      <Button
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className="flex items-center gap-2"
        variant="outline"
      >
        Se connecter avec Google
      </Button>
    </div>
  );
}
