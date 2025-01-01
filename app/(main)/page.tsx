import { HeroSection } from '@/components/hero-section'
import { FeaturedContent } from '@/components/featured-content/featured-content'
import { Comments } from '@/components/comments'
import { MoreGames } from '@/components/more-games'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="bg-black/90">
        <FeaturedContent />
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
        </div>
      </div>
    </main>
  )
} 