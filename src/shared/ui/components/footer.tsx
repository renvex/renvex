'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { ImportantNotice } from './important-notice';

const getPolicies = (t: ReturnType<typeof useTranslations>) => [
  {
    label: t('policies.0', { fallback: 'Cookie Policy' }),
    href: '/cookie-policy',
  },
  {
    label: t('policies.1', { fallback: 'Privacy Policy' }),
    href: '/privacy-policy',
  },
  {
    label: t('policies.2', { fallback: 'Terms of Service' }),
    href: '/terms-of-use',
  },
];

const getNavigation = (t: ReturnType<typeof useTranslations>) => [
  { label: t('navigation.0', { fallback: 'Home' }), href: '/' },
  { label: t('navigation.1', { fallback: 'Heatmaps' }), href: '/heatmaps' },
  { label: t('navigation.2', { fallback: 'About' }), href: '/about' },
  { label: t('navigation.3', { fallback: 'Contact' }), href: '/contact-us' },
];

export const Footer = () => {
  const t = useTranslations('footer');

  const policies = getPolicies(t);
  const navigation = getNavigation(t);

  return (
    <>
      <div className="bg-white">
        <footer className="container flex flex-col gap-20 py-10">
          <section className="flex justify-between gap-20 max-lg:flex-col-reverse">
            <div className="flex flex-col gap-2">
              <Image
                src="/logo.svg"
                alt="Renvex Logo"
                width={215}
                height={60}
              />
              <Title as="h4" size="lg" color="primary" weight={600}>
                {t('title', {
                  fallback: 'Markets move fast — we move with precision.',
                })}
              </Title>
              <Text color="grey">
                {t('description', {
                  fallback:
                    'Renvex ensures every trading decision is informed, verified, and deliberate.',
                })}
              </Text>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2 max-lg:flex max-lg:flex-col">
                {navigation.map(item => (
                  <NavigationBtn key={item.label} {...item} />
                ))}
              </div>
            </div>
          </section>
          <section className="flex items-center justify-between gap-5 border-t border-black/10 py-2 text-black max-md:flex-col-reverse max-md:text-center">
            <Text color="black">
              © {new Date().getFullYear()} Renvex {' '}
              <span className="text-black/50">
                {t('empowering', {
                  fallback: 'Empowering Trading Clarity Worldwide',
                })}
              </span>
            </Text>
            <div className="flex items-center gap-4">
              {policies.map(item => (
                <Link key={item.href} href={item.href}>
                  <Text className="text-black/50">{item.label}</Text>
                </Link>
              ))}
            </div>
          </section>
        </footer>
      </div>
      <div className="bg-[#2841C1] py-2">
        <div className="container">
          <ImportantNotice />
        </div>
      </div>
    </>
  );
};

const NavigationBtn = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="flex h-[44px] w-[221px] items-center rounded-2xl bg-black/10 px-6 transition duration-300 ease-in-out hover:bg-black/20 max-md:w-full"
    >
      <Text weight={600} color="black">
        {label}
      </Text>
    </Link>
  );
};
