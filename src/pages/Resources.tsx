import { Link } from "react-router-dom"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Resources() {
  const resourceCategories = [
    {
      title: "Learning Resources",
      description: "Tutorials, courses, and documentation to help you learn new skills.",
      resources: [
        { name: "Web Development Roadmap", url: "https://roadmap.sh/frontend" },
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
        { name: "CS50: Introduction to Computer Science", url: "https://cs50.harvard.edu/x/" },
      ]
    },
    {
      title: "Tools & Software",
      description: "Recommended tools and software for development and robotics projects.",
      resources: [
        { name: "GitHub Student Developer Pack", url: "https://education.github.com/pack" },
        { name: "Visual Studio Code", url: "https://code.visualstudio.com/" },
        { name: "Arduino Project Hub", url: "https://create.arduino.cc/projecthub" },
      ]
    },
    {
      title: "Community Resources",
      description: "Connect with the wider tech community and find opportunities.",
      resources: [
        { name: "Stack Overflow", url: "https://stackoverflow.com/" },
        { name: "DEV Community", url: "https://dev.to/" },
        { name: "Kaggle", url: "https://www.kaggle.com/" },
      ]
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Resources</h1>
          <p className="text-xl text-muted-foreground">
            Helpful resources for learning and development.
          </p>
        </div>
        
        <Separator />
        
        <div className="space-y-8">
          {resourceCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-bold">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
              <div className="grid gap-4 md:grid-cols-3">
                {category.resources.map((resource, resourceIndex) => (
                  <Card key={resourceIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href={resource.url} target="_blank" rel="noreferrer">
                          Visit <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}