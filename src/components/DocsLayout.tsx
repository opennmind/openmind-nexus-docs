
import * as React from "react";
import { DocsSidebar } from "./DocsSidebar";
import { MainNav } from "./MainNav";
import { TableOfContents } from "./TableOfContents";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

type DocsLayoutProps = {
  children?: React.ReactNode;
  showTableOfContents?: boolean;
  className?: string;
};

export function DocsLayout({
  children,
  showTableOfContents = true,
  className,
}: DocsLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <MainNav />
      <div className="flex-1">
        {/* Mobile Navigation */}
        <div className="border-b bg-background md:hidden">
          <div className="flex h-16 items-center px-4 gap-1">
            <MobileNav />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-sidebar-primary to-sidebar-primary/60 flex items-center justify-center text-white font-semibold text-xs">
                O
              </div>
              <span className="font-semibold">OpenMind</span>
            </div>
          </div>
        </div>

        {/* Desktop Layout with Sidebar */}
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[256px_1fr] xl:grid-cols-[256px_1fr_256px] md:gap-6 lg:gap-10 mt-4">
          {/* Left Sidebar */}
          <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block">
            <DocsSidebar />
          </aside>

          {/* Main Content */}
          <main
            className={cn(
              "relative py-8 lg:py-10 px-4 md:px-8 max-w-full md:max-w-screen-lg",
              className
            )}
          >
            {children}
          </main>

          {/* Right Sidebar (Table of Contents) */}
          {showTableOfContents && (
            <aside className="hidden text-sm xl:block">
              <TableOfContents />
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
