export type Concert = {
  date: string; // Formatted date for display
  isoDate: string; // Original ISO date string for comparisons
  venue: string;
  link?: string;
};
