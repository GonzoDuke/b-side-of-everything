import { useState } from 'react'

const S = {
  bg: "#f7f5f2",
  white: "#ffffff",
  text: "#1a1a1a",
  textLight: "#6b6b6b",
  textMuted: "#999",
  orange: "#ff6719",
  border: "#e8e4df",
  link: "#c85a1a",
}

function HeartIcon({ size = 20, filled }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? S.orange : "none"} stroke={filled ? S.orange : S.textMuted} strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function CommentIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={S.textMuted} strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function ShareIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={S.textMuted} strokeWidth="2">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  )
}

export default function Firkin() {
  const [liked, setLiked] = useState(false)

  return (
    <div style={{
      background: S.bg,
      minHeight: "100vh",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,300;1,8..60,400&display=swap" rel="stylesheet" />

      {/* Substack top bar */}
      <div style={{
        background: S.white,
        borderBottom: `1px solid ${S.border}`,
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24">
            <rect y="0" width="24" height="5" fill={S.orange} />
            <rect y="9" width="24" height="5" fill={S.orange} />
            <polygon points="0,18 12,24 24,18 24,14 0,14" fill={S.orange} />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: 600, color: S.text }}>Substack</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button style={{
            background: S.orange,
            color: "white",
            border: "none",
            borderRadius: "20px",
            padding: "6px 16px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}>
            Get the app
          </button>
        </div>
      </div>

      {/* Publication header */}
      <div style={{
        background: S.white,
        borderBottom: `1px solid ${S.border}`,
        padding: "24px 20px",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: "22px",
          fontWeight: 700,
          color: S.text,
          letterSpacing: "-0.02em",
        }}>
          (Every Other Week)
        </div>
        <div style={{
          fontSize: "14px",
          color: S.textLight,
          marginTop: "4px",
        }}>
          Music writing when the feeling strikes. By Nate Pruitt.
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "12px",
        }}>
          <button style={{
            background: S.orange,
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "8px 20px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
          }}>
            Subscribe
          </button>
          <button style={{
            background: "transparent",
            color: S.textLight,
            border: `1px solid ${S.border}`,
            borderRadius: "4px",
            padding: "8px 16px",
            fontSize: "14px",
            cursor: "pointer",
          }}>
            Sign in
          </button>
        </div>
      </div>

      {/* Article */}
      <div style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "40px 20px 80px",
      }}>
        {/* Article header */}
        <h1 style={{
          fontFamily: '"Source Serif 4", Georgia, serif',
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: 1.2,
          color: S.text,
          margin: "0 0 16px",
          letterSpacing: "-0.02em",
        }}>
          More Than a Whine: Reappraising A Firkin of Awkward
        </h1>

        {/* Author row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "8px",
        }}>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#6b8f71",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "16px",
            fontWeight: 600,
          }}>
            NP
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: S.text }}>
              Nate Pruitt
            </div>
            <div style={{ fontSize: "13px", color: S.textMuted }}>
              Mar 12, 2026
            </div>
          </div>
        </div>

        {/* Engagement bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 0",
          borderTop: `1px solid ${S.border}`,
          borderBottom: `1px solid ${S.border}`,
          marginBottom: "32px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={() => setLiked(!liked)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: 0,
              }}
            >
              <HeartIcon size={20} filled={liked} />
              <span style={{ fontSize: "13px", color: liked ? S.orange : S.textMuted }}>
                {liked ? 48 : 47}
              </span>
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
              <CommentIcon size={18} />
              <span style={{ fontSize: "13px", color: S.textMuted }}>12</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ShareIcon size={18} />
          </div>
        </div>

        {/* Article body */}
        <div style={{
          fontFamily: '"Source Serif 4", Georgia, serif',
          fontSize: "18px",
          lineHeight: 1.8,
          color: S.text,
        }}>
          <p style={{ margin: "0 0 24px" }}>
            In the winter of 2006, A Firkin of Awkward played to seven people in the basement of a Unitarian church in Mansfield, Ohio. According to one attendee, they opened with a song that may or may not have been called "You Didn't Wave," during which the bassist screamed into a children's toy keyboard while someone projected VHS static onto a sheet duct-taped to the furnace. No one clapped. Two people left.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            I wasn't there. I was twenty-three and living in Columbus, writing for free on a music blog that published whatever I could convince the editor was worth covering. A friend of mine, Jesse Rowe, who played bass in a band called Milkfed and knew every basement circuit in central Ohio, had been telling me about A Firkin of Awkward for months. He'd given me a burned CD-R with a note that said <em>trust me on this one</em>. I put it in my car's disc changer. I don't remember pressing play. I was chasing a Columbus post-punk band that had label interest, and that felt like the story. The band with the label interest released one EP on a small Brooklyn imprint and broke up eight months later. I couldn't tell you their name.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            Fifteen years after Mansfield, "You Didn't Wave" has been sampled by three ambient-pop producers, used in a viral skate video, and praised in a Pitchfork retrospective as the preeminent sound of Midwestern emotional fallout. The band's sole EP, <em>Thanks for the Ladder</em>, now sells for $300 on Discogs. It was originally burned onto CD-Rs stored in a warped shoebox and sold next to zines and half-burned incense sticks at shows I could have driven to in under two hours.
          </p>

          {/* Section break */}
          <div style={{
            textAlign: "center",
            margin: "36px 0",
            fontSize: "16px",
            color: S.textMuted,
            letterSpacing: "0.4em",
          }}>
            {"\u2217"} {"\u2217"} {"\u2217"}
          </div>

          <p style={{ margin: "0 0 24px" }}>
            Emerging from the hushed emotional purgatory of suburban Ohio in the early 2000s, AFoA straddled the blurry line between folk collectives and emo confessionals. Imagine Tom DeLonge fronting an unplugged Mount Eerie set in a garage that smells like dryer sheets and regret. Their songs were raw, but never chaotic. Deliberately clumsy compositions that seemed to recoil from their own feelings. Baritone ukulele, autoharp, Casio rhythms, and whispered harmonies created an atmosphere of emotional latency: not the storm, but the air pressure before it. I can describe their sound with this kind of precision now. It's the vocabulary I built a career on. At the time, all I heard was ukulele, and I moved on.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            They weren't part of any coherent scene. They opened for an emo-gospel duo called Snowchurch in Kalamazoo, traded basement shows with a Toledo folk-core act that only played during hunting season, and were briefly courted by a micro-label that only released music on 8-tracks. Their split EP with Dead Deer Season has never been officially reissued. Most people who saw them live say the shows felt like they weren't meant for an audience, as if you were watching a band accidentally overhear itself.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            Formed in 2003 in the unfinished basement of Geneva Chunn's childhood home, the band began as an accidental songwriting project between her and Asher Pyle, who had recently been kicked out of his youth group for performing a cover of "Adam's Song" with modified lyrics about purgatory. Bassist Liv Murch joined after an argument at an open mic night where she accused Asher of "emotional cowardice masked as minimalism." Arizona transplant Milo Westerveld was the last to arrive, after responding to a flyer that simply said "Need percussionist: must own chimes, hate structure." These are people I never met and could have. Jesse knew Geneva. He kept saying I should come to a show, that it would make sense once I saw it. I kept saying I would. I kept not going.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            They recorded <em>Thanks for the Ladder</em> using a borrowed four-track and one working mic, often taking turns holding it between vocal takes. The background hiss on "You Didn't Wave" wasn't an aesthetic choice. It was a broken space heater that no one noticed until the track was mastered. They never did a proper tour, but played a run of shows across Ohio, Michigan, and western Pennsylvania that became semi-legendary for their inconsistent sets and emotionally fraught banter. One night in Youngstown, the band spent their entire set arguing about tempo and left the stage without playing a single full song.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            Jesse was at Youngstown. He called me after and said it was one of the best things he'd ever seen. I asked him if they'd actually played any music. He said that wasn't the point.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            It wasn't long after that night that things quietly fell apart. No breakup announcement, no farewell show. Asher stopped responding to group texts. Geneva moved to Athens to finish an art therapy degree. Liv started playing noise sets under a different name. Milo reportedly joined a regional puppet theater as sound designer. For a band built on emotional avoidance, the ending was fittingly indirect. Their last show, if it can be called that, was an impromptu three-song set at a house show in Oberlin where they played to twelve people and an actual raccoon that wandered in through the back door. None of them mentioned it was the end. No one clapped. Two people cried.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            And I wrote my year-end scene roundup.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            Twenty-two bands, most of them from Columbus and Dayton. I included Milkfed because Jesse would have stopped speaking to me if I hadn't. I included AFoA because Jesse told me to. One sentence. I described them as "a basement curio with a ukulele problem." I remember being pleased with the phrasing. Compact, knowing, the kind of quick dismissal that signals to editors and readers that you've heard the thing and cataloged it and moved on to what matters. Jesse never mentioned it.
          </p>

          <div style={{
            textAlign: "center",
            margin: "36px 0",
            fontSize: "16px",
            color: S.textMuted,
            letterSpacing: "0.4em",
          }}>
            {"\u2217"} {"\u2217"} {"\u2217"}
          </div>

          <p style={{ margin: "0 0 24px" }}>
            In the years that followed, something strange began to happen. Snippets of their tracks appeared in late-night campus radio interludes. A cover of "You Didn't Wave," played by a barista with a loop pedal in a Minneapolis caf\u00e9, went semi-viral after someone posted it with the caption, "This broke me in the middle of a Tuesday." Threads on dead forums were revived by users asking if anyone remembered "that Ohio band with the broken keyboard and the sad raccoon video." Burned CD-Rs were found in thrift shop bins and resold on Etsy as "Midwest liminalcore." Bootleg cassettes of <em>Thanks for the Ladder</em> began circulating again, some marked with track lists that didn't match the original.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            Old zines with cryptic reviews of basement shows were scanned and uploaded to Tumblr blogs dedicated to lost Midwest bands. A grainy video of the Oberlin set, complete with raccoon, appeared on YouTube under the title "unknown band but it made me cry?" The emotional landscape had shifted. The culture that once prized detachment and irony began to crave vulnerability again. You could hear AFoA's fingerprints on the fragile tape loops of Portland ambient acts, in the off-key harmonies of TikTok bedroom folk, in the resurgence of bands proudly using toy instruments and found sounds. Then came the samplings. The tributes. The tributes to the tributes. And finally, the retrospectives.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            Mick Trevorrow of <em>The Rust Belt Sunburn</em> had been one of the only critics to take early notice, calling them "emo-folk's least confident band, and I mean that as a compliment." Willa Griggs, years later, would write in <em>The Quiet Resound</em>, "It wasn't that they didn't know how to be a band. It's that they refused to pretend." Meg Duffy of Hand Habits put it more bluntly: "If your band doesn't make at least one person uncomfortable, you're not doing it right. That's what they taught us."
          </p>

          <p style={{ margin: "0 0 24px" }}>
            A Firkin of Awkward was always a band for later. The problem is that "later" required someone to carry the signal until the world was ready to hear it, and the people whose job that was, writers, editors, the small machinery of attention that decides what gets remembered, mostly didn't. Not because we couldn't hear them. Because we were listening for something else.
          </p>

          <div style={{
            textAlign: "center",
            margin: "36px 0",
            fontSize: "16px",
            color: S.textMuted,
            letterSpacing: "0.4em",
          }}>
            {"\u2217"} {"\u2217"} {"\u2217"}
          </div>

          <p style={{ margin: "0 0 24px" }}>
            I want to be honest about something, and I'm aware that honesty this late in the game is its own kind of performance. The music I ignored at twenty-three became the music I built a career on at thirty. The basement shows I skipped became the lineage I cite in essays for publications that pay me. I didn't discover this world. I came back to it after the culture told me it was safe to love.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            Jesse went from Milkfed to session work to producing records for bands I now write about. Somewhere in the last decade we stopped mentioning the distance between what he heard in 2005 and what I was willing to hear. We don't talk about the scene roundup. We don't talk about the CD-R. I'm aware that nobody's life was altered by my failure to pay attention to a four-piece from suburban Ohio. The music survived without me. It always does.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            But I think about it. I think about it when someone sends me a demo and I have to decide whether it's the thing or not, and I know that decision is never as clean as talent and timing. It's also about what I'm willing to be associated with, what I think will make me look credible versus what actually sounds like something. I was not a bad critic at twenty-three. I was a cautious one. And cautious critics don't find things. They find things that have already been found by someone braver.
          </p>

          <p style={{ margin: "0 0 24px" }}>
            A Firkin of Awkward was never trying to be heard clearly. They just wanted to be overheard. And I was right there, close enough to catch it, and I let it pass because it didn't sound like a career. It sounded like a basement. It sounded like chimes and regret and a broken space heater.
          </p>

          <p style={{ margin: "0 0 0" }}>
            Jesse, if you're reading this: you were right. I'm sorry it took a Substack to say it.
          </p>
        </div>

        {/* Bottom engagement bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 0",
          borderTop: `1px solid ${S.border}`,
          marginTop: "40px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={() => setLiked(!liked)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: 0,
              }}
            >
              <HeartIcon size={20} filled={liked} />
              <span style={{ fontSize: "13px", color: liked ? S.orange : S.textMuted }}>
                {liked ? 48 : 47}
              </span>
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
              <CommentIcon size={18} />
              <span style={{ fontSize: "13px", color: S.textMuted }}>12</span>
            </div>
          </div>
          <ShareIcon size={18} />
        </div>

        {/* Subscribe CTA */}
        <div style={{
          background: S.white,
          border: `1px solid ${S.border}`,
          borderRadius: "8px",
          padding: "32px",
          textAlign: "center",
          marginTop: "24px",
        }}>
          <div style={{ fontSize: "14px", color: S.textLight, marginBottom: "8px" }}>
            Thanks for reading (Every Other Week)! Subscribe for free to receive new posts.
          </div>
          <button style={{
            background: S.orange,
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "10px 24px",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            marginTop: "8px",
          }}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
