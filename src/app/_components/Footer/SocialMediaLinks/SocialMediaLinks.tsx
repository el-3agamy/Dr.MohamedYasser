import React from 'react'
import {
  siFacebook,
  siInstagram,
  siX,
  siMessenger,
  siWhatsapp,
  siTiktok,
} from "simple-icons";

const socialLinks = [
  { name: "Facebook", icon: siFacebook, url: "https://facebook.com/youraccount", hoverColor: "#1877F2" },
  { name: "Instagram", icon: siInstagram, url: "https://instagram.com/youraccount", hoverColor: "#E4405F" },
  { name: "X", icon: siX, url: "https://x.com/youraccount", hoverColor: "#000000" },
  { name: "Messenger", icon: siMessenger, url: "https://m.me/youraccount", hoverColor: "#0084FF" },
  { name: "WhatsApp", icon: siWhatsapp, url: "https://wa.me/201000000000", hoverColor: "#25D366" },
  { name: "TikTok", icon: siTiktok, url: "https://tiktok.com/@youraccount", hoverColor: "#FE2C55" },
];

export default function SocialMediaLinks() {
  return (
   <>
    <div className="flex items-center gap-4">
      
{socialLinks.map(({ name, icon, url, hoverColor }) => (
  <a
    key={name}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    style={{ "--hover-color": hoverColor } as React.CSSProperties}
    className="text-gray-600 transition-colors duration-200 hover:text-[var(--hover-color)]"
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  </a>

      ))}
    </div>
   </>
  )
}




