import { type ImageMetadata } from 'astro';

export type HeadProps = {
  title: string;
  description: string;
  image?: ImageMetadata;
};
