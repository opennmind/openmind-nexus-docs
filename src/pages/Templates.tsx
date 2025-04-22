
import { DocsLayout } from "@/components/DocsLayout";

const Templates = () => {
  return (
    <DocsLayout showTableOfContents={false}>
      <div className="max-w-3xl">
        <div className="mb-4 flex flex-col items-start gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-muted-foreground">
          Browse our collection of pre-built templates ready to be used in your projects.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: "Dashboard",
              description: "A modern admin dashboard template with charts and analytics.",
              href: "/templates/dashboard",
            },
            {
              title: "Landing Page",
              description: "A responsive landing page template with hero section and features.",
              href: "/templates/landing",
            },
          ].map((template, index) => (
            <a
              key={index}
              href={template.href}
              className="group rounded-lg border p-6 transition-all hover:border-foreground/20 hover:bg-muted/50"
            >
              <h3 className="font-semibold transition-colors group-hover:text-foreground">
                {template.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {template.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </DocsLayout>
  );
};

export default Templates;
