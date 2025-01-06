import { HeroSection } from '@/components/hero-section'
import { Comments } from '@/components/comments'
import { MoreGames } from '@/components/more-games'
import { FAQ } from '@/components/faq'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="bg-black/90">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* 左侧评论区 */}
            <div className="w-full lg:w-[400px] shrink-0">
              <Comments />
            </div>
            {/* 右侧More Games */}
            <div className="flex-1">
              <div className="lg:sticky lg:top-4">
                <MoreGames />
              </div>
            </div>
          </div>
          {/* FAQ Section */}
          <div className="mt-8">
            <FAQ />
          </div>
        </div>
      </div>
    </main>
  )
} 