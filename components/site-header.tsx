"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/mode-toggle";
import { Icons } from "./icons";
import { NavMenu } from "./nav-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex items-center h-14 max-w-screen-2xl">
        <NavMenu />
        <div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div className="px-0 w-9">
                <Icons.github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
