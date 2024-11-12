import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { SocialLink } from './SocialLink';

export function SocialLinks() {
  const links = [
    { href: "https://facebook.com/sourcingdenis", icon: Facebook, label: "Facebook", color: "blue-500" },
    { href: "https://twitter.com/sourcingdenis", icon: Twitter, label: "X (Twitter)", color: "gray-900" },
    { href: "https://instagram.com/__diskevich", icon: Instagram, label: "Instagram", color: "pink-500" },
    { href: "https://linkedin.com/in/sourcingdenis", icon: Linkedin, label: "LinkedIn", color: "blue-700" },
    { href: "https://github.com/sourcingdenis", icon: Github, label: "GitHub", color: "gray-900" },
    { href: "mailto:den.dinkevych.edu@gmail.com", icon: Mail, label: "Email", color: "indigo-600" },
    { href: "https://t.me/sourcingdenis", icon: MessageCircle, label: "Telegram", color: "sky-500" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
}