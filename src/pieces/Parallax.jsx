export default function Parallax() {
  function TN({ children }) {
    return (
      <span style={{
        fontSize: "13px",
        color: "#888",
        fontStyle: "italic",
      }}>
        [TN: {children}]
      </span>
    )
  }

  function Q({ children }) {
    return (
      <p style={{
        margin: "0 0 20px",
        fontWeight: 700,
        color: "#2a2a2a",
      }}>
        <span style={{ color: "#c0392b", fontWeight: 700 }}>Watanabe:</span> {children}
      </p>
    )
  }

  function A({ who, children }) {
    return (
      <p style={{ margin: "0 0 20px" }}>
        <span style={{ fontWeight: 700, color: "#2a2a2a" }}>{who}:</span> {children}
      </p>
    )
  }

  function Narration({ children }) {
    return (
      <p style={{
        margin: "0 0 20px",
        fontStyle: "italic",
        color: "#777",
        fontSize: "14px",
      }}>
        {children}
      </p>
    )
  }

  return (
    <div style={{
      background: "#eae6df",
      minHeight: "100vh",
      fontFamily: '"Georgia", "Times New Roman", serif',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet" />

      {/* Blog layout with sidebar */}
      <div className="piece-sidebar-layout" style={{
        maxWidth: "960px",
        margin: "0 auto",
        display: "flex",
        gap: "0",
        minHeight: "100vh",
      }}>
        {/* Main content */}
        <div className="piece-main-with-sidebar" style={{
          flex: 1,
          background: "#fff",
          padding: "0",
          maxWidth: "660px",
          borderRight: "1px solid #ddd",
          borderLeft: "1px solid #ddd",
        }}>
          {/* Blog header */}
          <div style={{
            background: "#1a1a2e",
            padding: "28px 32px",
          }}>
            <div style={{
              fontFamily: '"Fira Sans", sans-serif',
              fontSize: "26px",
              fontWeight: 700,
              color: "#e8e8e8",
              letterSpacing: "-0.01em",
            }}>
              SubFreqBlog
            </div>
            <div style={{
              fontFamily: '"Fira Sans", sans-serif',
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.35)",
              marginTop: "4px",
              letterSpacing: "0.03em",
            }}>
              deep cuts {"\u00b7"} translations {"\u00b7"} electronic {"\u00b7"} experimental
            </div>
          </div>

          {/* Nav */}
          <div style={{
            background: "#222240",
            padding: "8px 32px",
            display: "flex",
            gap: "20px",
            fontFamily: '"Fira Sans", sans-serif',
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}>
            {["Home", "About", "Translations", "Mixes", "Contact"].map(item => (
              <span key={item} style={{ color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>{item}</span>
            ))}
          </div>

          {/* Post */}
          <div style={{ padding: "32px 32px 48px" }}>
            {/* Post meta */}
            <div style={{
              fontFamily: '"Fira Sans", sans-serif',
              fontSize: "11px",
              color: "#999",
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}>
              December 3, 2016
            </div>

            <h1 style={{
              fontFamily: '"Merriweather", Georgia, serif',
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#1a1a1a",
              margin: "0 0 8px",
            }}>
              Parallax: The Ototoy Interview (Translated)
            </h1>

            {/* Tags */}
            <div style={{
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}>
              {["parallax", "japanese electronic", "osaka", "noise-pop", "ototoy", "translated interview"].map(tag => (
                <span key={tag} style={{
                  fontFamily: '"Fira Sans", sans-serif',
                  fontSize: "11px",
                  color: "#6a7b8a",
                  background: "#eef2f5",
                  padding: "2px 8px",
                  borderRadius: "3px",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Post body */}
            <div style={{
              fontFamily: '"Merriweather", Georgia, serif',
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#3a3a3a",
            }}>
              <p style={{ margin: "0 0 20px", fontWeight: 700 }}>
                For those of you who don't know Parallax yet, this is your way in.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                I've been digging into the Osaka electronic scene for the better part of a year now, and these two keep coming up. Koji and Sana. No last names in any of the press I've found, which seems to be intentional or maybe just how it works over there. They make music that sits somewhere between acid jazz, noise-pop, and the kind of anthemic electronic music that people who miss early Underworld are always chasing. Except they're not chasing anything. They're doing something I haven't heard anyone else do, which is make intricate, jazz-informed compositions using almost entirely hardware synths and drum machines, and somehow make it feel enormous.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                This interview was originally published on Ototoy in March 2015. The interviewer is Aiko Watanabe, who covers electronic and experimental music for the site. I've translated selected portions below to give English-speaking listeners some context for a duo that deserves way more attention outside Japan.
              </p>

              <p style={{ margin: "0 0 20px" }}>
                A few notes before we get into it. I don't speak Japanese fluently. I've been studying on and off for about eight months using a combination of online tools and a phrasebook I bought at a used bookstore in Portland. The original interview runs about 4,000 words. I've translated the parts that seemed most relevant to understanding the music. I've done my best to preserve the tone and meaning, but Japanese is a contextual language and some things don't convert cleanly into English. Where I've had to make a judgment call, I've tried to err on the side of clarity. Any errors are mine. Corrections welcome at the bottom.
              </p>

              <p style={{ margin: "0 0 24px", fontSize: "13px", color: "#999" }}>
                [TN] = Translator's Note
              </p>

              <Narration>Watanabe meets Koji and Sana at a coffee shop in the Shinsekai district of Osaka. She notes that they arrive separately but sit close together, and that Koji orders for both of them without discussion. Sana is wearing headphones around her neck for the duration of the interview.</Narration>

              <Q>Thank you for making the time. I know you've been busy preparing for shows. Let me start simply: how do you describe what Parallax is to someone who hasn't heard you?</Q>

              <A who="Koji">That's difficult. We don't describe it very much.</A>

              <A who="Sana">We usually just say "electronic music" and let people decide after that. Labels are more useful for other people than for us.</A>

              <Q>The name. I've seen it confuse people who expect something more aggressive from it. Where did it come from?</Q>

              <A who="Koji">I saw the word somewhere. A documentary, I think. Or a book. I don't remember exactly. I liked how it sounded. I told Sana and she agreed.</A>

              <A who="Sana">That's the whole story. There's no deeper meaning.</A>

              <A who="Koji">Maybe there is and we just don't know it yet. [laughs]</A>

              <Q>You've both been playing music for a long time before this project. Can you talk about how you found each other?</Q>

              <A who="Koji">I was doing solo work. Sequencer pieces, mostly. Very structured. A friend of mine who runs sound at a bar in Namba told me I needed to hear what Sana was doing with drum machines. He said she played them like a jazz drummer, which I thought was an exaggeration.</A>

              <A who="Sana">It wasn't.</A>

              <A who="Koji">It wasn't. I went to see her at a small event in Amerikamura. She was playing a rhythm on the Analog Rytm that was in seven, and then layered a pattern in four over it, and they locked together in a way I couldn't figure out. I stood there for twenty minutes trying to count it. After, I introduced myself and asked how she constructed the polyrhythm. She looked at me like I'd asked how she breathes.</A>

              <A who="Sana">I don't construct them. I just hear them. When I try to explain the counting to people, even the monkeys fall out of the trees. [1]</A>

              <Q>Your equipment setup is quite specific. Can you walk me through what each of you does?</Q>

              <A who="Koji">I use a Prophet-08 for most of the harmonic work. An Octatrack for sequencing and sampling. And I have a Rhodes that I run through a chain of effects, mostly delay and saturation. The Rhodes is the oldest thing in the setup. Everything else I can replace. That one I can't.</A>

              <A who="Sana">I'm on the Analog Rytm for rhythm. A Sub 37 for bass and lead lines. And a Kaoss Pad for <TN>I think she's describing real-time signal processing here</TN> manipulation. I use it on Koji's signal as much as my own. Sometimes more.</A>

              <Q>That's interesting. You process each other's sound in real time?</Q>

              <A who="Sana">Always. That's most of what we're doing on stage. The compositions exist, but the performance is about feeling the air between us and responding. <TN>"feeling the air" seems to be how Sana describes the room's atmosphere, the way the physical space affects what they play.</TN> If Koji shifts a chord voicing, I might change the bass tone to follow it or I might push against it. That decision happens in the moment.</A>

              <Q>Your music is technically complex, but it doesn't feel academic. It feels urgent. How do you maintain that balance?</Q>

              <A who="Koji">I think about that a lot. My instinct is always to add. Another layer, another voice in the arrangement, another harmonic variation. Sana's instinct is to move. She wants the music to go somewhere. My job is to give her enough to work with without making the room too full for her to run in.</A>

              <Q>Sana, is that how you see it?</Q>

              <A who="Sana">Koji talks about it more than I do. For me it's simpler. If I feel the need to move, the music is working. If I feel stuck, something is wrong. I don't analyze it much. I trust what my body tells me. Playing with Koji is easy because he has a good sense of spacing. He knows where to leave room. <TN>The word she uses is {"\u9593"} (ma), which refers to gaps or spacing in an arrangement.</TN> When I first started playing with other electronic musicians, everyone wanted to fill every second. Koji understands that the space between the sounds is where the music actually lives. That's rare. That's why this works.</A>

              <Narration>Watanabe notes that Sana turns to look at Koji when she says this, and that he doesn't respond but adjusts his cup slightly on the table.</Narration>

              <Q>Can you tell me about the Osaka scene as you experience it? There's a perception outside the city that Osaka is always in Tokyo's shadow for electronic music.</Q>

              <A who="Koji">That perception is correct and also irrelevant. What happens in Osaka happens because nobody is watching. That's the advantage. In Tokyo, everything is visible. Everyone is positioning. Here, you can fail for years and nobody notices, which means you can actually learn.</A>

              <A who="Sana">Osaka musicians talk to each other more than Tokyo musicians. That's my experience. In Tokyo, collaboration is strategic. Here it's because someone lives on the next street and has a synthesizer you want to borrow.</A>

              <Q>You played a show last month at Conpass that people are still talking about. What happened that night?</Q>

              <A who="Koji">I don't know how to answer that. From where I was standing, it was a normal show. The sound was good. The room was the right size. We played well.</A>

              <A who="Sana">It wasn't normal. We were about halfway through "Sour Geometry" and Koji dropped the root out of the chord progression. Not by accident. He just removed the bottom note and let the upper voicings hang there with nothing underneath. I'd never heard him do that before. It opened this gap in the middle of the sound.</A>

              <A who="Koji">I was listening to what Sana was doing with the rhythm and the low end was fighting her bass line. I thought, what if I just leave?</A>

              <A who="Sana">And I heard the space open and I moved the Sub 37 into it. I took over the harmonic floor. Which meant Koji was free to do something he never does, which is play a melody. A real melody. On the Rhodes, through the delay chain. It sat on top of everything I was building underneath and it just floated there.</A>

              <A who="Koji">It lasted maybe ninety seconds.</A>

              <A who="Sana">It lasted the rest of the show. We never went back to the original arrangement. We played the last three songs in this new configuration where I was holding the bottom and he was on top and it was like we'd been doing it that way for years. <TN>I think she means the musical arrangement shifted permanently for the rest of the set, not that they literally changed positions on stage.</TN></A>

              <Q>What did the audience do?</Q>

              <A who="Sana">Nothing. They didn't move. I don't mean that in a poetic way. I looked out during the transition and people were just standing still. One woman had her hand on the person next to her and I don't think she knew it. After the set, everyone started talking at once. Not to us. To each other. Like they needed to say something immediately.</A>

              <A who="Koji">I thought we'd done something wrong.</A>

              <A who="Sana">You always think that.</A>

              <p style={{ margin: "0 0 20px", fontSize: "13px", color: "#999", fontStyle: "italic" }}>
                [TN: I wasn't able to find any recordings of this show. If anyone has a bootleg or phone capture of the Conpass set, please get in touch through the contact page.]
              </p>

              <Q>There's an emotional quality to your music that surprises people who expect electronic music to be cold or purely rhythmic. Where does that come from?</Q>

              <A who="Koji">I don't think electronic music is cold. I think people who say that haven't listened properly. A synthesizer responds to your hands the same way a piano does. The emotion is always there. The machine doesn't remove it. It just transmits it differently.</A>

              <A who="Sana">When I was learning to play drums as a teenager, my teacher told me that rhythm is the body's memory of the heartbeat. It's the first music we ever hear. It doesn't matter if you play it on a drum or a machine. The body remembers. I think people respond to our music because it reminds them of something physical. Not because we're being emotional on purpose. We don't really talk about feelings. We just play and the feelings are there or they aren't. It's like dumplings instead of flowers. [2]</A>

              <Q>What's next for Parallax?</Q>

              <A who="Koji">We're recording. Slowly. We don't have a deadline. We don't have a label asking for anything. That's a luxury, I think.</A>

              <A who="Sana">We have a few shows in Kansai this spring. And there's been some interest from outside Japan, which is new for us. I don't really know what to do about it. I want to borrow a cat's hand, honestly. [3]</A>

              <A who="Koji">We'll figure it out. Or we won't. The music will still be there either way.</A>

              <A who="Sana">Koji says things like that and means them completely. That's the other reason this works. [laughs]</A>

              <Narration>Watanabe closes by noting that Koji and Sana leave separately, as they arrived. Sana puts her headphones on before she reaches the door.</Narration>

              {/* Closing note */}
              <div style={{
                marginTop: "32px",
                paddingTop: "20px",
                borderTop: "1px solid #ddd",
              }}>
                <p style={{ margin: "0 0 20px" }}>
                  If you made it this far, thank you. I know this translation is imperfect. I know there are probably things I missed or got wrong. But I think even through the rough edges, you can hear two musicians who are making something extraordinary and who aren't in a hurry to explain it to anyone, including themselves. If you haven't listened to Parallax yet, start with the track "Sour Geometry" on their Bandcamp page. Put on headphones. Turn it up. As always, corrections welcome. I'm still learning.
                </p>
                <p style={{ margin: "0 0 20px", fontWeight: 700, color: "#555", fontSize: "14px" }}>
                  {"\u2014"} SubFreqBlog
                </p>
              </div>

              {/* Translator's endnotes */}
              <div style={{
                marginTop: "24px",
                paddingTop: "20px",
                borderTop: "1px solid #ddd",
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#777",
              }}>
                <div style={{
                  fontFamily: '"Fira Sans", sans-serif',
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#999",
                  marginBottom: "12px",
                }}>
                  Translator's Endnotes
                </div>

                <p style={{ margin: "0 0 12px" }}>
                  <strong>[1]</strong> I'm not sure what this expression means. The original is {"\u733f\u3082\u6728\u304b\u3089\u843d\u3061\u308b"} (saru mo ki kara ochiru), which literally translates to "even monkeys fall from trees." Sana seems to be saying that even she can't explain her own process clearly, that the explanation itself is harder than the thing. Or possibly she's making a joke about primates. I've left it as close to literal as I could because I think the strangeness is part of the point. If any Japanese speakers want to clarify this one, I'm all ears.
                </p>

                <p style={{ margin: "0 0 12px" }}>
                  <strong>[2]</strong> This one I'm genuinely unsure about. The original is {"\u82b1\u3088\u308a\u56e3\u5b50"} (hana yori dango), literally "dumplings over flowers." I Googled this phrase and mostly got results for a manga series and a recipe blog about hanami picnic foods, neither of which seemed right in context. My best guess is that Sana is saying she prefers the substance of the music over anything decorative or performative. Basically that they don't dress it up emotionally; it either connects or it doesn't. But given the search results, it could also just be about food. She mentions eating a lot throughout the interview. If anyone wants to weigh in on this, I'd appreciate it.
                </p>

                <p style={{ margin: "0 0 0" }}>
                  <strong>[3]</strong> Okay so this one is strange. The phrase is {"\u732b\u306e\u624b\u3082\u501f\u308a\u305f\u3044"} (neko no te mo karitai), literally "I want to borrow even a cat's hand." My best guess is that Sana is saying she'd take help from anywhere, even an animal, because the outside interest is overwhelming and they don't have a team or management to deal with it. But the image is so specific that I wonder if there's a cultural layer I'm missing. It might just be how people talk in Osaka. I've noticed a lot of animal expressions in the interview and I'm starting to think it's either a regional thing or Sana just really likes animals.
                </p>
              </div>
            </div>

            {/* Comment count / share bar */}
            <div style={{
              marginTop: "32px",
              paddingTop: "16px",
              borderTop: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: '"Fira Sans", sans-serif',
              fontSize: "12px",
              color: "#aaa",
            }}>
              <span>14 comments</span>
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ cursor: "pointer" }}>Share</span>
                <span style={{ cursor: "pointer" }}>Reblog</span>
                <span style={{ cursor: "pointer" }}>RSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="piece-sidebar" style={{
          width: "240px",
          padding: "24px 20px",
          fontFamily: '"Fira Sans", sans-serif',
          fontSize: "13px",
          color: "#777",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}>
          {/* About */}
          <div>
            <div style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#aaa",
              marginBottom: "8px",
            }}>
              About
            </div>
            <div style={{ lineHeight: 1.6 }}>
              Translations, deep dives, and occasional dispatches from the edges of electronic music. Based in Portland, OR. Contact: subfreqblog [at] gmail.
            </div>
          </div>

          {/* Recent posts */}
          <div>
            <div style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#aaa",
              marginBottom: "8px",
            }}>
              Recent
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", lineHeight: 1.5 }}>
              <span style={{ cursor: "pointer", color: "#5a7a9a" }}>Tokyo Noise Round-Up: November</span>
              <span style={{ cursor: "pointer", color: "#5a7a9a" }}>Field Recording as Practice: Three New Releases</span>
              <span style={{ cursor: "pointer", color: "#5a7a9a" }}>Parallax: The Ototoy Interview (Translated)</span>
              <span style={{ cursor: "pointer", color: "#5a7a9a" }}>Mixtape: Late Night Kansai</span>
              <span style={{ cursor: "pointer", color: "#5a7a9a" }}>Why Bandcamp Still Matters</span>
            </div>
          </div>

          {/* Tags */}
          <div>
            <div style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#aaa",
              marginBottom: "8px",
            }}>
              Tags
            </div>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              fontSize: "11px",
            }}>
              {["ambient", "drone", "electronic", "field recording", "japan", "noise", "osaka", "techno", "tokyo", "translation"].map(tag => (
                <span key={tag} style={{
                  color: "#8a9aaa",
                  background: "#f0f0ec",
                  padding: "2px 6px",
                  borderRadius: "2px",
                  cursor: "pointer",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Archive */}
          <div>
            <div style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#aaa",
              marginBottom: "8px",
            }}>
              Archive
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px", color: "#999" }}>
              <span>December 2016 (3)</span>
              <span>November 2016 (2)</span>
              <span>October 2016 (4)</span>
              <span>September 2016 (1)</span>
              <span>August 2016 (3)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
