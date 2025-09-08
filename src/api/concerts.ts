import { CONCERTS_API_ENDPOINT } from 'astro:env/server';
import type { Concert } from '../types/concert';

// The API returns concerts with a date that is an ISO string.
type ApiConcert = { date: string; venue: string; link?: string };

/**
 * Fetches the list of concerts from the API endpoint.
 * Sorts concerts by date (ascending).
 * Formats the date in dd-mm-yyyy format before returning.
 * @returns An object containing either the list of concerts or an error flag.
 */
export async function fetchConcerts(): Promise<{
  concerts: Concert[];
  hasError: boolean;
}> {
  try {
    const response = await fetch(CONCERTS_API_ENDPOINT);

    if (!response.ok) {
      return { concerts: [], hasError: true };
    }

    const concertsFromApi = (await response.json()) as ApiConcert[];

    const sortedConcerts = concertsFromApi.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    const formattedConcerts: Concert[] = sortedConcerts.map((concert) => ({
      isoDate: concert.date,
      date: new Date(concert.date).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
      venue: concert.venue,
      link: concert.link,
    }));
    return { concerts: formattedConcerts, hasError: false };
  } catch (err) {
    return { concerts: [], hasError: true };
  }
}
