'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    User, Mail, GraduationCap, Award, Users as UsersIcon, Shield,
    Building, Calendar, Briefcase, LogOut, Edit, Settings as SettingsIcon
} from 'lucide-react'
import { useAuth } from '@/lib/context/AuthContext'
import { logoutUser } from '@/lib/services/authService'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

function ProfileContent() {
    const router = useRouter()
    const { user, profile, isAdmin, isStudent, isSenior, isFaculty } = useAuth()
    const [loading, setLoading] = useState(false)

    const handleLogout = async () => {
        setLoading(true)
        await logoutUser()
        router.push('/')
    }

    const getRoleIcon = () => {
        if (isStudent) return GraduationCap
        if (isSenior) return Award
        if (isFaculty) return UsersIcon
        if (isAdmin) return Shield
        return User
    }

    const getRoleColor = () => {
        if (isStudent) return 'from-blue-500 to-cyan-500'
        if (isSenior) return 'from-purple-500 to-pink-500'
        if (isFaculty) return 'from-green-500 to-emerald-500'
        if (isAdmin) return 'from-orange-500 to-red-500'
        return 'from-gray-500 to-gray-600'
    }

    const getRoleLabel = () => {
        if (isStudent) return 'Student'
        if (isSenior) return 'Senior/Alumni'
        if (isFaculty) return 'Faculty'
        if (isAdmin) return 'Admin'
        return 'User'
    }

    const RoleIcon = getRoleIcon()

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pb-8">
            {/* Header */}
            <div className="px-6 pt-12 pb-6">
                <div className="max-w-md mx-auto">
                    <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-br ${getRoleColor()} shadow-glow`}>
                            <RoleIcon className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-1">
                            {profile?.displayName || user?.displayName || 'User'}
                        </h1>
                        <p className="text-primary-600 font-medium">{getRoleLabel()}</p>
                        <p className="text-gray-600 text-sm">{user?.email}</p>
                    </div>
                </div>
            </div>

            {/* Profile Info */}
            <div className="px-6">
                <div className="max-w-md mx-auto space-y-4">
                    {/* Basic Info Card */}
                    <Card>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Account Information</h2>
                            <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-all">
                                <Edit size={18} />
                            </button>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Mail size={20} className="text-gray-400" />
                                <div>
                                    <p className="text-xs text-gray-500">Email</p>
                                    <p className="text-sm font-medium">{user?.email}</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Role-specific Info */}
                    {isStudent && profile?.studentData && (
                        <Card>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Details</h3>
                            <div className="space-y-3">
                                {profile.studentData.year && (
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Calendar size={20} className="text-gray-400" />
                                        <div>
                                            <p className="text-xs text-gray-500">Current Year</p>
                                            <p className="text-sm font-medium">{profile.studentData.year}</p>
                                        </div>
                                    </div>
                                )}
                                {profile.studentData.branch && (
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Building size={20} className="text-gray-400" />
                                        <div>
                                            <p className="text-xs text-gray-500">Branch</p>
                                            <p className="text-sm font-medium">{profile.studentData.branch}</p>
                                        </div>
                                    </div>
                                )}
                                {profile.studentData.enrollmentNo && (
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <GraduationCap size={20} className="text-gray-400" />
                                        <div>
                                            <p className="text-xs text-gray-500">Enrollment No.</p>
                                            <p className="text-sm font-medium">{profile.studentData.enrollmentNo}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card>
                    )}

                    {isSenior && profile?.seniorData && (
                        <Card>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Senior/Alumni Details</h3>
                            <div className="space-y-3">
                                {profile.seniorData.graduationYear && (
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Calendar size={20} className="text-gray-400" />
                                        <div>
                                            <p className="text-xs text-gray-500">Graduation Year</p>
                                            <p className="text-sm font-medium">{profile.seniorData.graduationYear}</p>
                                        </div>
                                    </div>
                                )}
                                {profile.seniorData.currentCompany && (
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Briefcase size={20} className="text-gray-400" />
                                        <div>
                                            <p className="text-xs text-gray-500">Current Company</p>
                                            <p className="text-sm font-medium">{profile.seniorData.currentCompany}</p>
                                        </div>
                                    </div>
                                )}
                                {profile.seniorData.expertise && (
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Award size={20} className="text-gray-400" />
                                        <div>
                                            <p className="text-xs text-gray-500">Expertise</p>
                                            <p className="text-sm font-medium">{profile.seniorData.expertise}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card>
                    )}

                    {isFaculty && profile?.facultyData && (
                        <Card>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Faculty Details</h3>
                            <div className="space-y-3">
                                {profile.facultyData.department && (
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Building size={20} className="text-gray-400" />
                                        <div>
                                            <p className="text-xs text-gray-500">Department</p>
                                            <p className="text-sm font-medium">{profile.facultyData.department}</p>
                                        </div>
                                    </div>
                                )}
                                {profile.facultyData.designation && (
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Briefcase size={20} className="text-gray-400" />
                                        <div>
                                            <p className="text-xs text-gray-500">Designation</p>
                                            <p className="text-sm font-medium">{profile.facultyData.designation}</p>
                                        </div>
                                    </div>
                                )}
                                {profile.facultyData.specialization && (
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Award size={20} className="text-gray-400" />
                                        <div>
                                            <p className="text-xs text-gray-500">Specialization</p>
                                            <p className="text-sm font-medium">{profile.facultyData.specialization}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card>
                    )}

                    {/* Admin Access */}
                    {isAdmin && (
                        <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Admin Access</h3>
                                    <p className="text-xs text-gray-600">Manage users and content</p>
                                </div>
                            </div>
                            <Button
                                variant="secondary"
                                className="w-full"
                                onClick={() => router.push('/admin')}
                            >
                                Go to Admin Dashboard
                            </Button>
                        </Card>
                    )}

                    {/* Settings & Actions */}
                    <Card>
                        <div className="space-y-2">
                            <button className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all">
                                <SettingsIcon size={20} className="text-gray-400" />
                                <span className="font-medium">Account Settings</span>
                            </button>

                            <button
                                onClick={handleLogout}
                                disabled={loading}
                                className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                            >
                                {loading ? (
                                    <>
                                        <LoadingSpinner size="sm" />
                                        <span className="font-medium">Logging out...</span>
                                    </>
                                ) : (
                                    <>
                                        <LogOut size={20} />
                                        <span className="font-medium">Logout</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default function ProfilePage() {
    return (
        <ProtectedRoute>
            <ProfileContent />
        </ProtectedRoute>
    )
}
