import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Database Management System",
      description: "Developed a comprehensive DBMS with advanced query optimization and indexing strategies for improved performance.",
      tech: ["SQL", "Python", "MySQL"],
      link: "#",
      github: "#",
    },
    {
      title: "Data Analytics Dashboard",
      description: "Built an interactive dashboard for visualizing complex datasets with real-time data processing capabilities.",
      tech: ["Python", "JavaScript", "HTML/CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "E-Commerce Database",
      description: "Designed and implemented a scalable database architecture for an e-commerce platform handling millions of transactions.",
      tech: ["SQL", "PostgreSQL", "Python"],
      link: "#",
      github: "#",
    },
    {
      title: "Inventory Management System",
      description: "Created an automated inventory tracking system with real-time stock monitoring and predictive analytics.",
      tech: ["SQL", "JavaScript", "Python"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work in database development and full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card 
              key={idx} 
              className="p-6 card-glow bg-card border-border group animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIdx) => (
                  <span 
                    key={techIdx}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
