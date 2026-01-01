'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/context/AuthContext'
import LoadingSpinner from '../ui/LoadingSpinner'

/**
 * ProtectedRoute component - Wraps pages that require authentication
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to render if authenticated
 * @param {string[]} props.allowedRoles - Array of roles allowed to access this route (optional)
 * @param {string} props.redirectTo - Path to redirect if not authenticated (default: /auth/login)
 */
export default function ProtectedRoute({
    children,
    allowedRoles = null,
    redirectTo = '/auth/login'
}) {
    const { user, profile, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading) {
            // Not authenticated
            if (!user) {
                router.push(redirectTo)
                return
            }

            // Check role-based access
            if (allowedRoles && profile && !allowedRoles.includes(profile.role)) {
                router.push('/') // Redirect to home if wrong role
            }
        }
    }, [user, profile, loading, allowedRoles, redirectTo, router])

    // Show loading spinner while checking auth
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="text-center">
                    <LoadingSpinner size="lg" />
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        )
    }

    // Not authenticated
    if (!user) {
        return null
    }

    // Wrong role
    if (allowedRoles && profile && !allowedRoles.includes(profile.role)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-6">
                <div className="text-center max-w-md">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                        <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
                    <p className="text-gray-600 mb-6">
                        You don't have permission to access this page.
                    </p>
                    <button
                        onClick={() => router.push('/')}
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold hover:shadow-lg transition-all"
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        )
    }

    return children
}
