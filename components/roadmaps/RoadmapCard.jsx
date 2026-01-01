'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Calendar, ExternalLink } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function RoadmapCard({ roadmap }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <Card className="overflow-hidden">
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{roadmap.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{roadmap.description}</p>
                    <div className="flex items-center gap-3 text-sm">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">
                            {roadmap.domain}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            {roadmap.timeline}
                        </span>
                    </div>
                </div>
            </div>

            {expanded && (
                <div className="mt-4 animate-fade-in">
                    <h4 className="font-semibold text-gray-800 mb-3">Milestones:</h4>
                    <div className="space-y-3">
                        {roadmap.milestones.map((milestone, index) => (
                            <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold text-sm flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800 mb-1">{milestone.month}</p>
                                        <p className="text-sm text-gray-700 mb-2">{milestone.task}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {milestone.resources.map((resource, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs px-2 py-1 bg-white text-primary-600 rounded-full border border-primary-200"
                                                >
                                                    {resource}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <Button
                variant="secondary"
                size="sm"
                className="w-full mt-4"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? (
                    <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Hide Details
                    </>
                ) : (
                    <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        View Milestones
                    </>
                )}
            </Button>
        </Card>
    )
}
