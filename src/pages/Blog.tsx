
import { DocsLayout } from "@/components/DocsLayout";

const Blog = () => {
  return (
    <DocsLayout showTableOfContents={false}>
      <div className="max-w-3xl">
        <div className="mb-4 flex flex-col items-start gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-muted-foreground">
          Learn about the latest updates, tutorials, and insights related to OpenMind.
        </p>

        <div className="mt-12 space-y-12">
          {[
            {
              title: "Introducing OpenMind v1.0",
              date: "April 22, 2025",
              description:
                "Today we're excited to announce the official release of OpenMind v1.0, featuring a complete set of utilities, components, and documentation.",
              href: "/blog/introducing-openmind-v1",
            },
            {
              title: "Building Accessible Interfaces with OpenMind",
              date: "April 15, 2025",
              description:
                "Learn how OpenMind provides built-in accessibility features to help you create inclusive web applications.",
              href: "/blog/accessible-interfaces",
            },
            {
              title: "Performance Optimization Strategies",
              date: "April 8, 2025",
              description:
                "Discover techniques to optimize your application's performance when using OpenMind components.",
              href: "/blog/performance-optimization",
            },
          ].map((post, index) => (
            <div key={index} className="border-b pb-12 last:border-0">
              <a
                href={post.href}
                className="group transition-all hover:text-sidebar-primary"
              >
                <h2 className="text-2xl font-semibold transition-colors group-hover:text-sidebar-primary">
                  {post.title}
                </h2>
              </a>
              <p className="mt-2 text-sm text-muted-foreground">{post.date}</p>
              <p className="mt-4 text-muted-foreground">
                {post.description}
              </p>
              <div className="mt-6">
                <a
                  href={post.href}
                  className="inline-flex items-center text-sm font-medium text-sidebar-primary hover:text-sidebar-primary/80"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DocsLayout>
  );
};

export default Blog;
