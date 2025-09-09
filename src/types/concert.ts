export type Concert = {
  date: string; // Formatted date for display
  isoDate: string; // Original ISO date string for comparisons
  venue: string;
  link?: string;
};

// The API returns concerts with a date that is an ISO string.
export type ApiConcert = {
  date: string;
  venue: string;
  link?: string;
};
