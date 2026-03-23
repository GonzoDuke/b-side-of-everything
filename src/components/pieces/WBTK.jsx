export default function WBTK() {
  function Speaker({ name, children }) {
    return (
      <div style={{ margin: "0 0 16px" }}>
        <span style={{
          fontWeight: 600,
          color: "#1a1a1a",
          textTransform: "uppercase",
          fontSize: "12px",
          letterSpacing: "0.04em",
        }}>
          {name}:
        </span>{" "}
        <span>{children}</span>
      </div>
    )
  }

  function Pause() {
    return (
      <div style={{
        margin: "12px 0",
        fontSize: "13px",
        fontStyle: "italic",
        color: "#999",
      }}>
        [Pause.]
      </div>
    )
  }

  function LongPause() {
    return (
      <div style={{
        margin: "12px 0",
        fontSize: "13px",
        fontStyle: "italic",
        color: "#999",
      }}>
        [Long pause.]
      </div>
    )
  }

  function Silence() {
    return (
      <div style={{
        margin: "12px 0",
        fontSize: "13px",
        fontStyle: "italic",
        color: "#999",
      }}>
        [Silence.]
      </div>
    )
  }

  function Stage({ children }) {
    return (
      <div style={{
        margin: "12px 0",
        fontSize: "13px",
        fontStyle: "italic",
        color: "#999",
      }}>
        [{children}]
      </div>
    )
  }

  function Laughter() {
    return (
      <div style={{
        margin: "12px 0",
        fontSize: "13px",
        fontStyle: "italic",
        color: "#999",
      }}>
        [Laughter.]
      </div>
    )
  }

  return (
    <div style={{
      background: "#b8bcc0",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      padding: "32px 16px 80px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

      <div style={{
        maxWidth: "min(92vw, 1300px)",
        width: "100%",
        background: "#f7f7f5",
        padding: "clamp(36px, 6vw, 64px) clamp(24px, 5vw, 64px) clamp(40px, 6vw, 72px)",
        boxShadow: "0 1px 8px rgba(0,0,0,0.1)",
        fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
        fontSize: "14.5px",
        lineHeight: 1.75,
        color: "#2a2a2a",
        position: "relative",
      }}>
        {/* Document header */}
        <div style={{
          marginBottom: "32px",
          paddingBottom: "20px",
          borderBottom: "1px solid #ddd",
        }}>
          <div style={{
            background: "#1a1a1a",
            color: "#fff",
            fontFamily: '"IBM Plex Sans", sans-serif',
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "8px 12px",
            marginBottom: "16px",
            display: "inline-block",
          }}>
            WBTK 98.3 The Beat
          </div>
          <div style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#1a1a1a",
            lineHeight: 1.25,
            marginBottom: "4px",
          }}>
            The Morning Lift with D-Block, Shanice, and Mike
          </div>
          <div style={{
            fontSize: "13px",
            color: "#888",
            marginBottom: "2px",
          }}>
            Thursday, March 16, 1995 {"\u00b7"} Norfolk, Virginia
          </div>
          <div style={{
            fontFamily: '"Courier Prime", "Courier New", monospace',
            fontSize: "10px",
            color: "#aaa",
            marginTop: "8px",
            letterSpacing: "0.03em",
          }}>
            TRANSCRIPT {"\u2014"} AUDIO CASSETTE {"\u2014"} UNLABELED
          </div>
        </div>

        {/* Transcript body */}
        <Speaker name="WENDELL">...and that's what we keep running into. People remember the music, they remember being at a show, but nobody wrote anything down. You go looking for documentation and it's just not there.</Speaker>

        <Speaker name="SHANICE">How long y'all been working on this?</Speaker>

        <Speaker name="WENDELL">Going on two years now. Started slow, though. First six months was me and Curt arguing about the scope.</Speaker>

        <Speaker name="CURTIS">He wanted to go back to '82. I said we don't have the sources for '82, we're going to be making stuff up. We settled on '86 to '92.</Speaker>

        <Speaker name="D-BLOCK">That's the window. That's when it was happening.</Speaker>

        <Speaker name="MIKE">And this is all seven cities? Norfolk, the Beach, Newport News, the whole area?</Speaker>

        <Speaker name="WENDELL">All of it. And that's part of the story too, because each city had its own pocket. The Beach was doing something totally different from Norfolk. Newport News had its own thing. And a lot of these cats didn't even know about each other until they'd end up at the same show.</Speaker>

        <Speaker name="D-BLOCK">The Beach was always separate. Always.</Speaker>

        <Speaker name="CURTIS">Right. The Beach was more electronic, more uptempo, more funk in the production. Norfolk was rawer. Sample-based. And then you had cats in Newport News doing something in between.</Speaker>

        <Speaker name="MIKE">And none of this is really documented anywhere.</Speaker>

        <Speaker name="WENDELL">That's the whole point. New York has their history written ten times over. LA got books. We got nothing. We got people's memories and a bunch of tapes in shoeboxes. So we're trying to get to it before it's gone.</Speaker>

        <Speaker name="MIKE">Give us some names. Who's in the piece?</Speaker>

        <Speaker name="WENDELL">We got a chapter on Critical Mass, who were probably the first crew in Norfolk doing all original production. Not rapping over somebody else's beat. Building from scratch. We got a whole section on the DJ culture at Norfolk State, because 91.1 was the pipeline. If you wanted ears in Norfolk you went through that station.</Speaker>

        <Speaker name="CURTIS">Newport News we're covering the Wreckin' Crew, couple solo acts out of there. Virginia Beach has its own chapter. And then we got a section on the duo acts.</Speaker>

        <Speaker name="D-BLOCK">Who's in the duo section?</Speaker>

        <Speaker name="CURTIS">Baseline Committee. Ground Level, who were really more Newport News but they played everywhere. And Big Ben and Roscoe.</Speaker>

        <Pause />

        <Speaker name="D-BLOCK">Okay. Hold on. Hold on, hold on.</Speaker>

        <Speaker name="CURTIS">What?</Speaker>

        <Speaker name="D-BLOCK">You just gonna drop that name in a list? Big Ben and Roscoe? Like they're just one of the acts?</Speaker>

        <Speaker name="SHANICE">Here we go.</Speaker>

        <Speaker name="D-BLOCK">Nah, don't 'here we go' me. Curt, I'm telling you right now, I saw Big Ben and Roscoe at The Boathouse. I saw them at Norfolk State. I saw them in somebody's yard in Ocean View rapping off a porch with one speaker and a boombox. You're not about to run through them like a bullet point.</Speaker>

        <Speaker name="MIKE">I've heard the name. Never got the full story.</Speaker>

        <Speaker name="D-BLOCK">Because there's nobody to tell it. That's why Wendell and Curt are here. But I'm also here, and I was at those shows, so. Go ahead. Tell the man what you got and I'll fill in the parts you're missing.</Speaker>

        <Speaker name="WENDELL">Alright. Big Ben and Roscoe. Duo out of Norfolk. Came together around '88, early '89. Big Ben is Bernard Oates.</Speaker>

        <Speaker name="D-BLOCK">Benny O.</Speaker>

        <Speaker name="WENDELL">Right. And Roscoe is Dante Holley.</Speaker>

        <Speaker name="MIKE">Where'd the name Roscoe come from?</Speaker>

        <Speaker name="CURTIS">Nobody agrees. One person said it was a grandfather's name. Somebody else said it was a dog he had as a kid. Dante never told anybody a straight answer, far as we can tell.</Speaker>

        <Speaker name="D-BLOCK">It was just his name. People called him that. I don't think he gave it a second thought.</Speaker>

        <Speaker name="WENDELL">They got connected through a DJ named Arthur Banks, went by Archie Bunker.</Speaker>

        <Speaker name="MIKE">Archie Bunker.</Speaker>

        <Speaker name="WENDELL">1988, man.</Speaker>

        <Speaker name="MIKE">No, I'm not questioning it. I'm just enjoying it.</Speaker>

        <Speaker name="WENDELL">Archie had a basement off Church Street. Four-track, a drum machine. Not the best gear. Not the best DJ in Norfolk either. But everybody came through because Archie was the kind of cat who'd let you use his equipment and not charge you for it. He says he's the one who put Dante and Benny together. Other people say they already knew each other from around Park Place and Archie just happened to have the four-track.</Speaker>

        <Speaker name="D-BLOCK">Both of those are probably true. They might've known each other on the street and not known what the other one could do on the mic until Archie's basement.</Speaker>

        <Speaker name="MIKE">So what'd they sound like?</Speaker>

        <Speaker name="D-BLOCK">Okay. So. Benny was the smoothest dude on a beat you ever heard. His flow was so natural it barely registered as rapping. It just sounded like talking, except every word was exactly where it needed to be. The beat wasn't something he rode. It was something he lived in. Like the rhythm was just how he moved through a sentence.</Speaker>

        <Speaker name="MIKE">And Roscoe?</Speaker>

        <Speaker name="D-BLOCK">Roscoe was the one that got you later. You'd hear a verse and nod along and think you got it. Then you'd be in your car an hour later and a line would come back to you and you'd realize what he actually said. He'd bury the real thing under the obvious thing. Give you the surface for free, make you earn what was underneath.</Speaker>

        <Speaker name="CURTIS">The production was in the Native Tongues lane. Jazz samples, stuff that wasn't obvious. On the tape, Free Period, the first track 'Front Porch' opens with a bass line that we've been told is from an Ahmad Jamal record, but we can't nail it down because Archie told us something different every time we asked.</Speaker>

        <Speaker name="D-BLOCK">It's Ahmad Jamal. I asked Archie myself.</Speaker>

        <Speaker name="CURTIS">You're the fifth person who says Ahmad Jamal. Archie told us Ramsey Lewis the first time, Ahmad Jamal the second time, and the third time he said he couldn't remember.</Speaker>

        <Speaker name="D-BLOCK">That's Archie. The man's been like that since I've known him.</Speaker>

        <Speaker name="MIKE">How'd they work together? Like, were they trading verses, finishing lines, what was the structure?</Speaker>

        <Speaker name="D-BLOCK">See, that's what made them different. It wasn't my turn, your turn. They'd be in the same verse. Roscoe would start a thought, not finish it, and Benny would pick it up and take it somewhere you didn't expect. And then Roscoe would come back and build on where Benny went, not on where he started. So the whole verse is turning. You can't get ahead of it because they're steering each other. It sounded like they were making it up on the spot, but it was all written. That's the trick. They rehearsed it to the point where it sounded unrehearsed.</Speaker>

        <Speaker name="SHANICE">My cousin Rodney used to talk about them all the time. He went to Norview same years as Dante.</Speaker>

        <Speaker name="MIKE">Was Rodney in the scene?</Speaker>

        <Speaker name="SHANICE">Rodney was around. He wasn't making music, but he was at every show, knew everybody. He played Free Period in his car till the tape stretched. Had to get somebody to dub him another copy and wore that one out too.</Speaker>

        <Speaker name="MIKE">How many copies of this tape are we talking about?</Speaker>

        <Speaker name="CURTIS">Original run was maybe fifty, sixty. All dubbed in Archie's basement. Sold for three dollars at shows and a couple spots on Granby Street.</Speaker>

        <Speaker name="MIKE">And today?</Speaker>

        <Speaker name="CURTIS">I have one. It's in rough shape. Somebody wrote a girl's phone number on the J-card.</Speaker>

        <Speaker name="SHANICE">You try calling it?</Speaker>

        <Speaker name="CURTIS">It's from 1989, Shanice.</Speaker>

        <Speaker name="SHANICE">People keep their numbers.</Speaker>

        <Speaker name="D-BLOCK">She's not wrong.</Speaker>

        <Speaker name="CURTIS">I'm not calling a random number off a six-year-old tape on air.</Speaker>

        <Speaker name="SHANICE">I didn't say on air.</Speaker>

        <Laughter />

        <Speaker name="MIKE">What else is on the tape?</Speaker>

        <Speaker name="WENDELL">Six tracks. 'Front Porch' is the one that got radio play. DJ Smooth at ODU was the biggest champion. WNSB played it a handful of times. Then there's 'Saturday Work,' which is about grinding at a job you can't stand and waiting all week for Friday and then Friday doesn't even come through for you. But the beat's up, Benny's loose on it, almost laughing through his bars. And then Roscoe comes in at the end and shifts the whole weight of the track without changing the subject. Same topic. Different gravity.</Speaker>

        <Speaker name="D-BLOCK">That's how he did it. Roscoe could change the temperature of a song without raising his voice.</Speaker>

        <Speaker name="CURTIS">There's one called 'Backpedal' where Benny does his whole verse in reverse. Starts at the end of the night and works backward to the morning.</Speaker>

        <Speaker name="MIKE">That's ambitious for '89.</Speaker>

        <Speaker name="D-BLOCK">That's what I'm telling you. These weren't dudes just freestyling at a party. They were thinking about it. About the craft of it.</Speaker>

        <Speaker name="MIKE">How'd the tape move? How'd people hear it?</Speaker>

        <Speaker name="D-BLOCK">How'd anything move back then? You dub a copy for your man. He plays it at a party. Somebody at the party knows somebody who books shows. That was the whole system. There was no infrastructure. You just had to put the tape in somebody's hand and hope they pressed play.</Speaker>

        <Speaker name="WENDELL">By late '90 it had reached outside Hampton Roads. Some DJs in DC had copies. We heard somebody at WPGC played 'Front Porch' at least once.</Speaker>

        <Speaker name="SHANICE">Rodney was so funny about that tape. He wouldn't dub it for just anybody. He had, like, a whole screening process. He'd ask what you were listening to, and if you said the wrong thing he'd say he lost it.</Speaker>

        <Speaker name="D-BLOCK">Gatekeeping the dub. That's love, though. That's a man who cares about who hears it.</Speaker>

        <Speaker name="SHANICE">That's exactly what it was.</Speaker>

        <Speaker name="MIKE">So the word is spreading. What happens next?</Speaker>

        <Speaker name="WENDELL">Well, that's where it goes sideways. But before we get into that, we should talk about the track that wasn't on the tape.</Speaker>

        <Speaker name="D-BLOCK">Thank you. Thank you. '56 and Tidewater.'</Speaker>

        <Speaker name="MIKE">What is that?</Speaker>

        <Speaker name="D-BLOCK">The best thing they ever made. And it doesn't exist anywhere except in the heads of the people who heard it.</Speaker>

        <Speaker name="MIKE">What do you mean?</Speaker>

        <Speaker name="D-BLOCK">I mean there's no recording. It came after Free Period. Late '90, maybe early '91. They were doing it live. And Wendell and Curt have been looking for a tape and there's nothing.</Speaker>

        <Speaker name="CURTIS">We chased three leads. One guy swore he had it on a tape somewhere. Couldn't find it. Second tape turned out to be a different group entirely. Third person just stopped picking up the phone.</Speaker>

        <Speaker name="MIKE">So tell me about it. What was it?</Speaker>

        <Speaker name="D-BLOCK">It's named after the intersection. Route 56 and Tidewater Drive. You know the spot. Gas station, a church, check cashing place that used to be a laundromat. Nothing corner. Just a corner. And they built a world out of it.</Speaker>

        <Speaker name="D-BLOCK">Benny goes first. He's rapping as the woman behind the glass at the check cashing place. Full character. Doesn't break it once. He's inside her shift. The fluorescent lights, the partition, the line that's out the door on the first and the fifteenth, people sliding checks under the glass and looking at her like she's the reason they're short. And his cadence, man. It goes almost melodic. You stop hearing Benny. You hear her. He's in there for three minutes and by the end you know this woman's whole day and she's never said a word.</Speaker>

        <Speaker name="D-BLOCK">Then Roscoe comes in. He's across the street. He's on the church steps. And he's talking about an old man who's out there every single day. Doesn't matter if there's a service, doesn't matter what the weather is. The man is on those steps. And Roscoe never says why. Never uses the word God. Never says faith. Never says prayer. He just describes this man sitting there, and the light at that time of day, and the traffic going past, and the sound of the check cashing place across the street. And by the time the verse is done you know exactly what the man is waiting for. And it wrecks you. And you didn't see it coming because Benny had you smiling thirty seconds ago.</Speaker>

        <Pause />

        <Speaker name="WENDELL">That track comes up with everybody we talk to. Nobody agrees on anything else about this group. They agree on that.</Speaker>

        <Speaker name="MIKE">And nobody has a tape of it.</Speaker>

        <Speaker name="WENDELL">No confirmed recording. We've been looking for over a year.</Speaker>

        <Speaker name="MIKE">That's hard to sit with.</Speaker>

        <Speaker name="D-BLOCK">It is what it is. A lot of the best stuff from this era, the live show was the whole art form. The tape was the souvenir. Cats around here in the late 80s, the performance was the thing. You were there or you weren't.</Speaker>

        <Speaker name="SHANICE">D, tell them about The Boathouse.</Speaker>

        <Speaker name="D-BLOCK">Oh, I'm getting there. So, The Boathouse. They're opening for Kwam{"\u00e9"}. This is, what, late '89? Kwam{"\u00e9"} had the deal, the polka dots, the whole thing. Everybody in the building is there for Kwam{"\u00e9"}. And Benny and Roscoe go up first. Two mics and a boombox running the beat tape. That's it. No DJ, no hype man, nothing. And four songs in, the room is not waiting for Kwam{"\u00e9"} anymore. I'm not saying they blew him off the stage. I'm saying the room shifted. You could feel everybody's weight move forward. People stopped talking. People who'd been facing the bar turned around. By the time they finished, the energy in that building was theirs, and Kwam{"\u00e9"} had to come get it back.</Speaker>

        <Speaker name="SHANICE">Rodney was at that show. He tells the same story.</Speaker>

        <Speaker name="D-BLOCK">Everybody who was there tells the same story. It's the one thing nobody argues about.</Speaker>

        <Speaker name="MIKE">So all of this is pointing toward something. There's clearly momentum. What happened?</Speaker>

        <Speaker name="WENDELL">By early '91 there's label interest. Somebody connected to a label comes through, sees a show, makes some kind of contact.</Speaker>

        <Speaker name="MIKE">Which label?</Speaker>

        <Speaker name="CURTIS">Depends who you ask. We've heard Tommy Boy. We've heard Wild Pitch. Somebody said Sleeping Bag.</Speaker>

        <Speaker name="D-BLOCK">I heard Elektra, through somebody. But that's probably a reach.</Speaker>

        <Speaker name="WENDELL">See, everybody heard a different label. That's the pattern with everything about this group. Five people, five stories. But the point everybody agrees on is that there was interest from somebody with a real connection, and within six months, the group is done. No announcement. No farewell show. They just stopped showing up.</Speaker>

        <Speaker name="MIKE">And nobody knows why.</Speaker>

        <Speaker name="WENDELL">Nobody can give us one answer. We got three versions.</Speaker>

        <Speaker name="D-BLOCK">Let's hear 'em.</Speaker>

        <Speaker name="WENDELL">Okay. First one comes from Devon Price. Devon was around the scene, managed some local acts, booked shows. Devon says there was a promoter from DC who came through after a show at the Peppermint Beach Club, spring of '91. And this promoter talked to Benny and Dante separately. After the show. Individually. Told each of them the label was interested in him. Not the group. Him.</Speaker>

        <Speaker name="MIKE">So they both walk away thinking they're the one.</Speaker>

        <Speaker name="WENDELL">And neither of them knows the other one got the same pitch. Devon's read is that somebody played them against each other on purpose. Divide and conquer.</Speaker>

        <Speaker name="MIKE">Did Devon say who the promoter was?</Speaker>

        <Speaker name="CURTIS">He did. We're not using the name because we can't get anybody else to confirm it. But Devon was specific. Described the guy, said he drove a black Saab, said he'd seen him at other shows that year.</Speaker>

        <Speaker name="D-BLOCK">A black Saab in Virginia Beach in 1990. You know how many dudes that could be?</Speaker>

        <Speaker name="SHANICE">At least twelve.</Speaker>

        <Speaker name="D-BLOCK">At least. Okay, so that's Devon's version. Here's what I heard. And I got this from somebody close to both of them. Not a cousin of a cousin. Somebody who was in it. What I was told is that Benny went to New York. Took a meeting. Didn't tell Dante. And the meeting wasn't about Big Ben and Roscoe. It was about Big Ben. Solo.</Speaker>

        <Speaker name="SHANICE">That's not what I heard.</Speaker>

        <Speaker name="D-BLOCK">I know what you heard.</Speaker>

        <Speaker name="SHANICE">Rodney said Dante was the one making moves first. He was sending tapes out, calling people in New York, trying to get something going. For himself. And when Benny found out, he felt a way about it. Whatever Benny did after that, the meeting, whatever, that was a response. Not the first move.</Speaker>

        <Speaker name="D-BLOCK">Rodney got that from Dante.</Speaker>

        <Speaker name="SHANICE">Yeah. He did.</Speaker>

        <Speaker name="D-BLOCK">So Dante told his boy the version where Dante isn't the problem. You don't think that's filtered?</Speaker>

        <Speaker name="SHANICE">And your source isn't filtered?</Speaker>

        <Speaker name="D-BLOCK">I didn't say that.</Speaker>

        <Speaker name="SHANICE">Everybody's got their version, D. Nobody's was in the room when it happened.</Speaker>

        <Pause />

        <Speaker name="MIKE">Three stories. Benny took a meeting behind Dante's back. Dante was making solo moves first and Benny responded. Or some cat in a Saab played both of them.</Speaker>

        <Speaker name="CURTIS">And in all three versions, the ending is the same. Nothing happened. No deal for Benny. No deal for Dante. No deal for anybody. Whatever blew it up didn't even produce a winner. Just two guys from Norfolk who don't talk anymore and a tape that fifty people have.</Speaker>

        <Speaker name="D-BLOCK">That's the part that gets me. Nobody won. Whatever it was, it didn't get anybody anywhere. It just ended the thing.</Speaker>

        <Speaker name="MIKE">Have you tried reaching them?</Speaker>

        <Speaker name="WENDELL">We tried. Dante might be up in Maryland somewhere. We got a number through a friend of a friend. Left a message. Nothing back. Benny, nobody's sure. Somebody said Atlanta. Somebody said he went back to school.</Speaker>

        <Speaker name="CURTIS">Somebody told us he's driving trucks and doesn't want to talk about any of it.</Speaker>

        <Speaker name="MIKE">Can I ask something?</Speaker>

        <Speaker name="D-BLOCK">When do you not?</Speaker>

        <Speaker name="MIKE">Fair. Look, I came to this area in '92. I wasn't here for any of this. So I'm coming at it cold. And what I keep hearing, not just about these two but about a lot of acts from this era, is that there was real talent and nothing around it. No management. No lawyer looking at anything. Nobody whose job it was to make sure two guys from Norfolk didn't get split apart by the first person who walked in with a business card. Does it even matter who made the first move? Or does it matter that there was nothing protecting the thing?</Speaker>

        <Pause />

        <Speaker name="D-BLOCK">It matters who did it.</Speaker>

        <Speaker name="MIKE">Why, though?</Speaker>

        <Speaker name="D-BLOCK">Because a manager doesn't finish your bars. A lawyer doesn't write your verse. What Benny and Dante had was between them. In the music. In the way they went back and forth and built something neither one of them could build alone. And somebody broke that. A contract doesn't fix a broken trust. You can't lawyer your way through that.</Speaker>

        <Speaker name="MIKE">I hear you.</Speaker>

        <Speaker name="D-BLOCK">And I hear you too. You're not wrong about the structure. But you're looking at it from outside. When you were in the room with them, it wasn't a case study. It was two specific people doing something that mattered.</Speaker>

        <Speaker name="SHANICE">Both things are true, D.</Speaker>

        <Speaker name="D-BLOCK">I know both things are true. That's why it's a mess.</Speaker>

        <Speaker name="SHANICE">Can I say something? There's a version where nobody betrayed anybody. Rodney always said Dante was restless. Not disloyal. Restless. Like the duo was the best thing he'd ever been a part of and he still couldn't sit still in it. And maybe Benny felt that energy and read it wrong. And maybe what looks like somebody going behind somebody's back was just a man trying to figure out what he was worth on his own. Not to blow it up. Just to know.</Speaker>

        <Speaker name="D-BLOCK">That's generous.</Speaker>

        <Speaker name="SHANICE">Rodney's a generous person.</Speaker>

        <Speaker name="D-BLOCK">Rodney's also Dante's boy. Has been since high school.</Speaker>

        <Speaker name="SHANICE">Yeah. And your source is whoever your source is. And Devon's out here talking about a man in a Saab that half of Virginia Beach was driving. Everybody's got the version that makes sense to them, D. That doesn't make any of them the truth.</Speaker>

        <Silence />

        <Speaker name="D-BLOCK">Can I say something I've never talked about on air?</Speaker>

        <Speaker name="SHANICE">Go ahead.</Speaker>

        <Speaker name="D-BLOCK">Last time I saw them. Summer of '91. House party in Ocean View. Somebody's yard. It was hot, the front door was open, you could hear them from down the block. They had one speaker. Somebody's boombox. Maybe thirty people out there, and half of them weren't even there for the music. Just neighbors. They did five or six songs. Benny was joking around between tracks, the way he always did. Dante was quiet. Not performing quiet. Just quiet. I didn't think about it. They did 'Front Porch' and the whole yard was right there, and for ten minutes it was what it always was. Two guys locked in, thirty people catching it a half beat late and grinning. After, Benny went inside. Dante came down the porch steps and just stood in the yard by himself. I walked over because I wanted to tell him the set was good. You should always do that. Tell people when the set was good. He looked at me and he said, 'Thanks, D. I think that might be the last one.' I said, last one what? He just shook his head. Went inside.</Speaker>

        <LongPause />

        <Speaker name="SHANICE">When was that?</Speaker>

        <Speaker name="D-BLOCK">June. Maybe July.</Speaker>

        <Speaker name="CURTIS">The Peppermint Beach Club show where Devon says the promoter came through was May. If your party was June, whatever was going wrong had already been going wrong for weeks.</Speaker>

        <Speaker name="D-BLOCK">Yeah. And Dante knew. Or he was the one doing it. I don't know. He said 'I think that might be the last one' and then it was. Four years later I still don't know if he was telling me something or asking me something. I couldn't read his face then and I can't read it now.</Speaker>

        <Speaker name="MIKE">Is there anything left? Beyond the tape and the memories?</Speaker>

        <Speaker name="D-BLOCK">I got a flyer from the Boathouse show somewhere. I think.</Speaker>

        <Speaker name="CURTIS">We've got two flyers. Boathouse and Norfolk State. And the tape with the phone number on it.</Speaker>

        <Speaker name="MIKE">What about '56 and Tidewater'? Nothing?</Speaker>

        <Speaker name="WENDELL">We've been looking for over a year. If a recording exists, it's in a box somebody hasn't opened.</Speaker>

        <Speaker name="SHANICE">Or it's in somebody's head. D's head. Whoever else was at those shows. It's there.</Speaker>

        <Speaker name="MIKE">And eventually it's not.</Speaker>

        <Speaker name="SHANICE">Everything's eventually not, Mike.</Speaker>

        <Speaker name="D-BLOCK">She's right. But I go back and forth on it. Some days I think what's gone is gone and the people who were there got what they got. Other days I think about some kid in Norfolk right now who's fifteen and making beats in his bedroom and he's never going to hear what was happening in this city before Tim and Missy and Pharrell. There were people doing real work in rooms that nobody documented. And somebody should say their names at least once.</Speaker>

        <Speaker name="SHANICE">Say it, then.</Speaker>

        <Speaker name="D-BLOCK">Big Ben and Roscoe. 98.3. Thursday morning, March 1995. Somebody heard it.</Speaker>

        <Speaker name="MIKE">We gotta go to break. Wendell, Curtis, thank you for coming in.</Speaker>

        <Speaker name="WENDELL">Appreciate it. This went different than we planned.</Speaker>

        <Speaker name="D-BLOCK">Come back when the piece is out. I want the whole thing. Not just these two.</Speaker>

        <Speaker name="CURTIS">Y'all got it.</Speaker>

        <Speaker name="MIKE">98.3 The Beat. We'll be right back.</Speaker>

        {/* Break notation */}
        <div style={{
          margin: "24px 0",
          padding: "16px 20px",
          background: "#f5f3ee",
          borderLeft: "3px solid #ccc",
          fontSize: "13px",
          fontStyle: "italic",
          color: "#999",
          lineHeight: 1.6,
        }}>
          The recording continues through a spot for Military Highway Motors and an ad for Priority Tax Services offering rapid refunds. When the broadcast returns, the segment has moved to weekend concert listings. Big Ben and Roscoe are not mentioned again.
        </div>

        {/* Document footer */}
        <div style={{
          marginTop: "32px",
          paddingTop: "16px",
          borderTop: "1px solid #ddd",
          fontFamily: '"Courier Prime", "Courier New", monospace',
          fontSize: "11px",
          color: "#aaa",
          lineHeight: 1.7,
        }}>
          END OF SEGMENT<br />
          Transcribed from audio cassette, unlabeled. Side B, approx. 40 min. mark.<br />
          Source tape provided by correspondent, Norfolk, VA.
        </div>
      </div>
    </div>
  )
}
