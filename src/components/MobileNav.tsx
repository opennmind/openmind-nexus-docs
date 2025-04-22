
import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Book,
  Code,
  Component,
  FileText,
  Layout,
  Package,
  Play,
} from "lucide-react";

type MobileNavProps = {
  className?: string;
};

type SidebarSection = {
  title: string;
  items: {
    title: string;
    href: string;
    isActive?: boolean;
  }[];
};

const mainItems = [
  {
    title: "Documentation",
    href: "/",
    icon: <FileText className="mr-2 h-4 w-4" />,
    isActive: true,
  },
  {
    title: "Components",
    href: "/components",
    icon: <Component className="mr-2 h-4 w-4" />,
  },
  {
    title: "Templates",
    href: "/templates",
    icon: <Layout className="mr-2 h-4 w-4" />,
  },
  {
    title: "Screencasts",
    href: "/screencasts",
    icon: <Play className="mr-2 h-4 w-4" />,
  },
  {
    title: "Playground",
    href: "/playground",
    icon: <Code className="mr-2 h-4 w-4" />,
  },
  {
    title: "Resources",
    href: "/resources",
    icon: <Package className="mr-2 h-4 w-4" />,
  },
];

const sections: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "Editor Setup",
        href: "/docs/editor-setup",
      },
      {
        title: "Optimizing for Production",
        href: "/docs/optimizing-for-production",
      },
      {
        title: "Browser Support",
        href: "/docs/browser-support",
      },
      {
        title: "Upgrade Guide",
        href: "/docs/upgrade-guide",
      },
    ],
  },
  {
    title: "The First Step",
    items: [
      {
        title: "Utility-First Fundamental",
        href: "/docs/utility-first",
        isActive: true,
      },
      {
        title: "Hover, Focus",
        href: "/docs/hover-focus",
      },
      {
        title: "Responsive Design",
        href: "/docs/responsive-design",
      },
      {
        title: "Dark Mode",
        href: "/docs/dark-mode",
      },
      {
        title: "Reusing Styles",
        href: "/docs/reusing-styles",
      },
    ],
  },
];

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs pr-0 sm:max-w-sm">
        <ScrollArea className="h-[calc(100vh-3rem)]">
          <div className="px-1 py-4">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-1.5"
              onClick={() => setOpen(false)}
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-sidebar-primary to-sidebar-primary/60 flex items-center justify-center text-white font-semibold text-xs">
                O
              </div>
              <span className="font-semibold">OpenMind</span>
            </Link>
            <div className="mt-6 space-y-6">
              <div className="space-y-1.5">
                {mainItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className={cn(
                      "flex items-center justify-between px-4 py-1.5 text-sm font-medium",
                      item.isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span className="flex items-center">{item.icon}{item.title}</span>
                  </Link>
                ))}
              </div>

              {sections.map((section) => (
                <div key={section.title} className="space-y-2">
                  <div className="px-4 py-1">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className={cn(
                          "block px-4 py-1.5 text-sm",
                          item.isActive
                            ? "font-medium text-foreground"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
