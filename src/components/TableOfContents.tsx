
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type TableOfContentsProps = {
  className?: string;
};

type TOCItem = {
  title: string;
  id: string;
  level: number;
  items?: TOCItem[];
};

type TOCSection = {
  title: string;
  items: TOCItem[];
  expanded?: boolean;
};

const tocSections: TOCSection[] = [
  {
    title: "Quick Reference",
    expanded: true,
    items: [
      { title: "Basic Usage", id: "basic-usage", level: 2 },
    ],
  },
  {
    title: "Basic Usage",
    expanded: true,
    items: [
      { title: "Showing content that overflows", id: "showing-content-that-overflows", level: 3 },
      { title: "Hiding content that overflows", id: "hiding-content-that-overflows", level: 3 },
      { title: "Scroll vertically if needed", id: "scroll-vertically-if-needed", level: 3 },
      { title: "Scroll vertically always", id: "scroll-vertically-always", level: 3 },
      { title: "Scroll in all directions", id: "scroll-in-all-directions", level: 3 },
      { title: "Breakpoint tips", id: "breakpoint-tips", level: 3 },
    ],
  },
  {
    title: "Conditionals",
    items: [
      { title: "Working with conditions", id: "working-with-conditions", level: 3 },
      { title: "Responsive conditionals", id: "responsive-conditionals", level: 3 },
    ],
  },
  {
    title: "External Links",
    items: [
      { title: "Hover, focus, and other states", id: "hover-focus-states", level: 3 },
      { title: "Responsive design", id: "responsive-design", level: 3 },
    ],
  },
];

export function TableOfContents({ className }: TableOfContentsProps) {
  const [sections, setSections] = React.useState<TOCSection[]>(tocSections);

  const toggleSection = (index: number) => {
    setSections((prev) =>
      prev.map((section, i) =>
        i === index ? { ...section, expanded: !section.expanded } : section
      )
    );
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={cn("w-64 shrink-0", className)}>
      <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto pt-8">
        <div className="mb-4 flex items-center justify-between pr-4">
          <h4 className="font-medium">On This Page</h4>
          <div className="rounded-full p-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-muted-foreground hover:text-foreground"
            >
              <circle
                cx="12"
                cy="12"
                r="10.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 7.5V12.75L15.75 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <nav className="space-y-4 pb-16">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div
                className="flex cursor-pointer items-center justify-between py-1"
                onClick={() => toggleSection(sectionIndex)}
              >
                <h5 className="text-sm font-medium text-foreground">
                  {section.title}
                </h5>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform",
                    section.expanded ? "rotate-180" : ""
                  )}
                />
              </div>
              {section.expanded && (
                <ul className="mt-1 space-y-1 text-sm">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={`#${item.id}`}
                        className={cn(
                          "block py-1 text-muted-foreground hover:text-foreground",
                          item.level === 3 && "pl-4"
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToHeading(item.id);
                        }}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
