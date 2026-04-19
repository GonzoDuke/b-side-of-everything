import React, { useState, useMemo } from 'react'
import { PIECES } from '../data/pieces.js'

// Chronological sort keys - uses earliest relevant date
// Where multiple pieces share a year, ordered by month from within the text
const SORT_KEYS = {
  "candlemakers": 1972,
  "wbtk": 1995.03,
  "dale-sievert": 1997.10,
  "chavaddo": 1987.01,
  "tactical-duck": 1998.06,
  "royal-you": 2004.10,
  "rue": 2013.05,
  "parallax": 2016.12,
  "pfg": 2024.01,
  "beato": 2025.05,
  "ama": 2025.06,
  "booking-sheet": 2025.12,
  "superegos": 2026.01,
  "blindfold": 2026.02,
  "firkin": 2026.03,
}

export default function HomeContent() {
  const [sortBy, setSortBy] = useState("collection")
  const [mounted, setMounted] = useState(false)
  const [origin, setOrigin] = useState('')
  React.useEffect(() => { setTimeout(() => setMounted(true), 100) }, [])
  React.useEffect(() => { setOrigin(window.location.origin) }, [])

  const sortedPieces = useMemo(() => {
    if (sortBy === "collection") return PIECES
    return [...PIECES].sort((a, b) => {
      const aKey = SORT_KEYS[a.id] || 0
      const bKey = SORT_KEYS[b.id] || 0
      return sortBy === "oldest" ? aKey - bKey : bKey - aKey
    })
  }, [sortBy])

  return (
    <div style={{
      minHeight: "100vh",
      background: "#1a1714 url('/bg.jpg') center top / cover no-repeat fixed",
      position: "relative",
    }}>
      {/* Overlay */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,12,10,0.35)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <header style={{
          padding: "min(14vh, 140px) 48px 64px",
          maxWidth: "min(92vw, 1600px)",
          margin: "0 auto",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "60px",
            flexWrap: "wrap",
          }}>
            <div style={{ flex: "1 1 400px" }}>
              <h1 style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "#f0ece4",
                letterSpacing: "-0.025em",
                margin: 0,
                textShadow: "0 2px 12px rgba(0,0,0,0.4)",
              }}>
                The B-Side<br />Of<br />Everything
              </h1>
            </div>
            <div style={{
              flex: "1 1 300px",
              maxWidth: "440px",
              display: "flex",
              alignItems: "center",
            }}>
              <p style={{
                fontFamily: "var(--body)",
                fontSize: "clamp(17px, 2.2vw, 21px)",
                lineHeight: 1.65,
                color: "rgba(240,236,228,0.8)",
                fontStyle: "italic",
                fontWeight: 300,
                margin: 0,
              }}>
                Writing about music that didn't survive its own context. Bands without
                archives. Scenes without historians. Work that exists, when it exists at
                all, in setlists, photocopied flyers, basement recordings, and the
                memories of the people who were in the room.
              </p>
            </div>
          </div>
        </header>

        {/* Tagline bar */}
        <div style={{
          maxWidth: "min(92vw, 1600px)",
          margin: "0 auto",
          padding: "0 48px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: "12px",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.6s ease 0.25s",
        }}>
          <p style={{
            fontFamily: "var(--body)",
            fontSize: "21px",
            lineHeight: 1.7,
            color: "rgba(240,236,228,0.65)",
            fontStyle: "italic",
            fontWeight: 300,
            margin: 0,
          }}>
            Start anywhere. There's no correct order. The archive is open.
          </p>
          <span style={{
            fontFamily: "var(--mono)",
            fontSize: "15px",
            letterSpacing: "0.1em",
            color: "rgba(240,236,228,0.5)",
          }}>
            Collected by Skinsbury
          </span>
        </div>

        {/* Divider */}
        <div style={{
          maxWidth: "min(92vw, 1600px)",
          margin: "0 auto",
          padding: "0 48px",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.5s ease 0.2s",
        }}>
          <div style={{ height: "1px", background: "rgba(240,236,228,0.25)" }} />
        </div>

        {/* Grid section */}
        <section style={{
          maxWidth: "min(92vw, 1600px)",
          margin: "0 auto",
          padding: "0 48px",
        }}>
          {/* Section header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "28px 0 32px",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.5s ease 0.3s",
            flexWrap: "wrap",
            gap: "12px",
          }}>
            {/* Left: contents + sort */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              <span style={{
                fontFamily: "var(--mono)",
                fontSize: "15px",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(240,236,228,0.6)",
              }}>
                Contents {"\u00b7"} {PIECES.filter(p => p.status === "live").length} pieces
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {[
                  { key: "collection", label: "Collection" },
                  { key: "oldest", label: "Oldest" },
                  { key: "newest", label: "Newest" },
                ].map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => setSortBy(opt.key)}
                    style={{
                      background: sortBy === opt.key ? "rgba(240,236,228,0.12)" : "none",
                      border: "1px solid " + (sortBy === opt.key ? "rgba(240,236,228,0.25)" : "rgba(240,236,228,0.1)"),
                      borderRadius: "3px",
                      cursor: "pointer",
                      fontFamily: "var(--mono)",
                      fontSize: "14px",
                      fontWeight: 400,
                      letterSpacing: "0.04em",
                      color: sortBy === opt.key ? "rgba(240,236,228,0.7)" : "rgba(240,236,228,0.4)",
                      padding: "5px 12px",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: about + random + share + rss */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <SmallButton
                label="About"
                onClick={() => { window.location.href = "/about" }}
              />
              <SmallButton
                label="Start anywhere"
                onClick={() => {
                  const live = PIECES.filter(p => p.status === "live")
                  const pick = live[Math.floor(Math.random() * live.length)]
                  window.location.href = "/" + pick.id
                }}
              />
              <ShareButton url={origin} title="The B-Side of Everything" />
              <SmallButton
                label="RSS"
                onClick={() => { window.open("/rss.xml", "_blank", "noopener,noreferrer") }}
              />
            </div>
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "20px",
          }}>
            {sortedPieces.map((piece, i) => (
              <PieceCard
                key={piece.id}
                piece={piece}
                index={i}
                mounted={mounted}
                
              />
            ))}

            {/* Fill cell */}
            <div
              onClick={() => { window.location.href = "/submissions" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(240,236,228,0.1)"; e.currentTarget.style.borderColor = "rgba(240,236,228,0.25)" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(240,236,228,0.06)"; e.currentTarget.style.borderColor = "rgba(240,236,228,0.15)" }}
              style={{
                padding: "24px 24px 20px",
                background: "rgba(240,236,228,0.06)",
                borderRadius: "3px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "165px",
                border: "1px dashed rgba(240,236,228,0.15)",
                cursor: "pointer",
                transition: "background 0.15s ease, border-color 0.15s ease",
              }}>
              <div style={{
                fontFamily: "var(--body)",
                fontSize: "16px",
                fontStyle: "italic",
                color: "rgba(240,236,228,0.5)",
                textAlign: "center",
                lineHeight: 1.6,
                marginBottom: "8px",
              }}>
                The archive remains open.
              </div>
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                color: "rgba(240,236,228,0.35)",
                letterSpacing: "0.06em",
              }}>
                Submission guidelines
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: "140px" }} />
      </div>
    </div>
  )
}

function PieceCard({ piece, index, mounted }) {
  const [hovered, setHovered] = useState(false)
  const isClickable = piece.status === "live"
  const delay = 0.25 + index * 0.03

  const accents = {
    "Webzine Review": "#7a9a6b",
    "Substack Essay": "#e07040",
    "YouTube Comment Section": "#cc3333",
    "Digital Magazine Feature": "#d44040",
    "Vinyl Reissue Liner Notes": "#c4a855",
    "Translated Blog Post": "#5a8aaa",
    "Dissertation Chapter": "#8a8a9a",
    "Radio Transcript": "#b08a5a",
    "Show Preview": "#6a9a9a",
    "Reddit AMA": "#e05020",
    "Student Journal Feature": "#9a9a6a",
    "Punk Zine Review": "#aaa",
    "Industry Newsletter Column": "#7a9a7a",
    "VHS Tape Transcript": "#9a7aaa",
    "Record Guide Entry": "#a08a5a",
  }

  const accent = accents[piece.form] || "#8a8a8a"

  return (
    <div
      onClick={() => isClickable && (window.location.href = '/' + piece.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "24px 26px 22px",
        background: hovered && isClickable
          ? "rgba(30,25,20,0.85)"
          : "rgba(20,17,14,0.75)",
        borderLeft: `3px solid ${isClickable ? accent : "transparent"}`,
        borderRadius: "2px",
        boxShadow: hovered && isClickable
          ? "0 4px 16px rgba(0,0,0,0.3)"
          : "0 1px 4px rgba(0,0,0,0.15)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        cursor: isClickable ? "pointer" : "default",
        opacity: mounted ? (isClickable ? 1 : 0.35) : 0,
        transform: mounted
          ? (hovered && isClickable ? "translateY(-2px)" : "translateY(0)")
          : "translateY(6px)",
        transition: `opacity 0.5s ease ${delay}s, transform 0.3s ease, background 0.15s ease, box-shadow 0.2s ease`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "165px",
        position: "relative",
      }}
    >
      <div>
        <div style={{
          fontFamily: "var(--serif)",
          fontSize: "22px",
          fontWeight: 500,
          lineHeight: 1.3,
          color: hovered && isClickable ? "#f0ece4" : "rgba(240,236,228,0.92)",
          transition: "color 0.15s ease",
          marginBottom: "6px",
        }}>
          {piece.title}
        </div>
        {piece.subtitle && (
          <div style={{
            fontFamily: "var(--serif)",
            fontSize: "16px",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(240,236,228,0.65)",
            lineHeight: 1.35,
          }}>
            {piece.subtitle}
          </div>
        )}
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginTop: "14px",
        paddingTop: "10px",
        borderTop: "1px solid rgba(240,236,228,0.15)",
      }}>
        <span style={{
          fontFamily: "var(--mono)",
          fontSize: "12px",
          fontWeight: 300,
          color: "rgba(240,236,228,0.5)",
        }}>
          {piece.form}
        </span>
        {piece.year && (
          <span style={{
            fontFamily: "var(--mono)",
            fontSize: "12px",
            fontWeight: 300,
            color: "rgba(240,236,228,0.4)",
          }}>
            {piece.year}
          </span>
        )}
      </div>
    </div>
  )
}

function SmallButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "1px solid rgba(240,236,228,0.25)",
        borderRadius: "4px",
        cursor: "pointer",
        fontFamily: "var(--mono)",
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: "0.06em",
        color: "rgba(240,236,228,0.5)",
        padding: "6px 14px",
        transition: "all 0.15s ease",
        whiteSpace: "nowrap",
      }}
      onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.4)"; e.currentTarget.style.color = "rgba(240,236,228,0.7)"; }}
      onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(240,236,228,0.25)"; e.currentTarget.style.color = "rgba(240,236,228,0.5)"; }}
    >
      {label}
    </button>
  )
}

function ShareButton({ url, title }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch (e) {}
    } else {
      try {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (e) {
        const input = document.createElement('input')
        input.value = url
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    }
  }

  return (
    <button
      onClick={handleShare}
      style={{
        background: "none",
        border: "1px solid rgba(240,236,228,0.25)",
        borderRadius: "4px",
        cursor: "pointer",
        fontFamily: "var(--mono)",
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: "0.06em",
        color: copied ? "rgba(240,236,228,0.8)" : "rgba(240,236,228,0.5)",
        padding: "6px 14px",
        transition: "all 0.15s ease",
        whiteSpace: "nowrap",
      }}
      onMouseOver={e => { if (!copied) { e.currentTarget.style.borderColor = "rgba(240,236,228,0.4)"; e.currentTarget.style.color = "rgba(240,236,228,0.7)"; }}}
      onMouseOut={e => { if (!copied) { e.currentTarget.style.borderColor = "rgba(240,236,228,0.25)"; e.currentTarget.style.color = "rgba(240,236,228,0.5)"; }}}
    >
      {copied ? "Copied" : "Share"}
    </button>
  )
}
