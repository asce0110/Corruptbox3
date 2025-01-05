import { Comments } from '@/components/comments'
import { MoreGames } from '@/components/more-games'
import { FAQ } from '@/components/faq'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      {/* Hero Section with Game */}
      <section className="relative pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* SEO Optimized Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2EE59D] mb-6 text-center">
            Corruptbox 3 - Free Online Music Creation Game
          </h1>
          <p className="text-gray-300 text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto">
            Create amazing beats and mix unique sounds in this innovative music creation game. 
            No download required - start making music right in your browser!
          </p>

          {/* Game Container */}
          <div className="relative bg-black/50 rounded-2xl overflow-hidden shadow-xl shadow-[#2EE59D]/10">
            <iframe 
              id="iframehtml5"
              className="w-full aspect-video"
              src="https://iframegame.com/embed/corruptbox3-x-sprunki/index.html"
              title="Corruptbox 3"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen={true}
            />
          </div>
        </div>
      </section>

      {/* Community and More Games Section */}
      <section className="py-12 px-4 bg-black/90">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Comments Section */}
            <div className="w-full lg:w-[400px] shrink-0">
              <Comments />
            </div>
            {/* More Games Section */}
            <div className="flex-1">
              <div className="lg:sticky lg:top-4">
                <MoreGames />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <FAQ />
        </div>
      </section>
    </main>
  )
} 