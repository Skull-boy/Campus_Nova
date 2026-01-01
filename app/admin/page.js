'use client'

import { useState, useEffect } from 'react'
import { Shield, Users, GraduationCap, Award, UsersIcon as FacultyIcon, TrendingUp, Mail } from 'lucide-react'
import { useAuth } from '@/lib/context/AuthContext'
import Card from '@/components/ui/Card'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import { getUsersByRole } from '@/lib/services/userService'

function AdminDashboardContent() {
    const { profile } = useAuth()
    const [stats, setStats] = useState({
        students: 0,
        seniors: 0,
        faculty: 0,
        admins: 0,
        total: 0,
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadStats()
    }, [])

    const loadStats = async () => {
        const [studentsRes, seniorsRes, facultyRes, adminsRes] = await Promise.all([
            getUsersByRole('student'),
            getUsersByRole('senior'),
            getUsersByRole('faculty'),
            getUsersByRole('admin'),
        ])

        const studentsCount = studentsRes.success ? studentsRes.data.length : 0
        const seniorsCount = seniorsRes.success ? seniorsRes.data.length : 0
        const facultyCount = facultyRes.success ? facultyRes.data.length : 0
        const adminsCount = adminsRes.success ? adminsRes.data.length : 0

        setStats({
            students: studentsCount,
            seniors: seniorsCount,
            faculty: facultyCount,
            admins: adminsCount,
            total: studentsCount + seniorsCount + facultyCount + adminsCount,
        })
        setLoading(false)
    }

    const statCards = [
        {
            label: 'Total Users',
            value: stats.total,
            icon: Users,
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            label: 'Students',
            value: stats.students,
            icon: GraduationCap,
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            label: 'Seniors/Alumni',
            value: stats.seniors,
            icon: Award,
            gradient: 'from-orange-500 to-red-500',
        },
        {
            label: 'Faculty',
            value: stats.faculty,
            icon: FacultyIcon,
            gradient: 'from-green-500 to-emerald-500',
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pb-8">
            {/* Header */}
            <div className="px-6 pt-12 pb-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                            <Shield className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
                            <p className="text-gray-600">Welcome back, {profile?.displayName}!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="px-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    {loading ? (
                        <div className="text-center py-12">
                            <LoadingSpinner size="lg" />
                            <p className="mt-4 text-gray-600">Loading statistics...</p>
                        </div>
                    ) : (
                        <>
                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                {statCards.map((stat, index) => (
                                    <Card key={index} hover>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md`}>
                                                <stat.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                                                <p className="text-xs text-gray-600">{stat.label}</p>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            {/* Quick Actions */}
                            <Card>
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
                                <div className="space-y-2">
                                    <button className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all text-left">
                                        <Users className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="font-medium">Manage Users</p>
                                            <p className="text-xs text-gray-500">View and edit user accounts</p>
                                        </div>
                                    </button>
                                    <button className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all text-left">
                                        <TrendingUp className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="font-medium">View Analytics</p>
                                            <p className="text-xs text-gray-500">See detailed usage statistics</p>
                                        </div>
                                    </button>
                                    <button className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all text-left">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <p className="font-medium">Send Announcements</p>
                                            <p className="text-xs text-gray-500">Broadcast messages to users</p>
                                        </div>
                                    </button>
                                </div>
                            </Card>

                            {/* Recent Activity */}
                            <Card>
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
                                <p className="text-sm text-gray-600">No recent activity to display.</p>
                            </Card>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function AdminDashboard() {
    return (
        <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboardContent />
        </ProtectedRoute>
    )
}
