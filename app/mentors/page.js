'use client'

import { useState } from 'react'
import { Search, Mail, Linkedin } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import MentorCard from '@/components/mentors/MentorCard'
import { mentors, expertiseAreas, roleFilters } from '@/lib/data/mentors'

export default function MentorsPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedExpertise, setSelectedExpertise] = useState('All')
    const [selectedRole, setSelectedRole] = useState('All')

    const filteredMentors = mentors.filter((mentor) => {
        const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mentor.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()))
        const matchesExpertise = selectedExpertise === 'All' || mentor.expertise.includes(selectedExpertise)
        const matchesRole = selectedRole === 'All' || mentor.role === selectedRole
        return matchesSearch && matchesExpertise && matchesRole
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="px-6 pt-8 pb-6">
                <div className="max-w-md mx-auto">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Mentor Connect</h1>
                        <p className="text-gray-600">Get guidance from experienced seniors and alumni</p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-4">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search mentors..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary-500 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Role Filters */}
                    <div className="mb-3">
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {roleFilters.map((role) => (
                                <button
                                    key={role}
                                    onClick={() => setSelectedRole(role)}
                                    className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${selectedRole === role
                                            ? 'bg-secondary-600 text-white shadow-md'
                                            : 'bg-white text-gray-600 border border-gray-200 hover:border-secondary-300'
                                        }`}
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Expertise Filters */}
                    <div className="mb-6">
                        <select
                            value={selectedExpertise}
                            onChange={(e) => setSelectedExpertise(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary-500 focus:outline-none transition-colors bg-white"
                        >
                            {expertiseAreas.map((area) => (
                                <option key={area} value={area}>
                                    {area === 'All' ? 'All Expertise Areas' : area}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Mentors List */}
                    <div className="space-y-4">
                        {filteredMentors.length > 0 ? (
                            filteredMentors.map((mentor) => (
                                <MentorCard key={mentor.id} mentor={mentor} />
                            ))
                        ) : (
                            <Card className="text-center py-12">
                                <p className="text-gray-600">No mentors found. Try adjusting your filters.</p>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
