"use client"

import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, User, LogOut } from "lucide-react"

interface NavbarProps {
  variant?: "attendee" | "organizer"
}

export function Navbar({ variant = "attendee" }: NavbarProps) {
  const { user, logout, isAuthenticated } = useAuth()

  const getNavLinks = () => {
    if (variant === "organizer") {
      return [
        { href: "/organizer/dashboard", label: "Dashboard" },
        { href: "/organizer/create-event", label: "Create Event" },
      ]
    }
    return [
      { href: "/events", label: "Events" },
      { href: "/my-tickets", label: "My Tickets" },
    ]
  }

  const getAuthLinks = () => {
    const basePath = variant === "organizer" ? "/organizer" : ""
    return {
      login: `${basePath}/login`,
      signup: `${basePath}/signup`,
      profile: `${basePath}/profile`,
    }
  }

  const navLinks = getNavLinks()
  const authLinks = getAuthLinks()

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              href={variant === "organizer" ? "/organizer/dashboard" : "/events"}
              className="flex items-center space-x-2"
            >
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">
                EventHub {variant === "organizer" && <span className="text-sm text-muted-foreground">Organizer</span>}
              </span>
            </Link>

            {isAuthenticated && (
              <div className="hidden md:flex space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{user?.name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user?.name}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">{user?.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={authLinks.profile}>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-2">
                <Button variant="ghost" asChild>
                  <Link href={authLinks.login}>Login</Link>
                </Button>
                <Button asChild>
                  <Link href={authLinks.signup}>Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
