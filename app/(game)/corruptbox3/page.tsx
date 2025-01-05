import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/header'
import { Comments } from '@/components/comments'
import { Metadata } from 'next'
import { GameContainer } from './game-container'

export const metadata: Metadata = {
  title: 'Corruptbox 3 - Revolutionary Music Creation Game | Create & Mix Music Online',
  description: 'Create amazing beats and mix unique sounds in Corruptbox 3. Experience the ultimate music creation game with advanced features and intuitive controls. Play free in your browser!',
  openGraph: {
    title: 'Corruptbox 3 - Revolutionary Music Creation Game',
    description: 'Create amazing beats and mix unique sounds in Corruptbox 3. Experience the ultimate music creation game with advanced features and intuitive controls.',
    url: 'https://corruptbox3.com/corruptbox3',
    type: 'website'
  },
  alternates: {
    canonical: 'https://corruptbox3.com/corruptbox3'
  }
}

export default function Corruptbox3Page() {
  return (
    <div className="min-h-screen bg-black/90">
      <Header />
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <nav className="mb-8 flex items-center gap-4" id="nav">
            <Link 
              href="/" 
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-[#2EE59D]/10 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#2EE59D]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowLeft className="w-6 h-6 text-[#2EE59D] relative z-10" />
              </div>
            </Link>
            <h1 className="text-4xl font-bold text-[#2EE59D]">
              Corruptbox 3
            </h1>
          </nav>

          {/* Game Description */}
          <div className="mb-8" id="description">
            <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
              Revolutionary Music Creation Gaming Experience
            </h2>
            <p className="text-gray-400 text-lg">
              Play Corruptbox 3, the ultimate music creation game. Create amazing beats, mix unique sounds, and enjoy an immersive musical gaming experience. Join the Corruptbox 3 community today!
            </p>
          </div>

          {/* Game Container */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" id="game">
            <GameContainer />
          </div>

          {/* Comments Section */}
          <div className="mt-8 bg-black/50 rounded-xl" id="comments">
            <div className="h-[400px] overflow-y-auto custom-scrollbar">
              <div className="p-6">
                <Comments />
              </div>
            </div>
          </div>

          {/* Game Features */}
          <div className="mt-8 space-y-6" id="features">
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Corruptbox 3
              </h2>
              <p className="text-gray-300 mb-4">
                Corruptbox 3 brings a revolutionary approach to music creation gaming. This special version combines advanced music creation tools with an intuitive interface, making it easy for anyone to create amazing music.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Advanced Features</span>
                  <span className="text-gray-400 text-center">Powerful music tools</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Music Creation</span>
                  <span className="text-gray-400 text-center">Create unique beats</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Special Features</span>
                  <span className="text-gray-400 text-center">Exclusive content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 