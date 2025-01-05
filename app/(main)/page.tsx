import { Comments } from '@/components/comments'
import { MoreGames } from '@/components/more-games'
import { FAQ } from '@/components/faq'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      {/* Hero Section with Game */}
      <section className="relative pt-20 pb-12 px-4" id="game">
        <div className="container mx-auto max-w-6xl">
          {/* SEO Optimized Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2EE59D] mb-4">
              Corruptbox 3 - Free Online Music Creation Game
            </h1>
            <h2 className="text-xl md:text-2xl text-[#2EE59D]/80 mb-6">
              Create, Mix, and Share Your Music Online
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Create amazing beats and mix unique sounds in this innovative music creation game. 
              No download required - start making music right in your browser!
            </p>
          </div>

          {/* Game Container */}
          <div className="relative bg-black/50 rounded-2xl overflow-hidden shadow-xl shadow-[#2EE59D]/10">
            <iframe 
              id="iframehtml5"
              className="w-full aspect-video"
              src="https://iframegame.com/embed/corruptbox3-x-sprunki/index.html"
              title="Play Corruptbox 3 Online"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen={true}
            />
          </div>
        </div>
      </section>

      {/* Community and More Games Section */}
      <section className="py-12 px-4 bg-black/90" id="community">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#2EE59D] mb-8 text-center">Community & More Games</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Comments Section */}
            <div className="w-full lg:w-[400px] shrink-0">
              <h3 className="text-2xl font-semibold text-[#2EE59D] mb-6">Join the Discussion</h3>
              <Comments />
            </div>
            {/* More Games Section */}
            <div className="flex-1">
              <div className="lg:sticky lg:top-4">
                <h3 className="text-2xl font-semibold text-[#2EE59D] mb-6">Explore More Games</h3>
                <MoreGames />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4" id="faq">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#2EE59D] mb-8 text-center">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>
    </main>
  )
} 