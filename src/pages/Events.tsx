import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "lucide-react"

export default function Events() {
  const events = [
    {
      title: "Introduction to Machine Learning Workshop",
      date: "June 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Engineering Building, Room 302",
      description: "Learn the basics of machine learning algorithms and how to implement them using Python and scikit-learn."
    },
    {
      title: "Hackathon: Build a Web App in 24 Hours",
      date: "July 10-11, 2024",
      time: "Starts at 9:00 AM",
      location: "Student Center, Main Hall",
      description: "Join us for an exciting 24-hour hackathon where you'll build a web application from scratch in teams."
    },
    {
      title: "Guest Speaker: Innovations in Robotics",
      date: "August 5, 2024",
      time: "5:30 PM - 7:00 PM",
      location: "Science Building, Auditorium",
      description: "A special talk by Dr. Jane Smith from RoboTech Industries on the latest innovations in robotics and AI."
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Upcoming Events</h1>
          <p className="text-xl text-muted-foreground">
            Join us for workshops, hackathons, and tech talks throughout the year.
          </p>
        </div>
        
        <Separator />
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {event.date} • {event.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm font-medium">Location: {event.location}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}