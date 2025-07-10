import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, DollarSign } from "lucide-react"
import type { Event } from "@/lib/api"

interface EventCardProps {
  event: Event
  variant?: "attendee" | "organizer"
}

export function EventCard({ event, variant = "attendee" }: EventCardProps) {
  const formatDate = (date: string, time: string) => {
    const eventDate = new Date(`${date}T${time}`)
    return eventDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":")
    const date = new Date()
    date.setHours(Number.parseInt(hours), Number.parseInt(minutes))
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const getViewLink = () => {
    if (variant === "organizer") {
      return `/organizer/event/${event.id}`
    }
    return `/events/${event.id}`
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative">
        <Image
          src={event.image || "/placeholder.svg?height=200&width=400"}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">{event.category}</Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg leading-tight">{event.title}</h3>
          {event.price > 0 ? (
            <Badge variant="outline" className="ml-2">
              <DollarSign className="h-3 w-3 mr-1" />
              {event.price}
            </Badge>
          ) : (
            <Badge variant="outline" className="ml-2 text-green-600">
              Free
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {formatDate(event.date, event.time)} at {formatTime(event.time)}
          </div>

          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>

          <div className="flex items-center text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {event.registered} / {event.capacity} registered
          </div>
        </div>

        {variant === "organizer" && (
          <div className="pt-2 border-t">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Revenue:</span>
              <span className="font-medium">${(event.registered * event.price).toLocaleString()}</span>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={getViewLink()}>{variant === "organizer" ? "Manage Event" : "View Details"}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
