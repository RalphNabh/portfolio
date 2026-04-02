import { useState } from "react";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "C++", category: "backend" },
  { name: "GraphQL", category: "backend" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const spokenLanguages = [
  { label: "English", native: null },
  { label: "French", native: "Français" },
  { label: "Arabic", native: "العربية" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="gradient-border p-6 md:p-8 card-hover mb-14 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex shrink-0 justify-center sm:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl" aria-hidden />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/25">
                  <Languages className="h-8 w-8 text-primary" strokeWidth={1.75} />
                </div>
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left space-y-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-primary mb-1">
                  Languages
                </p>
                <h3 className="text-xl md:text-2xl font-bold">
                  Trilingual communicator
                </h3>
                <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-xl mx-auto sm:mx-0">
                  I work comfortably in English, French, and Arabic—whether
                  collaborating with teams, documenting code, or presenting ideas.
                </p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {spokenLanguages.map((lang) => (
                  <div
                    key={lang.label}
                    className="group rounded-full border border-border/80 bg-card/80 px-4 py-2 text-left shadow-xs transition-colors hover:border-primary/40 hover:bg-card"
                  >
                    <span className="block text-sm font-semibold text-foreground">
                      {lang.label}
                    </span>
                    {lang.native ? (
                      <span className="block text-xs text-muted-foreground font-medium mt-0.5">
                        {lang.native}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {filteredSkills.map((skill, key) => (
            <span
              key={key}
              className="inline-flex items-center rounded-lg border border-border/60 bg-card px-4 py-2.5 text-sm font-medium shadow-xs card-hover"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
