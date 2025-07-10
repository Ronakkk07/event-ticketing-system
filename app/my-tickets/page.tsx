"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { TicketCard } from "@/components/ticket-card"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { getMyTickets, type Ticket } from "@/lib/api"

export default function MyTicketsPage() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth()
  const router = useRouter()
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push("/login")
      return
    }

    if (user) {
      const loadTickets = async () => {
        try {
          const ticketsData = await getMyTickets(user.id)
          setTickets(ticketsData)
        } catch (error) {
          console.error("Failed to load tickets:", error)
        } finally {
          setIsLoading(false)
        }
      }

      loadTickets()
    }
  }, [user, isAuthenticated, authLoading, router])

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar variant="attendee" />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-48 bg-muted rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="attendee" />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Tickets</h1>
          <p className="text-muted-foreground">View and manage your event tickets</p>
        </div>

        {tickets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">You don't have any tickets yet.</p>
            <p className="text-sm text-muted-foreground">Register for events to see your tickets here.</p>
          </div>
        )}
      </div>
    </div>
  )
}
