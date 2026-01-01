'use client'

import { useState } from 'react'
import { ExternalLink, Mail, Users as UsersIcon } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function ClubCard({ club }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <Card className="overflow-hidden">
            <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{club.logo}</div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{club.name}</h3>
                    <p className="text-sm text-primary-600 font-medium mb-2">{club.tagline}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                            {club.category}
                        </span>
                        <span className="flex items-center gap-1">
                            <UsersIcon className="w-4 h-4" />
                            {club.memberCount} members
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-gray-700 mb-4">{club.description}</p>

            {expanded && (
                <div className="mb-4 p-4 bg-gray-50 rounded-xl animate-fade-in">
                    <h4 className="font-semibold text-gray-800 mb-2">How to Join:</h4>
                    <p className="text-gray-700 mb-3">{club.joinProcess}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${club.contact}`} className="hover:text-primary-600">
                            {club.contact}
                        </a>
                    </div>
                </div>
            )}

            <div className="flex gap-3">
                <Button
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(club.website, '_blank')}
                >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Site
                </Button>
                <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'Hide Details' : 'Join Process'}
                </Button>
            </div>
        </Card>
    )
}
