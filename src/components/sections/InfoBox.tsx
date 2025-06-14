import { Card, CardContent } from "@/components/ui/card"
import { Terminal, GitBranch, Cpu } from "lucide-react"

export function InfoBox() {
  return (
    <section className="full-width-section w-full px-4 sm:px-6 md:px-4 lg:px-2 xl:px-1 mx-auto -mt-8 mb-16 relative z-10">
      <Card className="max-w-5xl mx-auto bg-background/60 backdrop-blur-lg border-white/10 shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
            <InfoCard
              icon={<Terminal className="h-6 w-6 text-primary" />}
              title="Learn to Code"
              description="Master programming with hands-on projects and expert guidance"
            />
            <InfoCard
              icon={<GitBranch className="h-6 w-6 text-primary" />}
              title="Collaborate"
              description="Work on real projects with like-minded developers"
            />
            <InfoCard
              icon={<Cpu className="h-6 w-6 text-primary" />}
              title="Build & Deploy"
              description="Create and launch your own applications and robots"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function InfoCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 text-center group hover:bg-primary/5 transition-colors duration-300">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
} 