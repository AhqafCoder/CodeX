import { Separator } from "@/components/ui/separator"

export default function About() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About CodeX</h1>
          <p className="text-xl text-muted-foreground">
            A community of passionate students dedicated to exploring and advancing technology.
          </p>
        </div>
        
        <Separator />
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              At CodeX, our mission is to foster a collaborative environment where students can learn, 
              experiment, and innovate in the fields of programming and robotics. We aim to bridge the 
              gap between theoretical knowledge and practical application, preparing our members for 
              future careers in technology.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 text-muted-foreground">
              We envision a community where every student, regardless of their background or experience level, 
              has the opportunity to explore their interest in technology. Through mentorship, resources, and 
              hands-on projects, we strive to cultivate the next generation of tech leaders and innovators.
            </p>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-lg border">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Team collaboration" 
            className="w-full object-cover md:h-[400px]" 
          />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold">What We Do</h2>
          <ul className="mt-4 space-y-4 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Organize weekly coding workshops and tutorials</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Develop robotics projects and participate in competitions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Host hackathons and collaborative coding events</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Invite industry professionals for talks and networking sessions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Provide resources and mentorship for personal projects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}