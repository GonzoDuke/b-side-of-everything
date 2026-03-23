export default function DaleSievert() {
  const stage = {
    fontSize: "13px",
    lineHeight: "22px",
    color: "#666",
    fontStyle: "italic",
    margin: "16px 0",
  }

  const speaker = {
    fontSize: "13px",
    lineHeight: "22px",
    fontWeight: 700,
    color: "#1a1a1a",
    textTransform: "uppercase",
    letterSpacing: "0.03em",
  }

  const dialogue = {
    fontSize: "13px",
    lineHeight: "22px",
    color: "#2a2a2a",
    marginBottom: "14px",
  }

  function Line({ who, children }) {
    return (
      <div style={dialogue}>
        <span style={speaker}>{who}: </span>
        {children}
      </div>
    )
  }

  function Stage({ children }) {
    return <div style={stage}>[{children}]</div>
  }

  return (
    <div style={{
      background: "#d8d0c4",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      padding: "40px 16px 80px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;1,400&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <div style={{
        maxWidth: "min(92vw, 1300px)",
        width: "100%",
        background: "#f5f1ea",
        padding: "clamp(32px, 6vw, 56px) clamp(24px, 5vw, 56px) clamp(32px, 6vw, 64px)",
        boxShadow: "2px 2px 12px rgba(0,0,0,0.1), -1px -1px 4px rgba(0,0,0,0.03)",
        fontFamily: '"IBM Plex Mono", "Courier New", monospace',
        position: "relative",
      }}>
        {/* Hole punch marks */}
        <div style={{ position: "absolute", left: "28px", top: "72px", width: "8px", height: "8px", borderRadius: "50%", border: "1px solid rgba(0,0,0,0.08)" }} />
        <div style={{ position: "absolute", left: "28px", top: "50%", width: "8px", height: "8px", borderRadius: "50%", border: "1px solid rgba(0,0,0,0.08)" }} />
        <div style={{ position: "absolute", left: "28px", bottom: "72px", width: "8px", height: "8px", borderRadius: "50%", border: "1px solid rgba(0,0,0,0.08)" }} />

        {/* Document header */}
        <div style={{
          textAlign: "center",
          marginBottom: "32px",
          paddingBottom: "20px",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}>
          <div style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#1a1a1a",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}>
            Local Frequency with Dale Sievert
          </div>
          <div style={{
            fontSize: "11px",
            color: "#888",
            marginTop: "6px",
            letterSpacing: "0.03em",
          }}>
            DCAT-19 {"\u00b7"} Decatur Community Access Television
          </div>
          <div style={{
            fontSize: "11px",
            color: "#888",
            marginTop: "2px",
            letterSpacing: "0.03em",
          }}>
            Thursday, October 16, 1997 9:31 PM {"\u00b7"} Channel 19
          </div>
          <div style={{
            fontSize: "10px",
            color: "#aaa",
            marginTop: "10px",
            fontStyle: "italic",
          }}>
            Transcribed from VHS. Tape unlabeled. Source: estate sale box lot, Springfield, IL.
          </div>
        </div>

        {/* Transcript body */}
        <Stage>Tape begins on the DCAT-19 community bulletin board. White text, blue screen. Rotary Club pancake breakfast at the Decatur Civic Center, Saturday 8 AM. Lost calico cat near Eldorado and 22nd. Leaf pickup in Ward 3 pushed to following week. The scroll music is a MIDI loop that has been the scroll music for as long as DCAT-19 has had a scroll. Cut to title card: LOCAL FREQUENCY with Dale Sievert. Green text, black background, slightly off-center. Below it: Decatur's Home for Local Music Since 1992.</Stage>

        <Stage>The set. Two office chairs, a loveseat, a coffee table with a mug on it that says WAND 17 NEWS. Behind the seating, a pegboard wall with photocopied show flyers and a curling Lollapalooza '94 poster. Fluorescent overheads, one of which flickers. Dale Sievert is in the chair on the right. Flannel shirt tucked into khakis. Clipboard on his knee.</Stage>

        <Line who="DALE">Good evening. Welcome to Local Frequency. I'm Dale Sievert. Let's start with what's coming up this week in the area.</Line>

        <Stage>He reads from the clipboard.</Stage>

        <Line who="DALE">Friday night. Chauncey's on Water Street has Milkweed playing a full set. Doors at nine. I saw Milkweed at the Decatur Celebration this past summer. Good group. Tight harmonies. If you're looking for something to do Friday, you could do worse.</Line>

        <Line who="DALE">Saturday night, Millikin's Kirkland Fine Arts Center. The Decatur Community Orchestra at seven. Not strictly what we cover here, but worth mentioning.</Line>

        <Line who="DALE">Also Saturday, the VFW on North Water has Crankshaft with an opening act from Springfield called The Easy Reasons. If anyone makes it out, give us a call and let me know how they were. 217-422-4019.</Line>

        <Line who="DALE">Tonight I've got a four-piece band from right here in Decatur. They've been playing around town for about a year now, they have a tape out, and they're going to play a song for us later in the show. Random Bread, welcome to Local Frequency.</Line>

        <Stage>Wider shot. The band is on the loveseat and the other chair. Chris Bollen, guitar, and Ryan Messing, bass, are on the loveseat. Chris is in a Pavement t-shirt. Ryan is in a gray hoodie with the strings pulled to different lengths. Tess Langford, vocals, is in the chair, sitting sideways with her legs over the armrest. Behind the loveseat, Garrett Denk, drums, is standing. A chair has been brought out for him and is sitting empty at the edge of the frame.</Stage>

        <Line who="TESS">Thanks.</Line>

        <Line who="DALE">So you've been at it about a year now?</Line>

        <Line who="TESS">About that.</Line>

        <Line who="DALE">How'd the band come together?</Line>

        <Line who="TESS">Chris and Ryan knew each other from Eisenhower. Garrett's Ryan's cousin. And I was living next door to Chris's apartment where they were practicing.</Line>

        <Line who="DALE">And you heard them playing and wanted to be part of it?</Line>

        <Line who="TESS">I went over to tell them to turn down and then just sort of stayed.</Line>

        <Line who="DALE">That's a good origin story.</Line>

        <Line who="TESS">I don't think we've ever called it that.</Line>

        <Line who="DALE">Chris, were you and Ryan playing together before this? Other bands, projects?</Line>

        <Line who="CHRIS">Not really. Ryan had a bass and I had a guitar and we were in the same apartment complex. We just started messing around.</Line>

        <Line who="DALE">And Garrett, you came in through the family connection.</Line>

        <Line who="GARRETT">Ryan told me they needed a drummer and I had drums.</Line>

        <Line who="DALE">Had you been playing long?</Line>

        <Line who="GARRETT">Depends what you mean by playing. I'd been hitting them for a while.</Line>

        <Line who="DALE">Formally, though. Lessons, school band?</Line>

        <Line who="GARRETT">I did a semester of band at Richland. They put me on bass drum for the pep band. I kept speeding up. The director told me I had a lot of energy and not a lot of discipline and I thought that was a compliment but I think she meant it the other way.</Line>

        <Line who="DALE">Fair enough. Let me ask about the sound. For folks who haven't heard you yet, how would you describe it?</Line>

        <Line who="CHRIS">It's kind of jangly, I guess. We're not that heavy.</Line>

        <Line who="DALE">I listened to the tape and I heard some things in there that reminded me of, tell me if I'm wrong, a little bit of the Gin Blossoms sound? That melodic, open, kind of mid-tempo thing?</Line>

        <Line who="TESS">Sure. That's not wrong.</Line>

        <Line who="DALE">Is that intentional? Is that a touchstone for you?</Line>

        <Line who="TESS">I think Chris just plays like that.</Line>

        <Line who="CHRIS">I like open chords. Power chords sort of bore me. I'd rather hear the strings ring.</Line>

        <Line who="DALE">And vocally, Tess, who are you listening to? Who informs what you do?</Line>

        <Line who="TESS">I listen to a lot of Juliana Hatfield. Some Liz Phair. I don't know if it comes through. I just kind of sing how I sing.</Line>

        <Line who="DALE">Ryan, you've been quiet over there. What about you? What are your influences on bass?</Line>

        <Line who="RYAN">I like the bass parts in R.E.M. songs.</Line>

        <Line who="DALE">Mike Mills.</Line>

        <Line who="RYAN">Yeah.</Line>

        <Line who="DALE">He's a melodic player. Does a lot with the instrument beyond just holding down the low end.</Line>

        <Line who="RYAN">Yeah, he does the thing where the bass line is almost a separate song happening underneath. I don't do that. But I like that he does it.</Line>

        <Stage>Dale waits for more. There is no more.</Stage>

        <Line who="DALE">Let's talk about the tape. You recorded it yourselves?</Line>

        <Line who="CHRIS">At my apartment. Ryan's brother has a four-track.</Line>

        <Line who="DALE">Tascam?</Line>

        <Line who="CHRIS">I don't know. The gray one.</Line>

        <Line who="DALE">What was the recording process like?</Line>

        <Line who="CHRIS">We set up mics and played the songs a couple times each and picked the ones that sounded best.</Line>

        <Line who="DALE">Any overdubs? Did you go back and add layers?</Line>

        <Line who="CHRIS">I think Ryan added a second bass part on one song. But that might have been an accident.</Line>

        <Line who="RYAN">It was an accident. I didn't know it was still recording.</Line>

        <Line who="DALE">And it worked?</Line>

        <Line who="RYAN">It was fine. You can't really hear it.</Line>

        <Line who="DALE">The tape doesn't have a title, is that right?</Line>

        <Line who="TESS">We never picked one.</Line>

        <Line who="GARRETT">It has a picture, though. I drew bread on it. With a marker.</Line>

        <Line who="DALE">I saw that. Is that the same drawing on every copy?</Line>

        <Line who="GARRETT">No, I do a new one each time. They're all different breads. Some are rolls. Some are more of a loaf situation. One of them I think is technically a bagel but I'm not going to go back and relabel it.</Line>

        <Line who="DALE">How many copies have you put out?</Line>

        <Line who="TESS">Maybe forty? We're not keeping track.</Line>

        <Line who="DALE">And those are at Revelations Records?</Line>

        <Line who="TESS">A few. Mostly just at shows or if someone asks.</Line>

        <Line who="DALE">Jerry over at Revelations does a nice job supporting local music. Good place to find what's happening in town.</Line>

        <Stage>Garrett has moved from behind the loveseat and is now looking at the show flyers on the pegboard.</Stage>

        <Line who="GARRETT">Dale, is this one of ours?</Line>

        <Line who="DALE">Which one?</Line>

        <Line who="GARRETT">The one for the Chauncey's show in September.</Line>

        <Line who="DALE">I believe so, yeah. Someone dropped that off at the station.</Line>

        <Line who="GARRETT">I made that flyer. I used the copier at the library. The lady at the desk told me I was only supposed to make five copies and I made like thirty. She was pretty upset about it.</Line>

        <Line who="DALE">Well, one of them made it here.</Line>

        <Line who="GARRETT">See, that's the system working.</Line>

        <Stage>Pre-recorded spot for Hickory Point Mall. A woman walks through the food court in slow motion. "Hickory Point Mall. Over 70 stores. Decatur, Illinois." When the show returns, the band is in approximately the same positions except Garrett has taken the empty chair and is sitting in it backwards.</Stage>

        <Line who="DALE">Welcome back. I'm here with Random Bread. Before the break we were getting into the recording and the tape. I want to talk about playing live. What's the Decatur scene been like for you? Where are you finding shows?</Line>

        <Line who="TESS">Chauncey's has been good to us. We've played there three or four times. The VFW once but I don't think that went great.</Line>

        <Line who="DALE">What happened at the VFW?</Line>

        <Line who="CHRIS">The guys there were expecting country.</Line>

        <Line who="DALE">And you're not country.</Line>

        <Line who="CHRIS">We're not country.</Line>

        <Line who="GARRETT">I wore a cowboy hat, though.</Line>

        <Line who="CHRIS">That didn't help.</Line>

        <Line who="TESS">We've done some house shows. There was a good one out in Mt. Zion a few weeks ago at this guy's garage. That was probably our best show.</Line>

        <Line who="DALE">What made it the best?</Line>

        <Line who="TESS">It was small. Maybe twenty people. And there was a dog that kept walking through the middle of everything. Like, through the band. Between my legs. And people were laughing and the dog didn't care and we just kept going and it turned into this thing where nobody was taking it seriously, including us, and somehow that made us play better. Less nervous, I think.</Line>

        <Line who="DALE">You get nervous?</Line>

        <Line who="TESS">I mean, a little. Standing in front of people and singing is weird. I didn't grow up doing it.</Line>

        <Line who="DALE">None of you came from a musical background?</Line>

        <Line who="TESS">Not really.</Line>

        <Line who="CHRIS">My mom plays piano at church. That's about it.</Line>

        <Line who="GARRETT">My background is mostly hitting things. I used to hit the railing on our porch with a stick and my dad would come out and go, Garrett, and I'd go, what, and he'd go, stop, and I'd go, okay, and then I'd start again in about ten minutes. That was my training.</Line>

        <Line who="DALE">And now you're in a band.</Line>

        <Line who="GARRETT">The world works in mysterious ways, Dale.</Line>

        <Line who="DALE">What about goals for the band? Where do you see this going?</Line>

        <Line who="CHRIS">We haven't talked about it much.</Line>

        <Line who="DALE">Do you want to play outside of Decatur? Get the tape to a label? Tour?</Line>

        <Stage>Chris looks at Tess. Tess looks at the ceiling.</Stage>

        <Line who="TESS">I think we're just doing it right now. If something comes from it, cool. If not, it's still something to do.</Line>

        <Line who="DALE">That's fair. Not every band has to have a master plan.</Line>

        <Line who="GARRETT">I have a master plan.</Line>

        <Line who="DALE">Let's hear it.</Line>

        <Line who="GARRETT">Step one, play drums. Step two, I haven't figured out yet. Step three, something happens. I think the mystery in the middle is what keeps it interesting.</Line>

        <Line who="DALE">There's a philosophy in there somewhere.</Line>

        <Line who="GARRETT">There might not be and I'm at peace with that.</Line>

        <Line who="DALE"><span style={{ fontStyle: "italic" }}>[To camera.]</span> We're going to take a short break. When we come back, Random Bread is going to play a song for us live. Stay tuned.</Line>

        <Stage>Bulletin board. MIDI loop. Same listings. The calico cat is still missing.</Stage>

        <Stage>When the show returns, the set has been rearranged. The loveseat and chairs are pushed to the sides. The band has set up in the cleared space. One microphone on a boom stand. Chris is plugged into a small practice amp on the floor. Ryan's bass runs into another practice amp with a cable that snakes off camera. Garrett is behind a partial kit: kick, snare, mounted tom, hi-hat, one crash. There is no drum mic. The one microphone is pointed at Tess. Dale stands at the edge of the frame.</Stage>

        <Line who="DALE">Alright. Random Bread, live on Local Frequency. What are we hearing tonight?</Line>

        <Line who="CHRIS">"Landlord Weather."</Line>

        <Line who="DALE">Take it away.</Line>

        <Stage>Chris starts. A clean, open chord progression in a mid-tempo strum. Two bars alone, then Ryan comes in on the root note. Garrett enters on the hi-hat. The sound through the single mic is mostly Tess, when she starts singing, with everything else at a distance. The guitar is thin. The bass is more presence than pitch. The hi-hat is too loud but not as loud as the crash will be when Garrett gets to it. Tess sings in a plain, steady voice. The melody moves in a narrow range and rises at the end of phrases. The lyrics are about weather and waiting and a landlord who doesn't return calls.</Stage>

        <Stage>Garrett plays the crash going into the chorus. The mic clips. The audio distorts for a few seconds. Dale, at the edge of the frame, closes his eyes briefly. No one in the band reacts. The chorus resolves back to the verse. Second verse. Tess is more settled now. Chris moves to a chord he hasn't played yet and the progression opens for a moment before returning to where it started. The song ends on a clean stop. Two minutes and some change. The room is quiet except for the hum of the fluorescent lights and a buzz from one of the amps.</Stage>

        <Line who="DALE">"Landlord Weather." Random Bread. Thanks for that.</Line>

        <Line who="CHRIS">Thanks.</Line>

        <Line who="TESS">Sorry about the loud part.</Line>

        <Line who="DALE">Nothing to apologize for. Live music is live music.</Line>

        <Stage>Garrett is already behind the kit looking like he'd be happy to play another one. Nobody asks him to.</Stage>

        <Stage>The band is packing up in the background of the final segment. Cables being wound. Garrett is disassembling the kick pedal. Chris is putting his guitar in a gig bag that has a broken zipper, which he solves by turning the bag upside down and carrying it by the bottom.</Stage>

        <Line who="DALE">If you want to catch Random Bread live, they've got a possible show at Chauncey's coming up in November.</Line>

        <div style={dialogue}>
          <span style={{ ...speaker, color: "#666", fontWeight: 400, fontStyle: "italic" }}>TESS: </span>
          <span style={{ fontStyle: "italic", color: "#666" }}>[From off camera.]</span> It's not confirmed.
        </div>

        <Line who="DALE">Not confirmed yet. But keep an ear out. And the tape is available at Revelations Records on North Main, or at their shows. No title. Look for the bread on the cover.</Line>

        <Line who="DALE">Next week on Local Frequency we've got Cold Spoke, a two-piece doing some really interesting work with drum machines and guitar. Should be a good one.</Line>

        <Line who="DALE">I'm Dale Sievert. Good night, Decatur.</Line>

        <Stage>He nods at the camera. The shot holds for a few seconds. In the background, Garrett is carrying his snare drum under one arm and has the WAND mug in his other hand. He pauses, seems to consider whether the mug is his to take, sets it back on the coffee table, and exits frame. Cut to the title card. Cut to the community bulletin board. MIDI loop. The calico cat is still missing. The tape rolls for another two minutes before the tracking goes bad and someone has recorded over the rest with what appears to be the eleven o'clock news.</Stage>

        {/* Document footer */}
        <div style={{
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          fontSize: "10px",
          color: "#aaa",
          textAlign: "center",
          lineHeight: "18px",
        }}>
          End of tape. Total runtime approx. 22 minutes.<br />
          Transcribed from VHS cassette, unlabeled.<br />
          Source: Box lot #14, estate sale, 2200 block of E. Sangamon Ave., Springfield, IL.
        </div>
      </div>
    </div>
  )
}
