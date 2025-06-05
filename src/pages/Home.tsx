import { Link } from "react-router-dom"
import { ArrowRight, Code, Cpu, Lightbulb, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8 md:gap-24 md:py-12">
      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to <span className="text-primary dark:text-primary">CodeX</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Empowering students through coding and robotics innovation at our university.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/about">Join Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/projects">Explore Projects</Link>
          </Button>
        </div>
        <div className="mt-8 w-full max-w-5xl overflow-hidden rounded-lg border bg-background/50 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a2aa?q=80&w=2070&auto=format&fit=crop" 
            alt="Students coding together" 
            className="w-full object-cover object-center md:h-[400px]" 
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What We Offer</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">Our tech club provides various opportunities for students to learn, grow, and innovate.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <Code className="h-6 w-6 text-primary" />
              <CardTitle className="mt-2">Coding Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Regular workshops on various programming languages and frameworks.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Cpu className="h-6 w-6 text-primary" />
              <CardTitle className="mt-2">Robotics Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Hands-on experience with robotics hardware and software integration.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              <CardTitle className="mt-2">Hackathons</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Competitive events to solve real-world problems through technology.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle className="mt-2">Networking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Connect with industry professionals and like-minded peers.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Join CodeX?</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">Become part of our community and start your journey in technology and innovation.</p>
          <Button asChild className="mt-6" size="lg">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}