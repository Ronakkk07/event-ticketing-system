"use client"

import { useEffect } from "react"
import { Auth } from "aws-amplify"

export default function TestPage() {
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => console.log("✅ Current user:", user))
      .catch(err => console.error("❌ Error or not logged in:", err))
  }, [])

  return <div>Testing Auth...</div>
}
