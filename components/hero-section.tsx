'use client'

import { GradientButton } from './ui/gradient-button'
import { useRouter } from 'next/navigation'

export function HeroSection() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 md:py-0">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      {/* 动态背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-[#2EE59D]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-[#2EE59D]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 md:w-96 h-72 md:h-96 bg-[#2EE59D]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* 标题 */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2EE59D] to-[#2EE59D]/70 text-center">
            Corruptbox 3
          </h1>
          
          {/* 副标题 */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto text-center">
            The Ultimate Music Creation Gaming Experience
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto text-center">
            Join millions of players worldwide in Corruptbox 3, where music creation meets gaming innovation. Create, mix, and share your unique beats in this groundbreaking music game.
          </p>
          
          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16">
            <GradientButton
              onClick={() => router.push('/corruptbox3')}
              className="w-full sm:w-auto min-w-[200px] py-3 sm:py-4 text-base sm:text-lg"
            >
              Play Corruptbox 3 Now
            </GradientButton>
            <button
              onClick={() => router.push('/sprunked-games')}
              className="w-full sm:w-auto min-w-[200px] py-3 sm:py-4 text-base sm:text-lg bg-black/50 text-[#2EE59D] border border-[#2EE59D]/30 rounded-full hover:bg-[#2EE59D]/10 transition-all duration-300"
            >
              Explore More Games
            </button>
          </div>

          {/* 特点列表 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-[#2EE59D]/10">
              <div className="w-12 h-12 bg-[#2EE59D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#2EE59D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-[#2EE59D] font-bold mb-2 text-center">Advanced Corruptbox 3 Studio</h3>
              <p className="text-sm text-gray-400 text-center">Experience professional-grade music creation with Corruptbox 3's intuitive tools and extensive sound library</p>
            </div>
            <div className="p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-[#2EE59D]/10">
              <div className="w-12 h-12 bg-[#2EE59D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#2EE59D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[#2EE59D] font-bold mb-2 text-center">Immersive Visuals</h3>
              <p className="text-sm text-gray-400 text-center">Watch your Corruptbox 3 creations come alive with stunning visual effects and real-time animations</p>
            </div>
            <div className="p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-[#2EE59D]/10">
              <div className="w-12 h-12 bg-[#2EE59D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#2EE59D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[#2EE59D] font-bold mb-2 text-center">Global Community</h3>
              <p className="text-sm text-gray-400 text-center">Join the worldwide Corruptbox 3 community to share your music and collaborate with creators globally</p>
            </div>
          </div>
        </div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  )
}