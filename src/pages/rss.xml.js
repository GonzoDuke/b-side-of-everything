import rss from '@astrojs/rss';
import { PIECES } from '../data/pieces.js';

export function GET(context) {
  return rss({
    title: 'The B-Side of Everything',
    description: 'Writing about music that didn\'t survive its own context. Bands without archives. Scenes without historians.',
    site: 'https://www.thebsideofeverything.com',
    items: PIECES.filter(p => p.status === 'live').map(piece => ({
      title: piece.title,
      description: piece.note || piece.subtitle || '',
      link: `/${piece.id}/`,
      pubDate: new Date(),
    })),
    customData: '<language>en-us</language>',
    stylesheet: '/rss.xsl',
  });
}
