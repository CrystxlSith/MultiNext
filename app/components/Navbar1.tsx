'use client'

import { Book, Menu, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu";
import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/app/components/ui/sheet";

export function Navbar1() {
  const { data: session } = useSession();

  return (
    <div className="">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className="font-bold text-xl">
                RegiStream
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          {session ? (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <div className="flex items-center gap-2">
                      {session.user?.image ? (
                        <img
                          src={session.user.image}
                          alt={session.user.name || ''}
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        <UserIcon className="w-6 h-6" />
                      )}
                      <span>{session.user?.name}</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-56">
                      <div className="space-y-3">
                        <div className="font-medium">{session.user?.email}</div>
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                          asChild
                        >
                          <Link href="/profile">
                            <UserIcon className="mr-2 h-4 w-4" />
                            Profil
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-red-500"
                          onClick={() => signOut()}
                        >
                          Se déconnecter
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <Button asChild>
              <Link href="/login">
                Connexion
              </Link>
            </Button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigation du site
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4">
                <Link href="/docs" className="flex items-center gap-2 font-medium">
                  <Book className="h-6 w-6" />
                  Documentation
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}