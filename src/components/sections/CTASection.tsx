import { Link } from "react-router-dom"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CTASection() {
  return (
    <section className="full-width-section w-full px-4 sm:px-6 md:px-4 lg:px-2 xl:px-1 mx-auto relative overflow-hidden">
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
  )
}