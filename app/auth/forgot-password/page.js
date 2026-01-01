'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { resetPassword } from '@/lib/services/authService'

export default function ForgotPasswordPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email) {
            setError('Email is required')
            return
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email is invalid')
            return
        }

        setLoading(true)
        setError('')

        const result = await resetPassword(email)

        if (result.success) {
            setSuccess(true)
        } else {
            setError(result.error)
        }
        setLoading(false)
    }

    if (success) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-6">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 shadow-glow">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold gradient-text mb-2">Check Your Email</h1>
                        <p className="text-gray-600">We&apos;ve sent password reset instructions to <strong>{email}</strong></p>
                    </div>

                    <Card className="p-6">
                        <p className="text-sm text-gray-600 mb-4">
                            If you don&apos;t see the email, check your spam folder or try again.
                        </p>
                        <Link href="/auth/login">
                            <Button className="w-full">
                                Back to Login
                            </Button>
                        </Link>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 shadow-glow animate-float">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold gradient-text mb-2">Forgot Password?</h1>
                    <p className="text-gray-600">No worries, we&apos;ll send you reset instructions</p>
                </div>

                <Card className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                                <p className="text-sm text-red-600">{error}</p>
                            </div>
                        )}

                        <Input
                            type="email"
                            name="email"
                            label="Email Address"
                            placeholder="you@example.com"
                            icon={Mail}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setError('')
                            }}
                            required
                        />

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <LoadingSpinner size="sm" />
                                    <span>Sending...</span>
                                </div>
                            ) : (
                                'Send Reset Link'
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link href="/auth/login" className="text-sm text-primary-600 hover:text-primary-700 font-semibold">
                            ← Back to Login
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    )
}
