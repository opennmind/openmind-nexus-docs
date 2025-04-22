
import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Search } from "lucide-react";

type SearchResult = {
  title: string;
  href: string;
  category: string;
};

const searchResults: SearchResult[] = [
  {
    title: "Installation",
    href: "/docs/installation",
    category: "Getting Started"
  },
  {
    title: "Editor Setup",
    href: "/docs/editor-setup",
    category: "Getting Started"
  },
  {
    title: "Utility-First Fundamental",
    href: "/docs/utility-first",
    category: "The First Step"
  },
  {
    title: "Hover, Focus",
    href: "/docs/hover-focus",
    category: "The First Step"
  },
  {
    title: "Responsive Design",
    href: "/docs/responsive-design",
    category: "The First Step"
  },
  {
    title: "Dark Mode",
    href: "/docs/dark-mode",
    category: "The First Step"
  },
  {
    title: "Components",
    href: "/components",
    category: "Main Navigation"
  },
];

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);

  // Register keyboard shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigate = (href: string) => {
    window.location.href = href;
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center w-full max-w-[200px] lg:max-w-[240px] h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground hover:bg-accent transition-colors"
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="flex-1 text-left">Search...</span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 overflow-hidden shadow-lg">
          <Command className="rounded-lg border-0">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {Object.entries(
                searchResults.reduce<Record<string, SearchResult[]>>((acc, result) => {
                  if (!acc[result.category]) {
                    acc[result.category] = [];
                  }
                  acc[result.category].push(result);
                  return acc;
                }, {})
              ).map(([category, items]) => (
                <CommandGroup key={category} heading={category}>
                  {items.map((item) => (
                    <CommandItem
                      key={item.href}
                      onSelect={() => navigate(item.href)}
                      className="cursor-pointer"
                    >
                      {item.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
