"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { Calendar, MapPin, Users, DollarSign, User } from "lucide-react"
import { fetchEventById, registerForEvent, type Event } from "@/lib/api"

export default function EventDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const { user, isAuthenticated } = useAuth()
  const [event, setEvent] = useState<Event | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isRegistering, setIsRegistering] = useState(false)

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const eventData = await fetchEventById(params.eventId as string)
        setEvent(eventData)
      } catch (error) {
        console.error("Failed to load event:", error)
        toast({
          title: "Error",
          description: "Failed to load event details",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadEvent()
  }, [params.eventId, toast])

  const handleRegister = async () => {
    if (!isAuthenticated || !user || !event) {
      router.push("/login")
      return
    }

    setIsRegistering(true)
    try {
      await registerForEvent(event.id, user.id, user.name, user.email)
      toast({
        title: "Registration Successful!",
        description: "You have been registered for this event. Check your email for confirmation.",
      })
      // Update local state
      setEvent((prev) => (prev ? { ...prev, registered: prev.registered + 1 } : null))
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error registering for this event. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsRegistering(false)
    }
  }

  const formatDate = (date: string, time: string) => {
    const eventDate = new Date(`${date}T${time}`)
    return eventDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar variant="attendee" />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-64 bg-muted rounded-lg" />
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
          </div>
        </div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar variant="attendee" />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-4">The event you're looking for doesn't exist.</p>
            <Button onClick={() => router.push("/events")}>Back to Events</Button>
          </div>
        </div>
      </div>
    )
  }

  const isEventFull = event.registered >= event.capacity
  const spotsLeft = event.capacity - event.registered

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="attendee" />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={event.image || "/placeholder.svg?height=400&width=800"}
                alt={event.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary">{event.category}</Badge>
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h1 className="text-3xl font-bold">{event.title}</h1>
                {event.price > 0 ? (
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {event.price}
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-lg px-3 py-1 text-green-600">
                    Free
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-medium text-foreground">{formatDate(event.date, event.time)}</div>
                    <div>{formatTime(event.time)}</div>
                  </div>
                </div>

                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div className="font-medium text-foreground">{event.location}</div>
                </div>

                <div className="flex items-center text-muted-foreground">
                  <Users className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-medium text-foreground">
                      {event.registered} / {event.capacity} registered
                    </div>
                    <div>{spotsLeft} spots left</div>
                  </div>
                </div>

                <div className="flex items-center text-muted-foreground">
                  <User className="h-5 w-5 mr-3" />
                  <div className="font-medium text-foreground">{event.organizerName}</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">About This Event</h3>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card>
              <CardHeader>
                <CardTitle>Register for Event</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  {event.price > 0 ? (
                    <div className="text-2xl font-bold">${event.price}</div>
                  ) : (
                    <div className="text-2xl font-bold text-green-600">Free</div>
                  )}
                </div>

                {isEventFull ? (
                  <Button disabled className="w-full">
                    Event Full
                  </Button>
                ) : (
                  <Button onClick={handleRegister} disabled={isRegistering} className="w-full">
                    {isRegistering ? "Registering..." : "Register Now"}
                  </Button>
                )}

                <div className="text-xs text-muted-foreground text-center">
                  {spotsLeft} of {event.capacity} spots remaining
                </div>
              </CardContent>
            </Card>

            {/* Event Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Event Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Registered</span>
                  <span className="font-medium">{event.registered}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Capacity</span>
                  <span className="font-medium">{event.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium">{event.category}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
