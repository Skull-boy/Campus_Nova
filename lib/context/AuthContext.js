'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { onAuthChange, getCurrentUser } from '../services/authService'
import { getUserProfile } from '../services/userService'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthChange(async (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser)

                // Fetch user profile from Firestore
                const result = await getUserProfile(firebaseUser.uid)
                if (result.success) {
                    setProfile(result.data)
                }
            } else {
                setUser(null)
                setProfile(null)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const value = {
        user,
        profile,
        loading,
        isAuthenticated: !!user,
        isAdmin: profile?.role === 'admin',
        isStudent: profile?.role === 'student',
        isSenior: profile?.role === 'senior',
        isFaculty: profile?.role === 'faculty',
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
