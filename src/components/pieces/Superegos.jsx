export default function Superegos() {
  function PullQuote({ children }) {
    return (
      <div style={{
        borderLeft: "3px solid #e8382f",
        padding: "4px 0 4px 24px",
        margin: "40px 0",
        fontFamily: '"Playfair Display", Georgia, serif',
        fontSize: "22px",
        lineHeight: 1.5,
        fontStyle: "italic",
        color: "#2a2a2a",
        fontWeight: 400,
      }}>
        {children}
      </div>
    )
  }

  function DayMarker({ day }) {
    return (
      <div style={{
        margin: "56px 0 32px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}>
        <div style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#e8382f",
        }}>
          {day}
        </div>
        <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
      </div>
    )
  }

  return (
    <div style={{
      background: "#f8f7f4",
      minHeight: "100vh",
      fontFamily: '"Libre Franklin", "Helvetica Neue", Helvetica, Arial, sans-serif',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Magazine nav */}
      <div style={{
        background: "#1a1a1a",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: "18px",
          fontWeight: 700,
          color: "white",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}>
          The New Noise
        </div>
        <div style={{
          display: "flex",
          gap: "24px",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
        }}>
          <span>Features</span>
          <span>Reviews</span>
          <span>Interviews</span>
          <span>Lists</span>
        </div>
      </div>

      {/* Hero section */}
      <div style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)",
        padding: "80px 24px 60px",
        textAlign: "center",
      }}>
        <div style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#e8382f",
          marginBottom: "20px",
        }}>
          Feature
        </div>
        <h1 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 700,
          lineHeight: 1.15,
          color: "white",
          maxWidth: "min(92vw, 1400px)",
          margin: "0 auto 16px",
          letterSpacing: "-0.01em",
        }}>
          The Dropdead Superegos Are Not Who You Think They Are
        </h1>
        <div style={{
          fontFamily: '"Libre Franklin", sans-serif',
          fontSize: "17px",
          fontWeight: 300,
          fontStyle: "italic",
          color: "rgba(255,255,255,0.55)",
          maxWidth: "min(92vw, 1200px)",
          margin: "0 auto 24px",
          lineHeight: 1.5,
        }}>
          Four days inside a band becoming something none of them can name.
        </div>
        <div style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.35)",
          fontWeight: 400,
        }}>
          By <span style={{ color: "rgba(255,255,255,0.6)" }}>Mara Kinsey</span> {"\u00b7"} January 2026
        </div>
      </div>

      {/* Article body */}
      <div style={{
        maxWidth: "min(92vw, 1300px)",
        margin: "0 auto",
        padding: "48px 24px 80px",
        fontFamily: '"Libre Franklin", sans-serif',
        fontSize: "17px",
        lineHeight: 1.85,
        color: "#2a2a2a",
        fontWeight: 400,
      }}>
        <DayMarker day={"\u21e0 Monday"} />

        <p style={{ margin: "0 0 22px" }}>
          The studio is in Glendale, not too far from Back Alley Bowling, in a strip of low commercial buildings between a tile warehouse and an accountant's office. No sign outside. The parking lot has a rented Kia, a rented white Sprinter van with Virginia plates, and a black pickup that, it turns out, belongs to the engineer. I'm fifteen minutes early, which means I'm standing on hot concrete looking at my phone and wondering whether I've got the right address when the door opens and a man in a wrinkled linen shirt and cargo shorts leans out and says, "You the writer?"
        </p>

        <p style={{ margin: "0 0 22px" }}>
          This is Clayton Morr. He leads me through a hallway that smells like Thai food and someone's cedar deodorant and into a control room cluttered with takeout containers, an open laptop playing something I can't identify, and a whiteboard covered in what looks like a tracklist, though several entries have been crossed out and rewritten in different handwriting. He offers me pad see ew out of a Styrofoam container. I decline. He eats while he talks.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Clayton talks the way certain novelists write: long, syntactically ambitious sentences that veer toward digression and then snap back just before they lose you. Within ten minutes he has covered Dostoevsky ("The Idiot isn't about naivety, it's about the cost of showing up unprotected"), the particular quality of Richmond light in September, and the question of whether album sequencing still matters when most people shuffle. He asks my opinion on the last one. He seems genuinely interested in the answer.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          He is, in every way, the person you'd expect to meet first. Clayton Morr is the vocalist, rhythm guitarist, and lyricist of the Dropdead Superegos, a five-piece from Richmond, Virginia, now on their third album and their first time recording outside the mid-Atlantic. He is also the band's most public-facing member by a significant margin, the one who gives good quotes, the one whose lyrics get screenshotted and posted on Instagram or Tiktok as standalone fragments, the one interviewers default to because he makes the job easy. Twenty minutes in and I've already filled half a notebook. He has the pacing and generosity of someone who has been preparing, perhaps without knowing it, to be the subject of a profile.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          The rest of the band arrives in increments. The drummer, Marcus Hutchins, whom everyone calls Hutch, comes in around noon carrying a grocery bag and wearing a hat that says PASADENA AUTO GLASS. He nods at me, says "Hey," and disappears into the live room. Two women arrive together shortly after, mid-conversation, barely acknowledging the room before heading straight through to the other side of the glass. One carries a bass case covered in stickers from bands I've never heard of; the other has a canvas bag full of cables and what appears to be a disassembled tape machine.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "Brooke and Regan," Clayton says, watching them go. "They do that every day. They need about ten minutes before they're available for human interaction."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          The fifth member, guitarist Neil Farrow, is already in the live room when I finally enter it. I don't know how long he's been there. He's standing near an amp, headphones around his neck, adjusting a pedal on a board so dense with wiring it looks like a city seen from above. He's tall, still, and gives the impression of someone who has been in the room longer than the room has existed.
        </p>

        <PullQuote>"Neil's our quiet one," Clayton says, then seems to reconsider. "That's not fair. Neil's our precise one. There's a difference."</PullQuote>

        <p style={{ margin: "0 0 22px" }}>
          I spend the rest of the afternoon watching them work on a song called "Exit Interview with the Sun." It's mostly done, which means they're in the phase of recording that involves playing the same passage eight times while everyone debates whether the guitar enters on beat three or beat four and whether the difference matters. (It does. I learn this slowly.) Clayton sings the vocal in two takes and seems satisfied with both. The engineer prefers the first. Clayton defers. I will see this happen several more times across the week: Clayton deferring. Not dramatically, not with visible cost, but with the practiced grace of someone who has decided that letting go is part of the work.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Hutch plays the drums with the kind of relaxed authority that makes everyone else in the room visibly calmer. He is, I'll come to understand, the studio's emotional thermostat. When Hutch is settled, the room is settled. When he leans back from the kit and stretches, the session breathes. I watch the engineer watch him and realize they've developed a shorthand: Hutch taps his stick against the rim twice, and the engineer hits record without being asked.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Brooke Keller, meanwhile, sits behind the console with her arms crossed, listening, making small movements with her head that I learn to read, over the next few days, as a more reliable indicator of a take's quality than anything anyone says out loud. She does not comment after takes. She does not offer praise. When something works, she uncrosses her arms. When something doesn't, she stays exactly as she is. The absence of a gesture becomes the gesture.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          At one point, late in the afternoon, Farrow plays something. A single sustained tone that enters the mix so gradually I don't notice it until it's been there for what feels like a full minute. It doesn't sound like a guitar. It sounds like the room itself has started to hum. The engineer looks up from his screen. Hutch grins. Thorne, who has been sitting cross-legged on the floor with her eyes closed, opens them.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Clayton turns to me and says, "That. Did you hear that?"
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I did hear it. I heard it the way you hear a change in air pressure. Something shifted, and I can't tell you what moved.
        </p>

        <DayMarker day={"\u21e0 Tuesday"} />

        <p style={{ margin: "0 0 22px" }}>
          Keller and Regan Thorne arrive at eleven, mid-conversation, coffee in hand. Same ritual as yesterday. Straight to the live room. No small talk. I've started thinking of their entrance as a kind of weather event: something shifts in the studio's atmosphere when they walk in, a change in pressure that everyone registers and nobody mentions.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Today they're working on a track called "Hardwired for Soft Things." It's Keller's. I know this because of how she stands when they play it back: leaning forward, weight on her toes, a posture of ownership that's different from the way she listens to Clayton's songs, which is attentive but lateral, the listening of someone inhabiting a room they didn't build.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          The bass line on this track is something. It's crunchy, low, almost aggressively physical, the kind of part that belongs on a heavier record than the one the Dropdead Superegos are generally understood to make. And then Clayton's vocal comes in over it, singing something so delicate it sounds like it might not survive the music underneath. The contrast is the architecture. The lyric is fragile. The arrangement doesn't care.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I watch Keller play the bass part live for an overdub. She stands with her weight on one foot, sunglasses pushed up on her head, face completely still. The performance is physical in a way I hadn't expected. Her whole body moves with the rhythm, not theatrically but functionally, the way an athlete moves. When the take ends, she looks through the glass at the engineer. He gives a thumbs up. She pulls her sunglasses back down, unplugs, and walks out without comment.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Farrow, who has been sitting on a road case reading something on his phone, looks up and watches her go. He catches me watching him watch her and returns to his phone. It's the closest thing to a visible reaction I'll get from him all week.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I try to talk to Keller about the track during a break. She's sitting outside on a concrete step, sunglasses on, eating an apple.
        </p>

        <PullQuote>"Clayton writes the words," she says. "I just make the room they live in."</PullQuote>

        <p style={{ margin: "0 0 22px" }}>
          Behind me, through the open door, I hear the engineer mutter something I can't quite make out. It sounds like "Jesus Christ" but I may be projecting.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I press. I ask about the co-writing on the second album, <em>All the Gorgeous Trouble</em>, which by most accounts was the record where the band went from promising to genuinely interesting. Keller started sending Clayton fragments during COVID. Bass lines with something underneath them. Ideas that implied directions the songs hadn't considered. The tracks they built together were the ones people pointed to when they said the second record was the leap.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          She nods at all of this the way you'd nod at a weather report. Accurate, factual, not particularly interesting to her.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "We were stuck at home," she says. "Everyone was stuck. I got bored. I started writing. Some of it was okay. I sent it to Clayton and he knew what to do with it. That's how it works."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          <em>That's how it works.</em> I write it down, knowing already that it's the version of the story she's willing to tell and probably not the one that matters.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Later, I try Neil Farrow. I find him in the live room, repacking a pedalboard he's apparently just reorganized.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I ask how he joined the band.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "I answered an ad."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I ask what drew him to their sound.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "I liked what I heard."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I ask what his musical background is, where he studied, who he listened to growing up.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          He looks at me. Not unkindly. More the way you'd look at someone asking how a tree grows.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "I just play," he says.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I close the notebook. He offers me a bottle of water from a cooler. We sit in comfortable silence for a moment, surrounded by cables and road cases, and then he puts his headphones back on and I go back to the control room.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          That night, Clayton and I talk for over an hour while the others have gone to dinner. He tells me about naming the first album <em>The Total Animal Soup of Time</em> because he was twenty-three and wanted the title to announce that he had read things. He laughs at this. He's aware of his own pretensions in a way that makes them charming rather than insufferable, a trick that only works if the self-awareness is genuine, and with Clayton I think it is.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          He tells me about the band's formation: how he and Hutch were the original pair, playing open mics and loose sessions around Richmond. How Thorne was doing solo ambient work, small rooms, sound baths, and Keller was sitting in with her, adding bass to things that hadn't asked for it. How the two pairs collided at a house show and something clicked but wasn't finished. How it stayed unfinished until Farrow answered an ad and walked in and played something that made the room change shape.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "Before Neil, I was doing everything," he says. "Singing and carrying the whole harmonic weight on guitar. The songs were shaped by that constraint. I couldn't move. I couldn't let go. And then this guy shows up and just takes the space. Not aggressively. He just occupies it. And suddenly I can drop the guitar and be the singer. The second guitarist didn't add to the band. He subtracted me from a job I was bad at."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I ask whether it's hard, sharing a stage with someone that essential and that invisible.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "Neil doesn't want to be seen," Clayton says. "He wants to be heard. Those are different projects. I happen to want both, which is either my gift or my problem."
        </p>

        <DayMarker day={"\u21e0 Wednesday"} />

        <p style={{ margin: "0 0 22px" }}>
          Something happens on the third day that I keep coming back to.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          They're working on a song that doesn't have a name yet. On the whiteboard it's listed as "Track 7." The foundation is Thorne's: processed sounds built from loops, textures that might once have been a piano or might once have been a voice, slowed and layered until their origin dissolves. Keller's bass enters low, almost subterranean. Clayton hums over it, testing syllable shapes, not singing words so much as searching for the outlines of words.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          This is the first track where I can hear what the fan forums have been arguing about. Thorne's sound on the first two records was analog, warm, organic. Woodwind lines that drifted through the arrangements like weather. Piano pads. Harmonies that felt atmospheric rather than structural. On this album, she's moved into electronics. Loops, processed samples, synthesized textures. The shift is subtle in some songs and unmistakable in others. Track 7 is one of the unmistakable ones.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          They play it back four times. Nobody speaks during the playbacks. On the fourth listen, Hutch stands up from his stool and walks to the doorway of the control room and leans against the frame, head tilted, listening from a different angle. Keller has her eyes closed. Farrow is making notes on a piece of paper in handwriting so small I can't read it from where I'm sitting.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Clayton is the one who breaks the silence. "I'm not sure about the second section," he says. He says it carefully, the way you'd handle something fragile.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "What about it," Keller says. Not a question.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "It might need words there. Or it might not. I keep going back and forth."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "It doesn't need words," Thorne says, quietly, from behind a rack of equipment. It's the most definitive statement I've heard her make in three days.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          The room absorbs this. Clayton nods. Not the nod of agreement, exactly. The nod of someone filing something away to think about later, privately, where the thinking won't slow the room down.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I ask Thorne about the electronics during a break.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "The music asked for it," she says. She's winding a cable, not looking at me. "Brooke started writing things that needed textures I couldn't make with what I had. So I found new tools."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I notice that she says Brooke's name the way you'd cite a reason rather than a person. As though the shift were a response to a specific creative demand, not a general evolution. I file this and move on, not sure yet what it means.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          In the early afternoon, Hutch and Thorne leave to drive to a music store in Pasadena. Hutch lost his case, including his drum key, which Clayton finds hilarious. ("You drove three thousand miles and managed to lose the one thing that literally holds your instrument together.") They've been gone about forty minutes when Keller's phone rings. She puts it on speaker.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Hutch and Thorne are lost.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          What follows is ten minutes of the most amiable navigational disaster I've ever witnessed. Keller and Farrow try to guide them via phone, describing intersections and landmarks. Hutch narrates what he sees with a running commentary that drifts between observation and philosophy. ("There's a laundromat that looks like it gave up. A Popeyes. Another Popeyes. Do they know they're next to each other?") Clayton is on the couch next to me, laughing, not helping.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          At some point, Hutch says this: "...yeah we passed that twice already, I think Regan's actually enjoying this, she's got her window down and she's just, like... I don't know, we're somewhere between the last good idea and whatever comes next, anyway do we turn on Figueroa or..."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Keller goes quiet. Not the quiet of distraction. A different kind. She looks at Clayton. He looks at her. The phone conversation continues. Farrow tells Hutch to take Figueroa north.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I look at the whiteboard. At the top, in blue marker, is the album's working title, which at this point is a placeholder Clayton picked weeks ago and nobody seems attached to. I look back at Keller. She has the expression of someone replaying a sentence she just heard.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Late that night, I pass through the control room on my way out and see Keller writing in a notebook. Clayton is reading over her shoulder. They're both grinning in a way that suggests a private joke, though when I ask, Keller just says, "Hutch doesn't know he's a poet."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          The next morning, the placeholder title on the whiteboard has been erased. In its place, in what I'll later identify as Keller's handwriting: <em>Somewhere Between the Last Good Idea and Whatever Comes Next.</em>
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I find Hutch tuning a snare.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "That's the album title," I tell him. "Your words."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          He looks at the whiteboard, looks back at me, and shrugs.
        </p>

        <PullQuote>"I was just talking," he says. Then: "Okay, cool."</PullQuote>

        <DayMarker day={"\u21e0 Thursday"} />

        <p style={{ margin: "0 0 22px" }}>
          On the last morning I'd spend with the band, the studio has the atmosphere of a place that has been inhabited just long enough to feel temporary. Someone has cleaned the takeout containers. The whiteboard now has the new title written in large letters at the top, the tracklist underneath rearranged since yesterday, two songs swapped in order. Keller and Thorne have arrived earlier than usual and are in the live room with the door closed. Through the glass I can see them listening to something on headphones, Thorne's hand resting on a piece of equipment I don't recognize. They look like two people in the middle of a conversation that started long before I got here and will continue long after I leave.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          An hour later, the door is open.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I go in to get my notebook, which I left on top of an amp. Keller is at the console, arms crossed, watching a waveform scroll across the screen. Thorne is standing at a table she's turned into a workstation, laptop, a sampler with worn pads, a small rack-mounted unit with a tangle of patch cables coming out of it like roots. They've taken their headphones off. Whatever they were listening to, they've moved past it.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Thorne plays a note on a keyboard. Or what I think is a note. It might be a voice. It might be something she recorded off a television or a highway overpass, I can't tell, and I suspect that's exactly the condition she's after. She feeds it through the rack unit, adjusts something, plays it back. The sound comes out different. Softer. Less like a thing and more like the memory of a thing. She does this again. And again. Each pass strips something away. I'm watching someone remove the origin from a sound until what's left has no name and no history and is just texture. Air with weight in it.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Her hands are fast. Not showy, not performative, but fast the way a person's hands are fast when they've done something ten thousand times and the thinking has moved out of the brain and into the fingers. She reaches for a knob on the sampler and turns it without looking, the way you'd reach for a light switch in your own house. The sound changes again. She tilts her head. Does it once more. Tilts her head the other direction, like she's listening from a different room inside herself.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Keller uncrosses her arms.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Thorne sees it without turning around. I don't know how. She plays the loop back, a long, slow exhale of sound that seems to come from nowhere and everywhere at once, and nods. Not to me. Not even, exactly, to Keller. Just a nod, the smallest possible acknowledgment that the thing she heard in her head now exists outside of it.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I pick up my notebook and leave. Neither of them notices. Or they do, and it doesn't matter, because the conversation has already moved on to the next fragment, and it was never in a language I spoke anyway.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I spend my last few hours watching the band cut a final vocal for "Hardwired for Soft Things." Clayton sings it three times. The second take is technically cleaner. He chooses the first. When I ask why, he says, "Because the second one sounds like someone who's already heard the song. The first one sounds like someone still finding it." The engineer nods. Hutch, in the live room, gives a thumbs up through the glass.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          At some point I realize I've barely spoken to Thorne across four days, and that this bothers me less than I expected. This is partly her manner, which is warm but recessed, less guarded than simply quiet, as though she operates at a frequency that doesn't require much verbal output. And partly it's the fact that she and Keller function as a closed circuit. Their communication is largely nonverbal. When Keller plays something back, Thorne nods or shakes her head in movements so small I don't always catch them. When Thorne is building a loop, Keller stands behind the console with her arms crossed, watching the waveform on the screen, occasionally reaching over to point at something. They work the way people work who have been collaborating long enough that the process has become a kind of shared grammar, legible to them and opaque to everyone else.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I don't know what to make of this, exactly. It looks like friendship. It probably is friendship. But I suspect it's also the thing that's changing the band most, that the creative axis between these two is where the sound has gone and where it's going, and that calling it friendship, while true, is like calling a cathedral a building. Accurate but insufficient.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          During a break, I sit with Hutch outside. He's eating a gas station sandwich and watching traffic on the boulevard with the serene focus of a man who has nowhere else to be.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "You guys have been together a long time," I say. "You and Clayton."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "Since before this was a thing," he says. "Before any of it."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "What was he like then?"
        </p>

        <p style={{ margin: "0 0 22px" }}>
          Hutch considers this while chewing. "Louder," he says. Then: "Not volume. Just. He used to fill every room all the way up. Now he leaves space. That's the difference. That's the whole eight years." I ask him whether the shift on this album, the collaborative writing, Thorne's electronics, the longer songs, feels like evolution or like something else.
        </p>

        <PullQuote>"It feels like the band I always heard in my head. It just took everyone else a while to get there." He pauses. "Don't tell Clayton I said that. He'll want to discuss it for an hour."</PullQuote>

        <p style={{ margin: "0 0 22px" }}>
          In the late afternoon, most of the band leaves for dinner. Clayton stays. We sit in the control room and he tells me, without my asking, that the experience of making this record has been different.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "It used to be my band," he says. "Not in a possessive way. Just structurally. I wrote the songs. I set the direction. Everyone interpreted. And that was fine. That made two records I'm proud of." He pauses, looks at the whiteboard with its title he didn't write and its track order he didn't finalize. "This one is different. I show up and find out what we're making. Which is better, I think. The music is better. But it's also."
        </p>

        <p style={{ margin: "0 0 22px" }}>
          He stops. Outside, the light has gone orange through the windows in the way that only happens in Southern California, turning everything golden and temporary.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          "You can use that," he says. "Whatever that was."
        </p>

        {/* Coda section */}
        <div style={{
          margin: "56px 0 32px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}>
          <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
        </div>

        <p style={{ margin: "0 0 22px" }}>
          <em>Somewhere Between the Last Good Idea and Whatever Comes Next</em> is due later this year on Tender Gravity Records. I've heard most of it. It is stranger, more patient, and less singularly authored than anything they've made.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          On my way out, I stop by the live room to say goodbye. Only Farrow is there. Headphones on, eyes closed, standing in front of his amp and his impenetrable pedal board, playing something I can't hear through the glass. I watch him adjust a knob by what looks like a millimeter. Play a phrase. Listen. Shake his head. Adjust again. Play it again.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I stand there longer than I intend to. He doesn't look up. He may not know I'm there. He may not care. The differences between his takes are invisible to me, but to him they are apparently the distance between the song as it is and the song as it should be, and he will keep closing that distance one millimeter at a time, alone in a room, long after the rest of the band has gone to dinner, long after the journalist has caught her flight, long after anyone is left to notice.
        </p>

        <p style={{ margin: "0 0 22px" }}>
          I watched this band for four days. I talked to most of them at length. I have pages of notes and hours of tape and a notebook full of Clayton Morr quotes, each one more usable than the last. But the image that stays is the one where I can't hear anything. Just a tall, still figure behind glass, playing the same phrase over and over, making adjustments nobody else can see, in service of a sound that won't exist until it's exactly right.
        </p>

        <p style={{ margin: "0 0 0" }}>
          Ask me what The Dropdead Superegos sound like and I'll tell you about the bass, the loops, the lyrics, the drumming. I'll compare them to things you already know. But what they actually sound like, the truest version, might be whatever Neil Farrow hears inside his headphones when the door is closed and nobody's listening. I stood three feet away and couldn't reach it. I suspect that's the point.
        </p>

        {/* Author card */}
        <div style={{
          marginTop: "56px",
          paddingTop: "24px",
          borderTop: "1px solid #ddd",
          display: "flex",
          gap: "16px",
          alignItems: "flex-start",
        }}>
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "#c4453d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 600,
            fontSize: "16px",
            flexShrink: 0,
          }}>
            MK
          </div>
          <div>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "#1a1a1a", marginBottom: "4px" }}>
              Mara Kinsey
            </div>
            <div style={{ fontSize: "14px", lineHeight: 1.5, color: "#777" }}>
              Mara Kinsey is a music journalist based in Los Angeles. Her work has appeared in The New Noise, Stereogum, and The Fader. She is currently working on a book about the spaces where records get made.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
