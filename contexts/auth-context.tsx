"use client"
import '../lib/amplifyClient'
import {
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  fetchUserAttributes,
} from 'aws-amplify/auth'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'

interface User {
  id: string
  email: string
  name: string
  role: "attendee" | "organizer"
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (
    email: string,
    password: string,
    name: string,
    role?: "attendee" | "organizer"
  ) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser()
        const attributes = await fetchUserAttributes()

        const role = await fetchUserGroup(attributes)

        const id = attributes.sub ?? "unknown-id"
        const email = attributes.email ?? "unknown@example.com"
        const name = attributes.name ?? email.split("@")[0] ?? "User"

        setUser({ id, email, name, role })
      } catch {
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    checkUser()
  }, [])

  const signup = async (
    email: string,
    password: string,
    name: string,
    role: "attendee" | "organizer" = "attendee"
  ) => {
    setIsLoading(true)
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
            name,
          },
        },
      })

      // Role assignment happens via Cognito Group (manually or via Lambda trigger)
    } catch (err: any) {
      throw new Error(err.message || "Signup failed")
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const { isSignedIn } = await signIn({ username: email, password })

      if (isSignedIn) {
        const attributes = await fetchUserAttributes()
        const role = await fetchUserGroup(attributes)

        const id = attributes.sub ?? "unknown-id"
        const emailVal = attributes.email ?? "unknown@example.com"
        const name = attributes.name ?? emailVal.split("@")[0] ?? "User"

        setUser({
          id,
          email: emailVal,
          name,
          role,
        })
      }
    } catch (err: any) {
      throw new Error(err.message || "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    await signOut()
    setUser(null)
  }

  const fetchUserGroup = async (attributes: Partial<Record<string, string>>): Promise<"attendee" | "organizer"> => {
    try {
      const groups = attributes["cognito:groups"]?.split(",") || []
      if (groups.includes("organizer")) return "organizer"
    } catch {
      // ignore
    }
    return "attendee"
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
