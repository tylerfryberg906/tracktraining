import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ArrowLeft, Edit } from 'lucide-react'

const mockPerformanceData = [
  { date: 'Week 1', time: 13.2, distance: 12.3 },
  { date: 'Week 2', time: 13.0, distance: 12.5 },
  { date: 'Week 3', time: 12.8, distance: 12.4 },
  { date: 'Week 4', time: 12.6, distance: 12.7 },
  { date: 'Week 5', time: 12.5, distance: 12.9 },
]

export default function AthleteProfilePage() {
  const router = useRouter()
  const { id } = router.query

  const athlete = {
    id: id || 1,
    name: 'John Doe',
    age: 18,
    event: '100m Sprint',
    division: 'Youth',
    personalBest: '12.5s',
    joinDate: '2024-01-15',
    totalSessions: 24,
    lastSessionDate: '2024-06-01',
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/athletes" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold text-primary">🏃 TrackTraining</h1>
          </div>
          <Link href={`/athletes/${id}/edit`} className="btn-primary flex items-center gap-2">
            <Edit size={20} /> Edit
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="card mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">{athlete.name}</h2>
              <p className="text-lg text-gray-600">{athlete.event} • {athlete.division} Division</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Age</p>
              <p className="text-3xl font-bold text-primary">{athlete.age}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Personal Best</p>
              <p className="text-2xl font-bold text-primary">{athlete.personalBest}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Total Sessions</p>
              <p className="text-2xl font-bold text-secondary">{athlete.totalSessions}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Member Since</p>
              <p className="text-sm font-bold text-success">{new Date(athlete.joinDate).toLocaleDateString()}</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Last Session</p>
              <p className="text-sm font-bold text-warning">{new Date(athlete.lastSessionDate).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-6">Performance Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="time" stroke="#2563eb" name="Time (seconds)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Sessions */}
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Recent Sessions</h3>
            <Link href={`/sessions/new?athleteId=${id}`} className="btn-primary">Log Session</Link>
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="border rounded-lg p-4 hover:bg-gray-50 transition">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">Training Session</p>
                    <p className="text-sm text-gray-600">2024-06-0{i}</p>
                    <p className="text-sm text-gray-600">Duration: 60 minutes</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">12.{5 - i}s</p>
                    <p className="text-sm text-green-600">+0.{i} improvement</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
