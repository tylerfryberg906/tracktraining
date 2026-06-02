import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const EVENTS = [
  '100m Sprint',
  '200m Sprint',
  '400m Run',
  '800m Run',
  '1500m Run',
  'Long Jump',
  'High Jump',
  'Shot Put',
  'Javelin Throw',
  '4x100m Relay',
]

export default function NewAthletePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    event: '100m Sprint',
    division: 'Youth',
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
      alert(`Athlete "${formData.name}" added successfully!`)
      router.push('/athletes')
    } catch (error) {
      alert('Error adding athlete')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/athletes" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-primary">🏃 TrackTraining</h1>
        </nav>
      </header>

      {/* Form */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="card">
          <h2 className="text-3xl font-bold mb-6">Add New Athlete</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Athlete's full name"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Age *</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="13"
                  max="100"
                  className="input-field"
                  placeholder="Age"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Division</label>
                <select
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option>Youth</option>
                  <option>Young Adult</option>
                  <option>Adult</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Primary Event *</label>
              <select
                name="event"
                value={formData.event}
                onChange={handleChange}
                required
                className="input-field"
              >
                {EVENTS.map(event => (
                  <option key={event} value={event}>{event}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="input-field"
                placeholder="Add any notes or medical information..."
                rows={4}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 btn-primary text-lg"
              >
                {loading ? 'Adding...' : 'Add Athlete'}
              </button>
              <Link href="/athletes" className="flex-1 btn-secondary text-center text-lg">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
