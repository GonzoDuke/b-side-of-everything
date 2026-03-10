export default function BlindFoldTest() {
  function TrackBreak({ number }) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        margin: "40px 0 28px",
      }}>
        <div style={{ flex: 1, height: "1px", background: "#d4cfc5" }} />
        <div style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: "16px",
          color: "#8a7d6b",
          letterSpacing: "0.15em",
          whiteSpace: "nowrap",
        }}>
          {"\u2732"} Track {number} {"\u2732"}
        </div>
        <div style={{ flex: 1, height: "1px", background: "#d4cfc5" }} />
      </div>
    )
  }

  function Boone({ children }) {
    return (
      <div style={{
        margin: "0 0 18px",
        paddingLeft: "20px",
        borderLeft: "2px solid #b8a88a",
      }}>
        <div style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: "11px",
          fontWeight: 400,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#8a7d6b",
          marginBottom: "4px",
        }}>
          Boone
        </div>
        <div style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: "16px",
          lineHeight: 1.7,
          color: "#2a2418",
        }}>
          {children}
        </div>
      </div>
    )
  }

  function FortyFour({ children }) {
    return (
      <div style={{
        margin: "0 0 18px",
        paddingLeft: "20px",
      }}>
        <div style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#aaa",
          marginBottom: "4px",
        }}>
          Forty-Four
        </div>
        <div style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "14px",
          lineHeight: 1.7,
          color: "#555",
        }}>
          {children}
        </div>
      </div>
    )
  }

  function Narration({ children }) {
    return (
      <p style={{
        margin: "0 0 18px",
        fontFamily: '"DM Sans", sans-serif',
        fontSize: "14.5px",
        lineHeight: 1.75,
        color: "#4a4a4a",
      }}>
        {children}
      </p>
    )
  }

  function Editorial({ children }) {
    return (
      <p style={{
        margin: "0 0 18px",
        fontFamily: '"DM Sans", sans-serif',
        fontSize: "14px",
        lineHeight: 1.7,
        color: "#777",
        fontStyle: "italic",
        paddingLeft: "20px",
        borderLeft: "2px solid #e0dbd0",
      }}>
        {children}
      </p>
    )
  }

  return (
    <div style={{
      background: "#e8e3d8",
      minHeight: "100vh",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&display=swap" rel="stylesheet" />

      <div style={{
        maxWidth: "660px",
        margin: "0 auto",
        background: "#f5f1e8",
        minHeight: "100vh",
        boxShadow: "0 0 20px rgba(0,0,0,0.08)",
      }}>
        {/* Masthead */}
        <div style={{
          padding: "40px clamp(20px, 5vw, 48px) 32px",
          borderBottom: "2px solid #2a2418",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}>
            <div>
              <div style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: "48px",
                fontWeight: 400,
                color: "#2a2418",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>
                Forty-Four
              </div>
              <div style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "11px",
                fontWeight: 400,
                color: "#8a7d6b",
                marginTop: "4px",
                letterSpacing: "0.05em",
              }}>
                The Music Department Journal of Waukesha College
              </div>
            </div>
            <div style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "11px",
              color: "#8a7d6b",
              textAlign: "right",
              lineHeight: 1.5,
            }}>
              Issue 22<br />
              Spring 2026
            </div>
          </div>
        </div>

        <div style={{ padding: "40px clamp(20px, 5vw, 48px) 64px" }}>
          <div style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#b8a88a",
            marginBottom: "12px",
          }}>
            The Blindfold Test
          </div>

          <h1 style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#2a2418",
            margin: "0 0 8px",
          }}>
            Claudette Boone
          </h1>

          <div style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "13px",
            color: "#999",
            marginBottom: "32px",
          }}>
            Conducted and edited by <span style={{ color: "#666" }}>Kelly Platz</span>
          </div>

          <Narration>For as long as anyone in the department can remember, Professor Boone has said no to this. The Blindfold Test runs in almost every issue, and every year someone pitches her, and every year she declines. Not rudely. Just firmly and without explanation, the way she does most things. I first asked during office hours in the fall of 2024. She said, "I don't do interviews." I asked again at the start of spring semester. She said, "Ask Linden, he loves talking." The third time, over coffee in the department lounge in November, I got as far as explaining the full format before she said, "You want me to sit in a room and guess songs like it's a game show?" I told her it wasn't about guessing. It was about listening. She looked at me for a long time and said, "Fine. But I pick the chair."</Narration>

          <Narration>For anyone who hasn't seen the feature before: the Blindfold Test is borrowed from jazz journalism, where it's been around for decades. A musician listens to recordings with no context. No artist, no title, no genre. They react to what they hear. That's it. What makes it interesting depends entirely on who's listening.</Narration>

          <Narration>Most people reading this have probably had Professor Boone, or sat in on her percussion seminar, or at least heard her in the hallway telling someone that their tempo was aspirational. She's been at Waukesha for fifteen years. She leads the jazz ensemble, teaches theory, and advises more capstone projects than anyone else in the department, mostly because she'll tell you the truth and somehow make you want to hear it. What you might not know, unless you've been paying attention, is that before any of this she played vibraphone professionally in and around Philadelphia for close to a decade. Combos, session work, the kind of gigging life she almost never talks about in class. She still plays a Tuesday residency at Cleo's on Brady Street. Some of us have gone. It's a small room, maybe forty seats, and she plays with a few local guys and it's one of the best things happening in Milwaukee that nobody is covering.</Narration>

          <Narration>The rest of the biography I've put together from things she's said offhand over a few years, which means some of it might be slightly wrong: grew up in West Philly, found percussion through a school music program, found vibes because someone left a pair of mallets on top of one and she picked them up. Temple for school. Gigged constantly. Came to Milwaukee for the job. Once, during a lesson, she told me, "They offered and I was tired of being cold in a city I already knew. Milwaukee is cold in a way I hadn't tried yet." That's about as much as she volunteers.</Narration>

          <Narration>I built the track list for this session around a Minneapolis-based piano trio that a few of us drove up to see at the Icehouse last spring. Myself, Danielle, Tom{"\u00e1"}s, and Webb. We went because Tom{"\u00e1"}s had found them on Bandcamp and wouldn't shut up about it, and the rest of us went mostly to get him to stop talking. The Icehouse is a small room. Maybe a hundred people, and it wasn't full. The trio set up without saying anything. The pianist, a slight guy in glasses who looked like he could be grading papers, sat down and played a single chord and held the pedal and let it decay for what felt like ten seconds. The bassist, who was bigger than I expected and stood completely still the entire set, came in under it. And then the drummer, who I couldn't stop watching, did something with brushes that made the room go quiet in a way that had nothing to do with volume. We drove home at one in the morning and nobody talked for the first forty minutes. The idea to build a Blindfold Test around the band came almost immediately. Getting Professor Boone to say yes took another year.</Narration>

          <Narration>We met in Room 44 (yes, that Room 44) on a Wednesday afternoon in February. She arrived carrying her thermos and wearing a coat that I'm pretty sure is older than I am. She sat in the chair she'd claimed, a rolling office chair she'd wheeled in from a practice room down the hall, adjusted the headphones once, and said, "Let's go. I have ensemble at four."</Narration>

          <TrackBreak number={1} />
          <Boone>[Listens. A long time. Over thirty seconds before she speaks.] Three people. Piano, bass, drums. [Listens.] The piano is being very careful. Not cautious. Careful. There's a difference. Cautious means you're afraid of making a mistake. Careful means you know exactly where you want to put the note and you're not going to rush getting there. [Listens.] The bass knows this. He's not leading. He's confirming. Every time the piano places something, the bass comes in underneath like, yes, that's where it goes. And the drums. [Pauses.] The drums are barely there. You almost don't hear them. But take them away and the whole thing collapses. He's not keeping time. He's keeping the room.</Boone>
          <FortyFour>What do you mean, keeping the room?</FortyFour>
          <Boone>When I play a quiet gig, a really quiet one, there's a point where you stop hearing the music as separate from the space. The notes and the silence and the sound of the room itself all become one thing. That's what this drummer is doing. He's playing the room as much as the kit. Whoever he is, he's done this before. You don't learn that from a book. You learn it from playing a thousand quiet rooms and figuring out that the silence between the notes is yours to shape. [Track ends.] Who is that?</Boone>
          <FortyFour>A group called Thick Rain Trio. Out of Minneapolis. The track is "A Long Time Ago, Before the Story Starts."</FortyFour>
          <Boone>Minneapolis. I don't know them. [Pauses.] Play me another.</Boone>
          <FortyFour>You don't want to talk about the title?</FortyFour>
          <Boone>The title's interesting. It tells you you've already missed something. But I want to hear more of the music before I start making theories about what they think they're doing.</Boone>

          <TrackBreak number={2} />
          <Boone>[Four seconds in, she sits forward. It's sudden. Her hands, which have been resting on the thermos in her lap, move to the armrests of the chair.] That's vibes. [Quietly.] That's vibraphone. [Listens.] And whoever this is, they know what they're doing. Listen to the pedal work. Hear how the notes sustain into each other but never get muddy? That's control. That's someone who understands that the vibraphone wants to ring and your job is to decide how long you let it. Most young players let everything sustain because it sounds pretty. This person is choosing. Every note has a duration and the duration is part of the composition. [Listens.] The voicings are wide. He's spreading the chords out across the instrument instead of clustering them. That takes confidence. You have to trust that the ear will connect the intervals even when they're far apart. [Pauses.] And the touch. Hear how the attack varies? Some notes he's hitting full. Others he's pulling back, almost letting the mallet bounce, so the tone is softer at the front and blooms after. That's not something you think about. That's in the hands.</Boone>
          <FortyFour>You said "he."</FortyFour>
          <Boone>[Pauses.] I hear a young man on this. I could be wrong. But there's something in the phrasing that feels like someone who's still building the architecture of what they want to say, who has all the vocabulary but is still figuring out the sentences. That's not a criticism. That's a stage. A beautiful stage. I wish I could go back to it sometimes.</Boone>
          <Editorial>She's quiet through the rest of the track. When it ends, she doesn't look up immediately.</Editorial>
          <FortyFour>Joel Ross. "Bach (God the Father in Eternity)."</FortyFour>
          <Boone>[Nods slowly.] Joel Ross. I haven't spent enough time with his records. That's on me. I've heard him and I've been impressed, but I haven't sat with it the way I should. [Pauses.] I think I know why. It's hard to listen to someone play your instrument at that level when you've made peace with where you are. Not because it makes you jealous. Because it reminds you of what the instrument can do. And then you have to sit with the distance between that and what you do with it on a Tuesday night at Cleo's. [Pauses.] That's not his problem. That's mine. He sounds free. He sounds like the instrument is exactly where he wants to be, and he's not apologizing for any of it. That's rare.</Boone>
          <Editorial>I need to stop here and say something. I've sat in Professor Boone's classroom for 5 different classes between undergrad and grad. I have never heard her talk about her own playing. Not once. She references technique, she demonstrates, she discusses other musicians. She does not discuss herself as a musician. The fact that she did, here, on the second track, is the reason I wanted to do this.</Editorial>

          <TrackBreak number={3} />
          <Boone>[Fifteen seconds in.] This is the trio again.</Boone>
          <FortyFour>What makes you say that?</FortyFour>
          <Boone>The drummer. He just told me. [Listens.] On the first track, he was invisible. He was the room. On this one, he's the reason the room exists. But it's the same feel underneath. The same sense of time. He has a way of landing on the beat that isn't on the beat. It's just behind it, just a fraction, and it creates this pull. Like gravity. You lean into it without realizing you're leaning. That's a fingerprint. You can't teach that. You either feel time that way or you don't. [Listens.] And now the piano is different too. First track, the piano was placing notes. This one, the piano is chasing something. There's an urgency. The bass is driving it, the drums are underneath, and the piano is on top trying to keep up or maybe trying to get ahead. I can't tell which. [Listens through to the end. Her foot is moving.] That groove. [Shakes her head.] That is a real groove. I don't mean funky. I don't mean rhythmically complex. I mean the thing that happens when three people lock into a pulse and it becomes self-sustaining, where the music stops requiring effort and starts requiring surrender. You just get on and it carries you. I've felt that maybe ten times playing live. Maybe fifteen. It's the reason you keep showing up.</Boone>
          <FortyFour>"That Time Eric Took Mushrooms."</FortyFour>
          <Boone>[Laughs. A real laugh, short and surprised.] I'm sorry, what?</Boone>
          <FortyFour>That's the title.</FortyFour>
          <Boone>Well. That's the funniest thing I've heard all week, and I teach undergraduates. [Pauses.] Same band. Two tracks. Completely different weather. The first one was November. This one is July. Same three people in the same room and the room has changed because they decided it should. That's the thing. The room doesn't change. The players change the room. Most groups I hear, the room is fixed. The song starts and you know what it's going to feel like for the duration. These three are moving the walls.</Boone>

          <TrackBreak number={4} />
          <Boone>[Listens. A long silence. Twenty seconds. Thirty.] OK. [Quietly.] What am I hearing. [Listens.] There's scraping. Metal on something. That might be a bow on a cymbal. And underneath, something is rattling. Not a shaker. Something uneven. Something that wasn't built to be an instrument. [Listens for another full minute.] This is asking me to be patient. I can feel myself wanting to identify things. What's that sound. What's this sound. And the music doesn't care about my categories. It's doing what it's doing. [Long pause.] But there's a pulse. Way down. Under all of it. Someone in here is keeping time, and they've buried it so deep you can't hear it with your ears. Your body hears it. Your body finds it before your brain does. [Listens.] I play with a drummer at Cleo's named Harold who's seventy-three years old and has been playing since before I was born. He told me once that the best thing a percussionist can do is make the audience feel a rhythm they can't find. He said, "If they can count it, you've given away too much." I think about that all the time. I'm thinking about it right now.</Boone>
          <FortyFour>This is the Minneapolis trio again.</FortyFour>
          <Boone>[Stares.] That is the same band that played that pretty, careful opening track? And the groove? And now this? [Takes the headphones off for a moment. Puts them back on.] That drummer. I want to talk about that drummer. What I'm hearing on this track is someone who understands that percussion is not about the instrument. It's about the relationship between the object and the hand and the intention. You can make music hitting a pipe with a wrench if the intention is there. He's not playing drums on this track. He's playing the idea of percussion. Which is either pretentious or profound, and I think it's profound, because I can feel it in my chest.</Boone>
          <FortyFour>"Allen Ginsberg Sees God, Part 3."</FortyFour>
          <Boone>Parts 1 and 2?</Boone>
          <FortyFour>Don't exist, apparently.</FortyFour>
          <Boone>Good. Some things should start in the middle. [Pauses.] How long have these three been playing together?</Boone>
          <FortyFour>About ten years. They started in college. The pianist and the drummer were roommates. The bassist came later.</FortyFour>
          <Boone>Ten years. You can hear it. Not in the tightness. Tightness you can get in two years if you practice enough. What ten years gives you is permission. Permission to do whatever that track was, to abandon the instruments you're known for and make noise together, and trust that the other two people in the room aren't going to look at you like you've lost your mind. That takes time. That takes a lot of bad sets and a lot of long drives.</Boone>

          <TrackBreak number={5} />
          <Boone>[Listens. Head tilts slightly.] This is precise. Very precise. The rhythm is almost mechanical but not cold. There's warmth in the repetition. Each element is locked into its lane, and the whole thing is shifting so slowly you don't notice you've moved. [Listens for a long time.] This is electronic. A producer. Someone who understands that repetition is not stasis. You change one element by one degree and the listener's perception shifts without them knowing why. That's the principle. That's what Feldman understood, what Reich understood. This person understands it too. [Listens.] Except. [Pauses.] There's something in the timing that doesn't feel quantized. There's a waver. Very slight. Like a human heartbeat, which is never perfectly regular even when you think it is. [Listens to the end and takes her headphones off.] If this is a producer, they've done something very sophisticated with the programming. That waver feels organic.</Boone>
          <FortyFour>That's Dawn of Midi. Piano, upright bass, drums. Three people playing in a room. No electronics. No processing. No loops. Acoustic instruments only.</FortyFour>
          <Boone>[She doesn't respond immediately. She's looking at the table between us. Then she picks up the headphones and puts them back on.] Play the last minute again.</Boone>
          <Editorial>I play the last minute again. She listens with her eyes closed.</Editorial>
          <Boone>[Takes the headphones off.] Three human beings. [Pauses.] Do you know what that requires? I don't mean technically. I mean as an act of will. To play with that kind of synchronization, acoustically, with no click, no grid, nothing but each other's breath and hands. You would have to practice that piece until your body was no longer making decisions. Until the music played you instead of the other way around. That's not musicianship. I don't know what to call it. Devotion, maybe. The way a monk does the same prayer every morning until the prayer is doing itself. [Pauses.] I've spent thirty years playing an instrument and I've never achieved what those three people are doing on that track. I'm not sure I've tried to. I'm not sure I'd survive it. [Quietly.] That's remarkable. It's also a little frightening.</Boone>
          <FortyFour>Frightening how?</FortyFour>
          <Boone>Because it means the ceiling is higher than I thought. And I'm fifty-two. You don't always want to discover new ceilings at fifty-two. [Pauses.] But here we are.</Boone>

          <TrackBreak number={6} />
          <Boone>[Almost immediately.] The trio. [Listens.] After what you just did to me with Dawn of Midi, I'm hearing them differently now. Because I was listening to these three as an intuitive group. Good chemistry. Natural feel. And now I've heard what's possible when three people take precision to its absolute limit, and I'm wondering what Thick Rain Trio has chosen instead. Because it is a choice. [Listens.] This is a melody. A real melody. The piano is singing. That's the only word. It's not playing a melody, it's singing one. And the bass is underneath, warm, and there's something about the way he attacks the strings. [Pauses.] Kelly, does the bass player in this group come from somewhere louder?</Boone>
          <Editorial>I nodded. She caught me off guard. I'd read that he came up in rock and punk bands before finding his way to jazz.</Editorial>
          <Boone>I can hear it. The hands remember where they've been even when the music has moved on. There's an aggression in his touch, even when he's playing this softly, that tells you his muscles learned in a different room. It's not wrong. It's beautiful. It's like an accent. You can hear where someone is from in how they handle the instrument, and this man is not from jazz. He arrived here. And the thing he brought with him is exactly what makes the line breathe the way it does. A trained jazz bassist would play this smoother. This is better. [Pauses.] And the pianist? What's his story?</Boone>
          <Editorial>I told her what I knew, which isn't much. Trent Gordon. Grew up in Minnesota. Studied composition, not performance. Apparently wrote most of the first album in a practice room he wasn't supposed to have access to.</Editorial>
          <Boone>Composition, not performance. That explains something. He doesn't play like a pianist who's been told how to play piano. He plays like someone who hears the whole piece and happens to be sitting at the keyboard. The voicings are strange in a way that a trained jazz pianist would have been corrected out of. Nobody corrected him. Good. [Track ends.] That drummer again. The gravity. Every track, the same pull. I could find him in the dark.</Boone>
          <FortyFour>"Aberdeen."</FortyFour>
          <Boone>It sounds like a place. A specific place on a specific kind of day. That's four tracks now. Four rooms. Same three people. The rooms change but the relationship doesn't. The way they listen to each other is constant. Everything else moves. [Pauses.] That's what you want. In music and in most other things. A fixed center and everything else in motion.</Boone>

          <TrackBreak number={7} />
          <Boone>[Ten seconds.] Piano trio. [Listens.] Fast. The bass is driving hard. The piano is rhythmic, almost percussive, it's hitting these repeating patterns that feel like cells, small units that interlock and shift. And the drummer. [Listens.] The drummer is extraordinary. He's not accompanying. He's generating. The energy is coming from him and the piano is locking to it and the bass is the bridge between them. [Listens for another minute.] I know this. I think I know this. The rhythmic language. It's not straight-ahead and it's not free. It's constructed. Very deliberately constructed. Like someone studied how pattern works across multiple traditions and built a system from it. [Pauses.] This sounds like Vijay Iyer. Or someone who's been living inside his records.</Boone>
          <FortyFour>What makes you say Iyer?</FortyFour>
          <Boone>The way the piano functions as a rhythm instrument first and a harmonic instrument second. Most pianists voice first and groove second. This person builds from the groove outward. The harmony is a consequence of the rhythm, not the other way around. That's Vijay's whole project. [Listens to the end.] Yeah. That's him.</Boone>
          <FortyFour>"Optimism," from Accelerando.</FortyFour>
          <Boone>Good title for that piece. There's a relentlessness to it that could be anxiety but chooses to be forward motion instead. Like running toward something rather than from it. [Pauses.] And now I have two piano trios in my head at the same time. Vijay's group and the Minneapolis group. And they're both excellent and they're almost nothing alike. Vijay's trio is architecture. Every element is placed. The spontaneity lives inside the structure, but the structure comes first. Thick Rain Trio is the opposite. The spontaneity comes first and the structure grows around it. Vijay builds a house and then lives in it. These three walk into an empty field and see what happens. [Pauses.] I think I might prefer the field.</Boone>
          <FortyFour>Why?</FortyFour>
          <Boone>Because I've spent my career in houses. Teaching is structure. Theory is structure. I know what structure can do. It can do extraordinary things. But the older I get, the more I want to hear people risk something. And risk requires open space. You can't risk anything when the architecture is already decided. [Pauses.] That's not a criticism of Vijay. He's a genius. But genius and risk are different projects. Sometimes they overlap. Sometimes they don't.</Boone>

          <TrackBreak number={8} />
          <Boone>[Does not speak for a long time. Over a minute. Her eyes are closed. Her hands are still on the armrests, not moving. The room is very quiet.]</Boone>
          <Editorial>I let the silence hold. This was the track I'd been thinking about since I started building the list. The track before it was dense, kinetic, full of information. This one is almost empty. Brushes. Long tones from the bass. The piano entering slowly, like someone sitting down in a room where people are already sleeping.</Editorial>
          <Boone>[Opens her eyes but doesn't look at me. She's looking at the wall behind me.] That's the most honest thing I've heard today.</Boone>
          <FortyFour>Can you say more?</FortyFour>
          <Boone>[Pauses.] There's nothing extra in it. Every note is necessary and none of them are showing you how necessary they are. That's the hardest thing to do. To play only what the music needs and not one note more. My teacher at Temple, a man named Arthur Clifton, used to say, "If you can take a note away and the music doesn't miss it, the note was never yours to play." I think about that every time I perform. I hear it on this track. Every note belongs. None of them are auditioning. [Listens.] The brushes. Listen to the brushes. That sound is the most intimate thing in percussion. A stick is a statement. A mallet is a sentence. A brush is a whisper. And this drummer is whispering something I can almost understand but not quite, and I think that's intentional. The meaning is in the almost. [Long pause.] I miss playing like this. I don't mean technically. I mean the state. When you're in a group and the music gets this quiet and this slow, there's a kind of, I don't know. Exposure. You can't hide. There's nowhere for your ego to go. Everything you play is naked and the other two people in the room can hear everything about you. What you're afraid of. What you love. Where your attention is. It's the closest I've ever felt to another human being without speaking. [She stops. Adjusts her thermos. When she speaks again, her voice is the same as before. Level, dry, precise.] You put this one after Vijay on purpose.</Boone>
          <FortyFour>Yes.</FortyFour>
          <Boone>Smart. After all that density, this lands like a window opening. You let me get overwhelmed and then you gave me air. That's good sequencing, Kelly. [Pauses.] What's it called?</Boone>
          <FortyFour>"Tu t'rappelles l'{"\u00e9"}poque avant qu'on r{"\u00e9"}fl{"\u00e9"}chisse?"</FortyFour>
          <Boone>Translate that for me.</Boone>
          <FortyFour>Roughly: "Do you remember before we used to think?"</FortyFour>
          <Boone>[Quiet for a while.] Yeah. That's exactly what it sounds like. Before you knew what you know. When everything was still a question. [Pauses.] I want to hear that one again sometime. Not today. Sometime when I'm alone and it's late and I don't have to be articulate about it.</Boone>

          <TrackBreak number={9} />
          <Boone>[Five seconds in, she laughs.] Oh, here they come. [Listens. Grinning.] Everybody's moving. The bass is up front, running. The piano is right on top of him. And the drummer. He's everywhere. He's on everything. That is the sound of three people who love playing together running as fast as they can and trusting that nobody's going to fall. [Listens, head moving.] There. The bass player just left. Did you hear it? He jumped out of the pocket, went up high, and the pianist followed him like he knew it was coming, and the drummer just stayed underneath, steady, like go ahead, I'm not going anywhere. That's trust. That's years. That doesn't happen the first time you play together. That happens after you've played together enough that the other person's instincts feel like your own. [Track ends. She takes the headphones off.] That one I'd put on in the car. That one is for driving.</Boone>
          <FortyFour>"Cannonball Adderall."</FortyFour>
          <Boone>[Stares. Then a slow smile.] That's a terrible name and I respect it completely. [Laughs.] These guys are funny. You can hear it. The dead-serious track about memory and perception, and then they turn around and name the next one after a pill joke. That's the thing about this band, right? Six tracks and I've heard six different rooms. The quiet room. The groove room. The room full of objects that aren't instruments. The room that's barely there. And then this one, which is the room where everybody's grinning and the music is louder than it needs to be and nobody cares. That's range that has nothing to do with chops. That's three people who are willing to be different versions of themselves every time they sit down. [Pauses.] Most musicians find the thing that works and repeat it. Safety. Audiences reward consistency. But this trio is not interested in safety. They're interested in what happens next. And that means every time you hear them, you're hearing something that might not exist again. That's terrifying and exhilarating and it's the reason live music matters more than anything you can put on a record, even though we keep putting it on records anyway.</Boone>

          {/* Closing */}
          <div style={{ margin: "40px 0 28px", height: "1px", background: "#d4cfc5" }} />

          <Editorial>Professor Boone had to leave for ensemble at four. She stood, picked up her thermos, and pushed the office chair back toward the door.</Editorial>
          <Boone>Are you going to tell me where to find them?</Boone>
          <FortyFour>They've got three records. The first two are self-released on Bandcamp. The latest is on a label called Understory.</FortyFour>
          <Boone>Understory. [Nods.] That's a good name for a label that puts out music like this. Underneath the story everyone else is telling. [She stops at the door.] Kelly.</Boone>
          <FortyFour>Yeah?</FortyFour>
          <Boone>Thank you for making me do this. I spend all day telling students how to listen. Nobody's asked me to just listen in a long time. [Pauses.] I should have said yes three semesters ago.</Boone>

          <Narration>She walked down the hall toward the ensemble room. I sat in Room 44 for a while after she left, listening to nothing, which, after two hours with Professor Boone, felt like its own kind of music.</Narration>

          {/* Separator */}
          <div style={{
            textAlign: "center",
            margin: "32px 0",
            fontSize: "16px",
            color: "#d4cfc5",
            letterSpacing: "0.3em",
          }}>
            {"\u2732"} {"\u2732"} {"\u2732"}
          </div>

          {/* Track listing */}
          <div style={{
            paddingTop: "24px",
            borderTop: "2px solid #2a2418",
          }}>
            <div style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#8a7d6b",
              marginBottom: "16px",
            }}>
              Tracks Played
            </div>
            <div style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "12.5px",
              lineHeight: 2,
              color: "#666",
            }}>
              {[
                ['1.', 'Thick Rain Trio, "A Long Time Ago, Before the Story Starts"', 'Thick Rain Trio, self-released, 2015'],
                ['2.', 'Joel Ross, "Bach (God the Father in Eternity)"', 'The Parable of the Poet, Blue Note, 2022'],
                ['3.', 'Thick Rain Trio, "That Time Eric Took Mushrooms"', 'Every Clock Was Different, self-released, 2019'],
                ['4.', 'Thick Rain Trio, "Allen Ginsberg Sees God, Part 3"', 'Weather Permitting, Understory Records, 2024'],
                ['5.', 'Dawn of Midi, "Nix"', 'Dysnomia, Thirsty Ear, 2013'],
                ['6.', 'Thick Rain Trio, "Aberdeen"', 'Thick Rain Trio, self-released, 2015'],
                ['7.', 'Vijay Iyer Trio, "Optimism"', 'Accelerando, ACT Music, 2012'],
                ['8.', `Thick Rain Trio, "Tu t'rappelles l'\u00e9poque avant qu'on r\u00e9fl\u00e9chisse?"`, 'Weather Permitting, Understory Records, 2024'],
                ['9.', 'Thick Rain Trio, "Cannonball Adderall"', 'Every Clock Was Different, self-released, 2019'],
              ].map(([num, title, album], i) => (
                <div key={i} style={{ display: "flex", gap: "8px" }}>
                  <span style={{ color: "#aaa", minWidth: "20px" }}>{num}</span>
                  <span>
                    <span style={{ color: "#444" }}>{title}</span>
                    <span style={{ color: "#aaa" }}> ({album})</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Credits */}
          <div style={{
            marginTop: "32px",
            paddingTop: "16px",
            borderTop: "1px solid #d4cfc5",
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "12px",
            color: "#aaa",
            lineHeight: 1.6,
          }}>
            The Blindfold Test is a recurring feature in <em>Forty-Four</em>, the music department journal of Waukesha College. This installment was conducted and edited by Kelly Platz.
          </div>
          <div style={{
            marginTop: "12px",
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "12px",
            color: "#aaa",
            lineHeight: 1.6,
          }}>
            Thick Rain Trio's third album, <em>Weather Permitting</em>, is available on Understory Records. Their earlier records, <em>Thick Rain Trio</em> and <em>Every Clock Was Different</em>, can be found on Bandcamp.
          </div>
        </div>
      </div>
    </div>
  )
}
