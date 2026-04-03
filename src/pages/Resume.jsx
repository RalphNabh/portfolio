import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { Printer } from "lucide-react";

function SectionTitle({ children }) {
  return (
    <h2 className="mt-6 mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground border-b border-foreground/25 pb-1 first:mt-0">
      {children}
    </h2>
  );
}

function Job({ company, location, title, dates, bullets }) {
  return (
    <div className="mb-4">
      <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:items-baseline text-left">
        <span className="font-bold text-foreground">{company}</span>
        <span className="text-sm text-muted-foreground sm:shrink-0">{location}</span>
      </div>
      <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:items-baseline">
        <span className="text-sm italic text-muted-foreground">{title}</span>
        <span className="text-sm italic text-muted-foreground">{dates}</span>
      </div>
      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1 marker:text-primary">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectBlock({ name, subtitle, bullets }) {
  return (
    <div className="mb-4">
      <div className="text-sm text-left">
        <span className="font-bold text-foreground">{name}</span>
        <span className="text-muted-foreground"> | </span>
        <span className="italic text-muted-foreground">{subtitle}</span>
      </div>
      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1 marker:text-primary">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export const Resume = () => {
  return (
    <div className="min-h-screen bg-background text-foreground text-left">
      <div className="no-print fixed top-4 right-4 z-50 flex flex-wrap items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-xs hover:bg-secondary/80"
        >
          <Printer className="h-3.5 w-3.5" />
          Print
        </button>
        <Link
          to="/"
          className="inline-flex rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-xs hover:bg-secondary/80"
        >
          ← Portfolio
        </Link>
        <ThemeToggle />
      </div>

      <article className="mx-auto max-w-[8.5in] px-6 py-14 sm:px-10 sm:py-16 print:max-w-none print:py-8 print:px-10">
        <header className="text-center border-b border-foreground/20 pb-4 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-[0.08em] uppercase text-foreground">
            Ralph Nabhan
          </h1>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            <span>(613) 262-1422</span>
            <span className="mx-1 text-border">|</span>
            <a
              href="mailto:nabhanralph@gmail.com"
              className="underline decoration-primary/50 underline-offset-2 hover:text-primary"
            >
              nabhanralph@gmail.com
            </a>
            <span className="mx-1 text-border">|</span>
            <a
              href="https://www.linkedin.com/in/ralphnabhan"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-primary/50 underline-offset-2 hover:text-primary"
            >
              linkedin.com/in/ralphnabhan
            </a>
            <span className="mx-1 text-border">|</span>
            Ottawa, ON
          </p>
        </header>

        <SectionTitle>Education</SectionTitle>
        <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:items-baseline">
          <span className="font-bold text-foreground">University of Ottawa</span>
          <span className="text-sm text-muted-foreground">Ottawa, ON</span>
        </div>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:items-baseline">
          <span className="text-sm italic text-muted-foreground">
            Honours BSc in Software Engineering, Entrepreneurship Option (CO-OP)
          </span>
          <span className="text-sm italic text-muted-foreground">Expected 2027</span>
        </div>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground marker:text-primary">
          <li>Dean&apos;s List (2023–2025)</li>
        </ul>

        <SectionTitle>Experience</SectionTitle>
        <Job
          company="National Defence Canada"
          location="Ottawa, ON"
          title="Junior Analyst & Full Stack Developer"
          dates="Sep. 2025 – Present"
          bullets={[
            "Built a Career Pathing app from concept to deployment, guiding GoC employees toward training and experience goals.",
            "Automated the service intake process, routing submissions to a backend with one-click approval for managers.",
            "Developed interactive Power BI dashboards and integrated AI-based insights for workforce analytics.",
            "Identified limitations in initial ServiceNow rollout and proposed scalable project/workflow configuration adopted by the platform team.",
          ]}
        />
        <Job
          company="Wouessi Digital"
          location="Ottawa, ON"
          title="AI and Technical Lead Intern"
          dates="Jan. 2025 – Sep. 2025"
          bullets={[
            "Architected and deployed AI-driven backend services in Python and Java, integrating REST APIs and automation pipelines.",
            "Led cross-functional execution of client-ready systems from concept through deployment.",
            "Advanced AI adoption through intelligent system design and strategic platform integrations.",
            "Received CEO commendation for exceptional delivery quality and technical innovation.",
          ]}
        />
        <Job
          company="Shared Services Canada"
          location="Ottawa, ON"
          title="Junior Project & Delivery Manager"
          dates="Jan. 2025 – May 2025"
          bullets={[
            "Led the implementation of privileged access management systems across multiple Government of Canada departments.",
            "Oversaw the configuration and license management of ESXi nodes to support secure infrastructure.",
            "Integrated Onyx workflows to optimize identity and access processes, ensuring compliance.",
          ]}
        />
        <Job
          company="Technovation"
          location="Remote"
          title="Technovation Judge"
          dates="Apr. 2024 – Jun. 2024"
          bullets={[
            "Volunteer judge for girls and teams in the Technovation program, delivering constructive feedback on product ideas and mobile app prototypes.",
            "Conducted all judging online on a flexible schedule, meeting the program’s minimum commitment of three hours.",
            "Helped participants strengthen confidence, creativity, and problem-solving so they could grow as leaders in their communities.",
          ]}
        />

        <SectionTitle>Projects</SectionTitle>
        <ProjectBlock
          name="DeluxePro CRM"
          subtitle="Full-Stack, AI Integration, APIs"
          bullets={[
            "Co-founded and built a production-grade full-stack CRM for construction businesses, integrating APIs and AI-driven features across sales pipelines, estimates/invoices, task management, automation, payments, and reporting.",
            "Led product development and delivery while directing a small team, resulting in a $50K sale while retaining a 15% equity stake.",
          ]}
        />
        <ProjectBlock
          name="Real-Time Stock Data Analyzer"
          subtitle="C++, REST APIs"
          bullets={[
            "Built a command-line tool to fetch and process live stock market data from public APIs (e.g., Alpha Vantage).",
            "Parsed and analyzed real-time price feeds to compute moving averages, volatility, and detect anomalies.",
            "Simulated alert triggers for abnormal market behavior, mimicking basic market anomaly detection tools.",
          ]}
        />

        <SectionTitle>Technical Skills</SectionTitle>
        <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <p>
            <span className="font-semibold text-foreground">Languages: </span>
            Java, Python, C++, JavaScript, TypeScript, Bash/Shell Scripting
          </p>
          <p>
            <span className="font-semibold text-foreground">Frontend: </span>
            HTML5, CSS3, React, Next.js, Tailwind CSS, REST APIs
          </p>
          <p>
            <span className="font-semibold text-foreground">Backend & Databases: </span>
            Node.js, Supabase, PostgreSQL, MySQL, Redis
          </p>
          <p>
            <span className="font-semibold text-foreground">AI/Automation: </span>
            OpenAI/Anthropic APIs, LLM Integration, Power Automate, Power Apps,
            Power BI, Prompt Engineering
          </p>
          <p>
            <span className="font-semibold text-foreground">DevOps & Tools: </span>
            Git, GitHub/GitLab, Azure DevOps, Docker, CI/CD Pipelines, Unix/Linux
            (Red Hat)
          </p>
          <p>
            <span className="font-semibold text-foreground">Security & Cloud: </span>
            TCP/IP, Penetration Testing, Metasploit, Nmap, Wireshark, OWASP,
            Microsoft Azure, Serverless Architecture
          </p>
          <p>
            <span className="font-semibold text-foreground">Methodologies: </span>
            Agile/Scrum, OOP, SDLC, MVC Architecture, Project Management
          </p>
          <p>
            <span className="font-semibold text-foreground">Spoken languages: </span>
            English (Fluent), French (Fluent), Arabic (Fluent)
          </p>
        </div>
      </article>
    </div>
  );
};
