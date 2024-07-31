"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Flag, Home, SquareDashedBottomCode } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AsideComponent = () => {
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
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg  font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base mb-6"
        >
          <SquareDashedBottomCode className="h-6 w-6 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {Links.map((link) => (
          <Tooltip key={link.href}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className={`flex h-9 w-9 items-center justify-center rounded-lg   transition-colors  hover:text-foreground md:h-8 md:w-8 ${
                  path == link.href
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{link.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </aside>
  );
};

export default AsideComponent;
