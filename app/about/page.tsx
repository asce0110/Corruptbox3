'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Head from 'next/head'
import { Music, Gamepad2, Users, Star } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Corruptbox 3 - Revolutionary Music Creation Gaming Experience</title>
        <meta 
          name="description" 
          content="Learn about Corruptbox 3, the ultimate music creation game. Experience professional-grade music tools, stunning visuals, and join our global community of creators."
        />
        <meta 
          name="keywords" 
          content="Corruptbox 3, music creation game, professional music tools, music gaming, interactive music maker, Corruptbox community"
        />
      </Head>

      <div className="min-h-screen bg-black">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-[#2EE59D] mb-8">
              About Corruptbox 3 - The Future of Music Creation Gaming
            </h1>

            <div className="space-y-8">
              {/* Introduction */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  Welcome to Corruptbox 3
                </h2>
                <p className="text-gray-300">
                  Corruptbox 3 represents the pinnacle of music creation gaming, combining professional-grade music tools with immersive gameplay. Our revolutionary platform empowers you to create, mix, and share your unique musical creations with a global community of artists and music enthusiasts.
                </p>
              </section>

              {/* Features */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Corruptbox 3 Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2EE59D]/10 p-3 rounded-lg">
                      <Music className="w-6 h-6 text-[#2EE59D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Advanced Music Studio</h3>
                      <p className="text-gray-300">
                        Create professional-quality music with Corruptbox 3's advanced studio tools and extensive sound library.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2EE59D]/10 p-3 rounded-lg">
                      <Gamepad2 className="w-6 h-6 text-[#2EE59D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Immersive Experience</h3>
                      <p className="text-gray-300">
                        Experience stunning visual effects and real-time animations as you create in Corruptbox 3.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2EE59D]/10 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-[#2EE59D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Global Community</h3>
                      <p className="text-gray-300">
                        Join the worldwide Corruptbox 3 community to collaborate and share your musical creations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2EE59D]/10 p-3 rounded-lg">
                      <Star className="w-6 h-6 text-[#2EE59D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Continuous Innovation</h3>
                      <p className="text-gray-300">
                        Experience regular updates with new sounds, features, and creative tools in Corruptbox 3.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Our Mission */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  The Corruptbox 3 Vision
                </h2>
                <p className="text-gray-300 mb-4">
                  Corruptbox 3 is revolutionizing the music creation gaming experience. Our vision is to provide the most advanced and intuitive music creation platform, empowering creators worldwide to express their musical creativity through innovative gaming technology.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="text-[#2EE59D] font-semibold mb-2">Innovation</h3>
                    <p className="text-gray-400 text-sm">
                      Leading the future of music gaming
                    </p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="text-[#2EE59D] font-semibold mb-2">Creativity</h3>
                    <p className="text-gray-400 text-sm">
                      Unleashing musical potential
                    </p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="text-[#2EE59D] font-semibold mb-2">Community</h3>
                    <p className="text-gray-400 text-sm">
                      Building the future together
                    </p>
                  </div>
                </div>
              </section>

              {/* Platform Stats */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Corruptbox 3 Statistics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2EE59D] mb-2">300k+</div>
                    <div className="text-gray-300">Active Players</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2EE59D] mb-2">5.0</div>
                    <div className="text-gray-300">User Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2EE59D] mb-2">1000+</div>
                    <div className="text-gray-300">Sound Effects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2EE59D] mb-2">#1</div>
                    <div className="text-gray-300">Music Creation Game</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
} 