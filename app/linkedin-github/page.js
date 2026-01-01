'use client'

import { Linkedin, Github, CheckCircle2, Star, AlertCircle } from 'lucide-react'
import Card from '@/components/ui/Card'

const linkedinTips = [
    {
        title: 'Complete Your Profile',
        description: 'Add a professional photo, compelling headline, and detailed summary',
        priority: 'high',
    },
    {
        title: 'Showcase Your Skills',
        description: 'Add relevant skills and get endorsements from connections',
        priority: 'medium',
    },
    {
        title: 'Build Your Network',
        description: 'Connect with peers, seniors, alumni, and industry professionals',
        priority: 'high',
    },
    {
        title: 'Share Content Regularly',
        description: 'Post about projects, learnings, and industry insights',
        priority: 'medium',
    },
    {
        title: 'Get Recommendations',
        description: 'Request recommendations from mentors and team members',
        priority: 'low',
    },
]

const githubTips = [
    {
        title: 'Pin Your Best Projects',
        description: 'Showcase 4-6 of your best projects on your profile',
        priority: 'high',
    },
    {
        title: 'Write Detailed READMEs',
        description: 'Include project description, tech stack, setup instructions, and screenshots',
        priority: 'high',
    },
    {
        title: 'Maintain Green Grass',
        description: 'Contribute regularly to show consistency and dedication',
        priority: 'medium',
    },
    {
        title: 'Contribute to Open Source',
        description: 'Participate in open source projects to build credibility',
        priority: 'high',
    },
    {
        title: 'Use Topics and Tags',
        description: 'Add relevant topics to your repositories for better discoverability',
        priority: 'low',
    },
]

const priorityColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-yellow-100 text-yellow-700',
    low: 'bg-green-100 text-green-700',
}

export default function LinkedInGitHubPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
            <div className="px-6 pt-8 pb-6">
                <div className="max-w-md mx-auto">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Profile Builder</h1>
                        <p className="text-gray-600">Optimize your LinkedIn & GitHub presence</p>
                    </div>

                    {/* Importance Note */}
                    <Card gradient className="mb-6">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-1">Why This Matters</h3>
                                <p className="text-sm text-gray-700">
                                    Recruiters spend an average of 6 seconds on your profile. A well-optimized LinkedIn and GitHub can be the difference between getting noticed and being overlooked.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* LinkedIn Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <Linkedin className="w-6 h-6 text-white" />
                            </div>
                            LinkedIn Optimization
                        </h2>
                        <div className="space-y-3">
                            {linkedinTips.map((tip, index) => (
                                <Card key={index} hover>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h3 className="font-semibold text-gray-800">{tip.title}</h3>
                                                <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[tip.priority]}`}>
                                                    {tip.priority}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600">{tip.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* GitHub Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <div className="p-2 bg-gray-800 rounded-lg">
                                <Github className="w-6 h-6 text-white" />
                            </div>
                            GitHub Best Practices
                        </h2>
                        <div className="space-y-3">
                            {githubTips.map((tip, index) => (
                                <Card key={index} hover>
                                    <div className="flex items-start gap-3">
                                        <Star className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h3 className="font-semibold text-gray-800">{tip.title}</h3>
                                                <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[tip.priority]}`}>
                                                    {tip.priority}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600">{tip.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Action Items */}
                    <Card className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white border-0">
                        <h3 className="font-bold text-lg mb-3">Start Today!</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                Update your LinkedIn headline with keywords
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                Pin your 3 best projects on GitHub
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                Write a compelling About section
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                Connect with 5 new people this week
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    )
}
