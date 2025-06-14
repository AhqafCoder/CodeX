import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import CTA from "@/components/sections/CTASection"
import About from "@/components/sections/About"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8 md:gap-24 md:py-12 relative overflow-hidden">
      {/* Global Vite-like background */}
      <div className="fixed inset-0 -z-50 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Global Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background/50 to-background/80 backdrop-blur-sm"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary/30 rounded-full blur-2xl -z-10 animate-pulse" style={{ right: '-2rem' }}></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary/20 rounded-full blur-2xl -z-10 animate-pulse delay-700" style={{ left: '-2rem' }}></div>
      
      {/* Global Decorative Elements */}
      <div className="fixed top-20 left-0 w-px h-[20%] sm:h-[30%] bg-gradient-to-b from-transparent via-primary/10 to-transparent -z-20"></div>
      <div className="fixed top-[40%] right-0 w-px h-[20%] sm:h-[30%] bg-gradient-to-b from-transparent via-primary/10 to-transparent -z-20"></div>
      <div className="fixed top-[20%] left-[30%] w-32 h-32 sm:w-40 sm:h-40 border border-primary/5 rounded-full -z-20 animate-spin-slow"></div>
      <div className="fixed bottom-[20%] right-[20%] w-24 h-24 sm:w-32 sm:h-32 border border-primary/5 rounded-full -z-20 animate-spin-slow"></div>
      
      {/* Sections */}
      <Hero />
      <About />
      <Features />
      <CTA />
    </div>
  )
}