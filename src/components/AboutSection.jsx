import { Briefcase, Code, User } from "lucide-react";

const resumePdfUrl = `${import.meta.env.BASE_URL}ralph_resume.pdf`;

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
            I'm a student software engineer who loves building things that work, look great, and solve real problems. I enjoy fast-paced, 
            collaborative environments where ideas turn into working prototypes, especially when there's room to experiment and learn.
            </p>

            <p className="text-muted-foreground">
            My centerpiece build is DeluxePro CRM—construction ops, AI hooks, and a founder arc that ends in
            a negotiated sale and carried equity—alongside tools like a real-time stock analyzer that brings
            live data to life through code.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href={resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                View resume
              </a>
              <a
                href={resumePdfUrl}
                download="Ralph_Nabhan_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Tech & Learning</h4>
                  <p className="text-muted-foreground">
                  Fuelled by curiosity, I dive into new technologies and frameworks to bring creative ideas to life. 
                  I’m always building, tweaking, and pushing projects beyond the classroom.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Code with Purpose</h4>
                  <p className="text-muted-foreground">
                  Whether it's a front-end interface or a real-time stock tool, I code to solve problems 
                  blending logic, design, and real-world impact in every line.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Collaboration-Driven</h4>
                  <p className="text-muted-foreground">
                  I thrive in team settings where ideas flow and roles blur. Managing tasks, 
                  sharing knowledge, and turning brainstorms into working systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};