import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Code, Cpu, Database } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Smart Campus Assistant",
      description: "An AI-powered chatbot to help students navigate campus resources and answer common questions.",
      icon: <Code className="h-8 w-8 text-primary" />,
      tags: ["AI", "NLP", "Web Development"]
    },
    {
      title: "Autonomous Delivery Robot",
      description: "A small-scale robot designed to navigate campus pathways and deliver small packages between buildings.",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      tags: ["Robotics", "Computer Vision", "IoT"]
    },
    {
      title: "Student Collaboration Platform",
      description: "A web platform for students to find project partners, share resources, and collaborate on academic projects.",
      icon: <Database className="h-8 w-8 text-primary" />,
      tags: ["Full-Stack", "Database", "UI/UX"]
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Our Projects</h1>
          <p className="text-xl text-muted-foreground">
            Explore the innovative projects our members are working on.
          </p>
        </div>
        
        <Separator />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-2">{project.icon}</div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
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