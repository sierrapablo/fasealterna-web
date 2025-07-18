import {
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaSoundcloud,
  FaYoutube,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import socials from "../data/socials.json";

import type { SocialItem, SocialIconName } from "../types/socials";

const iconMap: Record<SocialIconName, IconType> = {
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaSoundcloud,
  FaYoutube,
};

export default function SocialIcons() {
  return (
    <div className="flex gap-4 justify-center z-20">
      {(socials as SocialItem[]).map(({ href, name, icon }, i) => {
        const IconComponent = iconMap[icon];
        if (!IconComponent) return null;
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="transition-all duration-300 hover:drop-shadow-[0_0_6px_white] hover:text-black text-white"
          >
            <IconComponent size={36} />
          </a>
        );
      })}
    </div>
  );
}
