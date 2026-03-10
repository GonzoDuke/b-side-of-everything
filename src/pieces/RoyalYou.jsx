export default function RoyalYou() {
  return (
    <div style={{
      background: "#e0ddd6",
      minHeight: "100vh",
      fontFamily: '"Verdana", "Geneva", "Tahoma", sans-serif',
    }}>
      {/* Webzine layout */}
      <div className="piece-sidebar-layout" style={{
        maxWidth: "820px",
        margin: "0 auto",
        display: "flex",
        minHeight: "100vh",
      }}>
        {/* Sidebar */}
        <div className="piece-sidebar" style={{
          width: "180px",
          background: "#2c2c2c",
          padding: "20px 16px",
          flexShrink: 0,
          fontSize: "11px",
          color: "#aaa",
          lineHeight: 1.5,
        }}>
          {/* Logo */}
          <div style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#e0ddd6",
            letterSpacing: "-0.02em",
            marginBottom: "4px",
            fontFamily: '"Georgia", serif',
          }}>
            pulse <span style={{ color: "#8a9a6b" }}>//</span> static
          </div>
          <div style={{
            fontSize: "9px",
            color: "#666",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "24px",
          }}>
            live music {"\u00b7"} bristol & beyond
          </div>

          {/* Nav */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "24px" }}>
            {["home", "reviews", "features", "photos", "about", "contact"].map(item => (
              <span key={item} style={{
                color: "#8a9a6b",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "10px",
                cursor: "pointer",
              }}>
                {item}
              </span>
            ))}
          </div>

          {/* Recent reviews */}
          <div style={{
            fontSize: "9px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#666",
            marginBottom: "8px",
          }}>
            Recent Reviews
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "10px", color: "#888" }}>
            <span>Gravenhurst @ The Croft <span style={{ color: "#555" }}>12.10.04</span></span>
            <span style={{ color: "#8a9a6b" }}>The Royal You @ The Fleece <span style={{ color: "#555" }}>10.04</span></span>
            <span>Movietone @ The Cube <span style={{ color: "#555" }}>09.04</span></span>
            <span>Kaito @ Start The Bus <span style={{ color: "#555" }}>09.04</span></span>
            <span>Flying Saucer Attack @ The Croft <span style={{ color: "#555" }}>08.04</span></span>
          </div>

          {/* Links */}
          <div style={{
            fontSize: "9px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#666",
            marginTop: "24px",
            marginBottom: "8px",
          }}>
            Links
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "10px", color: "#777" }}>
            <span>Drowned in Sound</span>
            <span>Brainwashed</span>
            <span>Dusted Magazine</span>
            <span>The Wire</span>
            <span>BBC Bristol</span>
          </div>

          <div style={{
            marginTop: "32px",
            paddingTop: "12px",
            borderTop: "1px solid #3a3a3a",
            fontSize: "9px",
            color: "#555",
          }}>
            {"\u00a9"} 2004 pulse // static<br />
            est. 2002 {"\u00b7"} bristol, uk
          </div>
        </div>

        {/* Main content */}
        <div className="piece-main-with-sidebar" style={{
          flex: 1,
          background: "#f5f3ee",
          padding: "24px 32px 48px",
        }}>
          {/* Breadcrumb */}
          <div style={{
            fontSize: "10px",
            color: "#999",
            marginBottom: "16px",
          }}>
            <span style={{ color: "#8a9a6b" }}>home</span> {"\u203a"} <span style={{ color: "#8a9a6b" }}>reviews</span> {"\u203a"} the royal you @ the fleece
          </div>

          {/* Review header */}
          <h1 style={{
            fontFamily: '"Georgia", "Times New Roman", serif',
            fontSize: "22px",
            fontWeight: 700,
            lineHeight: 1.3,
            color: "#2a2a2a",
            margin: "0 0 4px",
          }}>
            Griefwave, Theremin, Whatever: The Royal You Refuse to Make Sense
          </h1>

          {/* Meta line */}
          <div style={{
            fontSize: "11px",
            color: "#999",
            marginBottom: "4px",
          }}>
            <span style={{ fontWeight: 600, color: "#666" }}>Neil Pascoe</span> {"\u00b7"} Published in Pulse // Static {"\u00b7"} October 2004
          </div>

          <div style={{
            height: "1px",
            background: "#ddd",
            margin: "16px 0",
          }} />

          {/* Review body */}
          <div style={{
            fontFamily: '"Georgia", "Times New Roman", serif',
            fontSize: "13.5px",
            lineHeight: 1.75,
            color: "#333",
          }}>
            <p style={{ margin: "0 0 16px" }}>
              I am writing this four days after seeing The Royal You at The Fleece and I still don't know what I saw. I've started this review three times. The first was mostly adjectives. The second was a list of instruments I think I heard, followed by a question mark. This is the third. It's probably not much better, but the show is starting to fade and I want to get something down before it turns into one of those nights you can only half-describe in the pub while everyone nods politely and changes the subject.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              Right. What I know. The Fleece was rammed. Not "decent turnout for a Tuesday" rammed but genuinely, wall-to-wall full, which surprised me because I'd only heard of the band a fortnight earlier when a mate mentioned them in passing and then couldn't explain what they sounded like. "Just go," she said. "Bring a coat. You'll want something to hold onto." I thought she was being dramatic. She was not being dramatic.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              The stage was already odd before anyone came out. No drum riser, which is par for the course at The Fleece, but also no visible amps, no monitors facing the usual directions, and, dead centre, what I initially took for a coat stand but turned out to be a theremin on a tripod. There was a harmonium on the floor to the left. A metallophone on a table to the right. A bass guitar propped against what I'm fairly sure was a small church organ. None of this made anything clearer.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              They came on without a word. Four of them. The singer, Imogen Wraye, walked to the mic, looked at it, and then sat down on the stage floor cross-legged, as if she'd thought better of the whole thing. The others took their places. The tall one in the moth-eaten jumper, pencils behind both ears, stood behind the theremin and raised her hands. The bassist plugged in. The drummer, if that's the right word for someone who spent most of the evening playing what appeared to be a set of spoons and an upturned saucepan, adjusted something I couldn't see.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              And then the theremin started. And did not stop.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              I want to be precise about this because it's the thing I keep circling back to. The theremin was not an accent. It was not colouring. It was not doing what theremins normally do in bands, which is turn up for eight bars during the bridge and then clear off so everyone can get on with it. It soloed. Continuously. For what felt like the entire set. Long, keening arcs of sound that climbed and fell and climbed again, hovering directly in front of Wraye's microphone, often louder than the vocals, often louder than everything. The player, Tamsin Ellory (I got this from the setlist; I'll come to the setlist), stood completely still except for her hands, which trembled in the air above the instrument, pulling frequencies out of nothing. It looked like she was conducting a s{"\u00e9"}ance. It sounded like one as well.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              The setlist. I was handed a printout halfway through the set by someone near the bar who said "this might help." It did not help. The song titles were things like "In the Ice House (I Called and No One Came)" and "The Kettle Won't Stop" and "All My Coats Are Haunted," which told me nothing about what I was hearing because what I was hearing did not appear to be individual songs. It was one long, continuous thing. Tonal shifts, yes. Tempo changes, yes. Odd, playful bits of business with the time signatures. Moments where something that might have been a verse gave way to something that might have been a chorus before collapsing back into the theremin. But no gaps. No pauses. No "this next one's called." Just an unbroken wall of sound that was somehow also fragile, like it might shatter if someone so much as coughed.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              At some point, during what the printout suggests was "In the Ice House," Wraye began to cry. Not for show. Not the way singers sometimes close their eyes and let a tear fall because the lighting's right. She was crouched by the monitor, openly weeping, mouthing lyrics that didn't stand a chance against the theremin's wail. The rest of the band played on. Nobody acknowledged it. Nobody stopped. The bassist, a woman with short hair and an expression of fierce concentration that never shifted all night, played a low, repeating figure that felt like a pulse. The drummer was doing something nearly inaudible with brushes. And Ellory stood there, hands trembling, pulling sound from the air, the theremin keening over all of it, and Wraye crying into a microphone that no longer seemed to matter.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              I looked round the room. Everyone was watching. Nobody was moving. I've been to gigs where the crowd is still because they're bored, and gigs where they're still because they're on their phones, and this was neither. This was the stillness of people who are not entirely sure what is happening to them. The bloke next to me had his hand on the shoulder of the woman beside him. I don't think either of them knew it.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              I have, in every review I've written for this site, tried to find a high point. A single moment I can point to and say: that was the best bit. I always try. Even at dreadful gigs, even at thoroughly middling ones, there's usually a song or a solo or a moment between songs where something lifts. I could not find one here. Not because the show was poor. Because the show did not have parts. It had one long, sustained, unnameable feeling that started when the theremin started and ended, I think, when I realised I was standing outside The Fleece on St Thomas Street and couldn't remember leaving.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              I went home and looked them up. This did not help. The Drowned in Sound boards have threads going, frantic and contradictory, full of people rowing about whether they're post-rock or doom-folk or "like Mazzy Star if Mazzy Star got chucked and started taking it really personally." Someone's built a fan site on Angelfire that the band's management apparently keeps trying to have scrubbed for "inaccuracies and unverified mysticism," which is the most useful thing I've learnt about them so far. There's no proper bio anywhere. No label page. No explanation. Their listed genre on one site is "Alternative/Other." On another they're filed next to Iron & Wine, which is like filing a hurricane next to a light breeze because they both involve air.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              I asked about. A mate of a mate who's seen them twice said, "You don't really see them. You process them. Sometimes for days." Someone at work who knows the Bristol scene better than I do said he'd heard they were once being looked at by 4AD, but nothing came of it, and nobody seems sure why. That's the lot. That's everything I could gather in four days of asking. A band that fills rooms on word of mouth alone, and the words, when you collect them, don't add up to anything you could put on a flyer.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              At the merch table after the show I stood behind a woman who was trying to explain to her mate what she'd just heard. She had several goes. "It's sort of like if Elizabeth Fraser fronted a band that only played the outros of Radiohead songs? But slower? And sadder?" She stopped. Tried again. "It's griefwave, I suppose." Her friend nodded the way you nod when you've decided to leave it.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              I grew up not twenty miles from Bristol. I've seen a lot of strange music come out of this city. You can't grow up round here without absorbing it, the trip-hop, the dub, the lot. Music that sounds like it's been filtered through a fogbank, like the weather got into the wiring. I thought I'd heard everything this part of the world could produce. The Royal You are not anything I've heard before. They're not trip-hop, they're not post-rock, they're not shoegaze, though people have tried all three out of what I suspect is sheer desperation. Whatever they are, it's coming from somewhere I can't locate on the map, and I've lived here my whole life.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              I can't say I enjoyed the performance in any normal sense. I didn't tap my foot. I didn't sing along. I didn't lean over to anyone and say "this is brilliant" because I didn't know if it was brilliant. I still don't. I know it was loud and quiet at the same time. I know the theremin is still rattling about somewhere in the back of my skull. I know Wraye was crying and I couldn't hear the words and it didn't matter because the words were never going to be the point. I know the bassist played the same figure for what must have been twenty minutes and I never once wanted her to stop.
            </p>

            <p style={{ margin: "0 0 16px" }}>
              Three days later, I was on a bus, staring out the window at nothing in particular, and I caught myself whispering something. It took a moment to clock that it was a lyric, or what I think was a lyric, though I'm not certain I ever actually heard it clearly enough to call it that. "No one called back, and the kettle kept screaming." I don't know which song it's from. I don't know if I'm even remembering it right. But I was sat on a bus whispering it three days after the gig, and it felt, for reasons I cannot properly explain, like clarity. Or maybe just contact. The first point of contact with something I still haven't got language for.
            </p>

            <p style={{ margin: "0 0 0" }}>
              I'll be going again.
            </p>
          </div>

          {/* Footer */}
          <div style={{
            marginTop: "24px",
            paddingTop: "12px",
            borderTop: "1px solid #ddd",
            fontSize: "10px",
            color: "#aaa",
            display: "flex",
            justifyContent: "space-between",
          }}>
            <span>tags: <span style={{ color: "#8a9a6b" }}>the royal you, the fleece, bristol, live review, theremin</span></span>
            <span>comments (14)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
