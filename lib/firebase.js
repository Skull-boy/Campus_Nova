import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
// Replace these with your actual Firebase config values
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

console.log('--- FIREBASE CONFIG DEBUG ---')
console.log('API Key:', process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'DEFINED' : 'UNDEFINED')
console.log('Project ID:', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? 'DEFINED' : 'UNDEFINED')
console.log('Full Config:', JSON.stringify(firebaseConfig, null, 2))
console.log('-----------------------------')

// Initialize Firebase
let app
if (!getApps().length) {
    app = initializeApp(firebaseConfig)
} else {
    app = getApps()[0]
}

// Initialize services
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
