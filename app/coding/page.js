'use client'

import { Code2, BookOpen, Trophy, Lightbulb, ExternalLink } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const learningPaths = [
    {
        title: 'Data Structures & Algorithms',
        icon: '🧮',
        description: 'Master DSA for placements and competitive programming',
        resources: [
            { name: 'LeetCode', url: 'https://leetcode.com', type: 'Practice' },
            { name: 'Striver A2Z DSA Sheet', url: 'https://takeuforward.org/strivers-a2z-dsa-course/', type: 'Roadmap' },
            { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/', type: 'Learn' },
        ],
    },
    {
        title: 'Web Development',
        icon: '🌐',
        description: 'Frontend, backend, and full stack development',
        resources: [
            { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', type: 'Learn' },
            { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', type: 'Course' },
            { name: 'Frontend Mentor', url: 'https://www.frontendmentor.io/', type: 'Practice' },
        ],
    },
    {
        title: 'Mobile App Development',
        icon: '📱',
        description: 'Build native and cross-platform mobile apps',
        resources: [
            { name: 'Flutter Docs', url: 'https://flutter.dev/docs', type: 'Learn' },
            { name: 'React Native', url: 'https://reactnative.dev/', type: 'Framework' },
            { name: 'Android Developers', url: 'https://developer.android.com/', type: 'Official' },
        ],
    },
    {
        title: 'Machine Learning & AI',
        icon: '🤖',
        description: 'Deep learning, neural networks, and AI applications',
        resources: [
            { name: 'Kaggle', url: 'https://www.kaggle.com/', type: 'Practice' },
            { name: 'Fast.ai', url: 'https://www.fast.ai/', type: 'Course' },
            { name: 'TensorFlow', url: 'https://www.tensorflow.org/', type: 'Framework' },
        ],
    },
]

const practicePlatforms = [
    { name: 'LeetCode', url: 'https://leetcode.com', color: 'from-yellow-500 to-orange-500' },
    { name: 'Codeforces', url: 'https://codeforces.com', color: 'from-blue-500 to-cyan-500' },
    { name: 'CodeChef', url: 'https://www.codechef.com', color: 'from-amber-500 to-orange-600' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com', color: 'from-green-500 to-emerald-500' },
]

export default function CodingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
            <div className="px-6 pt-8 pb-6">
                <div className="max-w-md mx-auto">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Coding Resources</h1>
                        <p className="text-gray-600">Curated resources for your coding journey</p>
                    </div>

                    {/* Learning Paths */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-primary-600" />
                            Learning Paths
                        </h2>
                        <div className="space-y-4">
                            {learningPaths.map((path, index) => (
                                <Card key={index}>
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="text-3xl">{path.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-800 mb-1">{path.title}</h3>
                                            <p className="text-sm text-gray-600">{path.description}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        {path.resources.map((resource, idx) => (
                                            <a
                                                key={idx}
                                                href={resource.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors group"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <ExternalLink className="w-4 h-4 text-primary-600" />
                                                    <span className="font-medium text-gray-800">{resource.name}</span>
                                                </div>
                                                <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                                                    {resource.type}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Practice Platforms */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Trophy className="w-6 h-6 text-accent-500" />
                            Practice Platforms
                        </h2>
                        <div className="grid grid-cols-2 gap-3">
                            {practicePlatforms.map((platform, index) => (
                                <a
                                    key={index}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-xl bg-gradient-to-br ${platform.color} text-white font-semibold text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1`}
                                >
                                    {platform.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Tips */}
                    <Card gradient>
                        <div className="flex items-start gap-3">
                            <Lightbulb className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Pro Tips</h3>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Practice consistently - aim for at least 2-3 problems daily</li>
                                    <li>• Focus on understanding patterns, not memorizing solutions</li>
                                    <li>• Participate in weekly contests to simulate pressure</li>
                                    <li>• Build projects to apply what you learn</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
