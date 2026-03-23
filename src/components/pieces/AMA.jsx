import { useState } from 'react'

// Reddit visual constants
const R = {
  bg: "#030303",
  card: "#1a1a1b",
  border: "#343536",
  text: "#d7dadc",
  muted: "#818384",
  link: "#4fbcff",
  op: "#0079d3",
  orange: "#ff4500",
  input: "#272729",
  hover: "#252526",
}

const redditFont = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
}

function formatVotes(n) {
  return n >= 1000 ? (n / 1000).toFixed(1) + "k" : n.toString()
}

function Votes({ n, horizontal }) {
  const size = horizontal ? 16 : 20
  return (
    <div style={{
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
      alignItems: "center",
      gap: horizontal ? "4px" : "0",
    }}>
      <svg width={size} height={size} viewBox="0 0 20 20" fill={R.muted}>
        <path d="M10 3l7 7h-4.5v7h-5V10H3l7-7z" />
      </svg>
      <span style={{
        fontSize: "12px",
        fontWeight: 700,
        color: R.text,
        minWidth: horizontal ? "auto" : "24px",
        textAlign: "center",
      }}>
        {formatVotes(n)}
      </span>
      <svg width={size} height={size} viewBox="0 0 20 20" fill={R.muted}>
        <path d="M10 17l-7-7h4.5V3h5v7H17l-7 7z" />
      </svg>
    </div>
  )
}

function Award({ count }) {
  if (!count) return null
  return (
    <span style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      <svg width={14} height={14} viewBox="0 0 20 20" fill="#ffd635">
        <path d="M10 1l2.5 5.5L18 7.5l-4 4 1 5.5-5-3-5 3 1-5.5-4-4 5.5-1z" />
      </svg>
      {count > 1 && (
        <span style={{ fontSize: "11px", color: "#ffd635", fontWeight: 600 }}>
          {count}
        </span>
      )}
    </span>
  )
}

function Comment({ u, text, votes, time, op, replies = [], depth = 0, awards = 0 }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div style={{
      paddingLeft: depth > 0 ? "16px" : "0",
      borderLeft: depth > 0
        ? `2px solid ${depth % 2 === 0 ? "#343536" : "#2a2a2b"}`
        : "none",
      marginTop: depth === 0 ? "0" : "8px",
    }}>
      <div style={{ padding: "4px 0" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginBottom: "4px",
          flexWrap: "wrap",
        }}>
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              background: "none",
              border: "none",
              color: R.muted,
              cursor: "pointer",
              padding: "0 4px 0 0",
              fontSize: "12px",
              fontFamily: "monospace",
            }}
          >
            {collapsed ? "[+]" : "[\u2013]"}
          </button>
          <span style={{
            fontSize: "12px",
            fontWeight: 600,
            color: op ? R.op : R.link,
          }}>
            u/{u}
          </span>
          {op && (
            <span style={{
              fontSize: "10px",
              fontWeight: 700,
              color: "#fff",
              background: R.op,
              padding: "0 4px",
              borderRadius: "2px",
              lineHeight: "16px",
            }}>
              OP
            </span>
          )}
          <Award count={awards} />
          <span style={{ fontSize: "12px", color: R.muted }}>{"\u00b7"}</span>
          <span style={{ fontSize: "12px", color: R.muted }}>{time}</span>
        </div>

        {!collapsed && (
          <>
            <div style={{
              fontSize: "14px",
              lineHeight: "21px",
              color: R.text,
              padding: "2px 0 4px",
              whiteSpace: "pre-wrap",
            }}>
              {text}
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              marginTop: "4px",
            }}>
              <Votes n={votes} horizontal />
              <span style={{
                fontSize: "12px",
                fontWeight: 700,
                color: R.muted,
                padding: "4px 8px",
                cursor: "pointer",
              }}>
                Reply
              </span>
              <span style={{
                fontSize: "12px",
                fontWeight: 700,
                color: R.muted,
                padding: "4px 8px",
                cursor: "pointer",
              }}>
                Share
              </span>
            </div>
            {replies.map((r, i) => (
              <Comment key={i} {...r} depth={depth + 1} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// COMMENT DATA
// Using push() to keep each thread self-contained
// and avoid deep inline nesting errors.
// ═══════════════════════════════════════════════════════════

const COMMENTS = []

// --- 1. How do you find your artists? ---
COMMENTS.push({
  u: "ambient_receiver",
  text: "How do you find your artists? Is there a submission process or is it more word of mouth?",
  votes: 342,
  time: "8 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 891,
      time: "8 hr. ago",
      awards: 2,
      text: "Both, kind of. There's a submission form on the site that I actually do check. I go through everything that comes in. Most of it isn't right for the label, which doesn't mean it's bad, just that it doesn't fit what Lowfield is trying to be. But occasionally something arrives that stops me. The Ume record started that way. She uploaded a single track to Bandcamp with no description, no artist photo, no tags. Just a ten minute piece called \"parking lot.\" I listened to it four times in a row at one in the morning and emailed her before I went to bed. She didn't respond for three weeks. I thought she'd decided I was a creep. Turns out she just doesn't check that email very often.\n\nThe rest is me digging. I spend a lot of hours on Bandcamp sorting by tags that nobody clicks on. There's a whole geography of music down there. People uploading things with zero expectation that a stranger will ever hit play. I find that genuinely moving. Not in a charity way. In a recognition way. I've been that person. I know what it feels like to put something out and hear nothing.",
      replies: [],
    },
  ],
})

// --- 2. Financial reality ---
COMMENTS.push({
  u: "lowtemp_heads",
  text: "What's the financial reality of a label this size?",
  votes: 287,
  time: "8 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 1203,
      time: "7 hr. ago",
      awards: 3,
      text: "Dire. I mean, honestly. No one is getting rich. I'm not breaking even most quarters. Some releases come close, especially if there's a vinyl run and it sells through, but the margins on a pressing of 200 records are brutal once you factor in manufacturing, shipping, the two or three copies that arrive warped, the ten copies sitting in my closet that I'll eventually give away to friends. I do freelance audio work to pay rent. Mixing, mastering, some sound design stuff for small projects. The label is subsidized by my day rate. I've made peace with that. I didn't start Lowfield to build a business. I started it because I needed a reason to keep listening carefully.",
      replies: [],
    },
  ],
})

// --- 3. Pressing process ---
COMMENTS.push({
  u: "vinyl_rut",
  text: "What's the pressing process like for someone operating at your scale? Do you work with one plant or shop around?",
  votes: 156,
  time: "7 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 298,
      time: "7 hr. ago",
      text: "I've used three different plants over five years, mostly because lead times and minimums keep shifting. For the first couple releases I used Gotta Groove in Cleveland, which was great for short runs. Now I'm mostly at a plant in the Czech Republic that a friend recommended, which sounds absurd for a label based in Phoenix, but the quality is better and the minimums work. Shipping across the Atlantic costs what it costs. The whole thing is a logistics headache that I'm not naturally suited to. I have a spreadsheet I maintain that I'm pretty sure would make an actual business person cry.",
      replies: [],
    },
  ],
})

// --- 4. Were you in Taupe Francis? ---
COMMENTS.push({
  u: "tape_hiss_forever",
  text: "Hey so this is a weird question but were you in Taupe Francis?",
  votes: 724,
  time: "7 hr. ago",
  awards: 1,
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 1567,
      time: "7 hr. ago",
      text: "Ha. Yeah. A while ago.",
      replies: [
        {
          u: "tape_hiss_forever",
          votes: 489,
          time: "7 hr. ago",
          text: "Dude you can't just drop \"yeah a while ago\" and move on. What happened to those guys?",
          replies: [
            {
              u: "marcos_barrera_lowfield",
              op: true,
              votes: 672,
              time: "7 hr. ago",
              text: "I mean, what happened is what happens. People graduated. People moved. The thing stopped. It wasn't dramatic. There was no fight. It just reached the end of what it was.",
              replies: [
                {
                  u: "tape_hiss_forever",
                  votes: 201,
                  time: "7 hr. ago",
                  text: "What did you play? I could never figure it out from the videos.",
                  replies: [
                    {
                      u: "marcos_barrera_lowfield",
                      op: true,
                      votes: 1891,
                      time: "7 hr. ago",
                      awards: 2,
                      text: "Trumpet. Though I understand why the videos don't make that obvious. I ran my signal through a pretty heavy chain of effects, delays and reverb and a loop station and a couple of things I'd modified badly, so what came out of the PA didn't always register as a horn. Sometimes it sounded like a synth pad. Sometimes it was this big washed-out atmospheric thing sitting behind the band. And then I'd pull the effects back and play a clean line over a groove, and people would look over like, oh, there's a trumpet in this band. That was kind of my whole situation. Periodically reminding people I was a trumpet player.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})

// --- 5. Derail into Taupe Francis ---
COMMENTS.push({
  u: "desert_grrl",
  text: "Okay I'm sorry but I need to derail this into a Taupe Francis conversation. I saw them five times and the last farewell night is one of the top three shows I've ever seen. Marcos if you want to talk about the label I respect that but I've been waiting years for someone from this band to show up somewhere.",
  votes: 612,
  time: "7 hr. ago",
  awards: 1,
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 445,
      time: "7 hr. ago",
      text: "It's fine. I came here to talk about Lowfield but I'm not going to pretend the band doesn't come up. It always comes up. I'll do half and half if that works.",
      replies: [],
    },
  ],
})

// --- 6. Lowfield aesthetic ---
COMMENTS.push({
  u: "lowtemp_heads",
  text: "Label question while we're pivoting. How do you decide the Lowfield aesthetic? Everything you release is so spacious and still. There's a consistency to the catalog that feels deliberate.",
  votes: 198,
  time: "7 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 567,
      time: "6 hr. ago",
      awards: 1,
      text: "It is deliberate, but not in the way you might think. I don't have a genre checklist or a sonic template. What I listen for is attention. When I hear a piece of music where every sound has been considered, where nothing is filler, where the silences are as composed as the notes, that's Lowfield. The spaciousness you're hearing isn't a genre preference. It's a byproduct of working with artists who don't put anything in the mix that doesn't need to be there. Which I realize sounds like a philosophy and not an answer, but it's the truest thing I can say about it.",
      replies: [
        {
          u: "ambient_receiver",
          votes: 234,
          time: "6 hr. ago",
          text: "That's a long way from a party band, man.",
          replies: [
            {
              u: "marcos_barrera_lowfield",
              op: true,
              votes: 389,
              time: "6 hr. ago",
              text: "You're not wrong.",
              replies: [],
            },
          ],
        },
      ],
    },
  ],
})

// --- 7. Was the band actually that good? ---
COMMENTS.push({
  u: "tempe_townie",
  text: "I need to jump in here. I went to ASU from 2015 to 2019 and I feel like Taupe Francis was already sort of legendary by the time I got there. People who'd seen them talked about them the way you talk about something you can't prove happened. Was the band actually that good or is this a nostalgia thing?",
  votes: 445,
  time: "6 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 1344,
      time: "6 hr. ago",
      awards: 2,
      text: "Both, probably. I'm the wrong person to ask because I was on stage, so my version of those shows is different from yours. What I can tell you is that on the nights when everything locked in, when the setlist was working and the room was right and whoever was sitting in that night happened to click, it was special. Not special like \"we're a great band.\" Special like the room was doing something together and the band was part of it but not all of it. ASU shows were never just about us. They were about the fact that two hundred people had decided to be in the same room on a Wednesday and something was going to happen.\n\nOn other nights it was a mess. We'd lose the thread. Someone would sit in who didn't fit the energy. The PA would be garbage. Jamie would be in a mood. I'd have a pedal malfunction and spend three songs troubleshooting while the band played around a hole in the sound where my horn was supposed to be. We were never consistent. That was the feature and the flaw.",
      replies: [],
    },
  ],
})

// --- 8. Core lineup ---
COMMENTS.push({
  u: "desert_grrl",
  text: "Who was the core lineup?",
  votes: 301,
  time: "6 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 987,
      time: "6 hr. ago",
      awards: 1,
      text: "Jamie Okafor, vocals. He was the center. Not musically but energetically. Jamie in a room is like a weather event. Not loud exactly. Just present in a way that rearranges the furniture. Neel Parthasarathy on keys and the primary songwriter, though not everyone realized that because Jamie was the one singing the words and Jamie is the one your eyes go to. Cal Bardem on drums. Matty Zheng on hand percussion, djembe and congas mostly, plus whatever he felt like picking up that night. Sully Marsh on bass. And Lena Greer on guitar. Six was the core.",
      replies: [
        {
          u: "tempe_townie",
          votes: 156,
          time: "6 hr. ago",
          text: "I thought there were like ten of you.",
          replies: [
            {
              u: "marcos_barrera_lowfield",
              op: true,
              votes: 765,
              time: "6 hr. ago",
              text: "On any given night there could be. That was the whole ethos. The six of us were the skeleton. Everything else was open. If someone showed up with a sax, they were in the band for the night. If a friend from the jazz program at ASU wandered in with a flute, great, find a mic. One time Damon Kerrigan, who's a saxophonist in the Phoenix scene, drove down to Tempe because someone texted him we were playing, and he just walked up and started soloing over a reggae groove and nobody blinked. My job on nights like that was partly musical and partly air traffic control. I'd hear a new instrument in the mix and I'd adjust, either make room by pulling my horn back or find a way to blend with whatever they were doing.",
              replies: [],
            },
          ],
        },
      ],
    },
  ],
})

// --- 9. Tell me about Neel ---
COMMENTS.push({
  u: "tape_hiss_forever",
  text: "Tell me about Neel. Everyone talks about Jamie but the lyrics in the stuff I've heard are way too smart for a party band.",
  votes: 378,
  time: "6 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 1456,
      time: "5 hr. ago",
      awards: 3,
      text: "Neel is the most interesting musician I've ever been in a room with. I include everyone I've worked with since. He wrote lyrics that had no business being inside the songs we were playing. Dense, referential, sometimes genuinely funny in a way that took two listens to catch. But he wrote them for Jamie's voice, which meant they came out sounding effortless. Jamie could take a lyric that Neel had agonized over for weeks and deliver it like it had just occurred to him between sips of beer. That was the magic trick. Neel's sophistication passing through Jamie's ease. Neither of those things works as well alone. Neel singing his own lyrics would have sounded like a TED talk. Jamie writing his own would have been fine but not the same. Together it was this thing where the audience is having a great time and then three hours later a line floats back into their head and they realize it was doing something more complicated than they thought.",
      replies: [
        {
          u: "tape_hiss_forever",
          votes: 89,
          time: "5 hr. ago",
          text: "Are they still in touch?",
          replies: [
            {
              u: "marcos_barrera_lowfield",
              op: true,
              votes: 445,
              time: "5 hr. ago",
              text: "Jamie and Neel? I don't actually know. I should probably know that. Neel moved to Portland a few years after the band ended. I think he's doing scoring work or something in that world. We exchange emails occasionally but it's the kind of email where you say \"we should catch up\" and neither person follows through. Jamie I've genuinely lost track of. Last I heard he was in Denver but that was secondhand and might be wrong by now.",
              replies: [],
            },
          ],
        },
      ],
    },
  ],
})

// --- 10. Mastering in-house ---
COMMENTS.push({
  u: "vinyl_rut",
  text: "Back to the label for a sec. Are you doing all the mastering in-house?",
  votes: 98,
  time: "5 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 187,
      time: "5 hr. ago",
      text: "Most of it I send out. I master a few things myself when the budget is basically nonexistent, but I know my limitations. Mastering is a different set of ears than mixing, and my room isn't treated well enough to trust myself on the final pass. There's a woman in Tucson named Ellie Corwin who does most of my mastering and she's phenomenal. She hears things in the low end that I physically cannot distinguish, which is either a function of better training or the fact that my hearing has been compromised by years of standing next to Cal Bardem's crash cymbal.",
      replies: [],
    },
  ],
})

// --- 11. Farewell shows - Will you talk about it? ---
COMMENTS.push({
  u: "desert_grrl",
  text: "The farewell shows. Three nights. I was at night three. Will you talk about it?",
  votes: 534,
  time: "5 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 312,
      time: "5 hr. ago",
      text: "Can I work up to it?",
      replies: [
        {
          u: "desert_grrl",
          votes: 267,
          time: "5 hr. ago",
          text: "Take your time.",
          replies: [
            {
              u: "marcos_barrera_lowfield",
              op: true,
              votes: 2134,
              time: "5 hr. ago",
              awards: 4,
              text: "The farewell was at the Marquee Theatre. Three nights, which was ambitious for a band that had never played a room that size. Most of our shows were house parties, bars, the occasional mid-size club. The Marquee holds what, maybe seven or eight hundred? We didn't fill it all three nights. Night one was probably five hundred. Night two was more. Night three was close to capacity.\n\nThe idea was that each night would have a different character. Night one was the early material, the straightforward stuff, the songs that worked at every house party from 2014 on. Night two was the expanded jams, the long songs, the rotating cast at its maximum, all the people we'd played with over the years invited back for one more. Night three was supposed to be the celebration. The big songs. The ones the room could sing.",
              replies: [
                {
                  u: "tempe_townie",
                  votes: 201,
                  time: "5 hr. ago",
                  text: "I was at night two. Someone was playing a didgeridoo at one point?",
                  replies: [
                    {
                      u: "marcos_barrera_lowfield",
                      op: true,
                      votes: 987,
                      time: "5 hr. ago",
                      awards: 1,
                      text: "That was Kyle something. I never learned his last name. He showed up with it and asked Sully if he could sit in and Sully said yes because Sully always said yes. That was one of the beautiful and occasionally disastrous things about the open door policy. You get a saxophonist one night and the building takes off. You get a didgeridoo the next and you spend two songs trying to figure out how to mix it without it swallowing the bass. I spent most of that particular stretch just feeding Kyle's signal through a filter to tame the low end so Cal and Sully could still function underneath.\n\nNight two had a stretch in the middle, maybe forty minutes, that I think is the best music Taupe Francis ever made. Damon Kerrigan was up. A violinist named Priya whose last name I'm embarrassed to say I've forgotten was playing these long sustained lines over everything. Matty had switched from djembe to a shaker and was just riding the top of the beat. And something locked. I can't describe what locking feels like from inside the band in a way that doesn't sound mystical, but there's a moment when the groove stops being something six or eight or eleven people are maintaining and starts maintaining itself, and you're all just inside it, and your job shifts from playing the music to not getting in the music's way. For forty minutes nobody was thinking. We were just in it. I was playing clean trumpet over the top, no effects, just the horn and the room, and it's the freest I've ever felt with an instrument in my hands.\n\nNone of that was recorded, as far as I know. Which I have feelings about.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})

// --- 11. Any recorded material? ---
COMMENTS.push({
  u: "tape_hiss_forever",
  text: "Is there ANY official recorded material? Everything I've found online is phone videos and one SoundCloud upload that might be a different band entirely.",
  votes: 267,
  time: "4 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 1123,
      time: "3 hr. ago",
      awards: 1,
      text: "That SoundCloud upload is us. \"Sun Dog\" from probably 2016. Lena recorded it on her phone at a rehearsal and put it up without asking anyone. It's lo-fi as hell but it's real. Beyond that, no. There are no studio recordings. We talked about it more than once. Neel pushed for it, especially toward the end, when I think he could feel the window closing. But there was always resistance. Not from one person specifically. It was more of a collective instinct. The argument, if you could call it an argument, was that recording a Taupe Francis song would fix it in place, and fixing it killed the thing that made it a Taupe Francis song. \"Anodyne\" on a Tuesday in October to nine people was a different composition than \"Anodyne\" at the Marquee farewell. Same chords, same lyrics, entirely different animal. Which version do you record? The moment you choose, you've lied about all the others.\n\nI recognize the irony. I run a label. I make recordings. Every release on Lowfield is a fixed object. I've thought about this contradiction more than is healthy and I still don't have a clean resolution. I think the truth is that Taupe Francis was a band that could only exist live and I now work with music that can only exist as a recording, and those are two legitimate ways to be, and the distance between them is the distance I traveled, and I don't know how to close it.",
      replies: [],
    },
  ],
})

// --- 12. The Ume record / Cal ---
COMMENTS.push({
  u: "ambient_receiver",
  text: "Going back to Lowfield. The Ume record. It's beautiful but it's heavy. Like emotionally heavy. Was that a deliberate direction or did the music just arrive that way?",
  votes: 134,
  time: "3 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 312,
      time: "3 hr. ago",
      text: "It arrived about eighty percent finished. Ume works alone, records in her apartment in Mesa, sends me near-complete things. My role on most Lowfield releases is closer to editor than producer. I listen. I suggest where something could breathe more, where a texture could recede, where a silence is pulling its weight and where it's just empty. With the Ume record I brought in Cal Bardem to help with the mix.",
      replies: [
        {
          u: "tape_hiss_forever",
          votes: 201,
          time: "3 hr. ago",
          text: "Wait, Cal? Your drummer Cal?",
          replies: [
            {
              u: "marcos_barrera_lowfield",
              op: true,
              votes: 445,
              time: "3 hr. ago",
              text: "Cal's been producing and doing mix work in the Phoenix area for years now. He's still drumming too. Sits in with people, does session work. But the production thing is where he's really found something. He has the best ears of anyone I've worked with, which makes sense if you knew him as a drummer, because what made Cal special behind the kit was the same thing that makes him good in a studio: he hears everything. Not just what's loud or obvious. He hears the relationships between sounds. He found three frequencies on the Ume record that were clouding the low end that I couldn't isolate on my own. Once he pulled those out the whole thing opened up. I trust his ears more than I trust mine, which is saying something because I'm the one whose name is on the label.",
              replies: [
                {
                  u: "tape_hiss_forever",
                  votes: 112,
                  time: "3 hr. ago",
                  text: "So you and Cal stayed tight.",
                  replies: [
                    {
                      u: "marcos_barrera_lowfield",
                      op: true,
                      votes: 678,
                      time: "2 hr. ago",
                      text: "Cal and I never stopped being in each other's lives. We got lucky that way. We're both still in Phoenix. He's the first person I play a mix for. He's the one I call when I'm not sure about a signing. There's a thing that happens when you've played with someone for years where the trust doesn't require maintenance. It's just there. You know what the other person hears. You know what they'd catch that you missed. That's what Cal is for me.\n\nThe rest of the band is further away. Sully's in Flagstaff, I think, or was. We text on birthdays. Matty pops up occasionally when he comes through town and we'll get food and talk around the edges of things without ever quite landing on the center. Lena I haven't heard from in a long time and that bothers me in a way I haven't done anything about, which is its own kind of answer. Jamie and Neel I covered already. People move on. The band was the reason we were all in the same room and without it we're just people who used to be in the same room.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})

// --- 13. Different musical history ---
COMMENTS.push({
  u: "lowtemp_heads",
  text: "Do you think about what Lowfield would be if you'd had a different musical history? Like if you'd come up in ambient or classical instead of a party band?",
  votes: 145,
  time: "5 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 876,
      time: "4 hr. ago",
      awards: 2,
      text: "I think about it the other way. I think Lowfield only exists because of the party band. I spent three years inside the loudest, loosest, most unpredictable musical situation I can imagine. Every show was different. Every room was different. The energy was always high and the stakes felt enormous even though the actual stakes were, you know, whether two hundred drunk college kids had a good time on a Wednesday. And then it ended. All at once. And I was twenty-five and I didn't have a band and I didn't know what to do with my ears.\n\nWhat I found, slowly, was that I was drawn to silence. Or not silence exactly. To music that treated space as a material. Music where the gap between the notes was as important as the notes. I think some part of me was looking for the opposite of what I'd been doing. Not because I rejected it. Because I'd used up everything I had for that kind of intensity and what was left was quieter. Lowfield isn't a reaction against Taupe Francis. It's what grew in the space Taupe Francis left.\n\nThat sounds more poetic than I mean it. I just like quiet music now. Maybe I always did and the trumpet was louder.",
      replies: [],
    },
  ],
})

// --- 14. Night three (direct ask) ---
COMMENTS.push({
  u: "desert_grrl",
  text: "Night three. I think I've been patient.",
  votes: 445,
  time: "4 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 3211,
      time: "4 hr. ago",
      awards: 7,
      text: "You have.\n\nOkay. Night three.\n\nFirst five songs were great. The crowd was ready. It was the last night and everyone knew it and there was that specific energy of a room that's decided to be present, no phones, no side conversations, just a few hundred people who came because this thing mattered to them. We opened with \"Lemons,\" which was always the one that got the room moving fastest, and it worked. People were singing along by the second chorus. We rolled through \"Backyard Diplomat\" and \"Your Mom's Volvo\" and \"Tempe Town Fake\" and the set was flowing the way a set flows when everything's right.\n\nThen we hit the part of the set where we were going to play \"Anodyne.\"\n\nFor people who don't know, \"Anodyne\" was the big one. It started slow, built for seven or eight minutes, and by the end the whole room would be moving and shouting the last chorus back at Jamie. It was the peak of every set we played. The thing you could count on. Neel's best lyric set to the most patient groove Cal and Sully ever built, and when it hit the top, it hit.\n\nJamie stepped to the mic. Cal counted in. And Jamie didn't sing.\n\nHe just stood there. Mic in his hand, mouth slightly open, looking out at the room. And I could see it happen. I could see the full weight of what was ending land on him in real time. This wasn't a performance. He wasn't building tension. He was stuck. He'd walked to the edge of the last time he'd ever sing this song and his body had decided to stop.\n\nCal read it before anyone else. He dropped the count and went to just hi-hat. Very soft. Not keeping time so much as keeping the room from tipping over. Sully felt it and pulled the bass way down, just the root note, pulsing. Neel started playing these gentle sustained chords, the kind of playing you do when you're supporting someone, not performing. Matty went quiet. Lena muted her guitar and stood still.\n\nI was at the side of the stage and I did something I hadn't planned. I turned all my effects off. Disconnected the delay, the reverb, everything. And I played the melody of \"Anodyne\" on clean trumpet. Just the horn and the room. No processing. The first time I'd played fully clean in a Taupe Francis show in probably two years. It felt like taking off a mask. The melody sat there, naked, and the room went very still.\n\nJamie listened. I could see him listening. Fifteen seconds. Maybe twenty. And then he started talking.\n\nNot singing. Talking into the mic. Quietly, the way you talk to someone standing right next to you. He said something about the first house show on Rural Road where the PA was a guitar amp and a prayer. He said something about a Tuesday night at Yucca Tap Room where nine people came and they played for two hours because nobody wanted to stop. He talked about the name. How they'd picked it the week Pope Francis was elected because Neel said \"that's the most beige pope we've ever had\" and Sully said \"Taupe Francis\" and everyone laughed and it stuck and they spent years explaining it was a pun to people who didn't get it and that was part of the joke too, that you had to explain it, that it was always a little bit stupid and the stupidity was the point.\n\nHe talked for maybe two minutes. I kept playing the melody underneath him, very softly, just holding the shape of the song while he talked around it. The room was absolutely silent except for Jamie and the horn and Cal's hi-hat.\n\nThen Jamie said something like, \"This was never really a band. It was just an excuse to be in the same room.\" And he laughed. Short. Honest. And then he said, \"Okay. One more time.\" And Cal counted in, and we played \"Anodyne\" for the last time, and the room sang every word back.",
      replies: [
        {
          u: "desert_grrl",
          votes: 1567,
          time: "4 hr. ago",
          awards: 3,
          text: "I was in the fifth row. The girl next to me was crying during the talking part. I didn't know her. We held hands through the whole last chorus. I never saw her again.",
          replies: [
            {
              u: "marcos_barrera_lowfield",
              op: true,
              votes: 2345,
              time: "4 hr. ago",
              awards: 2,
              text: "That's the thing about those rooms. You share something enormous with a stranger and then you walk out into a parking lot and it's over and you go back to being someone who wasn't there. Except you were.",
              replies: [],
            },
          ],
        },
      ],
    },
  ],
})

// --- 15. After the farewell ---
COMMENTS.push({
  u: "desert_grrl",
  text: "One more question. After that night, after the farewell, what happened to you specifically? Like the next day. The next week.",
  votes: 389,
  time: "2 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 2678,
      time: "2 hr. ago",
      awards: 5,
      text: "The next morning I took all my pedals and my effects chain and I put them in a case and I put the case on the top shelf of my closet. I kept the trumpet out. I'd sit on my couch and play long tones. No effects. No reverb. Just the horn and the apartment. I did this for months. I wasn't practicing in any disciplined sense. I was listening to what the instrument sounded like without anything between it and the air.\n\nI think I was trying to figure out what was mine. For three years my sound had been the trumpet plus the effects chain plus the room plus five other people plus whoever sat in that night. Take all of that away and what's left? A guy on a couch with a horn. What does that guy sound like? I didn't know. I'd never bothered to find out.\n\nSomewhere in that period I stopped playing entirely. Not a decision. I just picked up the trumpet one morning and didn't want to put it to my mouth. So I didn't. And I started listening instead. Obsessively. For hours. I'd find a record and listen to it three times in a row, trying to hear everything, the production choices, the way the reverb was tuned, where the silence fell. I was doing with other people's music what I used to do with the live mix at a Taupe Francis show: paying attention to the whole sound, not just the notes. That's when I started thinking about a label. Not because I had a business plan. Because I'd found this other way of being inside music that didn't require me to play. I could be the one who hears it and holds it and gives it to someone else.\n\nLowfield is me on that couch. Still listening. Just not playing anymore.",
      replies: [
        {
          u: "desert_grrl",
          votes: 567,
          time: "2 hr. ago",
          awards: 1,
          text: "Thank you for that answer.",
          replies: [],
        },
      ],
    },
  ],
})

// --- 16. Where to start ---
COMMENTS.push({
  u: "newish_listener",
  text: "I found Taupe Francis through a deep dive playlist. Where should I start if I want to hear what they actually sounded like?",
  votes: 89,
  time: "2 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 1567,
      time: "1 hr. ago",
      awards: 2,
      text: "You can't. That's the honest answer and I'm sorry if it's unsatisfying. There are phone videos from shows that capture maybe ten percent of what it felt like. The sound is always thin and the room is always louder than the band and you lose the low end entirely, which means you lose Cal and Sully and most of Matty, and once you lose the rhythm section you've lost the thing that held everything together. It's like watching a video of a sunset. Technically accurate. Completely wrong.\n\nIf you want to hear the closest thing, that SoundCloud upload of \"Sun Dog\" has something in it. It's a rehearsal, so it's loose and unfinished and there's a moment near the end where you can hear Jamie laugh and then lean back into the verse, and that transition, from laughter to singing without breaking the line, that's what the band was. Not the polish. The ease. The sense that the music and the living were the same thing.",
      replies: [],
    },
  ],
})

// --- 17. What's next for Lowfield ---
COMMENTS.push({
  u: "vinyl_rut",
  text: "What's next for Lowfield?",
  votes: 78,
  time: "1 hr. ago",
  replies: [
    {
      u: "marcos_barrera_lowfield",
      op: true,
      votes: 234,
      time: "1 hr. ago",
      text: "Two releases this spring. One is a solo guitar record that's unlike anything I've put out before. Very slow, very deliberate, long pieces where you can hear the room the guitar was recorded in as much as the guitar itself. The other I can't talk about yet but I'll say it's the first Lowfield release involving a horn and leave it there.",
      replies: [
        {
          u: "tape_hiss_forever",
          votes: 312,
          time: "1 hr. ago",
          text: "A horn? YOUR horn?",
          replies: [
            {
              u: "marcos_barrera_lowfield",
              op: true,
              votes: 567,
              time: "1 hr. ago",
              text: "I said I'd leave it there.",
              replies: [
                {
                  u: "desert_grrl",
                  votes: 445,
                  time: "1 hr. ago",
                  text: "I swear to god Marcos if you're burying the lede here.",
                  replies: [
                    {
                      u: "marcos_barrera_lowfield",
                      op: true,
                      votes: 1890,
                      time: "58 min. ago",
                      awards: 3,
                      text: "I'm not confirming anything. I'm just saying there's a horn on a record and the record is coming out on Lowfield and that's all I'm going to say right now.\n\nListen. Thank you all for this. I came here to talk about the label and I ended up talking about the band for two hours and I don't regret it. Lowfield is the thing I'm building. Taupe Francis is the thing that built me. Both of those are true and I'm still figuring out the relationship between them.\n\nGo listen to the Ume record. It's called Still Life with Traffic. It's the best thing on the label and it deserves more ears than I can give it on my own.\n\nAnd if anyone has a clean recording from the second farewell night, the stretch in the middle with Damon on sax and the violinist, please reach out. I know I said the version in my head might be better than anything a phone captured. But I think I'm ready to find out.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export default function AMA() {
  return (
    <div style={{ background: R.bg, ...redditFont, color: R.text }}>
      {/* Reddit nav bar */}
      <div style={{
        background: R.card,
        borderBottom: `1px solid ${R.border}`,
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="28" height="28" viewBox="0 0 20 20" fill="#ff4500">
            <circle cx="10" cy="10" r="10" />
            <circle cx="10" cy="10" r="8.5" fill={R.card} />
            <circle cx="10" cy="8" r="4" fill="#ff4500" />
            <circle cx="7" cy="7" r="1" fill="white" />
            <circle cx="13" cy="7" r="1" fill="white" />
            <ellipse cx="10" cy="12" rx="3" ry="1.5" fill="#ff4500" />
          </svg>
          <span style={{ fontWeight: 700, fontSize: "18px", letterSpacing: "-0.5px" }}>
            reddit
          </span>
        </div>
        <div style={{
          background: R.input,
          borderRadius: "20px",
          padding: "8px 16px",
          flex: 1,
          maxWidth: "min(92vw, 1400px)",
          color: R.muted,
          fontSize: "14px",
          border: `1px solid ${R.border}`,
        }}>
          Search Reddit
        </div>
      </div>

      {/* Subreddit header */}
      <div style={{ background: "#1a3a5c", height: "64px" }} />
      <div style={{
        background: R.card,
        borderBottom: `1px solid ${R.border}`,
        padding: "0 16px",
      }}>
        <div style={{
          maxWidth: "min(92vw, 1400px)",
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-end",
          gap: "12px",
          transform: "translateY(-12px)",
        }}>
          <div style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "#ff6b35",
            border: `4px solid ${R.card}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: 700,
            color: "white",
          }}>
            {"\ud83c\udfb5"}
          </div>
          <div style={{ paddingBottom: "12px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
              r/indieheads
            </h1>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div style={{ maxWidth: "min(92vw, 1400px)", margin: "16px auto", padding: "0 16px" }}>
        {/* Post card */}
        <div style={{
          background: R.card,
          border: `1px solid ${R.border}`,
          borderRadius: "4px",
          display: "flex",
        }}>
          {/* Vote sidebar */}
          <div style={{
            padding: "8px 4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#161617",
            borderRadius: "4px 0 0 4px",
            minWidth: "40px",
          }}>
            <Votes n={1847} />
          </div>

          {/* Post content */}
          <div style={{ padding: "8px 12px", flex: 1 }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flexWrap: "wrap",
              marginBottom: "8px",
            }}>
              <span style={{
                background: R.orange,
                color: "white",
                fontSize: "12px",
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: "12px",
              }}>
                AMA
              </span>
              <span style={{ fontSize: "12px", color: R.muted }}>Posted by</span>
              <span style={{ fontSize: "12px", color: R.link, fontWeight: 500 }}>
                u/marcos_barrera_lowfield
              </span>
              <span style={{ fontSize: "12px", color: R.muted }}>{"\u00b7"} 8 hr. ago</span>
              <Award count={4} />
            </div>

            <h2 style={{ fontSize: "20px", fontWeight: 600, margin: "0 0 12px", lineHeight: 1.3 }}>
              I run Lowfield Records, a small instrumental/ambient label out of Phoenix. AMA.
            </h2>

            <div style={{ fontSize: "14px", lineHeight: "21px", whiteSpace: "pre-wrap", marginBottom: "12px" }}>
              {"Hey all. I'm Marcos Barrera. I started Lowfield Records in 2020 out of my apartment with about $800 and a Bandcamp page. We've put out fourteen releases in five years, mostly instrumental, mostly ambient or ambient-adjacent, mostly stuff that doesn't have a natural home on any playlist or in any algorithm. Our newest release is Still Life with Traffic by Ume, which came out last Friday and which I'm very proud of. I'm here to talk about the label, independent music in the Phoenix area, the reality of putting out records that move in the low hundreds, or whatever else. Ask me anything."}
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              borderTop: `1px solid ${R.border}`,
              paddingTop: "8px",
            }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: R.muted, padding: "4px 8px" }}>
                312 Comments
              </span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: R.muted, padding: "4px 8px" }}>
                Share
              </span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: R.muted, padding: "4px 8px" }}>
                Save
              </span>
            </div>
          </div>
        </div>

        {/* Sort bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 0",
          fontSize: "12px",
          color: R.muted,
        }}>
          <span>Sort by:</span>
          <span style={{
            color: R.link,
            fontWeight: 600,
            padding: "4px 8px",
            background: R.input,
            borderRadius: "20px",
          }}>
            {"Best \u25be"}
          </span>
        </div>

        {/* Comments section */}
        <div style={{
          background: R.card,
          border: `1px solid ${R.border}`,
          borderRadius: "4px",
          padding: "16px",
        }}>
          {COMMENTS.map((c, i) => (
            <div key={i} style={{ marginBottom: i < COMMENTS.length - 1 ? "16px" : "0" }}>
              <Comment {...c} depth={0} />
            </div>
          ))}
        </div>

        <div style={{ height: "40px" }} />
      </div>
    </div>
  )
}
