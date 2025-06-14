import { Code, Cpu, Lightbulb, Users, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Features() {
  return (
    <section className="full-width-section w-full px-4 sm:px-6 md:px-4 lg:px-2 xl:px-1 mx-auto relative">
      {/* Vite-like background effects */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Decorative dots (section-specific) */}
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
        
        {/* Decorative line */}
        <div className="absolute -bottom-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
        <Card className="group bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transform hover:-translate-y-1 animate-fade-in-up delay-100 relative">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Coding Workshops</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-foreground/70">Learn programming languages and development skills through hands-on workshops led by experienced mentors. We cover web development, mobile apps, AI, and more.</CardDescription>
          </CardContent>
        </Card>
        
        <Card className="group bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl hover:shadow-xl hover:border-purple-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transform hover:-translate-y-1 animate-fade-in-up delay-200 relative">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Robotics Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-foreground/70">Design, build, and program robots using Arduino, Raspberry Pi, and other platforms. Participate in national robotics competitions and showcase your creations at tech exhibitions.</CardDescription>
          </CardContent>
        </Card>
        
        <Card className="group bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl hover:shadow-xl hover:border-pink-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transform hover:-translate-y-1 animate-fade-in-up delay-300 relative">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Hackathons</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-foreground/70">Join our monthly hackathons where you'll collaborate in teams to solve real-world challenges in 24-48 hours. Win prizes, gain recognition, and develop your portfolio with innovative projects.</CardDescription>
          </CardContent>
        </Card>
        
        <Card className="group bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl hover:shadow-xl hover:border-teal-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transform hover:-translate-y-1 animate-fade-in-up delay-400 relative">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Networking</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-foreground/70">Connect with industry professionals, alumni, and peers through our regular meetups and tech talks. Build relationships that can lead to internships, job opportunities, and collaborative projects.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}