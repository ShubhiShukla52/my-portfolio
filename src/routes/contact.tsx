import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Me — Radha" },
      { name: "description", content: "Get in touch with Radha. Email, phone, and social links available." },
      { property: "og:title", content: "Contact Me — Radha" },
      { property: "og:description", content: "Get in touch with Radha. Email, phone, and social links available." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact Me</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's connect
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Have a question, opportunity, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-card-foreground">Contact Information</h2>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg text-accent-foreground">
                    ✉️
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <a
                      href="mailto:radha@example.com"
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      radha@example.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg text-accent-foreground">
                    📞
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p className="text-foreground">+91 98XXX XXXXX</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg text-accent-foreground">
                    📍
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="text-foreground">India</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-card-foreground">Download Resume</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Grab a copy of my resume to learn more about my skills and experience.
              </p>
              <a
                href="/resume.txt"
                download
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-card-foreground">Send a Message</h2>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for your message! This is a demo form — connect via email for now.");
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  className="mt-2 block w-full resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
