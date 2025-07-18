export type Concert = {
  date: string;
  venue: string;
  link: string;
};

export type ConcertTableProps = {
  concerts: Concert[];
};
