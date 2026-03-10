import { useState, useEffect } from 'react'
import { PIECES } from '../data/pieces'

// Piece component registry
import AMA from '../pieces/AMA'
import TacticalDuck from '../pieces/TacticalDuck'
import Rue from '../pieces/Rue'
import DaleSievert from '../pieces/DaleSievert'
import Candlemakers from '../pieces/Candlemakers'
import BookingSheet from '../pieces/BookingSheet'
import Firkin from '../pieces/Firkin'
import Superegos from '../pieces/Superegos'
import PanhandlingForGod from '../pieces/PanhandlingForGod'
import Parallax from '../pieces/Parallax'
import RoyalYou from '../pieces/RoyalYou'
import Beato from '../pieces/Beato'
import WBTK from '../pieces/WBTK'
import BlindFoldTest from '../pieces/BlindFoldTest'

const PIECE_COMPONENTS = {
  "ama": AMA,
  "tactical-duck": TacticalDuck,
  "rue": Rue,
  "dale-sievert": DaleSievert,
  "candlemakers": Candlemakers,
  "booking-sheet": BookingSheet,
  "firkin": Firkin,
  "superegos": Superegos,
  "pfg": PanhandlingForGod,
  "parallax": Parallax,
  "royal-you": RoyalYou,
  "beato": Beato,
  "wbtk": WBTK,
  "blindfold": BlindFoldTest,
}

// Shell colors (dark, matching homepage)
const S = {
  bg: "#1a1714",
  bgLight: "#211e1a",
  text: "#f0ece4",
  textDim: "rgba(240,236,228,0.65)",
  textGhost: "rgba(240,236,228,0.4)",
  rule: "rgba(240,236,228,0.12)",
  buttonBorder: "rgba(240,236,228,0.2)",
  buttonText: "rgba(240,236,228,0.55)",
  buttonHoverBorder: "rgba(240,236,228,0.35)",
  buttonHoverText: "rgba(240,236,228,0.8)",
}

export default function PieceView({ pieceId, navigate }) {
  const piece = PIECES.find(p => p.id === pieceId)
  const [noteVisible, setNoteVisible] = useState(false)
  const [pieceVisible, setPieceVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setNoteVisible(true), 50)
    setTimeout(() => setPieceVisible(true), 300)
  }, [])

  if (!piece) return null

  const PieceComponent = PIECE_COMPONENTS[pieceId] || null

  return (
    <div style={{ background: S.bg }}>
      {/* Top nav */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(26,23,20,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${S.rule}`,
        padding: "0 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "52px",
        opacity: noteVisible ? 1 : 0,
        transition: "opacity 0.5s ease 0.2s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={() => navigate("home")}
            style={{
              background: "none",
              border: `1px solid ${S.buttonBorder}`,
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "var(--mono)",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.06em",
              color: S.buttonText,
              padding: "6px 14px",
              transition: "all 0.15s ease",
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = S.buttonHoverBorder; e.currentTarget.style.color = S.buttonHoverText; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = S.buttonBorder; e.currentTarget.style.color = S.buttonText; }}
          >
            {"\u2190"} Back to Collection
          </button>
          <ShareButton url={window.location.origin + "/" + pieceId} title={piece.title + " \u2014 The B-Side of Everything"} />
        </div>
        <span style={{
          fontFamily: "var(--serif)",
          fontSize: "14px",
          fontWeight: 400,
          fontStyle: "italic",
          color: S.textGhost,
        }}>
          The B-Side of Everything
        </span>
      </nav>

      {/* Editorial Note - dark warm shell */}
      <div style={{
        background: S.bg,
        borderBottom: `1px solid ${S.rule}`,
      }}>
        <div style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "72px 32px 32px",
          opacity: noteVisible ? 1 : 0,
          transform: noteVisible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div style={{
            display: "flex",
            gap: "40px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}>
            {/* Left: title block */}
            <div style={{ flex: "1 1 280px", minWidth: "240px" }}>
              <div style={{
                fontFamily: "var(--serif)",
                fontSize: "26px",
                fontWeight: 400,
                lineHeight: 1.2,
                color: S.text,
                letterSpacing: "-0.01em",
                marginBottom: "4px",
              }}>
                {piece.title}
              </div>
              {piece.subtitle && (
                <div style={{
                  fontFamily: "var(--serif)",
                  fontSize: "17px",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: S.textDim,
                  lineHeight: 1.3,
                  marginBottom: "8px",
                }}>
                  {piece.subtitle}
                </div>
              )}
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                fontWeight: 300,
                color: S.textGhost,
                letterSpacing: "0.01em",
              }}>
                {piece.form}{piece.year ? ` \u00b7 ${piece.year}` : ""}
              </div>
            </div>

            {/* Right: editorial note */}
            {piece.note && (
              <div style={{
                flex: "1 1 340px",
                borderLeft: `1px solid ${S.rule}`,
                paddingLeft: "24px",
              }}>
                <p style={{
                  fontFamily: "var(--body)",
                  fontSize: "14.5px",
                  lineHeight: 1.7,
                  color: S.textDim,
                  fontStyle: "italic",
                  fontWeight: 400,
                  margin: 0,
                }}>
                  {piece.note}
                </p>
              </div>
            )}
          </div>

          {/* Thin rule before piece */}
          <div style={{
            height: "1px",
            background: S.rule,
            marginTop: "28px",
          }} />
        </div>
      </div>

      {/* Piece content */}
      <div style={{
        opacity: pieceVisible ? 1 : 0,
        transform: pieceVisible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
      }}>
        {PieceComponent ? (
          <PieceComponent />
        ) : (
          <PlannedStub piece={piece} />
        )}
      </div>

      {/* Return footer */}
      <div style={{
        background: S.bg,
        padding: "64px 28px 120px",
        textAlign: "center",
      }}>
        <button
          onClick={() => navigate("home")}
          style={{
            background: "none",
            border: `1px solid ${S.buttonBorder}`,
            borderRadius: "4px",
            cursor: "pointer",
            fontFamily: "var(--mono)",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.06em",
            color: S.buttonText,
            padding: "8px 20px",
            transition: "all 0.15s ease",
          }}
          onMouseOver={e => { e.currentTarget.style.borderColor = S.buttonHoverBorder; e.currentTarget.style.color = S.buttonHoverText; }}
          onMouseOut={e => { e.currentTarget.style.borderColor = S.buttonBorder; e.currentTarget.style.color = S.buttonText; }}
        >
          {"\u2190"} Back to Collection
        </button>
      </div>
    </div>
  )
}

function PlannedStub({ piece }) {
  return (
    <div style={{
      background: S.bgLight,
      minHeight: "40vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 28px",
    }}>
      <div style={{ textAlign: "center", maxWidth: "400px" }}>
        <div style={{
          fontFamily: "var(--mono)",
          fontSize: "10px",
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: S.textGhost,
          marginBottom: "16px",
        }}>
          {piece.form}
        </div>
        <div style={{
          fontFamily: "var(--body)",
          fontSize: "15px",
          lineHeight: 1.6,
          color: S.textGhost,
          fontStyle: "italic",
        }}>
          This piece is in development.
        </div>
      </div>
    </div>
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
        border: `1px solid ${S.buttonBorder}`,
        borderRadius: "4px",
        cursor: "pointer",
        fontFamily: "var(--mono)",
        fontSize: "10px",
        fontWeight: 400,
        letterSpacing: "0.06em",
        color: copied ? S.buttonHoverText : S.buttonText,
        padding: "5px 10px",
        transition: "all 0.15s ease",
        whiteSpace: "nowrap",
      }}
      onMouseOver={e => { if (!copied) { e.currentTarget.style.borderColor = S.buttonHoverBorder; e.currentTarget.style.color = S.buttonHoverText; }}}
      onMouseOut={e => { if (!copied) { e.currentTarget.style.borderColor = S.buttonBorder; e.currentTarget.style.color = S.buttonText; }}}
    >
      {copied ? "Copied" : "Share"}
    </button>
  )
}
