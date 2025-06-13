import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Code, Cpu, Database } from "lucide-react"
import React from "react"

export default function Projects() {
  const projects = [
    {
      title: "Smart Campus Assistant",
      description: "An AI-powered chatbot to help students navigate campus resources and answer common questions.",
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      tags: ["AI", "NLP", "Web Development"]
    },
    {
      title: "Autonomous Delivery Robot",
      description: "A small-scale robot designed to navigate campus pathways and deliver small packages between buildings.",
      icon: <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      tags: ["Robotics", "Computer Vision", "IoT"]
    },
    {
      title: "Student Collaboration Platform",
      description: "A web platform for students to find project partners, share resources, and collaborate on academic projects.",
      icon: <Database className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      tags: ["Full-Stack", "Database", "UI/UX"]
    },
  ]

  return (
    <div className="container py-8 md:py-12 px-4 md:px-6">
      <div className="mx-auto max-w-4xl space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center sm:text-left">Our Projects</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center sm:text-left">
            Explore the innovative projects our members are working on.
          </p>
        </div>
        
        <Separator />
        
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="group border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="mb-2 flex justify-center sm:justify-start">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    {React.cloneElement(project.icon, {
                      className: "h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:scale-110 transition-transform duration-300"
                    })}
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl text-center sm:text-left group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                <CardDescription className="text-sm text-center sm:text-left group-hover:text-foreground/90 transition-colors duration-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="rounded-full bg-secondary/80 group-hover:bg-secondary px-3 py-1 text-xs font-medium transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}