<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> &#8212; RSS</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="robots" content="noindex"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&amp;family=Newsreader:ital,wght@0,300;0,400;1,300&amp;family=DM+Mono:wght@400&amp;display=swap" rel="stylesheet"/>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body {
            background: #1a1714;
            color: #f0ece4;
            font-family: 'Newsreader', Georgia, serif;
            font-weight: 300;
            -webkit-font-smoothing: antialiased;
            line-height: 1.6;
          }
          body { padding: 60px 24px 80px; }
          main { max-width: 680px; margin: 0 auto; }
          a { color: inherit; text-decoration: none; }
          a:hover { color: #fff; }

          .back {
            display: inline-block;
            font-family: 'DM Mono', monospace;
            font-size: 12px;
            letter-spacing: 0.04em;
            color: rgba(240, 236, 228, 0.55);
            margin-bottom: 48px;
            text-transform: uppercase;
            transition: color 0.15s ease;
          }
          .back:hover { color: rgba(240, 236, 228, 0.9); }

          h1 {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-weight: 500;
            font-size: 44px;
            line-height: 1.1;
            letter-spacing: -0.01em;
            margin-bottom: 16px;
          }
          .desc {
            font-family: 'Newsreader', Georgia, serif;
            font-style: italic;
            font-weight: 300;
            font-size: 17px;
            color: rgba(240, 236, 228, 0.7);
            margin-bottom: 32px;
          }
          .hint {
            font-family: 'DM Mono', monospace;
            font-size: 12px;
            letter-spacing: 0.03em;
            color: rgba(240, 236, 228, 0.55);
            margin-bottom: 12px;
            text-transform: uppercase;
          }
          .feed-url {
            display: block;
            font-family: 'DM Mono', monospace;
            font-size: 13px;
            padding: 12px 16px;
            background: rgba(240, 236, 228, 0.06);
            border: 1px solid rgba(240, 236, 228, 0.12);
            border-radius: 3px;
            color: #f0ece4;
            word-break: break-all;
            margin-bottom: 56px;
          }

          .items { list-style: none; }
          .items li {
            padding: 28px 0;
            border-top: 1px solid rgba(240, 236, 228, 0.08);
          }
          .items li:last-child { border-bottom: 1px solid rgba(240, 236, 228, 0.08); }
          .item-title {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-weight: 500;
            font-size: 26px;
            line-height: 1.2;
            letter-spacing: -0.005em;
            color: #f0ece4;
          }
          .items a:hover .item-title {
            color: #fff;
            text-decoration: underline;
            text-decoration-color: rgba(240, 236, 228, 0.3);
            text-underline-offset: 4px;
          }
          .item-date {
            font-family: 'DM Mono', monospace;
            font-size: 11px;
            letter-spacing: 0.04em;
            color: rgba(240, 236, 228, 0.45);
            margin: 6px 0 12px;
            text-transform: uppercase;
          }
          .item-desc {
            font-size: 16px;
            color: rgba(240, 236, 228, 0.75);
          }

          @media (max-width: 600px) {
            body { padding: 40px 20px 60px; }
            h1 { font-size: 34px; }
            .item-title { font-size: 22px; }
          }
        </style>
      </head>
      <body>
        <main>
          <a href="/" class="back">&#8592; The B-Side of Everything</a>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="desc"><xsl:value-of select="/rss/channel/description"/></p>
          <p class="hint">Paste this URL into your feed reader to subscribe</p>
          <code class="feed-url"><xsl:value-of select="/rss/channel/link"/>rss.xml</code>
          <ol class="items">
            <xsl:for-each select="/rss/channel/item">
              <li>
                <a>
                  <xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
                  <span class="item-title"><xsl:value-of select="title"/></span>
                </a>
                <p class="item-date"><xsl:value-of select="pubDate"/></p>
                <p class="item-desc"><xsl:value-of select="description"/></p>
              </li>
            </xsl:for-each>
          </ol>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
