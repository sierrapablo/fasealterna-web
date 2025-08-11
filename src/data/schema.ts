import type { JsonLdParams } from '../types/schema';

export const getJsonLd = ({ description }: JsonLdParams) => ({
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Fase Alterna',
  description: description,
  url: 'https://fasealterna.netlify.app',
  logo: 'https://fasealterna.netlify.app/logo-w-box.png',
  sameAs: [
    'https://www.instagram.com/fase_alterna',
    'https://open.spotify.com/intl-es/artist/6sjywsSKCM6e1NN9SE0hQm?si=CAfQUnhQSeaYNzS8srRfDw',
    'https://tiktok.com/@fasealterna',
    'https://soundcloud.com/fase_alterna',
    'https://www.youtube.com/@FaseAlternaMusic',
  ],
  location: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valencia',
      addressCountry: 'ES',
    },
  },
  foundingDate: '2024',
  genre: 'Rock alternativo',
  memberOf: {
    '@type': 'Organization',
    name: 'Fase Alterna',
  },
});
