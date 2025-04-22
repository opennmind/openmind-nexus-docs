
import { DocsLayout } from "@/components/DocsLayout";

const Components = () => {
  return (
    <DocsLayout showTableOfContents={false}>
      <div className="max-w-3xl">
        <div className="mb-4 flex flex-col items-start gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-muted-foreground">
          Browse our collection of pre-built components ready to be used in your projects.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Buttons",
              description: "Trigger actions and navigation with our button component.",
              href: "/components/button",
            },
            {
              title: "Cards",
              description: "Display content in a contained and organized way.",
              href: "/components/card",
            },
            {
              title: "Dropdowns",
              description: "Show contextual menus and options for your users.",
              href: "/components/dropdown",
            },
            {
              title: "Modals",
              description: "Overlay windows that demand user attention.",
              href: "/components/modal",
            },
            {
              title: "Forms",
              description: "Collect user input with our form components.",
              href: "/components/form",
            },
            {
              title: "Tables",
              description: "Display tabular data in a structured format.",
              href: "/components/table",
            },
          ].map((component, index) => (
            <a
              key={index}
              href={component.href}
              className="group rounded-lg border p-6 transition-all hover:border-foreground/20 hover:bg-muted/50"
            >
              <h3 className="font-semibold transition-colors group-hover:text-foreground">
                {component.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {component.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </DocsLayout>
  );
};

export default Components;
