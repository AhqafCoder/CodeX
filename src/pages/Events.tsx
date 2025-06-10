import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function Events() {
  const events = [
    {
      title: "Robotics Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Engineering Lab 201",
      description: "Hands-on workshop learning to build and program autonomous robots.",
      category: "Workshop",
    },
    {
      title: "Coding Competition",
      date: "March 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Science Building",
      description: "Annual coding competition with prizes for top performers.",
      category: "Competition",
    },
    {
      title: "Tech Talk: AI in Healthcare",
      date: "March 25, 2024",
      time: "3:00 PM - 4:30 PM",
      location: "Auditorium A",
      description: "Guest speaker discussing the latest applications of AI in healthcare.",
      category: "Seminar",
    },
  ]

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
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription className="mt-2">{event.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">{event.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}