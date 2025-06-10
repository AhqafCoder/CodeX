import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function Events() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Upcoming Events</h1>
          <p className="text-xl text-muted-foreground">
            Join us at our upcoming events and activities.
          </p>
        </div>
        
        <Separator />
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Events Coming Soon</CardTitle>
                  <CardDescription className="mt-2">
                    Stay tuned for our upcoming events! We're preparing exciting workshops, competitions, and tech talks.
                  </CardDescription>
                </div>
                <Badge variant="secondary">Upcoming</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
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