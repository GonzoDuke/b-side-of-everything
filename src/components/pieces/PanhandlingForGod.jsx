export default function PanhandlingForGod() {
  function Page({ number, children }) {
    return (
      <div className="pdf-page" style={{
        background: "#ffffff",
        flex: "1 1 420px",
        maxWidth: "600px",
        aspectRatio: "8.5 / 11",
        padding: "60px 64px 96px",
        position: "relative",
        boxShadow: "0 1px 6px rgba(0,0,0,0.12)",
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: "11pt",
        lineHeight: "22pt",
        color: "#1a1a1a",
        overflow: "hidden",
      }}>
        {/* Running header */}
        <div className="pdf-page-header" style={{
          position: "absolute",
          top: "28px",
          left: "64px",
          right: "64px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "9pt",
          color: "#888",
        }}>
          <span>{number}</span>
          <span style={{ fontStyle: "italic" }}>Sound and Sanctity</span>
        </div>
        {children}
      </div>
    )
  }

  function SectionHead({ children }) {
    return (
      <div style={{
        fontSize: "12pt",
        fontWeight: 700,
        fontStyle: "italic",
        margin: "24pt 0 12pt",
        textAlign: "center",
      }}>
        {children}
      </div>
    )
  }

  function P({ first, children }) {
    return (
      <p style={{
        margin: "0",
        textIndent: first ? "0" : "0.5in",
      }}>
        {children}
      </p>
    )
  }

  function Fn({ n }) {
    return (
      <sup style={{ fontSize: "9px", color: "#666" }}>{n}</sup>
    )
  }

  function FnText({ n, children }) {
    return (
      <div style={{
        fontSize: "10pt",
        lineHeight: "14pt",
        marginBottom: "8px",
        textIndent: "0",
        color: "#333",
      }}>
        <span style={{ fontSize: "9px", verticalAlign: "super" }}>{n}.</span> {children}
      </div>
    )
  }

  return (
    <div style={{
      background: "#8a8a8a",
      minHeight: "100vh",
      padding: "32px 16px 80px",
    }}>
      {/* PDF viewer top bar */}
      <div style={{
        background: "#3a3a3a",
        width: "100%",
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        marginBottom: "20px",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <div style={{
          fontFamily: '-apple-system, sans-serif',
          fontSize: "12px",
          color: "rgba(255,255,255,0.6)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}>
          <span>Sound_and_Sanctity_Ch4_Harrisburg.pdf</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>12 pages</span>
        </div>
      </div>

      {/* Pages in two-column grid */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        maxWidth: "min(94vw, 1280px)",
        margin: "0 auto",
      }}>

      {/* PAGE 1 */}
      <Page number={87}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "12pt", fontWeight: 700, marginBottom: "12px" }}>
            Sound and Sanctity: Grassroots Religious Music in Post-Industrial America
          </div>
          <div style={{ fontSize: "11pt", fontStyle: "italic", marginBottom: "4px" }}>
            Excerpted from Chapter 4: "Sacred Funk and Institutional Liminality: The Panhandling for God Case Study"
          </div>
          <div style={{ fontSize: "11pt", marginBottom: "4px" }}>
            Amanda K. Harrisburg, PhD Candidate, Ethnomusicology
          </div>
          <div style={{ fontSize: "11pt", color: "#555" }}>
            Ohio State University, 2024
          </div>
        </div>

        <P first>The musical collective known as Panhandling for God operated within what Turner would recognize as a quintessential liminal space: the basement maintenance facility of a satellite college campus, designated B213 in administrative records but existing in a condition of near-total institutional invisibility.<Fn n={1} /> Between approximately 2004 and 2007 (dates remain contested; see Section 4.2 below), this 12x8 foot room served simultaneously as storage for custodial supplies and as the primary rehearsal space for what appears to have been southern Ohio's only theologically informed funk collective. The acoustic properties of B213 prove crucial to understanding the band's sonic development. Bare concrete walls, exposed piping, and industrial fluorescent lighting created what Feld might term an "acoustemology," a way of knowing place through sound.<Fn n={2} /> The space's natural reverb, combined with persistent ambient noise from heating infrastructure and the constant low-frequency hum of commercial-grade floor polishing equipment stored along the east wall, shaped compositions that one informant described, with what appeared to be complete sincerity, as "praise music filtered through a washing machine."<Fn n={3} /></P>

        <P>It should be noted at the outset that the researcher's own subject position introduces potential interpretive complications that bear acknowledgment. The present author was raised in a nondenominational Protestant household in suburban Columbus and retains what might be characterized as a residual, if largely dormant, familiarity with the affective structures of campus ministry culture. While every effort has been made to maintain analytic distance consistent with the standards of the discipline, the possibility of sympathetic bias should be disclosed, particularly in those sections of the chapter where informant testimony proved unusually vivid or where the researcher found herself, as occasionally happened, responding to the material in registers that were not entirely academic. The ethnographic encounter is never neutral. In the case of Panhandling for God, the material has proven, over five years of intermittent engagement, more resistant to the conventions of analytic neutrality than the researcher had anticipated at the outset of the project. The implications of this resistance are addressed more directly in the concluding section.</P>
      </Page>

      {/* PAGE 2 */}
      <Page number={88}>
        <SectionHead>4.2 Methodology and Source Limitations</SectionHead>

        <P first>Reconstructing the musical practices of Panhandling for God presents significant and, in certain respects, perhaps insurmountable methodological challenges. No official studio recordings are known to exist. The band maintained no web presence, social media accounts, or mailing list. Band membership itself remains contested, with informants providing contradictory and in some cases mutually exclusive accounts of participation, duration, instrumentation, and basic biographical detail. The very question of what constituted "the band" at any given moment appears to have been a matter of active disagreement among its participants, several of whom resist the term "band" entirely. (Paul R. prefers "situation." Geoff W. uses "accident." Molly C. refers to the project as "whatever that was.")</P>

        <P>This study relies on four primary informant sources, identified here according to the protocols established by the Institutional Review Board (IRB Protocol #2019-0847, approved March 2019, amended November 2019 following difficulties with informant recruitment that are discussed below):</P>

        <P>Paul R. (surname withheld at informant's request), self-identified bassist, claims participation in "maybe two gigs, possibly three, depending on what counts." Paul R. was the first informant contacted and the most cooperative in terms of scheduling, though his recollections are frequently qualified by the phrase "but don't quote me on that" followed, often in the same sentence, by statements clearly intended to be quoted. His interview, conducted by telephone on November 15, 2019, lasted approximately ninety minutes, of which roughly forty were devoted to the band and the remainder to a dispute with his landlord regarding a water heater that he felt was "metaphorically relevant" to the group's dynamics.<Fn n={4} /></P>

        <P>Molly C., vocalist and organist, insists she was "the last real member" and appeared reluctant to acknowledge other informants' accounts as authoritative. She agreed to a single forty-five minute interview (December 2019) on the condition that it be conducted in person at a coffee shop of her choosing in Athens, Ohio, and that the researcher not record the conversation. Notes were taken by hand. Molly C. spoke quickly and with apparent emotional investment, pausing only to correct the researcher's spelling of musical terminology. She provided a photocopy of a setlist she claimed was from the band's final performance, though comparison with other sources suggests it may represent an aspirational rather than actual program.<Fn n={5} /></P>
      </Page>

      {/* PAGE 3 */}
      <Page number={89}>
        <P first>Geoff W. (the spelling of his first name varies across sources; he himself appears indifferent to the question), guitarist, describes his involvement as "accidental and mostly secular." Geoff W. proved the most difficult informant to locate. Initial contact was made through a Craigslist "missed connections" post in the Columbus area that the researcher placed in February 2020 after conventional outreach methods had been exhausted.<Fn n={6} /> The post read: "Seeking former members of campus funk band, early-to-mid 2000s, southern Ohio, for academic research. Serious inquiries only." Geoff W. responded within forty-eight hours. His email, in its entirety, read: "Is this about PFG? Because if so I have opinions." A phone interview was conducted on March 3, 2020. He spoke for two hours. The opinions were extensive.</P>

        <P>Additionally, the researcher received unsolicited communications from multiple anonymous informants, contacted variously through the aforementioned Craigslist post, a flyer placed on two campus bulletin boards at the satellite campus in question (removed by facilities staff within seventy-two hours, necessitating replacement), and a single response to a query posted on a regional music forum that has since gone offline. The reliability of these anonymous sources varies considerably. One provided a photocopy of a flyer advertising a "Winter Prayer Night" event that corresponds to other documented evidence. Another claimed to have been the band's "spiritual advisor," a role that no other informant corroborates and that the researcher has been unable to situate within any recognized model of campus ministry practice.</P>

        <P>The use of Craigslist as an informant recruitment tool warrants brief methodological justification. Traditional snowball sampling proved ineffective in this case, as the band's social network appears to have largely dissolved following the group's cessation of activity, and former participants expressed varying degrees of willingness to identify or contact one another. The researcher is aware that soliciting research subjects through classified advertisement platforms introduces concerns regarding self-selection bias and informant motivation that are not trivial. However, given the absence of institutional records, alumni databases, or any other viable recruitment pathway, the approach was deemed acceptable by the IRB committee, with the stipulation that all Craigslist-sourced informants be treated as unverified unless independently corroborated.<Fn n={7} /> The researcher wishes to note, for the record, that the Craigslist post also generated fourteen unrelated responses, including two invitations to join existing bands, an offer to sell a used bass amplifier, and a lengthy email about the theological significance of the pentatonic scale that, while not without interest, fell outside the scope of this study.</P>
      </Page>

      {/* PAGE 4 */}
      <Page number={90}>
        <P first>Documentary evidence beyond informant testimony is sparse. Extant materials consist primarily of photocopied flyers, most of which were discovered inside academic textbooks resold to used bookstores in the Athens and Chillicothe areas, suggesting a campus-adjacent circulation pattern consistent with the band's institutional milieu. One cassette tape, labeled in ballpoint pen "Winter Prayer Night 2007," was obtained from Molly C. and contains approximately twenty-three minutes of material. Unfortunately, the recording is severely degraded, likely due to prolonged storage in conditions the researcher characterizes as suboptimal (Molly C. reports the tape spent "a few years" in a box in her mother's garage, in proximity to what she describes as "a lot of cat stuff"). Spectral analysis conducted at the Ohio State University Music Research Lab confirmed the presence of rhythmic content and intermittent vocal elements but was unable to isolate individual instruments or lyrics with sufficient clarity for formal transcription. Lab technician Darren Sato described the audio quality, informally, as "like someone is playing funk at the bottom of a swimming pool."<Fn n={8} /> A more detailed discussion of the tape's acoustic properties and partial spectral analysis may be found in Appendix C.</P>

        <P>[Section 4.3: "Equipment Procurement and Theological Justifications for Borrowed Amplification" has been omitted for length.]</P>

        <SectionHead>4.4 "Winner's Circle": A Case Study in Devotional Dysfunction</SectionHead>

        <P first>The composition most frequently cited by informants, "Winner's Circle," exemplifies what the researcher proposes to term "sacred funk," a musical form that applies the rhythmic complexity and repetitive intensity of Afrobeat-derived polyrhythm to the lyrical and thematic concerns of contemporary Protestant worship. The term is offered provisionally and with awareness that both components are themselves contested categories within their respective literatures. "Sacred" is used here in the broadly Durkheimian sense of that which a community sets apart from ordinary experience,<Fn n={9} /> while "funk" refers to the specific tradition of groove-based repetition theorized by Anne Danielsen as "a musical figure that achieves its effect through the tension between regularity and micro-rhythmic deviation."<Fn n={10} /> Whether Panhandling for God were conscious of this theoretical tradition, or of any theoretical tradition bearing on their practice, is unlikely in the extreme; however, the structural parallels are, in the researcher's assessment, difficult to dismiss.</P>
      </Page>

      {/* PAGE 5 */}
      <Page number={91}>
        <P first>The song's structure, as reconstructed through multiple and frequently incompatible interviews, appears to demonstrate a sophisticated, if almost certainly intuitive, understanding of both James Brown's rhythmic innovations and the theological concept of sanctification as process rather than event. According to Paul R., the track originated during a power outage that left only battery-powered equipment functional. "The keyboard was running on AAs and picking up radio signals from Kentucky," he explained during our November 2019 interview. "Every third measure, you'd get a snippet of some preacher talking about redemption, then it would cut back to our chord progression. We just started building around that. It was either divine intervention or bad wiring, and honestly those might be the same thing."<Fn n={11} /></P>

        <P>The lyrical content, as tentatively transcribed from the degraded 2007 recording with assistance from spectral analysis software and a graduate student with, in her own assessment, "pretty good ears," reveals what appears to be a layered, if possibly unintentional, engagement with the rhetoric of evangelical conversion narratives:</P>

        <div style={{ margin: "12pt 0 12pt 48px", fontStyle: "italic", lineHeight: "24pt" }}>
          We all go 'round in circles, but some of us win on a technicality<br />
          Late registration at the registrar's of the soul<br />
          But the deadline's been extended if you know who to call
        </div>

        <P first>The transcription is necessarily approximate. The graduate assistant noted that the third line may alternatively read "if you know who to call" or "if you know who to crawl," a distinction that, if the latter proves correct, would substantially reframe the lyric as a commentary on the embodied abjection characteristic of certain charismatic worship practices. Without a clearer source recording, the point must remain unresolved.</P>

        <P>Geoff W. disputes this transcription entirely, claiming the actual lyrics were "mostly improvised complaints about scheduling conflicts and cafeteria food," though he acknowledges what he terms the band's tendency toward "accidental profundity." The discrepancy is itself illustrative of a pattern that recurred throughout the fieldwork. Informants consistently disagreed not merely on details of the band's history but on the fundamental nature of what Panhandling for God was doing. Was the project sincerely devotional? Ironically so? Both simultaneously, in a manner that resists the analytic distinction between sincerity and its performance? The researcher's provisional assessment, offered with the caveat that the evidence base is not sufficient to support a strong claim, is that what might tentatively be described as the ambiguity of the project's devotional stance was not incidental to its practice but may have constituted something closer to the practice itself. That is to say, Panhandling for God appears to have operated in what the researcher proposes to characterize, following Turner, as the gap between sincerity and its performance, a liminal condition in which normative structures of religious expression become visible precisely because they have been temporarily, and perhaps inadvertently, suspended.<Fn n={12} /> Whether the band's members would recognize this interpretation is, as noted above, doubtful. Geoff W., when the researcher presented a simplified version of this framework during a follow-up phone call, responded: "I think we were just trying to play in time, man."</P>
      </Page>

      {/* PAGE 6 */}
      <Page number={92}>
        <SectionHead>4.5 "The Night We Delete Our Maps": Spatial Disorientation as Devotional Practice</SectionHead>

        <P first>If "Winner's Circle" represents the collective's engagement with what might be understood as the temporal dimensions of sacred experience (see Section 4.4 above), the lesser-discussed composition "The Night We Delete Our Maps" addresses what the researcher proposes to frame as its spatial corollary. The title alone warrants analytic attention, though, as will become apparent, the relationship between the title's theoretical resonance and its actual origin presents interpretive difficulties that the researcher has not fully resolved.</P>

        <P>Within the framework of critical geography, the map functions as an instrument of institutional legibility, a technology of power that, as de Certeau argues in his analysis of spatial practice, transforms the lived, ambulatory experience of the city into the abstracted, totalizing perspective of the planned order.<Fn n={13} /> To "delete" the map is, in this reading, to refuse legibility itself: to insist on a mode of navigating the world that is experiential rather than cartographic, embodied rather than administered. That a collective rehearsing in an institutionally unregistered basement room on a satellite campus would produce a composition bearing this title is, at minimum, suggestive of the kind of tactical spatial consciousness that de Certeau's framework is designed to illuminate.</P>

        <P>It should be acknowledged, however, that the title's origin, as reported by Molly C., is considerably less amenable to this theoretical reading than the researcher might have wished. According to Molly C., the title emerged from the following exchange: "Geoff had just gotten a GPS unit for his car and it kept telling him to drive into the reservoir. He said, 'What if we just deleted all the maps?' and I said that was the most spiritual thing he'd ever said, and he said he was talking about the GPS."<Fn n={14} /> The researcher has spent some time with this anecdote and its implications for the analysis. The gap between the de Certeauian reading and the informant's account of the title's genesis is not, in the researcher's view, a refutation of the theoretical framework so much as an illustration of the complex and frequently non-deliberate pathways by which practitioners arrive at positions that theory can describe but that practice does not require conscious access to in order to enact. Or, to put the matter more plainly than the theoretical apparatus perhaps allows: Geoff W. may not have intended to refuse institutional legibility when he suggested deleting the maps, but the gesture, situated within the broader context of the collective's occupation of a liminal institutional space, performs that refusal regardless of the intentionality (or lack thereof) behind it. The researcher acknowledges that this line of argument may strike some readers as a case of the analytic framework generating the very significance it claims to discover. The objection is noted.</P>
      </Page>

      {/* PAGE 7 */}
      <Page number={93}>
        <P first>Structurally, "The Night We Delete Our Maps" appears to have lacked a fixed arrangement. Paul R. describes it as "the one we never played the same way twice," a characterization confirmed independently by both Molly C. and Geoff W., making it one of the few points of factual agreement among the study's three primary informants. Molly C. states that the piece typically began with an unaccompanied organ drone, sustained for what she estimates as "two or three minutes, sometimes longer if the Spirit was moving, or if Geoff was in the bathroom."<Fn n={15} /> Over this drone, individual instruments would enter in no predetermined order. Paul R. recalls that his bass part was "more of a feeling than a line." This description, while resistant to formal transcription, is not without theoretical resonance. The phenomenological account of musical embodiment offered by Merleau-Ponty, in which the performing body does not execute a preexisting compositional plan but rather discovers the musical utterance through the act of playing itself, provides one possible framework for understanding what Paul R. appears to be describing, though the researcher notes the obvious methodological difficulty of applying a phenomenological framework to an informant's retrospective self-report rather than to direct observation of the practice in question.<Fn n={16} /></P>

        <P>The lyrical content of "The Night We Delete Our Maps" is more difficult to reconstruct than that of "Winner's Circle" (discussed in Section 4.4). Molly C. maintains that the song contained "at least two verses and a bridge," but was unable to recall specific words beyond the recurring phrase "we are not where we were," which she describes as functioning simultaneously as chorus, mantra, and, on at least one occasion, "a literal statement because someone had moved the music stands and nobody could find their chord charts."<Fn n={17} /> Geoff W. denies the existence of a bridge. Paul R. does not remember the song at all, despite other informants' claims that he played on it regularly, a discrepancy that the researcher has been unable to resolve and that illustrates the broader evidentiary challenges discussed in Section 4.2.</P>

        <P>What emerges from these contradictory accounts is not a song in any conventional musicological sense but rather what might be more accurately, if somewhat awkwardly, described as a recurring practice: a loosely structured occasion for collective musical exploration operating within a devotional frame whose boundaries were never clearly established and may not have been understood in the same terms by all participants. The Bourdieuian concept of habitus is of some use here, if imperfectly so: the musicians appear to have internalized a set of dispositions toward what this study has termed sacred funk, dispositions that organized their improvisatory decisions without fully determining them.<Fn n={18} /> Each performance of "The Night We Delete Our Maps" was, in this reading, a fresh negotiation between individual musical impulse and the group's collectively held, if never explicitly articulated, and quite possibly never consciously recognized, understanding of what the composition could be.</P>
      </Page>

      {/* PAGE 8 */}
      <Page number={94}>
        <P first>Whether this constitutes a form of worship, a form of music, or a form of organized confusion that merely resembles one or both of the preceding categories is a question that the available evidence does not permit the researcher to answer with confidence. The researcher's own position, acknowledged here in the interest of the reflexive transparency called for by current disciplinary standards, is that the categories may not be as distinct as the question assumes, and that the inability to resolve the question cleanly may itself be among the more analytically significant findings of this section. The researcher is aware that this formulation risks circularity. She proceeds nonetheless, on the grounds that the material appears to demand it.</P>

        <SectionHead>4.6 Institutional Resistance and the Question of Sacred Space</SectionHead>

        <P first>The relationship between Panhandling for God and campus religious authority remained in a condition of perpetual, low-grade institutional strain throughout the group's existence, a tension that is itself analytically productive for the purposes of this study. Bourdieu's theorization of the religious field suggests that religious institutions maintain their authority not merely through the enforcement of doctrinal content but through the regulation of legitimate practice: the determination of who may speak, in what register, and within which designated spaces.<Fn n={19} /> Panhandling for God's occupation of B213, a space that existed outside the institution's framework of designated use, and their production of music that occupied an ambiguous position between worship and performance (categories whose distinction, as argued above, the collective's practice tended to destabilize), constituted a challenge to these regulatory mechanisms. The challenge appears to have been felt, if not always explicitly named as such, by campus ministry leadership.</P>

        <P>Campus Pastor Buddy Collins, who initially provided the collective with rehearsal access (a decision he characterized in our 2020 interview as "well-intentioned"), grew increasingly uneasy about what he termed the band's "theological ambiguity." In a phone interview conducted on January 8, 2020, Collins recalled: "They'd show up for Bible study and then argue for forty-five minutes about whether the drummer's refusal to use a metronome constituted legitimate theological practice or just stubbornness. Geoff kept insisting that 'God's timing transcends human measurement.' I tried to engage with that on a doctrinal level, and he said he was just quoting something he'd read on a bumper sticker. I honestly couldn't tell if he was joking."<Fn n={20} /> Collins paused at this point in the interview, and the researcher noted what she interpreted as a quality of residual bewilderment that did not appear to have diminished appreciably in the intervening thirteen years.</P>
      </Page>

      {/* PAGE 9 */}
      <Page number={95}>
        <P first>The question of sacred space is further complicated by B213's dual institutional function, as noted in the chapter's opening section. The room was at no point officially designated as a rehearsal or worship space; its primary identity within the campus facilities system remained custodial. Cleaning supplies, floor buffer accessories, and an industrial mop bucket of considerable size occupied the room's north corner throughout the period of the band's activity. Molly C. reports that the mop bucket was, on occasion, employed as a percussion instrument, a practice that Pastor Collins found, in his words, "disrespectful, or at least confusing." The repurposing of utilitarian objects as instruments of what may or may not have been sacred expression is consistent with the broader pattern of tactical appropriation that characterizes the collective's relationship to institutional space. De Certeau's concept of the tactic, the improvisational reappropriation of dominant spaces and materials for purposes unanticipated by their institutional framers, provides a theoretical vocabulary for this phenomenon.<Fn n={21} /> The researcher does not wish to overstate the analytic weight that should be placed on the mop bucket specifically. However, its persistent presence in informant narratives, in which it recurs with a frequency that is disproportionate to its apparent musical contribution, suggests that it may have functioned as a kind of symbolic object within the group's shared understanding of their practice. Further research, ideally involving direct observation of comparable practices in similar institutional contexts, would be necessary to substantiate this interpretation.</P>

        <SectionHead>4.7 Terminal Event: The Car Wash Performance and Its Aftermath</SectionHead>

        <P first>The band's final documented performance occurred during a campus ministry fundraising car wash in the spring of 2007, an event that was rained out before the band completed their opening song. The situational irony of a fundraising car wash being rendered unnecessary by precipitation was remarked upon by multiple informants, though their interpretations of its significance diverge along lines that by this point in the analysis will be familiar. Geoff W. described it as "God's feedback on the setlist." Molly C. considered it a genuine spiritual experience. Paul R. says he doesn't remember being there, though he concedes he "probably was" based on photographic evidence provided by another attendee.</P>
      </Page>

      {/* PAGE 10 */}
      <Page number={96}>
        <P first>Witness accounts of the truncated performance, gathered from three anonymous informants who responded to the researcher's campus flyer (see Section 4.2), describe the event in language that is notable for its affective intensity. One informant wrote, in an unsigned email: "It was transformative. Even though they only got through about a minute and a half of music before the rain came. Maybe because they only got through a minute and a half. The rain didn't stop them. The rain joined in. It sounds stupid when I write it but it's what happened."<Fn n={22} /> Another described the scene as "like watching people discover they could speak in tongues through musical instruments," a formulation that, while resistant to peer-reviewed analysis, captures something of the event's reported affective character that more measured language may not be able to reproduce.</P>

        <P>The aftermath of the car wash performance appears to have precipitated the collective's dissolution, though the causal chain connecting the event to the group's cessation of activity is unclear and may involve factors to which the researcher does not have access. Relations within the campus ministry fractured along lines that do not map neatly onto the question of the band itself. Some participants called for the band's formal dissolution. Others demanded weekly performances. Pastor Collins recalls receiving a handwritten petition "for or against the band, I was never clear which" signed by eleven people, at least four of whom, by his estimation, had never attended a Panhandling for God performance. The document has not survived.</P>

        <P>Within weeks, the collective ceased to function. No formal dissolution was announced. As with many aspects of the group's practice, the ending was characterized by the same absence of institutional legibility that had defined the project from its outset: they were not, by the account of any informant, a band that broke up so much as a band that, to borrow a phrase from one anonymous source, "sort of evaporated, but in a way that felt on purpose even if it wasn't."<Fn n={23} /></P>

        <SectionHead>4.8 Conclusion: The Persistence of Liminal Practice</SectionHead>

        <P first>Panhandling for God's brief existence illuminates, however partially, the complex and frequently ungovernable negotiations between institutional religious practice and grassroots spiritual expression in early twenty-first century campus environments. The collective's legacy, such as it is, persists not through recordings, official documentation, or any of the conventional mechanisms of musical posterity, but through what de Certeau would recognize as the residue of tactical practice: the traces left, often inadvertently, by people who temporarily repurposed the spaces and structures available to them for ends those structures were not designed to accommodate.<Fn n={24} /></P>
      </Page>

      {/* PAGE 11 */}
      <Page number={97}>
        <P first>The B213 sessions, to the extent that they can be reconstructed from the partial, contradictory, and in several cases demonstrably unreliable testimony gathered over the course of this research, represent something more than a failed experiment in campus ministry programming, though they were that too. What the researcher wishes to suggest, provisionally and with due acknowledgment of the evidentiary limitations outlined in Section 4.2, is that the collective's practice constituted a form of inadvertent musical ethnography: a documentation, produced without conscious intent to document and without awareness that documentation was occurring, of what may become possible when institutional oversight lapses and a small group of loosely affiliated individuals find themselves in possession of borrowed equipment, disputed theological commitments, and a room whose primary institutional function was the storage of custodial supplies. What they made of that room, and of those materials, is the subject this chapter has attempted to describe, with what the researcher hopes is adequate rigor and what she suspects, on rereading, may be inadequate distance.</P>

        <P>A note, in closing, on the question of researcher positionality. It is expected, within current disciplinary practice, that the ethnographer acknowledge the ways in which her own subject position may have shaped the interpretive process. The researcher has attempted to do so at several points in the preceding pages. However, it would be incomplete to leave the matter there. Over the course of five years of intermittent work on this project, the present author has developed what she recognizes, with some discomfort, as an attachment to the subject material that does not sit easily within the conventions of ethnographic distance as they are typically understood in the discipline. The obligation to disclose this is clear. The implications of the disclosure for the validity of the analysis are less so. The researcher does not believe that the attachment has compromised the rigor of the work. She acknowledges that she is not an objective judge of this question. The reader is encouraged to evaluate the analysis on its merits, with the foregoing disclosure in mind.</P>
      </Page>

      {/* PAGE 12 - FOOTNOTES */}
      <Page number={98}>
        <div style={{
          fontSize: "10pt",
          fontWeight: 700,
          marginBottom: "16px",
        }}>
          Footnotes
        </div>

        <div style={{ lineHeight: "14pt" }}>
          <FnText n={1}>Turner, Victor. <em>The Ritual Process: Structure and Anti-Structure</em> (Chicago: University of Chicago Press, 1969), 94{"\u2013"}130. Turner's concept of liminality, while developed in the context of Ndembu ritual practice, has been widely applied to contemporary Western contexts, not always with sufficient care. The researcher has attempted to limit its use here to those instances where the structural parallels are most defensible.</FnText>

          <FnText n={2}>Feld, Steven. "Acoustemology." In <em>Keywords in Sound</em>, edited by David Novak and Matt Sakakeeny (Durham: Duke University Press, 2015), 12{"\u2013"}21.</FnText>

          <FnText n={3}>Anonymous informant, personal communication, March 2020. The informant requested anonymity but consented to direct quotation. The researcher notes that the metaphor, while vivid, poses challenges for formal analysis that have not been fully overcome in the present chapter.</FnText>

          <FnText n={4}>Paul R., telephone interview, November 15, 2019. Subsequent attempts to schedule a follow-up interview were unsuccessful. Paul R. responded to one email with the message "I think I said everything I needed to say" and did not reply to further correspondence.</FnText>

          <FnText n={5}>Molly C., in-person interview, December 7, 2019. The setlist in question lists seven songs, two of which ("Winner's Circle" and "The Night We Delete Our Maps") are corroborated by other sources. The remaining five titles ("Rapture Traffic," "Psalm for a Parking Lot," "God's Answering Machine," "Overtime at the Temple," and "Untitled (The Mop One)") appear nowhere else in the research record. Whether they represent actual compositions, aspirational titles, or a form of retroactive mythmaking on Molly C.'s part remains an open question that the researcher lacks the evidence to resolve.</FnText>

          <FnText n={6}>The use of Craigslist as a research tool was approved by the IRB committee with the stipulation noted in the text. The researcher acknowledges the platform's limitations and a personal discomfort with the method that has not entirely dissipated.</FnText>

          <FnText n={7}>IRB Protocol #2019-0847, Amendment 1, filed November 12, 2019. The amendment specifically addressed the use of online classified platforms for informant recruitment and established guidelines for verifying informant identity through corroborative questioning.</FnText>

          <FnText n={8}>Darren Sato, informal communication, February 2021. Sato's description was offered during the spectral analysis session and was not intended as a formal assessment, a distinction the researcher respects while noting that the characterization proved, in practice, difficult to improve upon.</FnText>

          <FnText n={9}>Durkheim, {"\u00c9"}mile. <em>The Elementary Forms of Religious Life</em>, trans. Carol Cosman (Oxford: Oxford University Press, 2001 [1912]), 36{"\u2013"}47.</FnText>

          <FnText n={10}>Danielsen, Anne. <em>Presence and Pleasure: The Funk Grooves of James Brown and Parliament</em> (Middletown: Wesleyan University Press, 2006), 43{"\u2013"}67.</FnText>

          <FnText n={11}>Paul R., telephone interview, November 15, 2019.</FnText>

          <FnText n={12}>Turner, <em>The Ritual Process</em>, 95. The researcher is aware that applying Turner's framework to a campus funk band involves a significant act of analytic extension and that not all readers will find the extension warranted. She proceeds on the grounds that liminality, as a structural condition, is not restricted to the ritual contexts in which it was originally theorized, while acknowledging, again, that the argument's persuasiveness will depend in part on the reader's tolerance for such extension.</FnText>

          <FnText n={13}>de Certeau, Michel. <em>The Practice of Everyday Life</em>, trans. Steven Rendall (Berkeley: University of California Press, 1984), 117{"\u2013"}122. De Certeau's distinction between "strategies" (the operations of institutional power) and "tactics" (the improvisations of those who operate within institutional frameworks without controlling them) is central to the analysis offered in this section and in the chapter's conclusion.</FnText>

          <FnText n={14}>Molly C., in-person interview, December 7, 2019.</FnText>

          <FnText n={15}>Molly C., in-person interview, December 7, 2019. The researcher notes the characteristic conflation of theological and logistical explanation that recurs throughout Molly C.'s testimony and that constitutes, in itself, a minor ethnographic finding.</FnText>

          <FnText n={16}>Merleau-Ponty, Maurice. <em>Phenomenology of Perception</em>, trans. Donald A. Landes (London: Routledge, 2012 [1945]), 137{"\u2013"}140. The application of Merleau-Ponty's embodied phenomenology to musical performance has been explored more rigorously by Cusick (1994) and Le Guin (2006), among others. The present use is intentionally preliminary and should be understood as suggestive rather than conclusive.</FnText>

          <FnText n={17}>Molly C., in-person interview, December 7, 2019.</FnText>

          <FnText n={18}>Bourdieu, Pierre. <em>Outline of a Theory of Practice</em>, trans. Richard Nice (Cambridge: Cambridge University Press, 1977), 72{"\u2013"}95. The concept of habitus, while by this point perhaps overrepresented in contemporary ethnomusicological scholarship to the point where its analytic utility is not always self-evident, retains some usefulness in contexts where the dispositions in question are observably collective rather than merely individual.</FnText>

          <FnText n={19}>Bourdieu, Pierre. "Genesis and Structure of the Religious Field." <em>Comparative Social Research</em> 13 (1991): 1{"\u2013"}44.</FnText>

          <FnText n={20}>Buddy Collins, telephone interview, January 8, 2020. Collins retired from campus ministry in 2018 and currently works in residential real estate. He was generous with his time and expressed what the researcher interpreted as a quality of genuine bewilderment, apparently undiminished by the passage of thirteen years, at the collective's theological commitments or lack thereof.</FnText>

          <FnText n={21}>de Certeau, <em>The Practice of Everyday Life</em>, 91{"\u2013"}110.</FnText>

          <FnText n={22}>Anonymous informant, email communication, April 2020.</FnText>

          <FnText n={23}>Anonymous informant, email communication, June 2020. The researcher notes that the metaphor of evaporation recurs in multiple informant accounts, a convergence that may indicate either a shared phenomenological experience of the group's dissolution or the consolidation of a post-hoc collective narrative. Distinguishing between these possibilities would require a longitudinal study of informant memory formation that is beyond the scope of the present analysis.</FnText>

          <FnText n={24}>de Certeau, <em>The Practice of Everyday Life</em>, 91{"\u2013"}110. The researcher notes that this chapter has relied heavily on de Certeau's theoretical apparatus, perhaps more heavily than a more diversified analytic approach would recommend. Alternative frameworks were considered at various stages of the project. De Certeau persisted. The researcher attributes this in part to the genuine applicability of the tactical/strategic distinction to the case at hand, and in part to what may be a limitation of her own theoretical range. Both explanations are offered without prejudice.</FnText>
        </div>
      </Page>
      </div>
    </div>
  )
}
