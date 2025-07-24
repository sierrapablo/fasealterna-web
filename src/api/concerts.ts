import { CONCERTS_API_ENDPOINT } from "astro:env/server";
import type { Concert } from "../types/concert";

/**
 * Fetches the list of concerts from the API endpoint.
 * @returns An object containing either the list of concerts or an error flag.
 */
export async function fetchConcerts(): Promise<{ concerts: Concert[]; hasError: boolean }> {
  try {
    const response = await fetch(CONCERTS_API_ENDPOINT);

    if (!response.ok) {
      return { concerts: [], hasError: true };
    }

    const concerts = (await response.json()) as Concert[];
    return { concerts, hasError: false };
  } catch (err) {
    return { concerts: [], hasError: true };
  }
};