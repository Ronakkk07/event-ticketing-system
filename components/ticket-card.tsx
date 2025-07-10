"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, QrCode } from "lucide-react"
import type { Ticket } from "@/lib/api"

interface TicketCardProps {
  ticket: Ticket
}

export function TicketCard({ ticket }: TicketCardProps) {
  const handleDownload = () => {
    // TODO: Implement S3 signed URL download
    console.log("Downloading ticket:", ticket.id)
  }

  const handleViewQR = () => {
    // TODO: Show QR code modal or navigate to QR view
    console.log("Viewing QR code:", ticket.qrCode)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{ticket.eventTitle}</h3>
            <p className="text-sm text-muted-foreground">
              Purchased on {new Date(ticket.purchaseDate).toLocaleDateString()}
            </p>
          </div>
          <Badge variant="outline" className="text-green-600">
            Valid
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Ticket ID:</span>
            <span className="font-mono">{ticket.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Attendee:</span>
            <span>{ticket.attendeeName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Email:</span>
            <span>{ticket.attendeeEmail}</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button onClick={handleDownload} variant="outline" className="flex-1 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button onClick={handleViewQR} variant="outline" className="flex-1 bg-transparent">
            <QrCode className="h-4 w-4 mr-2" />
            View QR Code
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
