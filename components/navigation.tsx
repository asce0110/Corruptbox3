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
        className="block lg:hidden text-[#2EE59D] hover:text-[#1cc77f] transition-colors p-2"
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
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg"
          onClick={() => setIsOpen(false)}
        >
          {/* 关闭按钮 */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-[#2EE59D] hover:text-[#1cc77f] transition-colors p-2"
            aria-label="Close Menu"
          >
            <X className="w-7 h-7" />
          </button>

          <div 
            className="flex flex-col items-center justify-center h-full space-y-12"
            onClick={handleContentClick}
          >
            <Link 
              href="/" 
              className={`${isActive('/')} text-3xl font-medium transition-colors hover:text-[#2EE59D] hover:scale-110 transform duration-300`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/sprunked-games" 
              className={`${isActive('/sprunked-games')} text-3xl font-medium transition-colors hover:text-[#2EE59D] hover:scale-110 transform duration-300`}
              onClick={() => setIsOpen(false)}
            >
              Sprunked Games
            </Link>
            <Link 
              href="/about" 
              className={`${isActive('/about')} text-3xl font-medium transition-colors hover:text-[#2EE59D] hover:scale-110 transform duration-300`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </>
  )
}