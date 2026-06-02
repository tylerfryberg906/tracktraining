import React from 'react'
import Link from 'next/link'
import { ExternalLink, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function AboutPage() {
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
            <Link href="/analytics" className="text-gray-600 hover:text-gray-900">Analytics</Link>
            <Link href="/about" className="btn-primary">About</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="card mb-12 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About TrackTraining</h1>
            <p className="text-xl text-gray-600">Empowering Special Olympics Athletes Through Data-Driven Training</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              TrackTraining is dedicated to helping coaches and athletes in the Special Olympics community track, analyze, and improve their track and field performance. We believe that every athlete deserves access to professional-grade training management tools.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where Special Olympics athletes have the best tools to track their progress, achieve their goals, and celebrate their victories. Through technology and passion, we're making that vision a reality.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="card mb-12">
          <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Athlete Management</h3>
              <p className="text-gray-600">Easily manage athlete profiles, track personal bests, and monitor progress over time.</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-3">Session Logging</h3>
              <p className="text-gray-600">Record detailed training sessions with metrics, notes, and performance data.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-success mb-3">Analytics & Insights</h3>
              <p className="text-gray-600">Visualize performance trends and identify areas for improvement with interactive charts.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="card mb-12">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <Mail className="text-primary" size={32} />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:tylerfryberg906@gmail.com" className="text-primary hover:underline">
                  tylerfryberg906@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-primary" size={32} />
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-primary" size={32} />
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-600">USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="card text-center">
          <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
          <div className="flex justify-center gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700">
              <Facebook size={40} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-400">
              <Twitter size={40} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-pink-600">
              <Instagram size={40} />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">TrackTraining</h3>
              <p className="text-gray-400">Empowering Special Olympics athletes with professional training management tools.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/athletes" className="hover:text-white">Athletes</Link></li>
                <li><Link href="/analytics" className="hover:text-white">Analytics</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TrackTraining. All rights reserved. Special Olympics Track & Field Training Management.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
