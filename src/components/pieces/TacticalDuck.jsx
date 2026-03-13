export default function TacticalDuck() {
  return (
    <div style={{
      background: "#e8e0d0",
      display: "flex",
      justifyContent: "center",
      padding: "40px 16px 80px",
    }}>
      <div style={{ maxWidth: "640px", width: "100%" }}>
        {/* The "scanned" zine page */}
        <div style={{
          background: "#f5f0e6",
          padding: "0",
          boxShadow: "4px 4px 20px rgba(0,0,0,0.15), -1px -1px 3px rgba(0,0,0,0.05)",
          transform: "rotate(-0.3deg)",
          position: "relative",
        }}>
          {/* Coffee stain */}
          <div style={{
            position: "absolute", top: "20px", right: "35px",
            width: "65px", height: "60px", borderRadius: "50%",
            border: "2px solid rgba(120,80,40,0.12)",
            background: "rgba(140,100,50,0.04)",
            transform: "rotate(15deg)",
          }} />
          {/* Fold crease */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, left: "50%",
            width: "1px", background: "rgba(0,0,0,0.04)",
          }} />

          <div className="doc-padding" style={{ padding: "40px 48px" }}>
            {/* Zine header */}
            <div style={{ borderBottom: "3px solid #1a1a1a", paddingBottom: "12px", marginBottom: "8px" }}>
              <div style={{
                fontFamily: '"IBM Plex Sans", Helvetica, Arial, sans-serif',
                fontSize: "36px", fontWeight: 900, color: "#1a1a1a",
                letterSpacing: "-0.02em", lineHeight: 1, textTransform: "uppercase",
              }}>
                SORTIE
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "4px" }}>
                <span style={{
                  fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
                  fontSize: "11px", fontWeight: 500, color: "#1a1a1a",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  #14 {"\u00b7"} {"\u00c9"}t{"\u00e9"} 1998 {"\u00b7"} Lyon
                </span>
                <span style={{
                  fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
                  fontSize: "10px", fontWeight: 400, color: "#555",
                  letterSpacing: "0.05em",
                }}>
                  punk / hardcore / noise / whatever
                </span>
              </div>
            </div>

            <div style={{ borderBottom: "1px solid #1a1a1a", marginBottom: "20px" }} />

            {/* Record title */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{
                fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
                fontSize: "18px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2,
              }}>
                Tactical Duck
              </div>
              <div style={{
                fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
                fontSize: "13px", fontWeight: 400, color: "#333",
                fontStyle: "italic", marginTop: "2px",
              }}>
                All Brakes Removed {"\u2014"} 7" (self-released, 1997)
              </div>
            </div>

            {/* Review body */}
            <div className="zine-two-col" style={{
              fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
              fontSize: "12.5px", lineHeight: 1.75, color: "#2a2a2a",
              columnCount: 2, columnGap: "28px",
              columnRule: "1px solid rgba(0,0,0,0.08)",
              textAlign: "justify", hyphens: "auto",
            }}>
              <p style={{ margin: "0 0 12px 0", textIndent: "0" }}>
                Three songs. Maybe eight minutes total if you count the silence at the end of side B, which I think is an accident and not a statement, but with American skate punk you are never completely sure. I received this from a trade with a guy in Reno who included it with two Swingin' Utters singles and a note that said "you probably won't like this but I'm sending it anyway." He was half correct. I have played it six times and I still don't know which half.
              </p>
              <p style={{ margin: "0 0 12px 0", textIndent: "1.5em" }}>
                The first track, "Parking Lot Doctrine," is very fast and very competent and I mean both of those as less than full compliments. The playing is tight in the way that suggests they rehearsed often and in a small room. The guitars sound like they were recorded in a bathroom, which is either a limitation or a decision. The vocals sit behind the instruments, almost underneath, like the singer is aware he has nothing urgent to say but feels obligated to say it at speed. It reminds me of many things I have heard before, which is not the same as saying it is bad.
              </p>
              <p style={{ margin: "0 0 12px 0", textIndent: "1.5em" }}>
                The second track is better. "Sheetcake Vigilante" slows down for the first twenty seconds and there is a bass part that separates itself from the rest of the band long enough to suggest that someone in this group is listening to music their friends do not know about. When the speed returns the bass stays slightly outside the pocket, not sloppy, just resistant, and this small friction makes the song more interesting than its structure deserves. I think the bassist is the one to watch. I think the bassist may already know this.
              </p>
              <p style={{ margin: "0 0 12px 0", textIndent: "1.5em" }}>
                The third track I will not say much about because it is thirty-seven seconds long and by the time I have an opinion it is finished. It is called "I Owe Kyle Forty Dollars" and it made me laugh, though I could not hear enough of the words to tell you why. Something in the delivery. The singer sounds like he is finally not performing, just talking fast into a microphone about something that actually bothers him. It is the most honest moment on the record. It is also the shortest, which may be its own kind of honesty.
              </p>
              <p style={{ margin: "0 0 12px 0", textIndent: "1.5em" }}>
                I will not remember this band in a year. I think they know that. There is nothing on this record that asks to be remembered. It asks to be played loud while you are doing something else, and in this it succeeds. The bassist, though. If she turns up somewhere else, I will pay attention.
              </p>
              <p style={{ margin: "0 0 0 0", textIndent: "1.5em" }}>
                The pressing is white vinyl, limited to what I assume is a very small number. The sleeve is a photocopy of a duck wearing a helmet. There is no address. There is no contact information. If you want to find this band, you will have to know someone who knows someone, and even then I am not sure they will still exist by the time you do.
              </p>
            </div>

            {/* Footer */}
            <div style={{
              marginTop: "20px", paddingTop: "12px",
              borderTop: "1px solid rgba(0,0,0,0.15)",
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
            }}>
              <div style={{
                fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
                fontSize: "11px", fontWeight: 600, color: "#1a1a1a",
              }}>
                Trade or $2 ppd if you can find them, which you probably cannot.
              </div>
              <div style={{
                fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
                fontSize: "11px", fontWeight: 500, fontStyle: "italic", color: "#555",
              }}>
                {"\u2014"} {"\u00c9"}mile
              </div>
            </div>

            {/* Page number */}
            <div style={{
              textAlign: "center", marginTop: "24px",
              fontFamily: '"IBM Plex Sans", Helvetica, sans-serif',
              fontSize: "10px", color: "#999",
            }}>
              23
            </div>
          </div>
        </div>

        {/* Scan edge */}
        <div style={{
          height: "4px",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.06), transparent)",
          transform: "rotate(-0.3deg)",
          marginTop: "-2px",
        }} />
      </div>
    </div>
  )
}
