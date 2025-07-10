"use client"

import { Amplify } from "aws-amplify"
import awsconfig from "../../src/aws-exports"
import { withAuthenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import React from "react"

Amplify.configure(awsconfig)

function TestAuthPage({ signOut, user }: any) {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Welcome, {user?.username}</h1>
      <button
        onClick={signOut}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Sign Out
      </button>
    </main>
  )
}

export default withAuthenticator(TestAuthPage)
