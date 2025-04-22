
import { DocsLayout } from "@/components/DocsLayout";

const Showcase = () => {
  return (
    <DocsLayout showTableOfContents={false}>
      <div className="max-w-3xl">
        <div className="mb-4 flex flex-col items-start gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Showcase</h1>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-muted-foreground">
          Explore beautiful websites and applications built with OpenMind.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {[
            {
              title: "Acme Dashboard",
              description: "A beautiful admin dashboard with data visualization",
              image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600&h=400",
              href: "/showcase/acme-dashboard",
            },
            {
              title: "DevFlow",
              description: "Developer tools platform with integrated workflow",
              image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400",
              href: "/showcase/devflow",
            },
            {
              title: "CryptoTrack",
              description: "Real-time cryptocurrency tracking application",
              image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400",
              href: "/showcase/cryptotrack",
            },
            {
              title: "TravelLogger",
              description: "Travel journal and itinerary planning platform",
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600&h=400",
              href: "/showcase/travellogger",
            },
          ].map((project, index) => (
            <a
              key={index}
              href={project.href}
              className="group overflow-hidden rounded-lg border transition-all hover:border-foreground/20 hover:shadow-md"
            >
              <div className="aspect-[3/2] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold transition-colors group-hover:text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-lg border p-6 bg-muted/30">
          <h2 className="text-xl font-semibold">Submit your project</h2>
          <p className="mt-2 text-muted-foreground">
            Built something amazing with OpenMind? We'd love to feature it in our showcase.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-sidebar-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sidebar-primary/90 focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2"
            >
              Submit your project
            </a>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Showcase;
