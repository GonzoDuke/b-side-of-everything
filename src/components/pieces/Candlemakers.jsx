export default function Candlemakers() {
  return (
    <div style={{
      background: "#1a1714",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      padding: "40px 16px 80px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: "580px", width: "100%" }}>
        {/* The insert */}
        <div style={{
          background: "#eee9dc",
          position: "relative",
          boxShadow: "4px 6px 24px rgba(0,0,0,0.4), 0 0 1px rgba(0,0,0,0.3)",
          transform: "rotate(-0.4deg)",
          overflow: "hidden",
        }}>
          {/* Paper texture */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 25% 15%, rgba(200,185,155,0.12) 0%, transparent 50%), radial-gradient(ellipse at 75% 85%, rgba(180,165,135,0.08) 0%, transparent 40%)",
            pointerEvents: "none",
          }} />

          {/* Top decorative border */}
          <div style={{
            height: "3px",
            background: "linear-gradient(to right, #8a7d6b, #b8a88a, #8a7d6b)",
          }} />

          <div style={{
            padding: "clamp(32px, 6vw, 56px) clamp(28px, 5vw, 52px)",
            position: "relative",
          }}>
            {/* Label block */}
            <div style={{
              textAlign: "center",
              marginBottom: "40px",
            }}>
              {/* Label mark */}
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1.5px solid #8a7d6b",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "18px",
                  fontWeight: 300,
                  color: "#6b5e4e",
                  letterSpacing: "0.05em",
                }}>
                  CP
                </div>
              </div>

              <div style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#8a7d6b",
                marginBottom: "28px",
              }}>
                Candlepin Records
              </div>

              {/* Thin rule */}
              <div style={{
                width: "60px",
                height: "1px",
                background: "#c4b9a8",
                margin: "0 auto 28px",
              }} />

              <h1 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(24px, 4vw, 30px)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "0.01em",
                color: "#2c2418",
                margin: "0 0 6px",
              }}>
                The Famous Candlemakers of Lebanon
              </h1>
              <div style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: "italic",
                fontSize: "17px",
                color: "#6b5e4e",
                fontWeight: 300,
              }}>
                Light the Way
              </div>
              <div style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "11px",
                color: "#9a8e7c",
                marginTop: "10px",
                letterSpacing: "0.08em",
              }}>
                Originally released 1972 {"\u00b7"} Silvermine Records
              </div>
            </div>

            {/* Decorative rule before body */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}>
              <div style={{ flex: 1, height: "1px", background: "#c4b9a8" }} />
              <div style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "10px",
                color: "#b8a88a",
                letterSpacing: "0.3em",
              }}>
                {"\u2022"} {"\u2022"} {"\u2022"}
              </div>
              <div style={{ flex: 1, height: "1px", background: "#c4b9a8" }} />
            </div>

            {/* Body text */}
            <div style={{
              fontFamily: '"Libre Baskerville", Georgia, serif',
              fontSize: "13.5px",
              lineHeight: 1.85,
              color: "#3d3225",
              position: "relative",
            }}>
              <p style={{ margin: "0 0 18px", textIndent: 0 }}>
                No one calls them famous anymore and nobody ever called them candlemakers in any literal sense. The Famous Candlemakers of Lebanon are one of those bands you only encounter in the footnotes. A flyer in a box of high school yearbooks. A faded Polaroid behind the register at Groff's Records. A thirty-year-old radio request scribbled in the margins of a DJ's log. The story, repeated often and rarely the same way twice, goes like this: five kids from Lebanon, Pennsylvania, who could have been anything if geography, timing, or just the right record man had bent a little differently.
              </p>

              <p style={{ margin: "0 0 18px", textIndent: "1.5em" }}>
                <span style={{ fontStyle: "italic" }}>Light the Way</span> was recorded in August 1972 in a small, poorly-soundproofed recording studio just off Route 422, two blocks from the Royal Theater. It came out that fall on Silvermine, a label that managed three releases before folding. The original pressing was so small that the bulk of the copies went to family, friends, and a handful of central Pennsylvania radio stations. What made it onto the air was often by accident. Dale Liston at WLBR claims he spun After the Quarry three times in a row because he thought it was the new Guess Who single.
              </p>

              <p style={{ margin: "0 0 18px", textIndent: "1.5em" }}>
                But it is not the music's scarcity that kept the Candlemakers alive in memory.
              </p>

              <p style={{ margin: "0 0 18px", textIndent: "1.5em" }}>
                It is the fact that they managed to sound like the place they came from. Not in any quaint or rootsy sense. They were never interested in folklore. What they left behind is the persistent energy of songs built for the long haul. Highways at midnight. Small-town breakups. Shifts that start before dawn and end long after you wanted them to. These are tracks with a local clock, written by people for whom the next big thing was always somewhere else. Between cars that would not start, jobs that would not last, and luck that never quite broke, they learned how to make music with the time they had.
              </p>

              <p style={{ margin: "0 0 18px", textIndent: "1.5em" }}>
                Most of the band's only LP is plainspoken and almost reticent. Mercy County Line and A Thousand Goodnights have the thinned-out harmonies you hear in every American Legion Hall. The stories underneath are stranger. Disappearing fathers. Lines at the union hall. A road trip that ends because someone's mother calls and says her car is missing. The radio single "Fourteenth and Walnut" is all flickering neon and choked regret. It is a not-quite-love song set in the parking lot of a bowling alley.
              </p>

              <p style={{ margin: "0 0 18px", textIndent: "1.5em" }}>
                When people remember the Candlemakers' shows, they mention the usual. Broken monitors. Blown speakers. The sense that they always played a little too loud for the room. Some recall the occasional candle on stage, a joke that stuck from a school gig or maybe just a nod to the name, but no one says it changed the music. What mattered was the sound. Lean, live, unsentimental. Dave Nassar's voice riding the thin wire between boredom and heartbreak. Rich Wender's guitar always threatening to turn country but never quite giving in.
              </p>

              <p style={{ margin: "0 0 18px", textIndent: "1.5em" }}>
                The real difference, if you ask those who were there, was how they handled failure. There were better bands, bands that made it further, but few who played every show as if it might be the last. There was always a sense of farewell, even at the record release, even on the first track. Maybe that is why the album survives. Not because it was ahead of its time. It knew exactly what time it was and it never pretended otherwise.
              </p>

              <p style={{ margin: "0 0 18px", textIndent: "1.5em" }}>
                If you are holding this record, you are already part of a story that almost vanished. These songs were made by people who did not know if anyone outside their town would ever hear them, and for fifty years that was mostly true.
              </p>

              <p style={{ margin: "0 0 0", textIndent: "1.5em" }}>
                The reissue is not a resurrection. It is a release.
              </p>

              <p style={{ margin: "20px 0 0", textIndent: "1.5em" }}>
                The sound of a room, a town, a time, caught and carried forward just long enough for someone else to find it and wonder why you have never heard of The Famous Candlemakers of Lebanon before.
              </p>
            </div>

            {/* Bottom decorative rule */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "36px",
              marginBottom: "28px",
            }}>
              <div style={{ flex: 1, height: "1px", background: "#c4b9a8" }} />
              <div style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "10px",
                color: "#b8a88a",
                letterSpacing: "0.3em",
              }}>
                {"\u2022"} {"\u2022"} {"\u2022"}
              </div>
              <div style={{ flex: 1, height: "1px", background: "#c4b9a8" }} />
            </div>

            {/* Sign-off */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}>
              <div>
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "20px",
                  fontStyle: "italic",
                  color: "#5a4e3e",
                  fontWeight: 300,
                  marginBottom: "4px",
                }}>
                  M G
                </div>
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#9a8e7c",
                }}>
                  Candlepin Records
                </div>
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "10px",
                  color: "#9a8e7c",
                  marginTop: "2px",
                  letterSpacing: "0.05em",
                }}>
                  April 2025
                </div>
              </div>
              <div style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "10px",
                color: "#b8ad9c",
                textAlign: "right",
                lineHeight: 1.5,
                letterSpacing: "0.05em",
              }}>
                CLP-027<br />
                Lebanon, Pennsylvania
              </div>
            </div>
          </div>

          {/* Bottom decorative border */}
          <div style={{
            height: "3px",
            background: "linear-gradient(to right, #8a7d6b, #b8a88a, #8a7d6b)",
          }} />
        </div>

        {/* Shadow beneath the insert */}
        <div style={{
          height: "6px",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.15), transparent)",
          transform: "rotate(-0.4deg)",
          marginTop: "-2px",
        }} />
      </div>
    </div>
  )
}
