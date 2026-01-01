'use client'

import { Home, Users, Compass, Code, User, LogIn } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/context/AuthContext'

const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Clubs', icon: Users, href: '/clubs' },
    { name: 'Mentors', icon: Compass, href: '/mentors' },
    { name: 'Roadmaps', icon: Code, href: '/roadmaps' },
]

export default function BottomNav() {
    const pathname = usePathname()
    const { isAuthenticated, profile } = useAuth()

    // Hide nav on auth pages
    if (pathname.startsWith('/auth/')) {
        return null
    }

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-lg">
            <div className="max-w-md mx-auto px-2 py-3">
                <ul className="flex justify-around items-center">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        const Icon = item.icon

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex flex-col items-center justify-center min-w-[64px] min-h-[48px] rounded-xl transition-all duration-300 ${isActive
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-gray-600 hover:text-primary-500 hover:bg-gray-50'
                                        }`}
                                >
                                    <Icon
                                        className={`transition-all duration-300 ${isActive ? 'w-6 h-6 mb-1' : 'w-5 h-5 mb-1'
                                            }`}
                                    />
                                    <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}

                    {/* Profile/Login button */}
                    <li>
                        <Link
                            href={isAuthenticated ? '/profile' : '/auth/login'}
                            className={`flex flex-col items-center justify-center min-w-[64px] min-h-[48px] rounded-xl transition-all duration-300 relative ${pathname === '/profile'
                                    ? 'text-primary-600 bg-primary-50'
                                    : 'text-gray-600 hover:text-primary-500 hover:bg-gray-50'
                                }`}
                        >
                            {isAuthenticated ? (
                                <>
                                    <User
                                        className={`transition-all duration-300 ${pathname === '/profile' ? 'w-6 h-6 mb-1' : 'w-5 h-5 mb-1'
                                            }`}
                                    />
                                    {profile?.role === 'admin' && (
                                        <div className="absolute top-1 right-3 w-2 h-2 rounded-full bg-red-500" />
                                    )}
                                    <span className={`text-xs font-medium ${pathname === '/profile' ? 'font-semibold' : ''}`}>
                                        Profile
                                    </span>
                                </>
                            ) : (
                                <>
                                    <LogIn className="w-5 h-5 mb-1" />
                                    <span className="text-xs font-medium">Login</span>
                                </>
                            )}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
