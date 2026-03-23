export default function BookingSheet() {
  return (
    <div style={{
      background: "#f0f0f0",
      minHeight: "100vh",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: "0 0 80px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap" rel="stylesheet" />

      {/* Email client toolbar */}
      <div style={{
        background: "#fff",
        borderBottom: "1px solid #e0e0e0",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        fontSize: "13px",
        color: "#666",
      }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <button style={{ background: "none", border: "1px solid #ddd", borderRadius: "4px", padding: "4px 12px", fontSize: "12px", color: "#555", cursor: "pointer" }}>
            {"\u2190"} Back
          </button>
          <button style={{ background: "none", border: "1px solid #ddd", borderRadius: "4px", padding: "4px 12px", fontSize: "12px", color: "#555", cursor: "pointer" }}>
            Archive
          </button>
          <button style={{ background: "none", border: "1px solid #ddd", borderRadius: "4px", padding: "4px 12px", fontSize: "12px", color: "#555", cursor: "pointer" }}>
            Delete
          </button>
        </div>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: "12px", color: "#999" }}>1 of 3</span>
      </div>

      {/* Email container */}
      <div style={{
        maxWidth: "min(92vw, 1400px)",
        margin: "20px auto 0",
        background: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}>
        {/* Email header */}
        <div style={{
          padding: "24px clamp(16px, 4vw, 32px)",
          borderBottom: "1px solid #eee",
        }}>
          <div style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#1a1a1a",
            marginBottom: "16px",
            lineHeight: 1.3,
          }}>
            The Room Knows {"\u2014"} Guest Column
          </div>

          <div style={{
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
          }}>
            {/* Sender avatar */}
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#2a3a2a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#8a9a7a",
              fontSize: "14px",
              fontWeight: 700,
              flexShrink: 0,
            }}>
              BS
            </div>
            <div style={{ flex: 1, fontSize: "13px", lineHeight: 1.5 }}>
              <div>
                <span style={{ fontWeight: 600, color: "#1a1a1a" }}>The Booking Sheet</span>
                <span style={{ color: "#999", marginLeft: "6px" }}>&lt;newsletter@thebookingsheet.com&gt;</span>
              </div>
              <div style={{ color: "#999", fontSize: "12px", marginTop: "2px" }}>
                to me
              </div>
            </div>
            <div style={{
              fontSize: "12px",
              color: "#999",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}>
              Dec 4, 2025, 6:12 AM
            </div>
          </div>
        </div>

        {/* Email body - the newsletter itself */}
        <div style={{
          fontFamily: '"Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif',
          color: "#333",
        }}>
          {/* Newsletter masthead */}
          <div style={{
            padding: "24px clamp(16px, 4vw, 40px)",
            borderBottom: "3px solid #1a1a1a",
          }}>
            <div style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}>
              The Booking Sheet
            </div>
            <div style={{
              fontSize: "12px",
              color: "#999",
              marginTop: "4px",
              fontWeight: 400,
            }}>
              Programming, Strategy & the Business of Live Music
            </div>
          </div>

          {/* Thin secondary nav */}
          <div style={{
            padding: "8px clamp(16px, 4vw, 40px)",
            background: "#fafafa",
            borderBottom: "1px solid #eee",
            fontSize: "11px",
            color: "#aaa",
            display: "flex",
            justifyContent: "space-between",
          }}>
            <span>Issue #187 {"\u00b7"} December 2025</span>
            <span>Guest Column</span>
          </div>

          {/* Article content */}
          <div style={{ padding: "40px clamp(16px, 4vw, 40px) 48px" }}>
            {/* Headline */}
            <h1 style={{
              fontFamily: '"Source Serif 4", Georgia, serif',
              fontSize: "28px",
              fontWeight: 600,
              lineHeight: 1.25,
              color: "#1a1a1a",
              margin: "0 0 8px",
            }}>
              The Room Knows
            </h1>
            <div style={{
              fontSize: "14px",
              color: "#888",
              marginBottom: "24px",
              fontWeight: 400,
            }}>
              by Nate Kovacs
            </div>

            {/* Body */}
            <div style={{
              fontFamily: '"Source Serif 4", Georgia, serif',
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#2a2a2a",
            }}>
              <p style={{ margin: "0 0 20px" }}>
                Mountain Jam ran a small tent at Belleayre in 2018. Haybales for seating, maybe eighty capacity, the kind of slot you give to someone because the afternoon needs filling and the main stage changeover takes forty minutes. That Friday, Lewis Capaldi played to about fifty people. He was good. Earnest, a little nervous, clearly talented. Within a year he'd have a number one single in eleven countries. Nothing in any platform or data profile in June 2018 would have predicted that. He got that slot because someone heard something and made a call.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                After Capaldi, I stuck around. Partly inertia, partly because I'd walked the grounds already and didn't feel like standing in line for a fifteen-dollar lemonade. Five people wandered in carrying mismatched gear. One of them was holding a keyboard under his arm like a textbook he'd forgotten to return. Security stopped them. Are you actually on the schedule? Someone checked. They were.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                The Categoristics. I assumed it was a placeholder.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                They spent their first two songs sorting themselves out. Checking the PA, squinting into the half-light, one of them crouching to retape a cable. No stage banter. No drama. They looked like five people who could be waiting at a bus stop. And then the music started, and the music did not match the people making it. Dense, layered, a little wild. The guitarist and the keyboard player were building something together, these interlocking patterns that kept shifting underneath the vocal line, and the bassist was holding a groove so low and steady it felt more like a physical fact than a note. Alt-indie, I guess, if you need a shelf for it, but the kind that makes the shelf feel like the wrong piece of furniture entirely. The singer, Dan Kessler, is a person you would never look at twice offstage. He remembers your name. He asks how your drive was. Then he steps in front of a microphone and goes somewhere else. Head down, barely making eye contact, shaking a tambourine like he'd just remembered it was in his hand. Pacing. But here's what caught me: when Kessler went somewhere, the band went with him. Not following. More like they already knew where he was going. The keyboard player would shift a voicing half a beat before Kessler changed direction, as if the songs were a conversation the five of them were having in real time and the audience just happened to be in the room.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                They played a song called "Snowmilk for Breakfast." I still don't know what it's about. The title apparently references that NYC fashion label, Snowmilk, the one doing the upcycled avant-garde pieces, but the song itself could be about weather or grief or the experience of waking up and not knowing what year it is. It didn't matter. Everyone in that tent pretended they'd heard it before. That's the tell. When strangers in a crowd start nodding along to a song they've never heard, something is working that no metric captures.
              </p>

              <div style={{ textAlign: "center", margin: "28px 0", fontSize: "14px", color: "#ccc", letterSpacing: "0.3em" }}>
                {"\u2022"} {"\u2022"} {"\u2022"}
              </div>

              <p style={{ margin: "0 0 20px" }}>
                After that show I became a person with a conviction. You know the type. The mid-level buyer from the Hudson Valley who sees a band in a 60-cap room and walks away knowing, just knowing, that this is a band that deserves the next stage up. Not an arena. Just the room that holds two hundred instead of eighty. The one with an actual sound system and a lighting rig that wasn't borrowed from a church.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                I started looking for them. I caught them at Tubby's in Kingston that fall, opening for a band with twice their Spotify numbers and half their stage presence. Tubby's holds about a hundred people standing and it was close to full, though most of the crowd hadn't come for The Categoristics. You could tell because the first two songs played to the backs of people's heads. Conversations at the bar, phones out, the usual. Kessler didn't seem to notice or didn't seem to care. He was doing the thing again, the pacing, the tambourine, the head down. But what I noticed this time, in a room small enough to see everyone's hands, was the bassist. She was locked into something so deep and so patient it was practically geological. Just this one line, repeating, not moving, holding the entire bottom of the sound in place while the guitarist and the keys built and shifted above her. At one point Kessler stopped singing for what must have been sixteen bars and nobody in the band flinched. The music didn't need him. It kept breathing on its own. He stood at the mic with his eyes closed, tambourine at his side, and when he came back in it was like someone returning to a conversation that had continued perfectly well without them.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                Third song in, I started watching the room instead of the stage. The conversations near the bar had thinned. Not stopped, but thinned, the way a crowd thins when something pulls at the edge of its attention. A woman who'd been leaning against the wall with her arms crossed uncrossed them. Two guys near the front who'd been talking turned around at the same time, independently, like they'd both heard something behind them. By the fifth song the back half of the room had oriented itself toward the stage without, I think, anyone deciding to. The noise floor just dropped. People's bodies shifted. It wasn't dramatic. It was more like watching a room slowly remember what it was for.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                The set ended and the headliners came on and the headliners were fine and I stood in the back thinking about what had just happened. Not the music exactly. The music was good but that wasn't the thing. The thing was the room. The room had done something I'd seen it do once before, in a tent at Belleayre with haybales and fifty strangers. It had paid attention despite itself.
              </p>

              <div style={{ textAlign: "center", margin: "28px 0", fontSize: "14px", color: "#ccc", letterSpacing: "0.3em" }}>
                {"\u2022"} {"\u2022"} {"\u2022"}
              </div>

              <p style={{ margin: "0 0 20px" }}>
                I want to be honest about Green River because it would be easy to leave it out.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                Side stage, early afternoon, maybe sixty or seventy people scattered across a field. Different energy. The sky was flat and white and the sound carried strangely in the open air, losing the low end before it reached the back of the crowd. Kessler was doing all the same things. The pacing, the tambourine, the head down. The band was playing well. Tight, locked in, the bassist holding her ground the way she does. But whatever current runs between a band and a room, whatever invisible negotiation happens in those first minutes that determines whether the thing is going to work, it wasn't quite there. The set built but never peaked. Songs that had floored the room at Tubby's landed and sat there. A good set. A professional set. Not the tent.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                I stood in that field afterward and had the conversation you have with yourself when you've been telling everyone about a band for a year. Was the tent a fluke? Was Tubby's? Is it possible that I saw something extraordinary at the right moment in the right room and I've been chasing that room ever since? These are reasonable questions. I've been doing this for twelve years and I know what attachment looks like from the inside. You see an act at the right moment and they become a cause. I know this about myself.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                But I also know what a room looks like when it turns, and I know it doesn't happen by accident, and I know it happened at Tubby's in front of a crowd that hadn't come for them. A band that can turn a room that isn't theirs is not a band whose ceiling is sixty people in a field on a flat afternoon. Sometimes the room is wrong. Sometimes the slot is wrong. Sometimes the sound is wrong and the weather is wrong and the band's van broke down in Connecticut and the bass player has a migraine and the sixty people who showed up are the sixty people who were going to show up regardless. That set tells you almost nothing about what the band is. But it generates a data point. And the data point is what the next person sees when they pull up the profile.
              </p>

              <div style={{ textAlign: "center", margin: "28px 0", fontSize: "14px", color: "#ccc", letterSpacing: "0.3em" }}>
                {"\u2022"} {"\u2022"} {"\u2022"}
              </div>

              <p style={{ margin: "0 0 20px" }}>
                When I put The Categoristics' name forward for a better slot this year, nobody asked about the tent. Nobody asked about Tubby's. Nobody asked what happens when that band locks in and a room full of strangers forgets they were strangers. They asked me about numbers. Spotify monthly listeners: around 40,000. Instagram: about 8,000. No booking agent. No sync placements. No press above the local level. No radius clause conflicts because nobody else is booking them at a level where it matters.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                I got the tent. Same slot as 2018.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                A friend who programs a comparable festival in the Northeast, smart, good ear, told me something that stuck. She'd booked them once. Her honest assessment: professional, solid, no complaints. Wouldn't build an afternoon around them, but wouldn't hesitate to fill a slot. That's the view from the spreadsheet. It's not wrong. It's just not the tent.
              </p>

              <div style={{ textAlign: "center", margin: "28px 0", fontSize: "14px", color: "#ccc", letterSpacing: "0.3em" }}>
                {"\u2022"} {"\u2022"} {"\u2022"}
              </div>

              <p style={{ margin: "0 0 20px" }}>
                I'm not going to tell you to book The Categoristics. I'm not their manager. I don't have an agent's number to give you because they don't have an agent. I'm a guy who fills the undercard at a mid-size regional festival, who builds the 2 PM slots and the side stages and the tents that most people walk past on their way to get food. It's good work. I believe in it. The undercard is where careers begin, and the person filling it is either paying attention or they aren't.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                What I can tell you is that the tools we use now are good tools. They solve real problems. The old system, where a buyer's Rolodex was the algorithm, had its own failures and I'm not nostalgic for any of them. But somewhere in the shift from "is this act good" to "does this act's data justify the slot," we lost something, and I think what we lost is the room. The tools don't go to shows. The tools don't feel the air change. The tools don't see five people lock into something in a tent at Belleayre while fifty strangers hold still.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                A friend said something to me years ago, before either of us worked in music. We were at a show somewhere, I don't remember where, and the opening band was doing something strange and beautiful and the crowd was thin and half-interested. He leaned over and said, "The room knows, even when the room isn't paying attention."
              </p>

              <p style={{ margin: "0 0 20px" }}>
                I think about that all the time. I thought about it at Tubby's when the conversations thinned and the woman uncrossed her arms. I thought about it at Green River when the room didn't turn and I had to sit with what that meant. I thought about it when I put the band's name on a list and the list came back with a tent slot and a 2 PM start. The room knows. The question is whether we're still letting it tell us anything, or whether we've decided the dashboard knows better.
              </p>

              <p style={{ margin: "0 0 0" }}>
                I don't have a clean answer. I just have the tent, and what happened in it, and the fact that seven years later I still can't find it in any spreadsheet.
              </p>
            </div>

            {/* Author footer */}
            <div style={{
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: "1px solid #eee",
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: "13px",
              color: "#999",
              lineHeight: 1.6,
            }}>
              <span style={{ fontWeight: 600, color: "#666" }}>Nate Kovacs</span> is a festival programmer based in the Hudson Valley. His column appears occasionally in The Booking Sheet. The views expressed are his own.
            </div>
          </div>

          {/* Email newsletter footer */}
          <div style={{
            padding: "20px clamp(16px, 4vw, 40px)",
            background: "#fafafa",
            borderTop: "1px solid #eee",
            fontSize: "11px",
            color: "#bbb",
            textAlign: "center",
            lineHeight: 1.6,
          }}>
            The Booking Sheet {"\u00b7"} Programming, Strategy & the Business of Live Music<br />
            You're receiving this because you subscribed. <span style={{ textDecoration: "underline", cursor: "pointer" }}>Unsubscribe</span> {"\u00b7"} <span style={{ textDecoration: "underline", cursor: "pointer" }}>Update preferences</span>
          </div>
        </div>
      </div>
    </div>
  )
}
