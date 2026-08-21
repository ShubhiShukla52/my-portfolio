import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radha — Developer & Problem Solver" },
      { name: "description", content: "Welcome to Radha's personal portfolio. Explore skills, projects, and get in touch." },
      { property: "og:title", content: "Radha — Developer & Problem Solver" },
      { property: "og:description", content: "Welcome to Radha's personal portfolio. Explore skills, projects, and get in touch." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Hello, I'm Radha
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Building ideas with code, curiosity, and coffee.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              A passionate learner who loves solving problems through programming.
              I work with C, C++, Python, Data Structures & Algorithms, and modern web technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/60 to-primary/20 blur-2xl" />
              <img
                src="/images/hero-portrait.jpg"
                alt="Illustration of Radha working on a laptop with warm ambient lighting"
                className="relative h-72 w-72 rounded-[2rem] object-cover shadow-2xl ring-4 ring-background sm:h-96 sm:w-96"
                width={384}
                height={384}
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Technical Skills", to: "/skills", desc: "C, C++, Python, DSA, HTML, CSS, JS" },
            { label: "Projects", to: "/projects", desc: "Myntra Crown, Net Watch, Fishing Detection" },
            { label: "Get in Touch", to: "/contact", desc: "Let's connect and build something together." },
          ].map((card) => (
            <Link
              key={card.label}
              to={card.to}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary">
                {card.label}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
