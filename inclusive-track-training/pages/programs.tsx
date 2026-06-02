import React, { useState } from 'react'
import Link from 'next/link'
import { Plus, Search, Trash2, Edit, TrendingUp } from 'lucide-react'

interface Program {
  id: number
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
  workoutsPerWeek: number
  duration: string
  price: string
  members: number
}

export default function ProgramsPage() {
  const [programs] = useState<Program[]>([
    {
      id: 1,
      name: 'Gentle Start',
      level: 'Beginner',
      description: 'Perfect for beginners starting their fitness journey',
      workoutsPerWeek: 3,
      duration: '8 weeks',
      price: 'Free',
      members: 5240
    },
    {
      id: 2,
      name: 'Building Strong',
      level: 'Beginner',
      description: 'Build basic fitness with low-impact exercises',
      workoutsPerWeek: 4,
      duration: '12 weeks',
      price: '$9.99/month',
      members: 3120
    },
    {
      id: 3,
      name: 'Power Up',
      level: 'Intermediate',
      description: 'Increase strength and endurance progressively',
      workoutsPerWeek: 5,
      duration: '12 weeks',
      price: '$19.99/month',
      members: 2840
    },
    {
      id: 4,
      name: 'Elite Performance',
      level: 'Advanced',
      description: 'Achieve peak fitness with intensive training',
      workoutsPerWeek: 6,
      duration: '16 weeks',
      price: '$29.99/month',
      members: 1560
    },
  ])

  const [search, setSearch] = useState('')

  const filteredPrograms = programs.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.level.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            💪 Inclusive Track Training
          </h1>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/programs" className="text-gray-600 hover:text-gray-900">Programs</Link>
            <Link href="/community" className="text-gray-600 hover:text-gray-900">Community</Link>
            <Link href="/progress" className="text-gray-600 hover:text-gray-900">Progress</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Fitness Programs</h2>
          <Link href="/programs/new" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg flex items-center gap-2">
            <Plus size={20} /> New Program
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search programs by name or level..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${
                program.level === 'Beginner' ? 'from-pink-600 to-pink-400' :
                program.level === 'Intermediate' ? 'from-purple-600 to-purple-400' :
                'from-blue-600 to-blue-400'
              }`} />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mt-2 ${
                      program.level === 'Beginner' ? 'bg-pink-100 text-pink-700' :
                      program.level === 'Intermediate' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {program.level}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p>📅 {program.duration}</p>
                  <p>💪 {program.workoutsPerWeek} workouts/week</p>
                  <p>👥 {program.members.toLocaleString()} members</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-lg font-bold text-purple-600">{program.price}</span>
                  <Link href={`/programs/${program.id}`} className="text-pink-600 hover:text-pink-700">
                    <TrendingUp size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-pink-700 mb-2">12,000+</h3>
            <p className="text-pink-600">Members Training</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-700 mb-2">50+</h3>
            <p className="text-purple-600">Different Workouts</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">4.9★</h3>
            <p className="text-blue-600">Average Rating</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Inclusive Track Training. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
