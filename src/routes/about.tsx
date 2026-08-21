import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — Shubhi" },
      { name: "description", content: "Learn more about Shubhi, a developer passionate about programming, problem solving, and continuous learning." },
      { property: "og:title", content: "About Me — Shubhi" },
      { property: "og:description", content: "Learn more about Shubhi, a developer passionate about programming, problem solving, and continuous learning." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Me</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Driven by curiosity, powered by code.
          </h1>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="/images/about-workspace.jpg"
              alt="Cozy workspace with a laptop, notebook, and warm desk lamp"
              className="rounded-2xl object-cover shadow-lg"
              width={600}
              height={400}
            />
          </div>

          <div className="space-y-5 text-foreground">
            <p>
              Hi, I'm <strong>Shubhi</strong>. I am an enthusiastic learner with a deep interest in
              technology and programming. I enjoy turning ideas into real-world applications and
              believe that consistent practice is the key to mastering any skill.
            </p>
            <p>
              My technical foundation includes <strong>C, C++, Python, Data Structures & Algorithms</strong>,
              and frontend development with <strong>HTML, CSS, and JavaScript</strong>. I love solving
              problems, building logic, and creating clean user interfaces.
            </p>
            <p>
              Beyond coding, I value <strong>communication</strong>, a structured <strong>problem-solving approach</strong>,
              and the ability to work well with others. I am fluent in <strong>Hindi</strong> and <strong>English</strong>,
              and I am learning <strong>French</strong> at a basic level.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, improving my DSA skills,
              or enjoying a warm cup of tea while planning my next project.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Learner", desc: "Always curious and eager to explore new tools and technologies." },
            { title: "Problem Solver", desc: "I enjoy breaking down complex problems into simple steps." },
            { title: "Team Player", desc: "I believe great things are built through collaboration." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
