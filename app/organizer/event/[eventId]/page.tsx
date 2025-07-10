"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useAuth } from "@/contexts/auth-context"
import { Calendar, MapPin, Users, DollarSign, Download, Mail } from "lucide-react"
import { fetchEventById, getEventAnalytics, type Event, type Registration } from "@/lib/api"

export default function EventManagementPage() {
  const params = useParams()
  const router = useRouter()
  const { user, isAuthenticated, isLoading: authLoading } = useAuth()
  const [event, setEvent] = useState<Event | null>(null)
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!authLoading && (!isAuthenticated || user?.role !== "organizer")) {
      router.push("/organizer/login")
      return
    }

    const loadEventData = async () => {
      try {
        const [eventData, analyticsData] = await Promise.all([
          fetchEventById(params.eventId as string),
          getEventAnalytics(params.eventId as string),
        ])

        if (eventData && eventData.organizerId === user?.id) {
          setEvent(eventData)
          setRegistrations(analyticsData.registrations)
          setTotalRevenue(analyticsData.totalRevenue)
        } else {
          router.push("/organizer/dashboard")
        }
      } catch (error) {
        console.error("Failed to load event data:", error)
        router.push("/organizer/dashboard")
      } finally {
        setIsLoading(false)
      }
    }

    if (user) {
      loadEventData()
    }
  }, [params.eventId, user, isAuthenticated, authLoading, router])

  const handleExportRegistrations = () => {
    // TODO: Implement CSV export functionality
    console.log("Exporting registrations...")
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

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar variant="organizer" />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/4" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-32 bg-muted rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar variant="organizer" />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
            <Button onClick={() => router.push("/organizer/dashboard")}>Back to Dashboard</Button>
          </div>
        </div>
      </div>
    )
  }

  const registrationRate = event.capacity > 0 ? (event.registered / event.capacity) * 100 : 0

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="organizer" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
            <p className="text-muted-foreground">Event Management</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handleExportRegistrations}>
              <Download className="h-4 w-4 mr-2" />
              Export List
            </Button>
            <Button onClick={() => router.push("/organizer/dashboard")}>Back to Dashboard</Button>
          </div>
        </div>

        {/* Event Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Event Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>

            <p className="text-muted-foreground">{event.description}</p>

            <div className="flex items-center space-x-4">
              <Badge variant="outline">{event.category}</Badge>
              {event.price > 0 ? (
                <Badge variant="outline">
                  <DollarSign className="h-3 w-3 mr-1" />
                  {event.price}
                </Badge>
              ) : (
                <Badge variant="outline" className="text-green-600">
                  Free
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{event.registered}</div>
              <p className="text-xs text-muted-foreground">of {event.capacity} capacity</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Registration Rate</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{registrationRate.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">Capacity filled</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">From registrations</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Spots Remaining</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{event.capacity - event.registered}</div>
              <p className="text-xs text-muted-foreground">Available spots</p>
            </CardContent>
          </Card>
        </div>

        {/* Registrations Table */}
        <Card>
          <CardHeader>
            <CardTitle>Registered Attendees</CardTitle>
          </CardHeader>
          <CardContent>
            {registrations.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Registration Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {registrations.map((registration) => (
                    <TableRow key={registration.id}>
                      <TableCell className="font-medium">{registration.attendeeName}</TableCell>
                      <TableCell>{registration.attendeeEmail}</TableCell>
                      <TableCell>{new Date(registration.registrationDate).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No registrations yet.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
