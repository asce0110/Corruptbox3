'use client'

import { useRef, useEffect } from 'react'

export function GameContainer() {
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
    <iframe 
      ref={iframeRef}
      id="iframehtml5"
      className="iframe-default w-full"
      src="https://iframegame.com/embed/corruptbox3-x-sprunki/index.html"
      title="Play Corruptbox 3 Online"
      style={{ 
        border: 'none',
        height: '600px'
      }}
      frameBorder={0}
      scrolling="auto"
      allowFullScreen={true}
    />
  )
} 