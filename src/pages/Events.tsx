import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function Events() {
  return (
    <div className="container py-8 md:py-12 px-4 md:px-6">
      <div className="mx-auto max-w-4xl space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center sm:text-left">Upcoming Events</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center sm:text-left">
            Join us at our upcoming events and activities.
          </p>
        </div>
        
        <Separator />
        
        <div className="grid gap-4 md:gap-6">
          <Card className="border-primary/10">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <CardTitle className="text-xl md:text-2xl text-center sm:text-left">Events Coming Soon</CardTitle>
                  <CardDescription className="mt-2 text-sm md:text-base text-center sm:text-left">
                    Stay tuned for our upcoming events! We're preparing exciting workshops, competitions, and tech talks.
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="self-center sm:self-start">Upcoming</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm">Check back soon for event dates</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}