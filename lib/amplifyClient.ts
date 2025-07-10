import { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'

console.log("🔍 awsExports config:", awsExports) // ✅ Add this
Amplify.configure(awsExports)