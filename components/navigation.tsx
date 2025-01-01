'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // 当路由改变时关闭菜单
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // 当菜单打开时禁止滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const isActive = (path: string) => {
    return pathname === path ? 'text-[#2EE59D]' : 'text-gray-400 hover:text-[#2EE59D]'
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // 阻止点击菜单内容时关闭
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <>
      {/* 移动端菜单按钮 */}
      <button 
        onClick={toggleMenu}
        className="block lg:hidden text-[#2EE59D] hover:text-[#1cc77f] transition-all duration-300 p-2 rounded-lg hover:bg-[#2EE59D]/10"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Menu className="w-7 h-7" />
        )}
      </button>

      {/* 桌面端导航 */}
      <nav className="hidden lg:flex gap-6">
        <Link 
          href="/" 
          className={`${isActive('/')} transition-colors relative group`}
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#2EE59D] transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link 
          href="/sprunked-games" 
          className={`${isActive('/sprunked-games')} transition-colors relative group`}
          title="Play Sprunked Music Games - Free Online Music Creation Games"
          aria-label="Browse Sprunked Music Games Collection"
        >
          Sprunked Games
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#2EE59D] transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link 
          href="/about" 
          className={`${isActive('/about')} transition-colors relative group`}
          title="Learn About Corruptbox 3"
          aria-label="About Corruptbox 3"
        >
          About Us
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#2EE59D] transition-all duration-300 group-hover:w-full" />
        </Link>
      </nav>

      {/* 移动端导航菜单 */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* 背景遮罩 */}
        <div 
          className={`absolute inset-0 bg-black/90 backdrop-blur-lg transition-all duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* 菜单内容 */}
        <div 
          className={`relative h-full max-w-sm w-full bg-black/95 ml-auto transform transition-all duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* 关闭按钮 */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-[#2EE59D] hover:text-[#1cc77f] transition-all duration-300 p-2 rounded-lg hover:bg-[#2EE59D]/10"
            aria-label="Close Menu"
          >
            <X className="w-7 h-7" />
          </button>

          <div 
            className="flex flex-col items-center justify-center h-full"
            onClick={handleContentClick}
          >
            <div className="space-y-8 py-8">
              <Link 
                href="/" 
                className={`block px-8 py-4 text-2xl font-medium transition-all duration-300 rounded-lg ${
                  pathname === '/' 
                    ? 'text-[#2EE59D] bg-[#2EE59D]/10' 
                    : 'text-gray-400 hover:text-[#2EE59D] hover:bg-[#2EE59D]/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/sprunked-games" 
                className={`block px-8 py-4 text-2xl font-medium transition-all duration-300 rounded-lg ${
                  pathname === '/sprunked-games'
                    ? 'text-[#2EE59D] bg-[#2EE59D]/10'
                    : 'text-gray-400 hover:text-[#2EE59D] hover:bg-[#2EE59D]/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Sprunked Games
              </Link>
              <Link 
                href="/about" 
                className={`block px-8 py-4 text-2xl font-medium transition-all duration-300 rounded-lg ${
                  pathname === '/about'
                    ? 'text-[#2EE59D] bg-[#2EE59D]/10'
                    : 'text-gray-400 hover:text-[#2EE59D] hover:bg-[#2EE59D]/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}