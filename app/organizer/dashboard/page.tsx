"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"
import { Plus, Calendar, Users, DollarSign, TrendingUp } from "lucide-react"
import { getOrganizerEvents, type Event } from "@/lib/api"

export default function OrganizerDashboard() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth()
  const router = useRouter()
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!authLoading && (!isAuthenticated || user?.role !== "organizer")) {
      router.push("/organizer/login")
      return
    }

    if (user) {
      const loadEvents = async () => {
        try {
          const eventsData = await getOrganizerEvents(user.id)
          setEvents(eventsData)
        } catch (error) {
          console.error("Failed to load events:", error)
        } finally {
          setIsLoading(false)
        }
      }

      loadEvents()
    }
  }, [user, isAuthenticated, authLoading, router])

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

  const totalEvents = events.length
  const totalRegistrations = events.reduce((sum, event) => sum + event.registered, 0)
  const totalRevenue = events.reduce((sum, event) => sum + event.registered * event.price, 0)
  const upcomingEvents = events.filter((event) => new Date(event.date) > new Date()).length

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="organizer" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Organizer Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user?.name}</p>
          </div>
          <Button asChild>
            <Link href="/organizer/create-event">
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalEvents}</div>
              <p className="text-xs text-muted-foreground">{upcomingEvents} upcoming</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalRegistrations}</div>
              <p className="text-xs text-muted-foreground">Across all events</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">From paid events</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Registration Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalEvents > 0
                  ? Math.round((totalRegistrations / events.reduce((sum, event) => sum + event.capacity, 0)) * 100)
                  : 0}
                %
              </div>
              <p className="text-xs text-muted-foreground">Capacity utilization</p>
            </CardContent>
          </Card>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Your Events</h2>
            {events.length > 0 && (
              <Button variant="outline" asChild>
                <Link href="/organizer/create-event">Create Another Event</Link>
              </Button>
            )}
          </div>

          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} variant="organizer" />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-muted rounded-lg">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No events yet</h3>
              <p className="text-muted-foreground mb-4">
                Create your first event to start managing registrations and tickets.
              </p>
              <Button asChild>
                <Link href="/organizer/create-event">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Event
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
