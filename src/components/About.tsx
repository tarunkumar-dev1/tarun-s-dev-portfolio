import { GraduationCap, Code2, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold mb-6">Who Am I?</h3>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              I'm Tarun Kumar, a dedicated MCA student with a strong focus on SQL development and 
              database management. My passion lies in creating efficient, scalable database solutions 
              and optimizing data workflows.
            </p>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              With expertise in SQL, Python, and modern web technologies, I bring a comprehensive 
              approach to solving complex data challenges. I'm constantly learning and adapting to 
              new technologies to stay ahead in the ever-evolving tech landscape.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My goal is to leverage my technical skills to build robust database systems and 
              contribute to meaningful projects that make a difference.
            </p>
          </div>

          <div className="grid gap-6 animate-fade-in-right">
            <Card className="p-6 card-glow bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Education</h4>
                  <p className="text-muted-foreground">
                    Master of Computer Applications (MCA)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Building strong foundations in software development and database management
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-glow bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Specialization</h4>
                  <p className="text-muted-foreground">
                    SQL Development & Database Design
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Expert in query optimization, data modeling, and database architecture
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-glow bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Tech Stack</h4>
                  <p className="text-muted-foreground">
                    SQL, Python, HTML, CSS, JavaScript
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Full-stack capabilities with strong backend expertise
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
