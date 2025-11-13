'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { Text } from '@/shared/ui/kit/text';

import { Dropdown, DropdownItem } from '../kit/dropdown';

const getLinks = (t: ReturnType<typeof useTranslations>) => [
  { label: t('home', { fallback: 'Home' }), href: '/' },
  { label: t('heatmaps', { fallback: 'Heatmaps' }), href: '/heatmaps' },
  { label: t('about', { fallback: 'About' }), href: '/about' },
  { label: t('contact', { fallback: 'Contact' }), href: '/contact-us' },
];

export const Navigation = () => {
  const t = useTranslations('header.navigation');

  const links = getLinks(t);

  return (
    <nav className="flex items-center gap-4 rounded-2xl bg-[#F6F6F6] px-6 py-1.5">
      {links.map(link => (
        <Link key={link.href} href={link.href} className="py-1.5">
          <Text weight={600} color="black">
            {link.label}
          </Text>
        </Link>
      ))}
      <Dropdown label="Legal">
        {({ setOpen }) => (
          <>
            <Link href="/terms-of-use">
              <DropdownItem onClick={() => setOpen(false)}>
                <Text weight={600} color="black">
                  Terms of Use
                </Text>
              </DropdownItem>
            </Link>
            <Link href="/privacy-policy">
              <DropdownItem onClick={() => setOpen(false)}>
                <Text weight={600} color="black">
                  Privacy Policy
                </Text>
              </DropdownItem>
            </Link>
            <Link href="/cookie-policy">
              <DropdownItem onClick={() => setOpen(false)}>
                <Text weight={600} color="black">
                  Cookie Policy
                </Text>
              </DropdownItem>
            </Link>
          </>
        )}
      </Dropdown>
    </nav>
  );
};
