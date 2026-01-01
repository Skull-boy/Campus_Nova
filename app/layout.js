import { Inter } from 'next/font/google'
import './globals.css'
import BottomNav from '@/components/layout/BottomNav'
import { AuthProvider } from '@/lib/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Campus Hero - Your College Companion',
    description: 'Discover clubs, connect with mentors, explore roadmaps, and enhance your college journey.',
    keywords: 'college, campus, clubs, mentors, roadmap, coding, linkedin, github',
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#4f46e5',
}

export default function RootLayout({ children }) {
    console.log("==========================================")
    console.log("SERVER CHECK - API KEY:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? "DEFINED" : "UNDEFINED")
    console.log("SERVER CHECK - VALUE:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
    console.log("==========================================")
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={inter.className}>
                <AuthProvider>
                    <main className="min-h-screen pb-20">
                        {children}
                    </main>
                    <BottomNav />
                </AuthProvider>
            </body>
        </html>
    )
}
