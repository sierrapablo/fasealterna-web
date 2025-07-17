import { FaInstagram, FaSpotify, FaTiktok, FaSoundcloud, FaYoutube } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 justify-center z-20">
      <a
        href="https://instagram.com/fase_alterna"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
      >
        <FaInstagram size={36} color="white" />
      </a>
      <a
        href="https://open.spotify.com/intl-es/artist/6sjywsSKCM6e1NN9SE0hQm?si=pXt3sTvkSd-6vW5oCVpeBQ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify"
        className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
      >
        <FaSpotify size={36} color="white" />
      </a>
      <a
        href="https://www.tiktok.com/@fasealterna"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
      >
        <FaTiktok size={36} color="white" />
      </a>
      <a
        href="https://soundcloud.com/fase_alterna"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="SoundCloud"
        className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
      >
        <FaSoundcloud size={36} color="white" />
      </a>
      <a
        href="https://www.youtube.com/@FaseAlternaMusic/videos"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
      >
        <FaYoutube size={36} color="white" />
      </a>
    </div>
  );
}
