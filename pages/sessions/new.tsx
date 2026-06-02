import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft } from 'lucide-react'

export default function NewSessionPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    athleteId: router.query.athleteId || '',
    date: new Date().toISOString().split('T')[0],
    startTime: '09:00',
    duration: '60',
    eventType: 'Sprint',
    result: '',
    distance: '',
    time: '',
    attempts: '3',
    notes: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      alert('Training session logged successfully!')
      router.push('/sessions')
    } catch (error) {
      alert('Error logging session')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/sessions" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-primary">🏃 TrackTraining</h1>
        </nav>
      </header>

      {/* Form */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="card">
          <h2 className="text-3xl font-bold mb-6">Log Training Session</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Athlete *</label>
              <select
                name="athleteId"
                value={formData.athleteId}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="">Select an athlete</option>
                <option value="1">John Doe</option>
                <option value="2">Jane Smith</option>
                <option value="3">Mike Johnson</option>
                <option value="4">Sarah Davis</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Duration (minutes)</label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  min="5"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option>Sprint (100m, 200m, 400m)</option>
                  <option>Distance (800m, 1500m)</option>
                  <option>Long Jump</option>
                  <option>High Jump</option>
                  <option>Shot Put</option>
                  <option>Javelin</option>
                  <option>Relay</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Time/Result</label>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  placeholder="e.g., 12.5s or 4.2m"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Number of Attempts</label>
                <input
                  type="number"
                  name="attempts"
                  value={formData.attempts}
                  onChange={handleChange}
                  min="1"
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Session Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add notes about the session, form, improvements, etc..."
                className="input-field"
                rows={4}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 btn-primary text-lg"
              >
                {loading ? 'Logging...' : 'Log Session'}
              </button>
              <Link href="/sessions" className="flex-1 btn-secondary text-center text-lg">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
