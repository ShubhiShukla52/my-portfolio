import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Shubhi" },
      { name: "description", content: "Check out Shubhi's projects: Myntra Crown and Phishing Detection Website." },
      { property: "og:title", content: "Projects — Shubhi" },
      { property: "og:description", content: "Check out Shubhi's projects: Myntra Crown and Phishing Detection Website." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Myntra Crown",
    description:
      "A fashion-focused web experience inspired by Myntra, featuring product browsing, category filters, and a clean responsive design built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/project-myntra-crown.jpg",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Phishing Detection Website",
    description:
      "An awareness-focused website about detecting phishing and fraudulent online activities. Includes informational sections and tips for staying safe on the internet.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/project-phishing-detection.jpg",
    liveUrl: "#",
    repoUrl: "#",
  },
];

function ProjectsPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Projects</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Things I've built
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A collection of projects that helped me learn, practice, and grow as a developer.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={600}
                  height={340}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-semibold text-card-foreground">{project.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
