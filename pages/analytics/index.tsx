import React from 'react'
import Link from 'next/link'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp } from 'lucide-react'

const performanceData = [
  { athlete: 'John Doe', pb: 12.5, avg: 13.2 },
  { athlete: 'Jane Smith', pb: 4.2, avg: 4.0 },
  { athlete: 'Mike Johnson', pb: 8.5, avg: 8.2 },
  { athlete: 'Sarah Davis', pb: 58.2, avg: 59.5 },
]

const improvementData = [
  { date: 'Week 1', improvement: 2.1 },
  { date: 'Week 2', improvement: 2.5 },
  { date: 'Week 3', improvement: 3.2 },
  { date: 'Week 4', improvement: 4.1 },
  { date: 'Week 5', improvement: 5.3 },
]

const eventDistribution = [
  { name: 'Sprints', value: 40, color: '#2563eb' },
  { name: 'Distance', value: 25, color: '#7c3aed' },
  { name: 'Jumps', value: 20, color: '#10b981' },
  { name: 'Throws', value: 15, color: '#f59e0b' },
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">🏃 TrackTraining</h1>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/athletes" className="text-gray-600 hover:text-gray-900">Athletes</Link>
            <Link href="/sessions" className="text-gray-600 hover:text-gray-900">Sessions</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp size={32} className="text-primary" />
          <h2 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h2>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <p className="text-gray-600 mb-2">Total Athletes</p>
            <p className="text-4xl font-bold text-primary">24</p>
            <p className="text-sm text-green-600 mt-2">↑ 4 this month</p>
          </div>
          <div className="card">
            <p className="text-gray-600 mb-2">Total Sessions</p>
            <p className="text-4xl font-bold text-secondary">187</p>
            <p className="text-sm text-green-600 mt-2">↑ 32 this week</p>
          </div>
          <div className="card">
            <p className="text-gray-600 mb-2">Avg Improvement</p>
            <p className="text-4xl font-bold text-success">5.3%</p>
            <p className="text-sm text-green-600 mt-2">↑ 1.2% vs last month</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Athlete Performance */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Personal Bests vs Averages</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="athlete" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pb" fill="#2563eb" name="Personal Best" />
                <Bar dataKey="avg" fill="#e5e7eb" name="Average" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Event Distribution */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Event Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={eventDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {eventDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Improvement Trend */}
        <div className="card mb-8">
          <h3 className="text-xl font-bold mb-4">Overall Improvement Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={improvementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="improvement"
                stroke="#10b981"
                name="% Improvement"
                strokeWidth={2}
                dot={{ fill: '#10b981', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Athletes */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Top Performing Athletes</h3>
          <div className="space-y-3">
            {[
              { name: 'John Doe', event: '100m Sprint', pb: '12.5s', improvement: '+2.1%' },
              { name: 'Jane Smith', event: 'Long Jump', pb: '4.2m', improvement: '+3.2%' },
              { name: 'Mike Johnson', event: 'Shot Put', pb: '8.5m', improvement: '+4.1%' },
            ].map((athlete, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">{athlete.name}</p>
                  <p className="text-sm text-gray-600">{athlete.event}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{athlete.pb}</p>
                  <p className="text-sm text-green-600">{athlete.improvement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
