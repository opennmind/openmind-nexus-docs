
import { DocsLayout } from "@/components/DocsLayout";

type BasicDocsPageProps = {
  title: string;
  description: string;
};

export const BasicDocsPage = ({ title, description }: BasicDocsPageProps) => {
  return (
    <DocsLayout>
      <div className="max-w-3xl">
        <div className="mb-4 flex flex-col items-start gap-1">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-muted-foreground">
          {description}
        </p>

        {/* Placeholder content */}
        <div className="mt-8 space-y-6">
          <p className="text-muted-foreground">
            This page is under construction. Content will be added soon.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
};
