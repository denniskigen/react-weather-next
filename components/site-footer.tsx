"use client";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="py-6 border-t md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-sm leading-loose text-center text-balance text-muted-foreground md:text-left">
          Built with ❤️ by{" "}
          <a
            href={siteConfig.links.website}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Dennis
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
