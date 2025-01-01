'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/header'
import { Comments } from '@/components/comments'

export default function Corruptbox3Page() {
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
          {/* SEO优化的标题区域 */}
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
                Corruptbox 3 - The Ultimate Music Creation Game
              </h1>
              <p className="text-gray-400 text-lg">
                Play Corruptbox 3 Online - Experience the best music creation game. Create amazing beats with Corruptbox 3's advanced features.
              </p>
            </div>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10">
            <iframe 
              ref={iframeRef}
              id="iframehtml5"
              title="Corruptbox 3"
              className="iframe-default w-full"
              src="https://pokerogue.io/corruptbox-3.embed"
              style={{ 
                border: 'none',
                height: '600px'
              }}
              frameBorder={0}
              scrolling="auto"
              allowFullScreen={true}
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
          </div>

          {/* 评论区 */}
          <div className="mt-8 bg-black/50 rounded-xl">
            <div className="h-[400px] overflow-y-auto custom-scrollbar">
              <div className="p-6">
                <Comments />
              </div>
            </div>
          </div>

          {/* 游戏介绍 */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Corruptbox 3 - Music Creation Game
              </h2>
              <p className="text-gray-300 mb-4">
                Corruptbox 3 brings a revolutionary approach to music creation gaming. This special version of Corruptbox 3 combines advanced music creation tools with an intuitive interface, making it easy for anyone to create amazing music. Whether you're a beginner or an experienced musician, Corruptbox 3 provides all the tools you need.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Advanced Features</span>
                  <span className="text-gray-400 text-center">Corruptbox 3's powerful music tools</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Music Creation</span>
                  <span className="text-gray-400 text-center">Create unique beats in Corruptbox 3</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Special Features</span>
                  <span className="text-gray-400 text-center">Exclusive Corruptbox 3 content</span>
                </div>
              </div>
            </div>

            {/* 游戏特点 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Why Play Corruptbox 3?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Innovative Gameplay</h3>
                  <p className="text-gray-400">Experience Corruptbox 3's unique blend of music creation tools and intuitive controls that creates an entirely new gaming experience.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Advanced Sound Library</h3>
                  <p className="text-gray-400">Access Corruptbox 3's extensive collection of sounds and effects to create your unique musical compositions.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Immersive Experience</h3>
                  <p className="text-gray-400">Get lost in the world of music creation with Corruptbox 3's engaging interface and real-time feedback.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Regular Updates</h3>
                  <p className="text-gray-400">Enjoy new content and features as they are added to enhance your Corruptbox 3 experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 