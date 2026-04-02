import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";

const projects = [
  {
    id: "deluxepro",
    title: "DeluxePro CRM",
    description:
      "Co-founded a production-grade CRM tailored for construction teams—sales pipelines, estimates and invoicing, task management, workflow automation, payments, and reporting—with AI-assisted features wired through modern APIs.",
    image: project3,
    tags: ["Full-Stack", "AI & APIs", "Payments", "Automation"],
    demoUrl: "https://www.linkedin.com/in/ralphnabhan",
    githubUrl: null,
    demoLabel: "LinkedIn",
  },
  {
    id: "stock-dashboard",
    title: "Stock Dashboard",
    description: "Real-time bilingual stock tracker with live graphs",
    image: project4,
    tags: ["React", "Vite", "Chart.js", "i18next"],
    demoUrl: "https://ralphnabh.github.io/stock-dashboard/",
    githubUrl: "https://github.com/RalphNabh/stock-dashboard",
  },
  {
    id: "luxemobilecare",
    title: "Luxe Mobile Care",
    description: "Service site",
    image: project1,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://luxemobilecare.github.io",
    githubUrl: "https://github.com/LuxeMobileCare/luxemobilecare.github.io.git",
  },
  {
    id: "memory-nexus",
    title: "Memory Nexus",
    description: "Memory game",
    image: project2,
    tags: ["Rust", "TypeScript", "Python"],
    demoUrl: null,
    githubUrl: "https://github.com/MemoryGameSEG/memory-nexus.git",
  },
];

const showExternalLink = (url) =>
  Boolean(url && url !== "#" && !url.includes("localhost"));

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From a founder-led CRM story to experiments in data and UX—work
          imagined for operators and builders, not just slide decks.
        </p>

        <div className="gradient-border p-6 md:p-8 card-hover mb-14 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex shrink-0 justify-center sm:justify-start">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl"
                  aria-hidden
                />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/25">
                  <Sparkles
                    className="h-8 w-8 text-primary"
                    strokeWidth={1.75}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-5 text-center sm:text-left">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-primary mb-1">
                  Founder arc
                </p>
                <h3 className="text-xl md:text-2xl font-bold">
                  Built a CRM, shipped it, sold it
                </h3>
                <p className="text-muted-foreground mt-3 text-sm md:text-base leading-relaxed">
                  DeluxePro is my flagship build: a full-stack CRM aimed at
                  construction crews who live in bids, change orders, and
                  invoices—not buzzwords. I co-founded the concept, owned the
                  architecture and delivery with a tight team, and pushed
                  every release from napkin sketches to something you could run a
                  pipeline on: estimates, tasks, automation, payments, and
                  AI-backed assists over real APIs.
                </p>
                <p className="text-muted-foreground mt-3 text-sm md:text-base leading-relaxed">
                  The narrative closes with a{" "}
                  <span className="text-foreground font-medium">$50K</span>{" "}
                  deal on the table and{" "}
                  <span className="text-foreground font-medium">
                    15% equity
                  </span>{" "}
                  carried forward—product, people, and terms negotiated in one
                  arc.
                </p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                <div className="rounded-xl border border-border/80 bg-card/80 px-5 py-3 text-left shadow-xs">
                  <p className="text-2xl font-bold text-primary tabular-nums">
                    $50K
                  </p>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Sale closed
                  </p>
                </div>
                <div className="rounded-xl border border-border/80 bg-card/80 px-5 py-3 text-left shadow-xs">
                  <p className="text-2xl font-bold text-primary tabular-nums">
                    15%
                  </p>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Equity retained
                  </p>
                </div>
                <div className="rounded-xl border border-border/80 bg-card/80 px-5 py-3 text-left shadow-xs min-w-[10rem]">
                  <p className="text-sm font-semibold text-foreground">
                    Team + product lead
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Construction CRM · AI · APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {showExternalLink(project.demoUrl) ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={project.demoLabel || "Live demo"}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/RalphNabh?tab=repositories"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
