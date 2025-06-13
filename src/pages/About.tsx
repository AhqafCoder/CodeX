import { Separator } from "@/components/ui/separator"

export default function About() {
  return (
    <div className="container py-8 md:py-12 px-4 md:px-6">
      <h1 className="mb-6 md:mb-8 text-3xl md:text-4xl font-bold text-center sm:text-left">About CodeX</h1>
      
      <div className="space-y-6 md:space-y-8">
        <section>
          <h2 className="mb-3 md:mb-4 text-xl md:text-2xl font-semibold text-center sm:text-left">Our Mission</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            At CodeX, our mission is to empower students with the knowledge and skills needed to thrive in the world of technology. We believe in learning by doing, collaboration, and innovation.
          </p>
        </section>
        
        <Separator />
        
        <section>
          <h2 className="mb-3 md:mb-4 text-xl md:text-2xl font-semibold text-center sm:text-left">Our Vision</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            We envision a community where students from all backgrounds can come together to learn, create, and innovate. Our goal is to bridge the gap between academic learning and real-world applications.
          </p>
          <p className="mt-3 md:mt-4 text-muted-foreground text-sm md:text-base">
            By fostering a supportive environment for experimentation and growth, we aim to prepare our members for successful careers in technology and empower them to solve real-world problems through creative applications of technology.
          </p>
        </section>

        <Separator />
        
        <section>
          <h2 className="mb-3 md:mb-4 text-xl md:text-2xl font-semibold text-center sm:text-left">Our Values</h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4 hover:border-primary/50 transition-colors">
              <h3 className="mb-2 text-base md:text-lg font-medium">Inclusivity</h3>
              <p className="text-sm text-muted-foreground">We welcome members from all backgrounds, majors, and skill levels. Diversity drives innovation.</p>
            </div>
            <div className="rounded-lg border p-4 hover:border-primary/50 transition-colors">
              <h3 className="mb-2 text-base md:text-lg font-medium">Hands-on Learning</h3>
              <p className="text-sm text-muted-foreground">We believe in practical, project-based learning that builds real-world skills.</p>
            </div>
            <div className="rounded-lg border p-4 hover:border-primary/50 transition-colors">
              <h3 className="mb-2 text-base md:text-lg font-medium">Collaboration</h3>
              <p className="text-sm text-muted-foreground">We foster teamwork and peer learning, creating a supportive community.</p>
            </div>
            <div className="rounded-lg border p-4 hover:border-primary/50 transition-colors">
              <h3 className="mb-2 text-base md:text-lg font-medium">Innovation</h3>
              <p className="text-sm text-muted-foreground">We encourage creative thinking and novel approaches to problem-solving.</p>
            </div>
            <div className="rounded-lg border p-4 hover:border-primary/50 transition-colors">
              <h3 className="mb-2 text-base md:text-lg font-medium">Mentorship</h3>
              <p className="text-sm text-muted-foreground">We provide guidance from experienced peers and industry professionals.</p>
            </div>
            <div className="rounded-lg border p-4 hover:border-primary/50 transition-colors">
              <h3 className="mb-2 text-base md:text-lg font-medium">Community Impact</h3>
              <p className="text-sm text-muted-foreground">We aim to use technology to make a positive difference in our campus and beyond.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}