"use client"
import { useEffect } from "react"
import { Auth } from "aws-amplify"

export default function TestPage() {
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => console.log("✅ Authenticated user:", user))
      .catch(err => console.error("❌ Error or not logged in:", err))
  }, [])

  return <div>Check browser console for Cognito user or error</div>
}
