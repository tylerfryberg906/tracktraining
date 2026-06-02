import React, { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, Heart, Share2, User, Search } from 'lucide-react'

interface Post {
  id: number
  author: string
  avatar: string
  content: string
  timestamp: string
  likes: number
  comments: number
  liked: boolean
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Sarah M.',
      avatar: '👩‍🦰',
      content: 'Just completed my first 5K! Never thought I could do it. Thank you Inclusive Track Training! 🙌',
      timestamp: '2 hours ago',
      likes: 156,
      comments: 23,
      liked: false
    },
    {
      id: 2,
      author: 'James T.',
      avatar: '👨‍🦱',
      content: 'The beginner program is amazing for someone like me getting back into fitness. Highly recommend!',
      timestamp: '4 hours ago',
      likes: 89,
      comments: 12,
      liked: false
    },
    {
      id: 3,
      author: 'Maria L.',
      avatar: '👩‍🦳',
      content: 'I love this community! Everyone is so supportive and inclusive. Let\'s keep encouraging each other! 💪',
      timestamp: '6 hours ago',
      likes: 234,
      comments: 45,
      liked: false
    },
  ])

  const [search, setSearch] = useState('')
  const [newPost, setNewPost] = useState('')

  const handleLike = (id: number) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post
    ))
  }

  const handlePost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: posts.length + 1,
        author: 'You',
        avatar: '😊',
        content: newPost,
        timestamp: 'now',
        likes: 0,
        comments: 0,
        liked: false
      }
      setPosts([post, ...posts])
      setNewPost('')
    }
  }

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
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Community Hub</h2>

        {/* Post Creator */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex gap-4">
            <div className="text-3xl">😊</div>
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share your fitness journey, achievements, or ask for advice..."
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 resize-none"
                rows={3}
              />
              <div className="flex justify-end mt-3">
                <button
                  onClick={handlePost}
                  disabled={!newPost.trim()}
                  className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg disabled:opacity-50"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{post.avatar}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{post.author}</h3>
                  <p className="text-sm text-gray-500">{post.timestamp}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex gap-6 pt-4 border-t text-gray-600">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-2 hover:text-pink-600 ${post.liked ? 'text-pink-600' : ''}`}
                >
                  <Heart size={20} fill={post.liked ? 'currentColor' : 'none'} />
                  {post.likes}
                </button>
                <button className="flex items-center gap-2 hover:text-purple-600">
                  <MessageCircle size={20} />
                  {post.comments}
                </button>
                <button className="flex items-center gap-2 hover:text-blue-600">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          ))}
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
