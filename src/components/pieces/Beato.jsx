export default function Beato() {
  function Section() {
    return (
      <div style={{
        textAlign: "center",
        margin: "36px 0",
        fontSize: "18px",
        color: "#bbb",
      }}>
        {"\u00a7"}
      </div>
    )
  }

  return (
    <div style={{
      background: "#111114",
      minHeight: "100vh",
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&family=Spectral:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet" />

      {/* Site header */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "20px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
          }}>
            subtone
          </div>
          <div style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "11px",
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.05em",
          }}>
            / 3voor12
          </div>
        </div>
        <div style={{
          display: "flex",
          gap: "20px",
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "12px",
          fontWeight: 500,
          color: "rgba(255,255,255,0.4)",
        }}>
          <span>Agenda</span>
          <span>Artikelen</span>
          <span>Reviews</span>
          <span>Podcasts</span>
        </div>
      </div>

      {/* Article */}
      <div style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "48px 24px 80px",
      }}>
        {/* Category tag */}
        <div style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#e07040",
          marginBottom: "16px",
        }}>
          Preview
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: '"Spectral", Georgia, serif',
          fontSize: "36px",
          fontWeight: 400,
          lineHeight: 1.25,
          color: "#f0ece4",
          margin: "0 0 12px",
          letterSpacing: "-0.01em",
        }}>
          A Devotional Signal Arrives in Amsterdam: Yoko Beato
        </h1>

        {/* Byline */}
        <div style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "13px",
          color: "rgba(255,255,255,0.35)",
          marginBottom: "32px",
        }}>
          <span style={{ color: "rgba(255,255,255,0.55)" }}>Lars Jansen</span>
          <span style={{ margin: "0 8px" }}>{"\u00b7"}</span>
          For Subtone / 3voor12
        </div>

        {/* Body */}
        <div style={{
          fontFamily: '"Spectral", Georgia, serif',
          fontSize: "17px",
          lineHeight: 1.85,
          color: "rgba(240,236,228,0.8)",
          fontWeight: 300,
        }}>
          <p style={{ margin: "0 0 22px" }}>
            On Thursday, an Australian producer named Yoko Beato will perform at Depot Noord for an audience of two hundred people who have been asked to leave their phones at the door. I've spent the better part of three weeks trying to write this preview. Most of what I've found raises more questions than it answers, which is either the nature of the artist or the nature of my research, and I genuinely cannot tell you which.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            What I can tell you: his name is almost certainly not Yoko Beato. The interviews, such as they are, suggest Noah Lir, though this appears in liner note annotations more than anywhere verifiable. He's from Ballarat, Victoria, a regional city in Australia that people from Ballarat describe as having a gold rush past and not much else. He makes electronic music that sits at the edge of several genres without settling into any of them. He has not performed in the Netherlands before. He agreed to this show and then stopped responding to the promoter's emails for six weeks, which Julia van der Meer, who booked him, describes as "completely normal for this project."
          </p>

          <p style={{ margin: "0 0 22px" }}>
            His debut studio album, <em>Glowth</em>, came out in 2014 and circulated almost entirely by word of mouth through niche electronic communities. Dense, emotionally unstable, built from broken choir samples and voice memos that sound like they were recorded somewhere small and private. His live album, <em>Live from the Basement of Heaven</em>, followed in 2018, recorded over two nights in a Fitzroy basement gallery with no stage lighting beyond static projections and candles. The record exists. I've listened to it several times. I'm not sure I can describe it accurately to someone who hasn't heard it, which is a strange thing to write in a music preview but seems more honest than pretending otherwise.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            He wept between songs on that recording. This is documented. What it means is less clear.
          </p>

          <Section />

          <p style={{ margin: "0 0 22px" }}>
            Before becoming Yoko Beato, Noah Lir spent three years inside a fundamentalist Christian community following his parents' divorce. This comes from former classmates, not from Lir himself, who doesn't discuss the period directly. What those classmates remember is that he was quiet and that he was obsessed with the church's sound system. He would stay after services to record the empty building, capturing what he apparently thought of as the acoustics of a space after belief had left it. Whether this is biography or myth at this point is hard to say. His 2016 EP <em>Afterchurch</em> exists, six tracks of reverb-drenched piano and processed vocal samples, and it does sound like something recorded inside an institution that has been recently vacated. Make of that what you will.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            "The institutional aspects of religion never made sense to me," he told an underground Melbourne zine in 2017. "But the feeling of collective emotion, the technology of ritual, that's the vocabulary I'm working with. I'm interested in what happens when belief collapses but the emotional architecture remains."
          </p>

          <p style={{ margin: "0 0 22px" }}>
            That quote gets cited a lot in the writing about him. I've cited it here because it's the clearest thing he's said about his own work, and because everything else I found was harder to pin down.
          </p>

          <Section />

          <p style={{ margin: "0 0 22px" }}>
            I should tell you what I actually heard. Not what the forums describe. Not what the collaborators say. What happened when I listened.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            It was half past one on a Tuesday. My flat on the Haarlemmerweg. Headphones. Rain on the windows. I had already tried twice to listen to <em>Glowth</em> while taking notes. I wrote down timestamps and textures and possible comparisons. "The opening track layers processed choir samples over a stuttering rhythmic bed that recalls" and then I stopped, because what I was producing was technically accurate and completely empty. It described the components. It did not describe the experience. So the third time, I closed the notebook.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            The album begins with a tone. Not a chord. One low frequency that hums the way a large room hums when it is empty. It stays. Your ear reaches toward it and the distance does not close. Then underneath this, a voice arrives. Or what was once a voice. It has the shape of speech. The rising, the falling, the cadence of someone explaining something or perhaps asking a question. But the words have been removed. Slowed, reversed, pressed until they are flat. What remains is the feeling of a person speaking without any of the content. You hear someone but you cannot hear what they say. The space between those two facts is where the music operates.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            Over several minutes, the track builds. A piano note, struck once and left to decay until it is only overtone and room sound. A rhythm that resembles breathing, or perhaps is a recording of breathing that has been processed until only the pattern survives. And always the hum. It does not change. It does not develop. It continues the way a structure continues to stand after everyone has gone home.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            I noticed I was leaning forward. Not toward the speakers. There were no speakers. The headphones were placing sounds in locations that did not correspond to my room. Behind me. To the left, very close. Above. At one point I removed one side of the headphones to confirm the rain was still there. It was. The album had made me uncertain.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            I do not know how to write about the rest of <em>Glowth</em> without making it either too large or too small. There are passages that sound like gospel music heard from very far away, through walls, through years. There are stretches that are simply harsh, digital textures that cut across the mix and leave again. Near the end, the voice returns. It is closer this time. You can nearly distinguish words. Then it withdraws, and the withdrawal is so controlled and so deliberate that it feels like a decision about what you are permitted to know.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            I listened to the full album and then I sat in the silence after it ended. My hands were cold. I had not moved for forty-seven minutes. I am not presenting this as proof of anything. I am presenting it as what happened.
          </p>

          <Section />

          <p style={{ margin: "0 0 22px" }}>
            His social media presence is a static site and a Telegram channel that last updated in 2022. He reportedly uses a Nokia phone from 2003 and accesses the internet through public library computers. His music has been released through USB drives hidden in cities, with coordinates sent to a mailing list whose membership nobody seems to know. One account, repeated across several forums, describes a fan finding a USB inside a hollowed-out Bible at a Melbourne secondhand bookstore. Another describes a drive embedded in concrete beneath a bench at Sydney's Carriageworks arts center. I could not verify either of these. I'm including them because they are the texture of how this artist exists in the world, and because whether or not they happened exactly that way, they are the stories people tell.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            Mei Lin, a visual artist who has collaborated with him, describes Beato as "profoundly present but somehow always broadcasting from elsewhere." Her installation piece "Signals from Noah" documented three months of text messages from him: poetry fragments, biblical verses reworked into something stranger, production notes that she describes as reading like dispatches from a parallel dimension. I asked if I could see any of them for this piece. She said she'd think about it and then didn't respond.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            Thomas Rijkers, a sound artist based in Amsterdam who attended Beato's Melbourne show in 2020, was more forthcoming. "It was a complete experience," he told me. "Three hours. Some of it was extraordinary. Some of it was genuinely difficult to sit through. I left feeling like something had been asked of me that I hadn't agreed to. I mean that as a compliment, mostly."
          </p>

          <p style={{ margin: "0 0 22px" }}>
            I asked him what he meant by mostly.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            "The last forty minutes were very long," he said. "I think that was intentional. I'm still not sure if I'm glad I stayed."
          </p>

          <Section />

          <p style={{ margin: "0 0 22px" }}>
            His live shows, based on the accounts I've collected, involve apology tapes played at the start of sets, crowd microphones fed back into the mix, and endings that arrive without encores. His equipment is only partially documented. A modified Roland SP-404 sampler, several customized tape machines, a microphone he sometimes submerges in water. He doesn't talk about gear. "The instruments are just conduits," he told <em>Electronic Sound</em>. "The real instrument is the room itself, and everyone in it."
          </p>

          <p style={{ margin: "0 0 22px" }}>
            In Sydney in 2021 he distributed disposable cameras and projected the flash photography in real time, synchronized to what he calls grief beats, downtempo rhythms he has described as designed for emotional release. In Melbourne he performed behind a scrim onto which he projected VHS home videos collected from thrift stores and estate sales. The memories of strangers, made communal.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            Annemarie de Groot, who covers electronic music for <em>de Volkskrant</em>, saw him perform in Berlin in 2022, what appears to have been his last show before going silent. Her review was measured. "Genuinely affecting in places," she wrote. "Less disciplined than his records. The audience seemed to want it to be more than it was, and he seemed to want that too, and neither of them quite got there. Worth seeing. I wouldn't see it again."
          </p>

          <p style={{ margin: "0 0 22px" }}>
            The Berlin show is where the two-year silence begins. What happened between the end of that set and now is mostly rumor. The version that has circulated most is that Beato smashed his equipment and recited what sounded like reversed scripture for thirty minutes before the venue cut the power. Van der Meer, when I asked her about it, said she'd heard several versions and didn't know which was true. "He agreed to Amsterdam," she said. "That's what I know."
          </p>

          <p style={{ margin: "0 0 22px" }}>
            The version I've heard from one person who claims to have been in contact with him is quieter and stranger: that he spent the intervening period working as a hospice care assistant in rural Victoria, recording conversations with dying patients with their permission, and that these recordings, processed into something unrecognizable, form the basis of what he'll play Thursday. I have not been able to confirm this. It may be true. It may be the kind of story that accumulates around a figure like this regardless of what actually happened. I'm including it for the same reason I included the USB drives.
          </p>

          <Section />

          <p style={{ margin: "0 0 22px" }}>
            The venue is Depot Noord, a former train maintenance facility in Amsterdam-Noord that has been used intermittently for events since the nineties. Raw concrete, rusted infrastructure, support columns that interrupt the sightlines. Julia van der Meer describes it as "a space between spaces." Two hundred tickets, all sold. No phones. Each ticket comes with a vial of essential oil, lavender and frankincense and something unidentified, to be applied before entry. The show is expected to last approximately three hours, timed, according to the Resident Advisor listing, to the burn of a single hand-poured candle.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            I don't know what to make of Yoko Beato. I've listened to everything I can find. I've made calls. I've read the forum threads and the zine scans and the secondhand accounts of shows that may or may not have happened the way anyone remembers. What I have is a picture with significant portions missing, which may be the only accurate picture available.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            What I can say is that the people who have been in the same room as this music tend to remember it. Not always warmly. Not always without reservation. But they remember it. In a scene that produces a lot of music that passes through without leaving a mark, that seems worth something.
          </p>

          <p style={{ margin: "0 0 22px" }}>
            The show is Thursday. It is sold out. For those attending: I'm not sure what to tell you to prepare for. For those who aren't: <em>Glowth</em> is on Bandcamp. Listen to it somewhere quiet, late, with your full attention. See if it asks anything of you.
          </p>
        </div>

        {/* Event info box */}
        <div style={{
          marginTop: "40px",
          padding: "20px 24px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "4px",
          border: "1px solid rgba(255,255,255,0.06)",
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "13px",
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.5)",
        }}>
          <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>
            Yoko Beato
          </div>
          Depot Noord (Papaverweg 231, 1032 KJ Amsterdam-Noord)<br />
          Thursday, May 15, 2025 {"\u00b7"} 9:00 PM<br />
          <span style={{ color: "rgba(255,255,255,0.3)" }}>A waiting list for returned tickets is available through Resident Advisor.</span>
        </div>

        {/* Author/share */}
        <div style={{
          marginTop: "32px",
          paddingTop: "16px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "12px",
          color: "rgba(255,255,255,0.3)",
        }}>
          <span>Lars Jansen schrijft voor Subtone / 3voor12</span>
          <div style={{ display: "flex", gap: "12px" }}>
            <span style={{ cursor: "pointer" }}>Delen</span>
            <span style={{ cursor: "pointer" }}>Reageer</span>
          </div>
        </div>
      </div>
    </div>
  )
}
