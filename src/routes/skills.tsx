import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Radha" },
      { name: "description", content: "Explore Radha's technical skills, soft skills, and languages." },
      { property: "og:title", content: "Skills — Radha" },
      { property: "og:description", content: "Explore Radha's technical skills, soft skills, and languages." },
    ],
  }),
  component: SkillsPage,
});

const technicalSkills = [
  { name: "C", level: 85 },
  { name: "C++", level: 80 },
  { name: "Python", level: 78 },
  { name: "Programming & DSA", level: 75 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 82 },
  { name: "JavaScript", level: 70 },
];

const softSkills = [
  { name: "Problem-Solving Approach", icon: PuzzleIcon },
  { name: "Communication Skill", icon: ChatIcon },
];

const languages = [
  { name: "Hindi", proficiency: "Fluent" },
  { name: "English", proficiency: "Fluent" },
  { name: "French", proficiency: "Basic" },
];

function SkillsPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Skills</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I bring to the table
          </h1>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-card-foreground">Technical Skills</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Core programming languages and tools I work with regularly.
            </p>
            <div className="mt-6 space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                    <span className="text-xs font-medium text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-card-foreground">Soft Skills</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Skills that help me collaborate, communicate, and grow.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl bg-accent/40 p-4"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm font-medium text-accent-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-card-foreground">Languages</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Languages I can communicate in.
              </p>
              <ul className="mt-6 space-y-3">
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex items-center justify-between rounded-xl bg-muted/60 px-4 py-3"
                  >
                    <span className="font-medium text-card-foreground">{language.name}</span>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      {language.proficiency}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
