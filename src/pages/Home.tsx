import { Link } from "react-router-dom"
import { ArrowRight, Code, Cpu, Lightbulb, Users, Sparkles, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator" // Added Separator import

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8 md:gap-24 md:py-12 relative overflow-hidden">
      {/* Global Vite-like background */}
      <div className="fixed inset-0 -z-50 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background/50 to-background/80 backdrop-blur-sm"></div>
      <div className="absolute top-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/30 rounded-full blur-xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-xl -z-10 animate-pulse delay-700"></div>
      
      {/* Decorative elements */}
      <div className="fixed top-20 left-[10%] w-px h-[20%] sm:h-[30%] bg-gradient-to-b from-transparent via-primary/10 to-transparent -z-20"></div>
      <div className="fixed top-[40%] right-[10%] w-px h-[20%] sm:h-[30%] bg-gradient-to-b from-transparent via-primary/10 to-transparent -z-20"></div>
      <div className="fixed top-[20%] left-[30%] w-32 h-32 sm:w-40 sm:h-40 border border-primary/5 rounded-full -z-20 animate-spin-slow"></div>
      <div className="fixed bottom-[20%] right-[20%] w-24 h-24 sm:w-32 sm:h-32 border border-primary/5 rounded-full -z-20 animate-spin-slow"></div>
      
      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-8 text-center relative">
        <Badge variant="secondary" className="mb-2 animate-fade-in">
          <Sparkles className="h-3.5 w-3.5 mr-1" />
          <span>Student-Led Innovation Hub</span>
        </Badge>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 animate-fade-in-up">
            Welcome to <span className="font-extrabold">CodeX</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-foreground/80 md:text-xl animate-fade-in-up delay-100">
            Empowering students through coding and robotics innovation at our university.
          </p>
          <p className="mx-auto max-w-[800px] text-muted-foreground animate-fade-in-up delay-200">
            Founded in 2025, CodeX is a student-led tech community dedicated to fostering innovation, collaboration, and technical excellence.
            Our members range from beginners to advanced developers, all united by a passion for technology.
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
            {/* Feature highlight cards */}
            <Card className="col-span-1 md:col-span-1 bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl group hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
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
            <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl group hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
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
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <Separator className="my-8 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-30" />
          
          {/* Tech logos */}
          <div className="flex justify-center items-center gap-8 flex-wrap mt-6 opacity-70">
            <div className="h-6 w-6 bg-foreground/80 mask-image-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIiAvPgogIDxnIHN0cm9rZT0iIzYxZGFmYiIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj4KICAgIDxlbGxpcHNlIHJ4PSIxMSIgcnk9IjQuMiIgLz4KICAgIDxlbGxpcHNlIHJ4PSIxMSIgcnk9IjQuMiIgdHJhbnNmb3JtPSJyb3RhdGUoNjApIiAvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIiAvPgogIDwvZz4KPC9zdmc+')]" aria-hidden="true" />
            <div className="h-6 w-6 bg-foreground/80 mask-image-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNS4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTIyNCAyNzMgTDg5LjIgMzY4LjlDODIuNCAzNzMuNSA3My43IDM3MC44IDcwLjMgMzYzLjVMNDIuMiAyNTQuOEMzOC44IDI0Ny41IDQyLjkgMjM5LjEgNTAuNCAyMzYuNUw2Ni42IDIzMC41IDIyNCAyNzN6TTIyNCAyNzMgTDM1OC44IDM2OC45QzM2NS42IDM3My41IDM3NC4zIDM3MC44IDM3Ny43IDM2My41TDQwNS44IDI1NC44QzQwOS4yIDI0Ny41IDQwNS4xIDIzOS4xIDM5Ny42IDIzNi41TDM4MS40IDIzMC41IDIyNCAyNzN6TTIyNCAyNzMgVjIzMC41TDIyNCAyMzAuNSAyMjQgMTQ0LjggMjI0IDE0NC44IDIyNCA1OC4yQzIyNCA1MC43IDIzMC43IDQ0IDIzOC4yIDQ0SDI0NS44QzI1My4zIDQ0IDI2MCA1MC43IDI2MCA1OC4yVjE0NC44SDI5Ni4yQzMwMy43IDE0NC44IDMxMCAxNTEuNSAzMTAgMTU5VjE2Ni41QzMxMCAxNzQgMzAzLjMgMTgwLjggMjk1LjggMTgwLjhIMjYwVjIzMC41TDM4MS40IDIzMC41IDIyNCAyNzN6TTIyNCAyNzMgVjIzMC41TDIyNCAyMzAuNSAyMjQgMTQ0LjggMjI0IDE0NC44IDIyNCA1OC4yQzIyNCA1MC43IDIxNy4zIDQ0IDIwOS44IDQ0SDIwMi4yQzE5NC43IDQ0IDE4OCA1MC43IDE4OCA1OC4yVjE0NC44SDE1MS44QzE0NC4zIDE0NC44IDEzOCAxNTEuNSAxMzggMTU5VjE2Ni41QzEzOCAxNzQgMTQ0LjcgMTgwLjggMTUyLjIgMTgwLjhIMTg4VjIzMC41TDY2LjYgMjMwLjUgMjI0IDI3M3oiLz48L3N2Zz4=')]" aria-hidden="true" />
            <div className="h-6 w-6 bg-foreground/80 mask-image-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNS4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTQzOS44IDIwMC41YzAtNy4xLTUuNy0xMi44LTEyLjgtMTIuOGgtNzQuNFYxMTMuOWMwLTcuMS01LjctMTIuOC0xMi44LTEyLjhIMzE1LjFjLTcuMSAwLTEyLjggNS43LTEyLjggMTIuOHY3My44aC03NC40Yy03LjEgMC0xMi44IDUuNy0xMi44IDEyLjh2MjQuNWMwIDcuMSA1LjcgMTIuOCAxMi44IDEyLjhoNzQuNHY3My44YzAgNy4xIDUuNyAxMi44IDEyLjggMTIuOGgyNC41YzcuMSAwIDEyLjgtNS43IDEyLjgtMTIuOHYtNzMuOGg3NC40YzcuMSAwIDEyLjgtNS43IDEyLjgtMTIuOFYyMDAuNXpNMjI0IDI4OGMtNDUuNCAwLTgzLjUtMzMuNi05MC4xLTc3LjhjLTEuNi0xMC42LTEwLjYtMTguNy0yMS41LTE4LjdoLTI0LjZjLTEzLjIgMC0yMy40IDExLjUtMjEuOSAyNC42QzczLjkgMzA0LjYgMTQzLjkgMzY4IDIyNCAzNjhjNTcuOSAwIDEwOS4yLTI5LjUgMTM5LjItNzQuNGM1LjctOC41IDQuOS0xOS44LTEuOS0yNy40bC0xNy41LTE5LjRjLTcuMi04LTE5LjctOC41LTI3LjQtLjljLTIzLjIgMjIuOS01NC45IDM3LjItOTAuMyAzNy4yYy01Ny45IDAtMTA1LjYtNDMuNi0xMTEuOS0xMDAuMWMtMS42LTE0LjIgOS4zLTI2LjcgMjMuNi0yNi43aDI0LjRjMTAuOSAwIDE5LjktOC4xIDIxLjUtMTguNyA2LjYtNDQuMiA0NC43LTc3LjggOTAuMS03Ny44YzM1LjQgMCA2Ny4xIDE0LjMgOTAuMyAzNy4yYzcuNyA3LjYgMjAuMiA3LjEgMjcuNC0uOWwxNy41LTE5LjRjNi44LTcuNSA3LjYtMTguOSAxLjktMjcuNEMzMzMuMiA0MS41IDI4MS45IDEyIDIyNCAxMkMxNDMuOSAxMiA3My45IDc1LjQgNjYuOSAxNjRjLTEuNSAxMy4xIDguNyAyNC42IDIxLjkgMjQuNmgyNC42YzEwLjkgMCAxOS45IDguMSAyMS41IDE4LjcgNi42IDQ0LjIgNDQuNyA3Ny44IDkwLjEgNzcuOGMzNS40IDAgNjcuMS0xNC4zIDkwLjMtMzcuMmM3LjctNy42IDIwLjItNy4xIDI3LjQuOWwxNy41IDE5LjRjNi44IDcuNSA3LjYgMTguOSAxLjkgMjcuNC0zMCAzNC45LTgxLjMgNjQuNC0xMzkuMiA2NC40LTgwLjEgMC0xNTAuMS02My40LTE1Ny4xLTE1MmMtMS41LTEzLjEgOC43LTI0LjYgMjEuOS0yNC42aDI0LjZjMTAuOSAwIDE5LjktOC4xIDIxLjUtMTguN0MxNDAuNSA4OS40IDE3OC42IDU2IDIyNCA1NmMzNS40IDAgNjcuMSAxNC4zIDkwLjMgMzcuMmM3LjcgNy42IDIwLjIgNy4xIDI3LjQtLjlsMTcuNS0xOS40YzYuOC03LjUgNy42LTE4LjkgMS45LTI3LjRDMzMzLjIgMTEuNSAyODEuOSAtMTggMjI0LTE4QzE0My45LTE4IDczLjkgNDUuNCA2Ni45IDEzNGMtMS41IDEzLjEgOC43IDI0LjYgMjEuOSAyNC42aDI0LjZjMTAuOSAwIDE5LjkgOC4xIDIxLjUgMTguNyA2LjYgNDQuMiA0NC43IDc3LjggOTAuMSA3Ny44YzM1LjQgMCA2Ny4xLTE0LjMgOTAuMy0zNy4yYzcuNy03LjYgMjAuMi03LjEgMjcuNC45bDE3LjUgMTkuNGM2LjggNy41IDcuNiAxOC45IDEuOSAyNy40LTMwIDM0LjktODEuMyA2NC40LTEzOS4yIDY0LjR6Ii8+PC9zdmc+')]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container relative">
        {/* Vite-like background effects */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-xl -z-10"></div>
        <div className="absolute left-0 bottom-0 w-40 h-40 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-xl -z-10"></div>
        
        {/* Decorative dots */}
        <div className="absolute top-20 right-20 w-24 h-24 -z-10">
          <div className="absolute h-2 w-2 rounded-full bg-primary/40"></div>
          <div className="absolute h-2 w-2 rounded-full bg-primary/40 top-4 left-4"></div>
          <div className="absolute h-2 w-2 rounded-full bg-primary/40 top-8 left-8"></div>
          <div className="absolute h-2 w-2 rounded-full bg-primary/40 top-12 left-12"></div>
          <div className="absolute h-2 w-2 rounded-full bg-primary/40 top-16 left-16"></div>
        </div>
        
        <div className="mb-16 text-center relative">
          <Badge variant="outline" className="mb-4 animate-fade-in border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 mr-1 text-primary" />
            <span>200+ Active Members</span>
          </Badge>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 animate-fade-in-up">What We Offer</h2>
          
          <div className="mx-auto mt-6 max-w-[700px] text-foreground/80 animate-fade-in-up delay-100">
            <p>Our tech club provides various opportunities for students to learn, grow, and innovate.</p>
          </div>
          
          <p className="mx-auto mt-3 max-w-[800px] text-muted-foreground animate-fade-in-up delay-200">
            Join over 200+ members from various departments and skill levels. We host weekly meetups, monthly hackathons, and collaborate with industry partners to provide real-world experience.
          </p>
          
          {/* Decorative line */}
          <div className="absolute -bottom-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          <Card className="group border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 hover:shadow-lg animate-fade-in-up delay-100 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 transform rotate-45 translate-x-8 -translate-y-8"></div>
            </div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Coding Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">Learn programming languages and development skills through hands-on workshops led by experienced mentors. We cover web development, mobile apps, AI, and more.</CardDescription>
            </CardContent>
            {/* Decorative dots */}
            <div className="absolute bottom-2 right-2 flex space-x-1 opacity-30">
              <div className="h-1 w-1 rounded-full bg-primary/40"></div>
              <div className="h-1 w-1 rounded-full bg-primary/30"></div>
              <div className="h-1 w-1 rounded-full bg-primary/20"></div>
            </div>
          </Card>
          
          <Card className="group border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 hover:shadow-lg animate-fade-in-up delay-200 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 transform rotate-45 translate-x-8 -translate-y-8"></div>
            </div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Robotics Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">Design, build, and program robots using Arduino, Raspberry Pi, and other platforms. Participate in national robotics competitions and showcase your creations at tech exhibitions.</CardDescription>
            </CardContent>
            {/* Decorative dots */}
            <div className="absolute bottom-2 right-2 flex space-x-1 opacity-30">
              <div className="h-1 w-1 rounded-full bg-primary/40"></div>
              <div className="h-1 w-1 rounded-full bg-primary/30"></div>
              <div className="h-1 w-1 rounded-full bg-primary/20"></div>
            </div>
          </Card>
          
          <Card className="group border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 hover:shadow-lg animate-fade-in-up delay-300 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 transform rotate-45 translate-x-8 -translate-y-8"></div>
            </div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Hackathons</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">Join our monthly hackathons where you'll collaborate in teams to solve real-world challenges in 24-48 hours. Win prizes, gain recognition, and develop your portfolio with innovative projects.</CardDescription>
            </CardContent>
            {/* Decorative dots */}
            <div className="absolute bottom-2 right-2 flex space-x-1 opacity-30">
              <div className="h-1 w-1 rounded-full bg-primary/40"></div>
              <div className="h-1 w-1 rounded-full bg-primary/30"></div>
              <div className="h-1 w-1 rounded-full bg-primary/20"></div>
            </div>
          </Card>
          
          <Card className="group border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 hover:shadow-lg animate-fade-in-up delay-400 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 transform rotate-45 translate-x-8 -translate-y-8"></div>
            </div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Networking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">Connect with industry professionals, alumni, and peers through our regular meetups and tech talks. Build relationships that can lead to internships, job opportunities, and collaborative projects.</CardDescription>
            </CardContent>
            {/* Decorative dots */}
            <div className="absolute bottom-2 right-2 flex space-x-1 opacity-30">
              <div className="h-1 w-1 rounded-full bg-primary/40"></div>
              <div className="h-1 w-1 rounded-full bg-primary/30"></div>
              <div className="h-1 w-1 rounded-full bg-primary/20"></div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container relative overflow-hidden">
        {/* Vite-like background effects */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Background decoration */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-xl -z-10 animate-pulse"></div>
        <div className="absolute -left-20 -top-20 w-64 h-64 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-xl -z-10 animate-pulse delay-500"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 border border-primary/10 rounded-full -z-10 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 sm:w-24 sm:h-24 border border-primary/5 rounded-full -z-10 animate-spin-slow"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent transform -rotate-45"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent transform -rotate-45"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent transform -rotate-45"></div>
        </div>
        
        <div className="rounded-xl bg-gradient-to-br from-background/80 via-background/50 to-background/30 backdrop-blur-md p-10 text-center border border-white/10 dark:border-white/5 shadow-xl relative overflow-hidden animate-fade-in-up delay-500">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
          
          <Badge variant="secondary" className="mb-6 animate-fade-in border-white/10 dark:border-white/5 bg-background/50 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 mr-1" />
            <span>Free Membership</span>
          </Badge>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 animate-fade-in-up">
            Join CodeX Today
          </h2>
          
          <p className="mx-auto mt-6 max-w-[700px] text-foreground/80 animate-fade-in-up delay-100">
            Ready to start your tech journey? Join our community of innovators and creators.
          </p>
          
          <p className="mx-auto mt-3 max-w-[800px] text-muted-foreground animate-fade-in-up delay-200">
            Membership is free and open to all students regardless of major or experience level. Get access to workshops, events, mentorship, and a supportive community that will help you grow your skills and build your portfolio.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-primary/20" aria-label="Get started with CodeX">
                Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="outline" className="group transition-all duration-300 transform hover:translate-y-[-2px] border-white/10 dark:border-white/5 hover:border-primary/20 bg-background/50 backdrop-blur-sm" aria-label="View upcoming CodeX events">
                Upcoming Events <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Code dots decoration */}
          <div className="absolute bottom-4 right-4 flex space-x-1 opacity-50">
            <div className="h-1.5 w-1.5 rounded-full bg-primary/40"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-primary/30"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-primary/20"></div>
          </div>
        </div>
      </section>
    </div>
  )
}