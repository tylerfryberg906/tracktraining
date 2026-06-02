import React, { useState } from 'react'
import Link from 'next/link'
import { Users, Heart, TrendingUp, Zap, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            💪 Inclusive Track Training
          </h1>
          <div className="space-x-4">
            <Link href="/programs" className="text-gray-600 hover:text-gray-900">Programs</Link>
            <Link href="/community" className="text-gray-600 hover:text-gray-900">Community</Link>
            <Link href="/progress" className="text-gray-600 hover:text-gray-900">Progress</Link>
            <Link href="/about" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg">Get Started</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Fitness for <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Personalized training, nutrition, and wellness for all body types and fitness levels
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg text-lg">
              Start Your Journey
            </Link>
            <Link href="/explore" className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 text-lg">
              Explore Programs
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <Heart className="text-pink-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Personalized Plans</h3>
            <p className="text-gray-600">Custom fitness programs designed for YOUR body and goals</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <Users className="text-purple-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Supportive Community</h3>
            <p className="text-gray-600">Connect with others on their fitness journey</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <TrendingUp className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Monitor improvements with detailed analytics</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <Zap className="text-orange-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Nutrition Guidance</h3>
            <p className="text-gray-600">Meal plans tailored to your fitness goals</p>
          </div>
        </div>

        {/* Programs Section */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-pink-200 rounded-lg p-6 hover:border-pink-600 hover:shadow-lg transition">
              <h4 className="text-2xl font-bold text-pink-600 mb-3">Beginner</h4>
              <p className="text-gray-600 mb-4">Start your fitness journey with gentle, sustainable workouts</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ 3-4 workouts/week</li>
                <li>✓ Low impact options</li>
                <li>✓ Basic nutrition guide</li>
              </ul>
              <Link href="/programs/beginner" className="text-pink-600 font-semibold flex items-center gap-2 hover:gap-3">
                Learn More <ChevronRight size={20} />
              </Link>
            </div>

            <div className="border-2 border-purple-400 rounded-lg p-6 hover:border-purple-600 hover:shadow-lg transition bg-gradient-to-br from-purple-50 to-pink-50">
              <h4 className="text-2xl font-bold text-purple-600 mb-3">Intermediate</h4>
              <p className="text-gray-600 mb-4">Build strength and endurance with progressive training</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ 4-5 workouts/week</li>
                <li>✓ Varied exercises</li>
                <li>✓ Personalized nutrition</li>
              </ul>
              <Link href="/programs/intermediate" className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3">
                Learn More <ChevronRight size={20} />
              </Link>
            </div>

            <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition">
              <h4 className="text-2xl font-bold text-blue-600 mb-3">Advanced</h4>
              <p className="text-gray-600 mb-4">Achieve peak performance with intensive training</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ 5-6 workouts/week</li>
                <li>✓ Advanced techniques</li>
                <li>✓ Elite nutrition plan</li>
              </ul>
              <Link href="/programs/advanced" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3">
                Learn More <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-pink-600">50K+</p>
            <p className="text-gray-600">Active Members</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600">1000+</p>
            <p className="text-gray-600">Success Stories</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">95%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-600">24/7</p>
            <p className="text-gray-600">Community Support</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Fitness?</h3>
          <p className="text-xl mb-8 opacity-90">Join thousands of people on their inclusive fitness journey</p>
          <Link href="/signup" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg inline-block">
            Start Free Trial
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Inclusive Track Training</h4>
              <p className="text-gray-400">Fitness for everyone, everywhere</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/programs/beginner" className="hover:text-white">Beginner</Link></li>
                <li><Link href="/programs/intermediate" className="hover:text-white">Intermediate</Link></li>
                <li><Link href="/programs/advanced" className="hover:text-white">Advanced</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Stories</a></li>
                <li><a href="#" className="hover:text-white">Forum</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Inclusive Track Training. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
