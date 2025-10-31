'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { Text } from '@/shared/ui/kit/text';

const getLinks = (t: ReturnType<typeof useTranslations>) => [
  { label: t('home', { fallback: 'Home' }), href: '/' },
  { label: t('heatmaps', { fallback: 'Heatmaps' }), href: '/heatmaps' },
  { label: t('about', { fallback: 'About' }), href: '/about' },
  { label: t('contact', { fallback: 'Contact' }), href: '/contact' },
];

export const Navigation = () => {
  const t = useTranslations('header.navigation');

  const links = getLinks(t);

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
