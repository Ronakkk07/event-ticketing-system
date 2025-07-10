/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_REGION: string
    NEXT_PUBLIC_COGNITO_USER_POOL_ID: string
    NEXT_PUBLIC_COGNITO_CLIENT_ID: string
  }

  interface Process {
    env: ProcessEnv
  }
}