'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/header'
import { Comments } from '@/components/comments'

export default function SprunkiPhase8Page() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const adjustIframeSize = () => {
      if (iframeRef.current) {
        const headerHeight = 100
        iframeRef.current.style.height = `${window.innerHeight - headerHeight}px`
      }
    }

    adjustIframeSize()
    window.addEventListener('resize', adjustIframeSize)

    return () => {
      window.removeEventListener('resize', adjustIframeSize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black/90">
      <Header />
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="mb-4 flex items-center gap-6">
            <Link 
              href="/" 
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-[#2EE59D]/10 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#2EE59D]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowLeft className="w-6 h-6 text-[#2EE59D] relative z-10" />
              </div>
            </Link>

            <div>
              <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
                Sprunki Phase 8 - Latest Version of Music Creation Game
              </h1>
              <p className="text-gray-400 text-lg">
                Experience the newest version of Sprunki with Phase 8. Create music, mix beats, and discover new features in this free online music game.
              </p>
            </div>
          </div>

          {/* Game Container */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://turbowarp.org/embed.html?project_url=https://s.incrediboxsprunkimod.com/Sprunki-Phase-8.sb3"
              className="w-full"
              style={{ 
                border: 'none',
                backgroundColor: 'black',
                height: '600px',
                marginTop: '40px'
              }}
              frameBorder="0"
              allowFullScreen={true}
              scrolling="no"
              allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
          </div>

          {/* Comments Section */}
          <div className="mt-8 bg-black/50 rounded-xl">
            <div className="h-[400px] overflow-y-auto custom-scrollbar">
              <div className="p-6">
                <Comments />
              </div>
            </div>
          </div>

          {/* Game Description */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Sprunki Phase 8 - Latest Music Creation Game
              </h2>
              <p className="text-gray-300 mb-4">
                Sprunki Phase 8 represents the latest evolution in music creation gaming. This new version brings enhanced features, new sound libraries, and an improved user interface. Whether you're a fan of previous versions or new to the series, Sprunki Phase 8 offers an unparalleled music creation experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">New Features</span>
                  <span className="text-gray-400 text-center">Latest music creation tools</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Enhanced Sounds</span>
                  <span className="text-gray-400 text-center">Expanded sound library</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Improved UI</span>
                  <span className="text-gray-400 text-center">Better user experience</span>
                </div>
              </div>
            </div>

            {/* Game Features */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Why Play Sprunki Phase 8?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Latest Version</h3>
                  <p className="text-gray-400">Experience the most recent updates and improvements in the Sprunki series.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">New Sound Library</h3>
                  <p className="text-gray-400">Explore fresh sounds and beats exclusive to Phase 8.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Enhanced Interface</h3>
                  <p className="text-gray-400">Enjoy a more intuitive and responsive music creation experience.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Community Features</h3>
                  <p className="text-gray-400">Share your creations and connect with other Sprunki Phase 8 players.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 