import React, { useState } from 'react'
import Link from 'next/link'
import { Plus, Calendar } from 'lucide-react'

interface Session {
  id: number
  athleteName: string
  event: string
  date: string
  duration: number
  result: string
  notes: string
}

export default function SessionsPage() {
  const [sessions] = useState<Session[]>([
    {
      id: 1,
      athleteName: 'John Doe',
      event: '100m Sprint',
      date: '2024-06-01',
      duration: 60,
      result: '12.5s',
      notes: 'Good form, strong finish'
    },
    {
      id: 2,
      athleteName: 'Jane Smith',
      event: 'Long Jump',
      date: '2024-05-31',
      duration: 90,
      result: '4.2m',
      notes: 'Improved takeoff'
    },
    {
      id: 3,
      athleteName: 'Mike Johnson',
      event: 'Shot Put',
      date: '2024-05-30',
      duration: 75,
      result: '8.5m',
      notes: 'Working on technique'
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">🏃 TrackTraining</h1>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/athletes" className="text-gray-600 hover:text-gray-900">Athletes</Link>
            <Link href="/analytics" className="text-gray-600 hover:text-gray-900">Analytics</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Training Sessions</h2>
          <Link href="/sessions/new" className="btn-primary flex items-center gap-2">
            <Plus size={20} /> Log Session
          </Link>
        </div>

        {/* Sessions List */}
        <div className="space-y-4">
          {sessions.map(session => (
            <div key={session.id} className="card hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div>
                  <p className="font-bold text-gray-900">{session.athleteName}</p>
                  <p className="text-sm text-gray-600">{session.event}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span>{new Date(session.date).toLocaleDateString()}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{session.duration} min</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Result</p>
                  <p className="font-bold text-primary text-lg">{session.result}</p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/sessions/${session.id}`} className="btn-primary text-sm flex-1">View</Link>
                  <Link href={`/sessions/${session.id}/edit`} className="btn-secondary text-sm flex-1">Edit</Link>
                </div>
              </div>
              {session.notes && (
                <div className="mt-3 pt-3 border-t text-sm text-gray-600">
                  <strong>Notes:</strong> {session.notes}
                </div>
              )}
            </div>
          ))}
        </div>

        {sessions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">No training sessions logged yet</p>
            <Link href="/sessions/new" className="btn-primary inline-block">Log First Session</Link>
          </div>
        )}
      </main>
    </div>
  )
}
