import React, { useState } from 'react'
import Link from 'next/link'
import { Plus, Search, Trash2, Edit } from 'lucide-react'

interface Athlete {
  id: number
  name: string
  age: number
  event: string
  personalBest: string
  joinDate: string
}

export default function AthletesPage() {
  const [athletes, setAthletes] = useState<Athlete[]>([
    { id: 1, name: 'John Doe', age: 18, event: '100m Sprint', personalBest: '12.5s', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', age: 20, event: 'Long Jump', personalBest: '4.2m', joinDate: '2024-02-10' },
    { id: 3, name: 'Mike Johnson', age: 19, event: 'Shot Put', personalBest: '8.5m', joinDate: '2024-01-20' },
    { id: 4, name: 'Sarah Davis', age: 17, event: '400m Run', personalBest: '58.2s', joinDate: '2024-03-05' },
  ])

  const [search, setSearch] = useState('')

  const filteredAthletes = athletes.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.event.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this athlete?')) {
      setAthletes(athletes.filter(a => a.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">🏃 TrackTraining</h1>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/sessions" className="text-gray-600 hover:text-gray-900">Sessions</Link>
            <Link href="/analytics" className="text-gray-600 hover:text-gray-900">Analytics</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Athletes</h2>
          <Link href="/athletes/new" className="btn-primary flex items-center gap-2">
            <Plus size={20} /> Add Athlete
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search athletes by name or event..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>

        {/* Athletes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAthletes.map((athlete) => (
            <div key={athlete.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{athlete.name}</h3>
                  <p className="text-sm text-gray-600">Age: {athlete.age}</p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/athletes/${athlete.id}/edit`} className="text-primary hover:text-blue-700">
                    <Edit size={20} />
                  </Link>
                  <button onClick={() => handleDelete(athlete.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-600"><strong>Event:</strong> {athlete.event}</p>
                <p className="text-gray-600"><strong>Personal Best:</strong> <span className="text-primary font-bold">{athlete.personalBest}</span></p>
                <p className="text-sm text-gray-500">Joined: {new Date(athlete.joinDate).toLocaleDateString()}</p>
              </div>

              <div className="flex gap-2">
                <Link href={`/athletes/${athlete.id}`} className="flex-1 btn-primary text-center text-sm">View Profile</Link>
                <Link href={`/sessions/new?athleteId=${athlete.id}`} className="flex-1 btn-secondary text-center text-sm">Log Session</Link>
              </div>
            </div>
          ))}
        </div>

        {filteredAthletes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No athletes found</p>
            <Link href="/athletes/new" className="btn-primary inline-block mt-4">Add Your First Athlete</Link>
          </div>
        )}
      </main>
    </div>
  )
}
