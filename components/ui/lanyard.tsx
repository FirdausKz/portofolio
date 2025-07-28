"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, Activity, Headphones } from 'lucide-react'

interface DiscordUser {
  id: string
  username: string
  avatar: string | null
  discriminator: string
  public_flags: number
  flags: number
  banner: string | null
  accent_color: number | null
  global_name: string | null
  avatar_decoration_data: any | null
  banner_color: string | null
}

interface DiscordActivity {
  id: string
  name: string
  type: number
  state?: string
  details?: string
  timestamps?: {
    start?: number
    end?: number
  }
  assets?: {
    large_image?: string
    large_text?: string
    small_image?: string
    small_text?: string
  }
}

interface SpotifyData {
  track_id: string
  timestamps: {
    start: number
    end: number
  }
  song: string
  artist: string
  album_art_url: string
  album: string
}

interface DiscordData {
  success: boolean
  data: {
    discord_user: DiscordUser
    discord_status: 'online' | 'idle' | 'dnd' | 'offline'
    activities: DiscordActivity[]
    listening_to_spotify: boolean
    spotify?: SpotifyData
  }
}

interface LanyardProps {
  userId: string
  className?: string
}

export const Lanyard: React.FC<LanyardProps> = ({ userId, className = "" }) => {
  const [discordData, setDiscordData] = useState<DiscordData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        setError(false)
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`)
        if (response.ok) {
          const data = await response.json()
          setDiscordData(data)
        } else {
          setError(true)
        }
      } catch (error) {
        console.error('Error fetching Discord data:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    // Only fetch if userId is valid
    if (userId && userId !== "your-discord-user-id") {
      fetchDiscordData()
      const interval = setInterval(fetchDiscordData, 30000)
      return () => clearInterval(interval)
    } else {
      setLoading(false)
      setError(true)
    }
  }, [userId])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500'
      case 'idle': return 'bg-yellow-500'
      case 'dnd': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Online'
      case 'idle': return 'Away'
      case 'dnd': return 'Do Not Disturb'
      default: return 'Offline'
    }
  }

  if (loading) {
    return (
      <motion.div 
        className={`bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="animate-pulse">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded w-24"></div>
              <div className="h-3 bg-gray-700 rounded w-32"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-700 rounded w-full"></div>
            <div className="h-3 bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (error || !discordData?.success) {
    return (
      <motion.div 
        className={`bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Discord Profile</h3>
            <p className="text-gray-400 text-sm mb-3">Live status coming soon</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm">Connecting...</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  const { discord_user, discord_status, activities, listening_to_spotify, spotify } = discordData.data
  const currentActivity = activities.find(activity => activity.type === 0) // Playing game
  const customStatus = activities.find(activity => activity.type === 4) // Custom status

  return (
    <motion.div 
      className={`bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ borderColor: "rgba(59, 130, 246, 0.6)" }}
    >
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          {discord_user.avatar ? (
            <img
              src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.${discord_user.avatar.startsWith('a_') ? 'gif' : 'png'}?size=64`}
              alt={discord_user.username}
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
          )}
          <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-gray-800 ${getStatusColor(discord_status)}`}></div>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">
            {discord_user.global_name || discord_user.username}
          </h3>
          <p className="text-blue-400 text-sm font-medium">{getStatusText(discord_status)}</p>
        </div>
      </div>
      
      {/* Custom Status */}
      {customStatus && customStatus.state && (
        <div className="mb-4">
          <p className="text-gray-300 text-sm">
            {customStatus.state}
          </p>
        </div>
      )}

      {/* Spotify */}
      {listening_to_spotify && spotify && (
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Headphones className="w-4 h-4 text-green-400" />
            <h4 className="text-green-400 font-medium text-sm">Listening to Spotify</h4>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-3 flex items-center space-x-3">
            <img
              src={spotify.album_art_url}
              alt={spotify.album}
              className="w-12 h-12 rounded"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm truncate">{spotify.song}</p>
              <p className="text-gray-300 text-xs truncate">by {spotify.artist}</p>
              <p className="text-gray-400 text-xs truncate">{spotify.album}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Current Activity */}
      {currentActivity && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-blue-400" />
            <h4 className="text-blue-400 font-medium text-sm">Playing</h4>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-3">
            <p className="text-white font-medium text-sm">{currentActivity.name}</p>
            {currentActivity.details && (
              <p className="text-gray-300 text-xs mt-1">{currentActivity.details}</p>
            )}
            {currentActivity.state && (
              <p className="text-gray-400 text-xs">{currentActivity.state}</p>
            )}
          </div>
        </div>
      )}

      {/* No Activity */}
      {!currentActivity && !listening_to_spotify && !customStatus?.state && (
        <div className="text-center py-2">
          <p className="text-gray-400 text-sm">No current activity</p>
        </div>
      )}
    </motion.div>
  )
}
