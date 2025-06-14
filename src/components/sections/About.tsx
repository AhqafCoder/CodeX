import { Code2, Rocket, Users2, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function About() {
  return (
    <section className="full-width-section w-full px-4 sm:px-6 md:px-4 lg:px-2 xl:px-1 mx-auto py-16 md:py-2 relative">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f620,transparent)]"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            About CodeX
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We are a community of passionate tech enthusiasts dedicated to fostering innovation and learning in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <Card className="bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl group hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transform hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                To create a thriving ecosystem where students can explore, learn, and innovate in the field of technology.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl group hover:shadow-xl hover:border-purple-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transform hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                To provide hands-on experience and mentorship in coding, robotics, and emerging technologies.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Community */}
          <Card className="bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl group hover:shadow-xl hover:border-pink-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transform hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Users2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                A diverse group of students, mentors, and industry professionals working together to build the future.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-md border-white/10 dark:border-white/5 shadow-xl group hover:shadow-xl hover:border-teal-400/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transform hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-3 group-hover:text-primary transition-colors duration-300">Our Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70">
                Multiple hackathon wins, successful project deployments, and growing partnerships with tech companies.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}