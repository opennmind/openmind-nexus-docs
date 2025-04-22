
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Book,
  Code,
  Component,
  FileText,
  Layout,
  Package,
  Play,
} from "lucide-react";

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
    icon: <FileText className="w-4 h-4" />,
    isActive: true,
  },
  {
    title: "Components",
    href: "/components",
    icon: <Component className="w-4 h-4" />,
  },
  {
    title: "Templates",
    href: "/templates",
    icon: <Layout className="w-4 h-4" />,
  },
  {
    title: "Screencasts",
    href: "/screencasts",
    icon: <Play className="w-4 h-4" />,
  },
  {
    title: "Playground",
    href: "/playground",
    icon: <Code className="w-4 h-4" />,
  },
  {
    title: "Resources",
    href: "/resources",
    icon: <Package className="w-4 h-4" />,
  },
];

const gettingStartedSection: SidebarSection = {
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
};

const firstStepSection: SidebarSection = {
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
};

export function DocsSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r pt-16 lg:flex lg:flex-col">
      <div className="flex flex-1 flex-col overflow-y-auto py-5 px-3">
        <nav className="space-y-8">
          {/* Main Navigation Items */}
          <div className="space-y-2">
            {mainItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={cn(
                  "group flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium",
                  item.isActive
                    ? "bg-accent/50 text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                )}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </div>

          {/* Getting Started Section */}
          <div className="space-y-2">
            <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {gettingStartedSection.title}
            </h3>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {gettingStartedSection.items.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-4 py-1.5",
                    item.isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* First Step Section */}
          <div className="space-y-2">
            <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {firstStepSection.title}
            </h3>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {firstStepSection.items.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-4 py-1.5",
                    item.isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
