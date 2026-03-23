export default function TacticalDuck() {
  return (
    <div style={{
      background: "#2a2520",
      display: "flex",
      justifyContent: "center",
      padding: "40px 16px 80px",
      minHeight: "100vh",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Special+Elite&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: "min(90vw, 1200px)", width: "100%" }}>
        {/* The photocopied zine page */}
        <div style={{
          background: "#ede8da",
          position: "relative",
          boxShadow: "4px 4px 24px rgba(0,0,0,0.3), -1px -1px 3px rgba(0,0,0,0.1)",
          transform: "rotate(-0.4deg)",
          overflow: "hidden",
        }}>
          {/* Photocopy edge darkening */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "20px", background: "linear-gradient(to bottom, rgba(0,0,0,0.06), transparent)", pointerEvents: "none", zIndex: 2 }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30px", background: "linear-gradient(to top, rgba(0,0,0,0.08), transparent)", pointerEvents: "none", zIndex: 2 }} />
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "15px", background: "linear-gradient(to right, rgba(0,0,0,0.05), transparent)", pointerEvents: "none", zIndex: 2 }} />
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "10px", background: "linear-gradient(to left, rgba(0,0,0,0.04), transparent)", pointerEvents: "none", zIndex: 2 }} />

          {/* Toner blotch */}
          <div style={{ position: "absolute", top: "40%", right: "8%", width: "100px", height: "80px", background: "radial-gradient(ellipse, rgba(0,0,0,0.03), transparent)", pointerEvents: "none" }} />

          {/* Coffee ring */}
          <div style={{
            position: "absolute", top: "15px", right: "30px",
            width: "70px", height: "65px", borderRadius: "50%",
            border: "2px solid rgba(120,80,40,0.1)",
            background: "rgba(140,100,50,0.03)",
            transform: "rotate(15deg)",
            pointerEvents: "none",
          }} />

          {/* Fold crease */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, left: "50%",
            width: "1px", background: "rgba(0,0,0,0.04)",
            pointerEvents: "none",
          }} />

          {/* Scotch tape top left - holding the header down */}
          <div style={{
            position: "absolute", top: "8px", left: "20px",
            width: "80px", height: "22px",
            background: "rgba(220,215,190,0.45)",
            border: "1px solid rgba(200,195,170,0.3)",
            transform: "rotate(-3deg)",
            zIndex: 3,
            pointerEvents: "none",
          }} />

          {/* Scotch tape bottom right */}
          <div style={{
            position: "absolute", bottom: "40px", right: "25px",
            width: "60px", height: "20px",
            background: "rgba(220,215,190,0.4)",
            border: "1px solid rgba(200,195,170,0.25)",
            transform: "rotate(5deg)",
            zIndex: 3,
            pointerEvents: "none",
          }} />

          {/* Hand-drawn circle-A in corner */}
          <svg style={{ position: "absolute", bottom: "20px", left: "20px", width: "28px", height: "28px", opacity: 0.15, pointerEvents: "none" }} viewBox="0 0 30 30">
            <circle cx="15" cy="15" r="12" fill="none" stroke="#333" strokeWidth="1.5" />
            <path d="M15 5 L8 24 M15 5 L22 24 M10 18 L20 18" stroke="#333" strokeWidth="1.2" fill="none" />
          </svg>

          <div className="doc-padding" style={{ padding: "44px 48px 36px" }}>
            {/* Zine header - cut and paste aesthetic */}
            <div style={{
              borderBottom: "4px solid #1a1a1a",
              paddingBottom: "10px",
              marginBottom: "6px",
              position: "relative",
            }}>
              {/* SORTIE in big ugly type */}
              <div style={{
                fontFamily: '"Special Elite", "Courier New", monospace',
                fontSize: "clamp(40px, 6vw, 56px)",
                fontWeight: 400,
                color: "#1a1a1a",
                letterSpacing: "0.08em",
                lineHeight: 1,
                textTransform: "uppercase",
              }}>
                SORTIE
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "4px", flexWrap: "wrap", gap: "8px" }}>
                <span style={{
                  fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
                  fontSize: "11px", fontWeight: 700, color: "#1a1a1a",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  N{"\u00b0"}14 {"\u00b7"} {"\u00c9"}t{"\u00e9"} 1998 {"\u00b7"} Lyon {"\u00b7"} Gratuit
                </span>
                <span style={{
                  fontFamily: '"Special Elite", "Courier New", monospace',
                  fontSize: "10px", color: "#666",
                  letterSpacing: "0.02em",
                }}>
                  punk / hardcore / noise / whatever
                </span>
              </div>
            </div>

            {/* Thin rule - hand-drawn feel */}
            <div style={{ borderBottom: "1.5px solid #1a1a1a", marginBottom: "24px", width: "100%" }} />

            {/* Record title block - slightly rotated like it was pasted in */}
            <div style={{
              marginBottom: "24px",
              padding: "12px 16px",
              background: "rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.08)",
              transform: "rotate(0.3deg)",
            }}>
              <div style={{
                fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
                fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2,
                textTransform: "uppercase", letterSpacing: "0.02em",
              }}>
                Tactical Duck
              </div>
              <div style={{
                fontFamily: '"Special Elite", "Courier New", monospace',
                fontSize: "14px", color: "#444",
                marginTop: "4px",
              }}>
                All Brakes Removed {"\u2014"} 7" (self-released, 1997)
              </div>
            </div>

            {/* Stars - hand drawn style */}
            <div style={{
              fontFamily: '"Special Elite", monospace',
              fontSize: "22px",
              color: "#333",
              marginBottom: "20px",
              letterSpacing: "4px",
            }}>
              {"\u2605\u2605\u2605"}<span style={{ opacity: 0.25 }}>{"\u2605\u2605"}</span>
            </div>

            {/* Review body */}
            <div className="zine-two-col" style={{
              fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
              fontSize: "13px", lineHeight: 1.8, color: "#2a2a2a",
              columnCount: 2, columnGap: "32px",
              columnRule: "1px solid rgba(0,0,0,0.06)",
              textAlign: "justify", hyphens: "auto",
            }}>
              <p style={{ margin: "0 0 14px 0", textIndent: "0" }}>
                Three songs. Maybe eight minutes total if you count the silence at the end of side B, which I think is an accident and not a statement, but with American skate punk you are never completely sure. I received this from a trade with a guy in Reno who included it with two Swingin' Utters singles and a note that said "you probably won't like this but I'm sending it anyway." He was half correct. I have played it six times and I still don't know which half.
              </p>
              <p style={{ margin: "0 0 14px 0", textIndent: "1.5em" }}>
                The first track, "Parking Lot Doctrine," is very fast and very competent and I mean both of those as less than full compliments. The playing is tight in the way that suggests they rehearsed often and in a small room. The guitars sound like they were recorded in a bathroom, which is either a limitation or a decision. The vocals sit behind the instruments, almost underneath, like the singer is aware he has nothing urgent to say but feels obligated to say it at speed. It reminds me of many things I have heard before, which is not the same as saying it is bad.
              </p>
              <p style={{ margin: "0 0 14px 0", textIndent: "1.5em" }}>
                The second track is better. "Sheetcake Vigilante" slows down for the first twenty seconds and there is a bass part that separates itself from the rest of the band long enough to suggest that someone in this group is listening to music their friends do not know about. When the speed returns the bass stays slightly outside the pocket, not sloppy, just resistant, and this small friction makes the song more interesting than its structure deserves. I think the bassist is the one to watch. I think the bassist may already know this.
              </p>
              <p style={{ margin: "0 0 14px 0", textIndent: "1.5em" }}>
                The third track I will not say much about because it is thirty-seven seconds long and by the time I have an opinion it is finished. It is called "I Owe Kyle Forty Dollars" and it made me laugh, though I could not hear enough of the words to tell you why. Something in the delivery. The singer sounds like he is finally not performing, just talking fast into a microphone about something that actually bothers him. It is the most honest moment on the record. It is also the shortest, which may be its own kind of honesty.
              </p>
              <p style={{ margin: "0 0 14px 0", textIndent: "1.5em" }}>
                I will not remember this band in a year. I think they know that. There is nothing on this record that asks to be remembered. It asks to be played loud while you are doing something else, and in this it succeeds. The bassist, though. If she turns up somewhere else, I will pay attention.
              </p>
              <p style={{ margin: "0 0 0 0", textIndent: "1.5em" }}>
                The pressing is white vinyl, limited to what I assume is a very small number. The sleeve is a photocopy of a duck wearing a helmet. There is no address. There is no contact information. If you want to find this band, you will have to know someone who knows someone, and even then I am not sure they will still exist by the time you do.
              </p>
            </div>

            {/* Footer - messier */}
            <div style={{
              marginTop: "24px", paddingTop: "14px",
              borderTop: "2px solid rgba(0,0,0,0.2)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px" }}>
                <div style={{
                  fontFamily: '"Special Elite", "Courier New", monospace',
                  fontSize: "12px", color: "#333",
                }}>
                  Trade or $2 ppd if you can find them, which you probably cannot.
                </div>
                <div style={{
                  fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
                  fontSize: "12px", fontWeight: 600, fontStyle: "italic", color: "#444",
                }}>
                  {"\u2014"} {"\u00c9"}mile
                </div>
              </div>

              {/* Bottom details - distribute freely */}
              <div style={{
                marginTop: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "8px",
              }}>
                <span style={{
                  fontFamily: '"Special Elite", monospace',
                  fontSize: "9px", color: "#999",
                  letterSpacing: "0.05em",
                }}>
                  photocopie et distribue librement {"\u00b7"} sortie-zine@free.fr
                </span>
                <span style={{
                  fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
                  fontSize: "10px", color: "#bbb",
                }}>
                  23
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scan edge shadow */}
        <div style={{
          height: "4px",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.08), transparent)",
          transform: "rotate(-0.4deg)",
          marginTop: "-2px",
        }} />
      </div>
    </div>
  )
}
