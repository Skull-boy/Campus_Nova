'use client'

import { useState } from 'react'
import { TrendingUp, BookOpen } from 'lucide-react'
import Card from '@/components/ui/Card'
import RoadmapCard from '@/components/roadmaps/RoadmapCard'
import { roadmapsByYear, yearTabs } from '@/lib/data/roadmaps'

export default function RoadmapsPage() {
    const [selectedYear, setSelectedYear] = useState('1st Year')

    const currentRoadmaps = roadmapsByYear[selectedYear] || []

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
            <div className="px-6 pt-8 pb-6">
                <div className="max-w-md mx-auto">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Roadmaps</h1>
                        <p className="text-gray-600">Your personalized journey to success</p>
                    </div>

                    {/* Info Card */}
                    <Card gradient className="mb-6">
                        <div className="flex items-start gap-3">
                            <TrendingUp className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Choose Your Path</h3>
                                <p className="text-sm text-gray-600">
                                    Select your academic year to see curated roadmaps for skills, internships, and career planning.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Year Tabs */}
                    <div className="mb-6">
                        <div className="grid grid-cols-2 gap-3">
                            {yearTabs.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`px-4 py-3 rounded-xl font-semibold transition-all ${selectedYear === year
                                            ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                                            : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-primary-300'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Roadmaps */}
                    <div className="space-y-4">
                        {currentRoadmaps.length > 0 ? (
                            currentRoadmaps.map((roadmap) => (
                                <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                            ))
                        ) : (
                            <Card className="text-center py-12">
                                <BookOpen className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                                <p className="text-gray-600">No roadmaps available for this year.</p>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
