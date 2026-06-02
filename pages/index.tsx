import React from 'next'
import Link from 'next/link'
import { Activity, Users, TrendingUp, Calendar, ExternalLink } from 'lucide-react'

export default function Home() {
  const [athletes] = React.useState([
    { id: 1, name: 'John Doe', event: '100m Sprint', personalBest: '12.5s', sessions: 24 },
    { id: 2, name: 'Jane Smith', event: 'Long Jump', personalBest: '4.2m', sessions: 18 },
    { id: 3, name: 'Mike Johnson', event: 'Shot Put', personalBest: '8.5m', sessions: 20 },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">🏃 TrackTraining</h1>
          <div className="space-x-4">
            <Link href="/athletes" className="btn-primary">Athletes</Link>
            <Link href="/sessions" className="btn-secondary">Sessions</Link>
            <Link href="/analytics" className="btn-primary">Analytics</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <a href="https://tylerfryberg906.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
              Visit My Site <ExternalLink size={16} />
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Olympics Track & Field Training</h2>
          <p className="text-xl text-gray-600 mb-8">Track athlete progress, manage training sessions, and achieve goals</p>
          <div className="flex gap-4 justify-center">
            <Link href="/athletes/new" className="btn-primary text-lg px-6 py-3">Add Athlete</Link>
            <Link href="/sessions/new" className="btn-secondary text-lg px-6 py-3">Log Training</Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card">
            <div className="flex items-center gap-3">
              <Users className="text-primary" size={32} />
              <div>
                <p className="text-gray-600">Total Athletes</p>
                <p className="text-3xl font-bold">{athletes.length}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <Activity className="text-success" size={32} />
              <div>
                <p className="text-gray-600">Total Sessions</p>
                <p className="text-3xl font-bold">{athletes.reduce((sum, a) => sum + a.sessions, 0)}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-warning" size={32} />
              <div>
                <p className="text-gray-600">Avg Sessions</p>
                <p className="text-3xl font-bold">{Math.round(athletes.reduce((sum, a) => sum + a.sessions, 0) / athletes.length)}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <Calendar className="text-secondary" size={32} />
              <div>
                <p className="text-gray-600">Active Events</p>
                <p className="text-3xl font-bold">6</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Athletes */}
        <div className="card">
          <h3 className="text-2xl font-bold mb-6">Recent Athletes</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Event</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Personal Best</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Sessions</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {athletes.map((athlete) => (
                  <tr key={athlete.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{athlete.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{athlete.event}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-primary">{athlete.personalBest}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{athlete.sessions}</td>
                    <td className="px-6 py-4 text-sm">
                      <Link href={`/athletes/${athlete.id}`} className="text-primary hover:underline">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 TrackTraining. Special Olympics Track & Field Training Management.</p>
          <div className="mt-4 space-x-6">
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <a href="https://tylerfryberg906.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">My Website</a>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
