import { useState } from 'react'

const Y = {
  bg: "#0f0f0f",
  surface: "#272727",
  text: "#f1f1f1",
  textSecondary: "#aaaaaa",
  link: "#3ea6ff",
  border: "#3f3f3f",
  chip: "#263850",
  chipText: "#3ea6ff",
}

const ytFont = {
  fontFamily: '"Roboto", "Arial", sans-serif',
}

function ThumbUp({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={Y.textSecondary}>
      <path d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H1v11h16.2c1.1 0 2.06-.74 2.32-1.82l1.94-7.95c.46-1.88-.84-3.23-2.69-3.23zM7 20H3v-9h4v9zm12.98-6.83l-1.94 7.95c-.05.2-.24.38-.46.38H9V11.58l5.57-6.14c.11-.11.22-.14.31-.14.22 0 .44.2.38.47l-1.79 5.83H20c.34 0 .62.15.76.41.13.25.12.55-.02.82l-.76.34z" />
    </svg>
  )
}

function ThumbDown({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={Y.textSecondary}>
      <path d="M17 4h-1H6.57C5.5 4 4.48 4.65 4.09 5.56L1.18 12.5c-.11.25-.18.52-.18.8V15c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24l6.59-6.59c.36-.36.58-.86.58-1.41V6c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L14 12H3v-1.21l2.89-6.78c.09-.19.25-.34.43-.42.18-.09.38-.13.58-.09H17v8.5zm2-12h4v12h-4V4z" />
    </svg>
  )
}

function YTComment({ username, text, time, likes, isPinned, isHeart, replies = [], isFirstWithReplies, isOpen, onToggle }) {
  const showReplies = isOpen || false
  const initial = username.charAt(0).toUpperCase()

  const colors = [
    "#ef6c00", "#00897b", "#5e35b1", "#d81b60",
    "#1e88e5", "#43a047", "#8e24aa", "#e53935",
    "#3949ab", "#00acc1", "#7cb342", "#f4511e",
  ]
  const colorIndex = username.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length
  const avatarColor = colors[colorIndex]

  return (
    <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
      {/* Avatar */}
      <div style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: avatarColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        fontWeight: 500,
        color: "white",
        flexShrink: 0,
      }}>
        {initial}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        {isPinned && (
          <div style={{ fontSize: "12px", color: Y.textSecondary, marginBottom: "4px", display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill={Y.textSecondary}><path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" /></svg>
            Pinned by BakeryBasement
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
          <span style={{
            fontSize: "13px",
            fontWeight: 500,
            color: Y.text,
          }}>
            @{username}
          </span>
          <span style={{ fontSize: "12px", color: Y.textSecondary }}>{time}</span>
        </div>
        <div style={{
          fontSize: "14px",
          lineHeight: "20px",
          color: Y.text,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}>
          {text}
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "8px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2px", cursor: "pointer" }}>
            <ThumbUp size={18} />
            {likes > 0 && (
              <span style={{ fontSize: "12px", color: Y.textSecondary, marginLeft: "2px" }}>{likes}</span>
            )}
          </div>
          <ThumbDown size={18} />
          <span style={{
            fontSize: "12px",
            fontWeight: 500,
            color: Y.textSecondary,
            cursor: "pointer",
            padding: "4px 8px",
          }}>
            Reply
          </span>
          {isHeart && (
            <span style={{ fontSize: "14px" }}>{"\u2764\ufe0f"}</span>
          )}
        </div>

        {/* Replies */}
        {replies.length > 0 && (
          <div style={{ marginTop: "8px" }}>
            {!showReplies ? (
              <button
                onClick={() => onToggle && onToggle()}
                style={{
                  background: "none",
                  border: "none",
                  color: Y.link,
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  padding: "8px 12px 8px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  animation: isFirstWithReplies ? "replyHint 2s ease-in-out 3" : "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={Y.link}>
                  <path d="M7 10l5 5 5-5z" />
                </svg>
                {replies.length} {replies.length === 1 ? "reply" : "replies"}
              </button>
            ) : (
              <div style={{ marginTop: "8px" }}>
                <button
                  onClick={() => onToggle && onToggle()}
                  style={{
                    background: "none",
                    border: "none",
                    color: Y.link,
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    padding: "8px 12px 8px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "8px",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={Y.link}>
                    <path d="M7 14l5-5 5 5z" />
                  </svg>
                  {replies.length} {replies.length === 1 ? "reply" : "replies"}
                </button>
                {replies.map((r, i) => (
                  <YTComment key={i} {...r} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// COMMENT DATA
// ═══════════════════════════════════════════════════════════

const COMMENTS = []

COMMENTS.push({
  username: "folkpurist2011",
  time: "6 years ago",
  text: "this is it. this is the one. if you weren't there you'll never understand what this band was before they sold out",
  likes: 47,
  replies: [
    {
      username: "jenscrane",
      time: "6 years ago",
      text: "oh my god not this again",
      likes: 89,
    },
    {
      username: "folkpurist2011",
      time: "6 years ago",
      text: "@jenscrane you can pretend all you want but we both know what happened in 2018",
      likes: 12,
    },
  ],
})

COMMENTS.push({
  username: "digdugboss84",
  time: "5 years ago",
  text: "I keep coming back to this. I heard Nest in a Subaru Outback commercial last month and I wanted to throw my TV out the window. This version\u2014THIS version\u2014is what it was supposed to be. Seventeen people in a basement that smelled like bread and someone's wet dog. Now it's selling cars to people who think NPR is edgy.",
  likes: 234,
  replies: [
    {
      username: "jenscrane",
      time: "5 years ago",
      text: "@digdugboss84 musicians need to eat. the commercial didn't change the song",
      likes: 67,
    },
    {
      username: "folkpurist2011",
      time: "5 years ago",
      text: "@jenscrane IT LITERALLY CHANGED THE SONG. They cut the third verse. They added strings that weren't there. They AUTO-TUNED Iris's voice. I have the original session files, I can prove this",
      likes: 31,
    },
    {
      username: "jenscrane",
      time: "5 years ago",
      text: "you have the session files? how?",
      likes: 18,
    },
    {
      username: "folkpurist2011",
      time: "5 years ago",
      text: "I know people",
      likes: 5,
    },
  ],
})

COMMENTS.push({
  username: "sarahwitha_h",
  time: "5 years ago",
  text: "this comment section is insane. I just discovered this band last week and I think they're beautiful. what's the big deal?",
  likes: 156,
  replies: [
    {
      username: "digdugboss84",
      time: "5 years ago",
      text: "@sarahwitha_h the big deal is you discovered them through an algorithm that only exists because they took Subaru's money. we discovered them because someone's cousin knew someone who booked house shows. that's the difference",
      likes: 43,
    },
    {
      username: "sarahwitha_h",
      time: "5 years ago",
      text: "so\u2026 you're mad that other people get to hear them now?",
      likes: 201,
    },
  ],
})

COMMENTS.push({
  username: "folkpurist2011",
  time: "5 years ago",
  text: "@sarahwitha_h we're mad because they CHANGED. This version right here? May 2013? Iris is crying during the second chorus. Actually crying. You can hear it at 3:47. That's not performance, that's not aesthetic. That's real. The Subaru version? She's smiling. They made her smile for the edit. You can't tell me that's the same band",
  likes: 78,
})

COMMENTS.push({
  username: "bakerybasement",
  time: "5 years ago",
  text: "hey this is wild to come back to. I filmed this on my phone because my friend was running sound and asked me to document it. I never expected it to become a thing. for what it's worth: Iris wasn't crying at 3:47. the microphone was feeding back and she was trying not to laugh. we were all trying not to laugh",
  likes: 312,
  isHeart: true,
  replies: [
    {
      username: "folkpurist2011",
      time: "5 years ago",
      text: "@bakerybasement that's not what I remember",
      likes: 8,
    },
    {
      username: "bakerybasement",
      time: "5 years ago",
      text: "@folkpurist2011 I was literally holding the camera",
      likes: 445,
    },
  ],
})

COMMENTS.push({
  username: "appalachian_sky",
  time: "4 years ago",
  text: "I was at this show. I was the wet dog, metaphorically speaking. Drove down from Boone because someone posted a flyer at the co-op. This was before anyone knew who they were. The Bakery wasn't even a venue\u2014it was Iris's boyfriend's dad's failed bakery that they were using for storage. There were folding chairs and someone brought a space heater that kept shorting out. Fuckhawk played for eleven people and it felt like a secret",
  likes: 187,
})

COMMENTS.push({
  username: "appalachian_sky",
  time: "4 years ago",
  text: "and yeah, the Subaru thing hurt. not because they got paid. because the commercial made it sound like the song was about adventure and freedom and buying a car that could take you camping. Nest is about Iris's mom dying of lung cancer and how she kept a bird feeder outside the hospice window. it's not about going on a road trip. it's about watching someone disappear",
  likes: 567,
  replies: [
    {
      username: "jenscrane",
      time: "4 years ago",
      text: "@appalachian_sky ok that context makes it worse actually",
      likes: 234,
    },
    {
      username: "digdugboss84",
      time: "4 years ago",
      text: "@appalachian_sky THANK YOU. This is what I've been trying to say",
      likes: 89,
    },
  ],
})

COMMENTS.push({
  username: "tamsinellory",
  time: "3 years ago",
  text: "we were offered money once. good money. to let them use one of our songs in a film about grief. the director said it was perfect, said it captured exactly what the scene needed. we said no because Imogen didn't like how they wanted to cut it. everyone said we were stupid. maybe we were. but I think about that sometimes when I see arguments like this. it's not really about the money or the commercial. it's about whether you still recognize the thing you made after someone else gets their hands on it. I don't know if Fuckhawk still recognizes Nest. but I know they're the only ones who get to decide that",
  likes: 423,
})

COMMENTS.push({
  username: "tommylichtenstein",
  time: "3 years ago",
  text: "Genuine question: if the band needed money for Iris's medical bills (I heard she had surgery in 2017), does that change anything? Or is it still selling out?",
  likes: 156,
  replies: [
    {
      username: "folkpurist2011",
      time: "3 years ago",
      text: "@tommylichtenstein where did you hear that?",
      likes: 5,
    },
    {
      username: "tommylichtenstein",
      time: "3 years ago",
      text: "@folkpurist2011 someone in the Asheville scene mentioned it. might be bullshit",
      likes: 3,
    },
  ],
})

COMMENTS.push({
  username: "sarahwitha_h",
  time: "3 years ago",
  text: "I can't believe I'm still getting notifications from this video",
  likes: 345,
  replies: [
    {
      username: "jenscrane",
      time: "3 years ago",
      text: "@sarahwitha_h welcome to the discourse",
      likes: 178,
    },
  ],
})

COMMENTS.push({
  username: "actual_iris_Rue",
  time: "2 years ago",
  text: "hi this is Iris. someone sent me this thread. a few clarifications: 1) I don't have access to this account anymore so I can't verify, but yes, this is me. 2) I wasn't crying at 3:47, I was laughing because the space heater caught fire briefly and no one else noticed. 3) The Subaru people did not make me smile. I smiled because I was imagining my mom, who drove a 1987 Subaru GL wagon until it died, seeing her daughter's song on TV. She would have thought that was funny. 4) I used some of the licensing money to pay for my top surgery. Not that I owe anyone an explanation, but since we're all being so honest here",
  likes: 2134,
  replies: [
    {
      username: "folkpurist2011",
      time: "2 years ago",
      text: "@actual_iris_Rue this is not Iris. Iris doesn't use social media",
      likes: 3,
    },
    {
      username: "actual_iris_Rue",
      time: "2 years ago",
      text: "@folkpurist2011 you're right, I don't. but my partner showed me this thread six months ago and I've been thinking about it ever since. you don't own this song. you don't own this band. you don't own what it meant. you were there one night in 2013 and you're still trying to keep it in that basement",
      likes: 1567,
    },
  ],
})

COMMENTS.push({
  username: "digdugboss84",
  time: "2 years ago",
  text: "I don't know if that's really Iris but if it is: I'm sorry. I didn't mean it like that",
  likes: 234,
})

COMMENTS.push({
  username: "appalachian_sky",
  time: "2 years ago",
  text: "@actual_iris_Rue if this is you, I'm the one who brought the wet dog (his name was Brutus and he died in 2019). thank you for that show. I think about it every time I hear this song, even the Subaru version",
  likes: 456,
})

COMMENTS.push({
  username: "jenscrane",
  time: "2 years ago",
  text: "this got extremely real extremely fast",
  likes: 567,
})

COMMENTS.push({
  username: "bakerybasement",
  time: "2 years ago",
  text: "@actual_iris_Rue hey. if this is you, thank you for playing that night. the Bakery got demolished in 2021 to build condos but I still have the recording. I'm glad people found it",
  likes: 345,
})

COMMENTS.push({
  username: "folkpurist2011",
  time: "2 years ago",
  text: "I've been thinking about this for three days and I think I was wrong. not about the song being different, but about why it mattered. I'm sorry Iris. if that was you",
  likes: 289,
})

COMMENTS.push({
  username: "sarahwitha_h",
  time: "1 year ago",
  text: "I come back to this comment section every few months and it's like watching people work through grief in real time",
  likes: 678,
})

COMMENTS.push({
  username: "newuser_2024",
  time: "3 months ago",
  text: "why is everyone acting like this band is Radiohead or something? they have 40k monthly listeners on Spotify",
  likes: 2,
  replies: [
    {
      username: "digdugboss84",
      time: "3 months ago",
      text: "@newuser_2024 you had to be there",
      likes: 134,
    },
    {
      username: "appalachian_sky",
      time: "3 months ago",
      text: "@newuser_2024 it's not about how many people listened. it's about what it felt like when we did",
      likes: 267,
    },
  ],
})

COMMENTS.push({
  username: "folkpurist2011",
  time: "2 months ago",
  text: "I'm moving to Portland next month and I'm selling a bunch of stuff. Found the old show flyer from The Bakery in a box. May 18, 2013. It says \"Fuckhawk (from Asheville) plus two other bands TBA.\" Cover was $3. I'm keeping it",
  likes: 345,
})

COMMENTS.push({
  username: "actual_iris_Rue",
  time: "3 weeks ago",
  text: "we're playing a reunion show at The Grey Eagle in June. small venue. no livestream. if any of you want to come, come. if you want to stay mad about 2018, that's fine too. I'll be there either way",
  likes: 1890,
  replies: [
    {
      username: "bakerybasement",
      time: "3 weeks ago",
      text: "@actual_iris_Rue I'll be there",
      likes: 234,
    },
    {
      username: "jenscrane",
      time: "3 weeks ago",
      text: "@actual_iris_Rue see you there",
      likes: 178,
    },
  ],
})

COMMENTS.push({
  username: "digdugboss84",
  time: "2 weeks ago",
  text: "@actual_iris_Rue I bought a ticket. I don't know what I'm expecting but I'll be there",
  likes: 156,
})

COMMENTS.push({
  username: "folkpurist2011",
  time: "1 week ago",
  text: "@actual_iris_Rue I can't make it to Asheville but thank you for this. I mean it",
  likes: 89,
})

COMMENTS.push({
  username: "sarahwitha_h",
  time: "4 days ago",
  text: "I've been following this thread for four years and I'm crying at my desk. I'm flying in from Chicago for the show",
  likes: 456,
})

COMMENTS.push({
  username: "appalachian_sky",
  time: "2 days ago",
  text: "Brutus would have loved this",
  likes: 1234,
})

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export default function Rue() {
  const [openThread, setOpenThread] = useState(null)

  return (
    <div style={{ background: Y.bg, ...ytFont, color: Y.text, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes replyHint {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}} />

      {/* YouTube top bar */}
      <div style={{
        background: "#0f0f0f",
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          <svg width="90" height="20" viewBox="0 0 90 20" fill="none">
            <rect x="0" y="2" width="28" height="16" rx="4" fill="#ff0000" />
            <path d="M11 6l8 4-8 4V6z" fill="white" />
            <text x="32" y="15" fill="white" fontSize="14" fontWeight="700" fontFamily="Roboto, Arial, sans-serif">YouTube</text>
          </svg>
        </div>
        <div style={{
          flex: 1,
          maxWidth: "min(92vw, 1200px)",
          display: "flex",
          margin: "0 auto",
        }}>
          <div style={{
            flex: 1,
            background: "#121212",
            border: "1px solid #303030",
            borderRadius: "20px 0 0 20px",
            padding: "6px 16px",
            color: Y.textSecondary,
            fontSize: "14px",
          }}>
            Search
          </div>
          <div style={{
            background: "#222",
            border: "1px solid #303030",
            borderLeft: "none",
            borderRadius: "0 20px 20px 0",
            padding: "6px 16px",
            display: "flex",
            alignItems: "center",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill={Y.textSecondary}>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "min(92vw, 1400px)", margin: "0 auto", padding: "24px 24px 80px" }}>
        {/* Video player area */}
        <div style={{
          width: "100%",
          aspectRatio: "16/9",
          background: "#000",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          marginBottom: "12px",
        }}>
          {/* Fake video still - dark basement venue */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 40%, #2a1f15 0%, #0a0804 70%)",
          }} />
          {/* Warm light suggestion */}
          <div style={{
            position: "absolute",
            top: "30%",
            left: "45%",
            width: "120px",
            height: "80px",
            background: "radial-gradient(ellipse, rgba(255,180,80,0.15) 0%, transparent 70%)",
          }} />
          {/* Play button */}
          <div style={{
            width: "68px",
            height: "48px",
            background: "rgba(255,0,0,0.8)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 1,
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          {/* Duration */}
          <div style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            background: "rgba(0,0,0,0.8)",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: 500,
            color: "white",
          }}>
            6:47
          </div>
        </div>

        {/* Video title */}
        <h1 style={{
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: 1.3,
          margin: "0 0 8px",
          color: Y.text,
        }}>
          RUE - "NEST" | LIVE AT THE BAKERY | ASHEVILLE, NC - MAY 2013
        </h1>

        {/* Video meta */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "16px",
          paddingBottom: "16px",
          borderBottom: `1px solid ${Y.border}`,
        }}>
          {/* Channel info */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#4a3520",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: 700,
              color: "#c8a87a",
            }}>
              BB
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 500, color: Y.text }}>
                BakeryBasement
              </div>
              <div style={{ fontSize: "12px", color: Y.textSecondary }}>
                1.8K subscribers
              </div>
            </div>
            <button style={{
              background: "white",
              color: "black",
              border: "none",
              borderRadius: "20px",
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              marginLeft: "8px",
            }}>
              Subscribe
            </button>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              background: Y.surface,
              borderRadius: "20px",
              overflow: "hidden",
            }}>
              <div style={{
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                borderRight: `1px solid ${Y.border}`,
              }}>
                <ThumbUp size={20} />
                <span style={{ fontSize: "13px", fontWeight: 500 }}>968</span>
              </div>
              <div style={{ padding: "8px 12px", cursor: "pointer" }}>
                <ThumbDown size={20} />
              </div>
            </div>
            <div style={{
              background: Y.surface,
              borderRadius: "20px",
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill={Y.text}>
                <path d="M15 5.63L20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z" />
              </svg>
              <span style={{ fontSize: "13px", fontWeight: 500 }}>Share</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={{
          background: Y.surface,
          borderRadius: "12px",
          padding: "12px 16px",
          marginBottom: "24px",
        }}>
          <div style={{ fontSize: "14px", fontWeight: 500, color: Y.text, marginBottom: "4px" }}>
            4.7K views {"\u00b7"} 12 years ago <span style={{ color: Y.textSecondary, fontWeight: 400 }}>#rue #asheville #thebakerync</span>
          </div>
          <div style={{ fontSize: "14px", lineHeight: "20px", color: Y.text }}>
            Handheld footage of a four-piece chamber folk band performing in a small basement venue. Acoustic guitar, cello, minimal percussion. Approximately 20 people in attendance. Audio quality is surprisingly clear despite the setting. The song "Nest" runs 6:47. At 3:47, there appears to be a brief equipment malfunction that causes the performer to break character momentarily.
          </div>
        </div>

        {/* Comments section */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{
            fontSize: "16px",
            fontWeight: 600,
            color: Y.text,
            marginBottom: "24px",
          }}>
            {COMMENTS.length} Comments
          </div>

          {/* Sort */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill={Y.text}>
              <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
            </svg>
            <span style={{ fontSize: "14px", fontWeight: 500, color: Y.text }}>Sort by</span>
          </div>

          {/* Comment input */}
          <div style={{
            display: "flex",
            gap: "12px",
            marginBottom: "32px",
            alignItems: "flex-start",
          }}>
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#606060",
              flexShrink: 0,
            }} />
            <div style={{
              flex: 1,
              borderBottom: `1px solid ${Y.border}`,
              paddingBottom: "8px",
              fontSize: "14px",
              color: Y.textSecondary,
            }}>
              Add a comment...
            </div>
          </div>

          {/* Comments */}
          {(() => {
            let firstRepliesFound = false;
            return COMMENTS.map((c, i) => {
              const isFirst = !firstRepliesFound && c.replies && c.replies.length > 0;
              if (isFirst) firstRepliesFound = true;
              return <YTComment key={i} {...c} isFirstWithReplies={isFirst} isOpen={openThread === i} onToggle={() => setOpenThread(openThread === i ? null : i)} />;
            });
          })()}
        </div>
      </div>
    </div>
  )
}
