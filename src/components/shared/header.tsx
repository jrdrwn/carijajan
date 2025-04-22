"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, MousePointerClick } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const menus = [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Cari Pedagang",
      href: "/cari-pedagang",
    },
  ];

  const pathname = usePathname();

  return (
    <header className=" w-full border-border border-b">
      <div className="container mx-auto flex h-16  items-center justify-between px-2 rounded-none ">
        <Link
          href="/"
          scroll={false}
          className="flex items-center gap-2"
          prefetch={false}
        >
          <Button size="icon" className="rounded-full">
            <MousePointerClick />
            <span className="sr-only">Mauva Tech</span>
          </Button>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden items-center gap-2 text-sm font-medium lg:flex lg:gap-2 xl:gap-6">
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.title}>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle({
                    className: "bg-transparent ",
                  })}
                  active={pathname === menu.href}
                  asChild
                >
                  <Link href={menu.href}>{menu.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Button>Masuk</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full lg:hidden"
              >
                <Menu className="size-5 text-foreground/70" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="lg:hidden">
              <SheetTitle>Menu</SheetTitle>
              <NavigationMenu>
                <NavigationMenuList className="grid gap-4 p-4">
                  {menus.map((menu) => (
                    <NavigationMenuItem key={menu.title}>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        active={pathname === menu.href}
                        asChild
                      >
                        <Link href={menu.href}>{menu.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
