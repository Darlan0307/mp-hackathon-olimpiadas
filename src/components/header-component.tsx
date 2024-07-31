"use client";
import Link from "next/link";
import {
  Flag,
  Home,
  PanelLeft,
  SquareDashedBottomCode,
  Trophy,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { useState } from "react";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const Links = [
    {
      href: "/",
      icon: <Home className="h-5 w-5" />,
      label: "Dashboard",
    },
    {
      href: "/countries",
      icon: <Flag className="h-5 w-5" />,
      label: "Countries",
    },
    {
      href: "/events",
      icon: <Trophy className="h-5 w-5" />,
      label: "Events",
    },
  ];
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Button
        size="icon"
        variant="outline"
        className="sm:hidden"
        onClick={() => setIsOpen(true)}
      >
        <PanelLeft className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="sm:max-w-xs">
          <SheetTitle className="mb-6">
            <Link
              href="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              onClick={() => setIsOpen(false)}
            >
              <SquareDashedBottomCode className="h-8 w-8 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
          </SheetTitle>
          <nav className="grid gap-6 text-lg font-medium">
            {Links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-2.5 text-foreground hover:text-foreground ${
                  path == link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <h1 className="text-center flex-1 sm:text-2xl font-bold">
        Olympic Games 2024
      </h1>

      <div className="ml-auto flex-1 grow-0">
        <ModeToggle />
      </div>
    </header>
  );
};

export default HeaderComponent;
