import { Briefcase, Code, User } from "lucide-react";

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
            Lately, I’ve been combining my interest in tech and finance through projects like a real-time 
            stock analyzer, bringing live data to life through code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://docs.google.com/document/d/1SDtEij6VZE3xzbBc2-Xgo9xo8WANxnbl/edit?usp=sharing&ouid=117679710715167985760&rtpof=true&sd=true"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
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