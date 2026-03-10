const DOMAIN = 'https://thebsideofeverything.com'

const PIECES = {
  'royal-you': {
    title: 'Griefwave, Theremin, Whatever',
    desc: 'The Royal You Refuse to Make Sense. A webzine review from 2004.',
  },
  'firkin': {
    title: 'More Than a Whine',
    desc: 'Reappraising A Firkin of Awkward. A Substack essay.',
  },
  'rue': {
    title: 'Rue — "Nest"',
    desc: 'Live At The Bakery, Asheville, NC. A YouTube comment section, 2013–2024.',
  },
  'superegos': {
    title: 'The Dropdead Superegos',
    desc: 'Are Not Who You Think They Are. A digital magazine feature.',
  },
  'candlemakers': {
    title: 'The Famous Candlemakers of Lebanon',
    desc: 'Vinyl reissue liner notes. Originally released 1972.',
  },
  'parallax': {
    title: 'Parallax: The Ototoy Interview',
    desc: 'A translated blog post from SubFreqBlog, 2016.',
  },
  'pfg': {
    title: 'Sound and Sanctity',
    desc: 'The Panhandling for God Case Study. A dissertation chapter.',
  },
  'wbtk': {
    title: 'WBTK 98.3 The Beat',
    desc: 'Norfolk, Virginia. A radio transcript from 1995.',
  },
  'beato': {
    title: 'A Devotional Signal Arrives in Amsterdam',
    desc: 'Yoko Beato. A show preview from Subtone, 2025.',
  },
  'ama': {
    title: 'AMA — Marcos Barrera',
    desc: 'r/indieheads. A Reddit AMA about Lowfield Records.',
  },
  'blindfold': {
    title: 'The Blindfold Test',
    desc: 'Claudette Boone. A student journal feature from Waukesha College.',
  },
  'tactical-duck': {
    title: 'Tactical Duck',
    desc: 'All Brakes Removed — 7". A punk zine review from Sortie #14, 1998.',
  },
  'booking-sheet': {
    title: 'The Room Knows',
    desc: 'A Guest Column from The Booking Sheet. Industry newsletter, 2025.',
  },
  'dale-sievert': {
    title: 'Local Frequency with Dale Sievert',
    desc: 'DCAT-19, Decatur Community Access Television. A VHS tape transcript, 1997.',
  },
}

const CRAWLER_RE = /facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|whatsapp|telegrambot|googlebot|bingbot|applebot/i

export default function middleware(request) {
  const ua = request.headers.get('user-agent') || ''

  if (!CRAWLER_RE.test(ua)) return

  const url = new URL(request.url)
  const path = url.pathname.replace(/^\//, '').replace(/\/$/, '')

  if (!path || !PIECES[path]) return

  const piece = PIECES[path]
  const fullTitle = piece.title + ' — The B-Side of Everything'
  const pageUrl = DOMAIN + '/' + path

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${fullTitle}</title>
  <meta name="description" content="${piece.desc}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${pageUrl}" />
  <meta property="og:title" content="${fullTitle}" />
  <meta property="og:description" content="${piece.desc}" />
  <meta property="og:image" content="${DOMAIN}/og-image.png" />
  <meta property="og:site_name" content="The B-Side of Everything" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${fullTitle}" />
  <meta name="twitter:description" content="${piece.desc}" />
  <meta name="twitter:image" content="${DOMAIN}/og-image.png" />
  <meta http-equiv="refresh" content="0;url=${pageUrl}" />
</head>
<body></body>
</html>`

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

export const config = {
  matcher: ['/((?!api|_next|assets|favicon|og-image|bg\\.jpg|.*\\..*).*)'],
}
