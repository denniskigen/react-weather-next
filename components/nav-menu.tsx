import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

export function NavMenu() {
  return (
    <div className="hidden mr-4 md:flex">
      <Link href="/" className="flex items-center mr-6 space-x-2">
        <Icons.logo className="w-6 h-6 text-primary" />
        <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>
    </div>
  );
}
