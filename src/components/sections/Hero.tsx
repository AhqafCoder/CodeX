import { Link } from "react-router-dom"
import { ArrowRight, Code, Cpu, Users, ChevronRight } from "lucide-react"
import { TypewriterText } from "@/components/ui/TypewriterText"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export default function Hero() {
  return (
    <section className="full-width-section w-full px-4 sm:px-6 md:px-4 lg:px-2 xl:px-1 mx-auto flex flex-col items-center justify-center gap-4 text-center pt-12 md:pt-24">
      <div className="flex flex-col items-center gap-4 max-w-[64rem] w-full mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <TypewriterText text="Welcome to CodeX" delay={150} />
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Empowering students through coding and robotics innovation. Join our community of tech enthusiasts and future innovators.
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-4 mt-2 animate-fade-in-up delay-300">
        <Button asChild size="lg" className="group transition-all duration-300 transform hover:translate-y-[-2px]">
          <Link to="https://chat.whatsapp.com/HXQnlpYjI1tELYU2zUgCe7" aria-label="Join the CodeX community">Join Us <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
        </Button>
        <Button variant="outline" size="lg" asChild className="group transition-all duration-300 transform hover:translate-y-[-2px]">
          <Link to="/projects" aria-label="Explore CodeX projects">Explore Projects <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" /></Link>
        </Button>
      </div>
      
      {/* Vite-like Hero Showcase with Shadcn UI Components */}
      <div className="mt-10 w-full max-w-5xl animate-fade-in-up delay-400 relative">
        {/* Vite-like grid background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-[50px]"></div>
        </div>
        
        {/* Floating elements (reduced blur for performance) */}
        <div className="absolute -top-20 -left-20 h-32 w-32 rounded-full bg-primary/5 blur-[50px]"></div>
        <div className="absolute -bottom-20 -right-20 h-32 w-32 rounded-full bg-primary/10 blur-[50px]"></div>
        
        {/* Main content cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
          {/* Feature highlight card */}
          <Card className="col-span-1 md:col-span-1 bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl group hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transform hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Modern Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                Learn and build with cutting-edge technologies including React, Node.js, Python, and machine learning frameworks.
              </CardDescription>
            </CardContent>
          </Card>
          
          {/* Main feature card */}
          <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl group hover:shadow-xl hover:border-purple-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Join Our Community</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">200+ Members</h4>
                    <p className="text-xs text-muted-foreground">From all departments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="mt-0.5 bg-primary/10 p-1.5 rounded-full">
                    <Cpu className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">50+ Projects</h4>
                    <p className="text-xs text-muted-foreground">Completed annually</p>
                  </div>
                </div>
              </div>
              
              {/* Code snippet effect */}
              <div className="relative rounded-md overflow-hidden border border-white/10 dark:border-white/5 bg-black/80 p-4 text-xs font-mono text-green-400">
                <div className="absolute top-2 right-2 flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div className="mt-3">
                  <span className="text-blue-400">const</span> <span className="text-yellow-400">codeX</span> = <span className="text-purple-400">{`{`}</span><br />
                  <span className="pl-4">join: <span className="text-orange-400">()</span> <span className="text-purple-400">=</span> <span className="text-blue-400">{`{`}</span></span><br />
                  <span className="pl-8">console.<span className="text-yellow-400">log</span>(<span className="text-green-400">"Hello, Developer!"</span>);</span><br />
                  <span className="pl-8">return <span className="text-green-400">"Welcome to CodeX!"</span>;</span><br />
                  <span className="pl-4"><span className="text-blue-400">{`}`}</span></span><br />
                  <span className="text-purple-400">{`}`}</span>;
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
        
        
    </section>
  )
}