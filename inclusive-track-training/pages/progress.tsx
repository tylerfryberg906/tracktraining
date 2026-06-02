import React, { useState } from 'react'
import Link from 'next/link'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, Award, Calendar } from 'lucide-react'

const progressData = [
  { week: 'Week 1', weight: 185, calories: 2100, workouts: 3 },
  { week: 'Week 2', weight: 183, calories: 2050, workouts: 4 },
  { week: 'Week 3', weight: 181, calories: 2000, workouts: 4 },
  { week: 'Week 4', weight: 179, calories: 1950, workouts: 5 },
  { week: 'Week 5', weight: 177, calories: 1900, workouts: 5 },
  { week: 'Week 6', weight: 175, calories: 1850, workouts: 5 },
]

const activityData = [
  { name: 'Cardio', value: 35, color: '#ec4899' },
  { name: 'Strength', value: 30, color: '#a855f7' },
  { name: 'Flexibility', value: 20, color: '#3b82f6' },
  { name: 'Sports', value: 15, color: '#f59e0b' },
]

export default function ProgressPage() {
  const [achievements] = useState([
    { id: 1, title: 'First Step', description: 'Completed your first workout', icon: '🎯', unlocked: true },
    { id: 2, title: 'Week Warrior', description: 'Completed 7 workouts in a week', icon: '⚡', unlocked: true },
    { id: 3, title: 'Consistency King', description: 'Worked out 30 days straight', icon: '👑', unlocked: true },
    { id: 4, title: 'Goal Crusher', description: 'Achieved a personal goal', icon: '🏆', unlocked: false },
  ])

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
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="text-pink-600" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Your Progress</h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 text-sm">Total Workouts</p>
            <p className="text-4xl font-bold text-pink-600">24</p>
            <p className="text-xs text-green-600 mt-2">+3 this week</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 text-sm">Current Streak</p>
            <p className="text-4xl font-bold text-purple-600">12 days</p>
            <p className="text-xs text-green-600 mt-2">Keep it up!</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 text-sm">Weight Change</p>
            <p className="text-4xl font-bold text-blue-600">-10 lbs</p>
            <p className="text-xs text-green-600 mt-2">↓ 5.4%</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600 text-sm">Calories Burned</p>
            <p className="text-4xl font-bold text-orange-600">8,400</p>
            <p className="text-xs text-green-600 mt-2">This month</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Weight Progress */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Weight Progress</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="#ec4899" strokeWidth={2} name="Weight (lbs)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Activity Distribution */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Activity Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={activityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Workouts Over Time */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6">Workouts Per Week</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="workouts" fill="#a855f7" name="Workouts" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-orange-600" size={28} />
            <h3 className="text-2xl font-bold">Achievements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`p-6 rounded-lg text-center ${achievement.unlocked ? 'bg-gradient-to-br from-yellow-50 to-orange-50' : 'bg-gray-100'}`}>
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1">{achievement.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                {achievement.unlocked ? (
                  <span className="text-xs font-semibold text-orange-600">✓ Unlocked</span>
                ) : (
                  <span className="text-xs font-semibold text-gray-400">Locked</span>
                )}
              </div>
            ))}
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
