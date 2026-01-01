'use client'

import { Linkedin, Mail, CheckCircle2 } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function MentorCard({ mentor }) {
    return (
        <Card>
            <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{mentor.photo}</div>
                <div className="flex-1">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">{mentor.name}</h3>
                            <p className="text-sm text-gray-600 mb-1">{mentor.currentPosition}</p>
                            <p className="text-xs text-secondary-600 font-medium">
                                {mentor.role} • {mentor.year}
                            </p>
                        </div>
                        {mentor.available && (
                            <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Available</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <p className="text-gray-700 mb-4">{mentor.bio}</p>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {mentor.expertise.map((exp, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium"
                    >
                        {exp}
                    </span>
                ))}
            </div>

            {/* Contact Buttons */}
            <div className="flex gap-3">
                <Button
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(mentor.linkedin, '_blank')}
                >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                </Button>
                <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.location.href = `mailto:${mentor.email}`}
                >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                </Button>
            </div>
        </Card>
    )
}
