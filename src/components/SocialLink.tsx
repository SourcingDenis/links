import React from 'react';

type SocialLinkProps = {
  href: string;
  icon: React.ElementType;
  label: string;
  color?: string;
};

export function SocialLink({ href, icon: Icon, label, color = 'indigo-600' }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:shadow-[0_5px_25px_rgba(93,70,232,0.15)] before:absolute before:h-[calc(100%+16px)] before:w-[calc(100%+16px)] before:-left-2 before:-top-2 before:rounded-full before:border before:border-[rgba(132,132,164,0.35)] before:animate-focus"
      aria-label={label}
    >
      <Icon className={`h-6 w-6 text-gray-700 transition-colors duration-300 group-hover:text-${color} group-hover:animate-jello`} />
      <span className="absolute -bottom-8 scale-0 rounded-lg bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
}