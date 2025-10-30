'use client';

import { Link } from '@/i18n/navigation';

import { Text } from '@/shared/ui/kit/text';

const getLinks = () => [
  { label: 'Home', href: '/' },
  { label: 'Heatmaps', href: '/heatmaps' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Navigation = () => {
  const links = getLinks();

  return (
    <nav className="bg-grey-8 flex items-center gap-4 rounded-2xl px-6 py-1.5">
      {links.map(link => (
        <Link key={link.href} href={link.href} className="py-1.5">
          <Text weight={600}>{link.label}</Text>
        </Link>
      ))}
    </nav>
  );
};
