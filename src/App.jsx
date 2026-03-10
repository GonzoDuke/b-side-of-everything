import { useState, useCallback, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import HomePage from './components/HomePage'
import PieceView from './components/PieceView'
import { PIECES } from './data/pieces'

const PIECE_IDS = PIECES.map(p => p.id)

function getViewFromPath() {
  // Handle legacy hash URLs - redirect to clean path
  const hash = window.location.hash.replace('#/', '').replace('#', '')
  if (hash && PIECE_IDS.includes(hash)) {
    history.replaceState(null, '', '/' + hash)
    return hash
  }

  const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '')
  if (!path || path === '') return 'home'
  return PIECE_IDS.includes(path) ? path : 'home'
}

function setPath(view) {
  if (view === 'home') {
    history.pushState(null, '', '/')
  } else {
    history.pushState(null, '', '/' + view)
  }
}

export default function App() {
  const [view, setView] = useState(getViewFromPath)
  const [transitioning, setTransitioning] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 100)
  }, [])

  // Update document title
  useEffect(() => {
    if (view === 'home') {
      document.title = 'The B-Side of Everything'
    } else {
      const piece = PIECES.find(p => p.id === view)
      if (piece) {
        document.title = piece.title + ' — The B-Side of Everything'
      }
    }
  }, [view])

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const newView = getViewFromPath()
      setView(newView)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((target) => {
    setTransitioning(true)
    setTimeout(() => {
      setView(target)
      setPath(target)
      window.scrollTo({ top: 0, behavior: "instant" })
      setTimeout(() => setTransitioning(false), 50)
    }, 400)
  }, [])

  return (
    <div style={{
      background: "#1a1714",
      minHeight: "100vh",
      opacity: transitioning ? 0 : 1,
      transition: "opacity 0.4s ease",
    }}>
      {view === "home" ? (
        <HomePage navigate={navigate} mounted={mounted} />
      ) : (
        <PieceView pieceId={view} navigate={navigate} />
      )}
      <Analytics />
    </div>
  )
}
