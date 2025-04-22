
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { SearchDialog } from "./SearchDialog";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
  isActive?: boolean;
};

const navItems: NavItem[] = [
  {
    title: "Docs",
    href: "/",
    isActive: true,
  },
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Showcase",
    href: "/showcase",
  },
];

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mr-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sidebar-primary to-sidebar-primary/60 flex items-center justify-center text-white font-semibold">
              O
            </div>
            <span className="hidden md:block font-semibold text-lg">
              OpenMind
            </span>
          </Link>
          <div className="hidden md:flex h-8 items-center px-3 text-xs border rounded-full bg-muted">
            <span className="font-medium">v1.0.0</span>
          </div>
        </div>
        <nav className="flex items-center gap-4 lg:gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                item.isActive ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center ml-auto gap-4">
          <SearchDialog />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
