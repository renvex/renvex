'use client';

import { Link } from '@/i18n/navigation';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getPolicies = () => [
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

const getNavigation = () => [
  { label: 'Home', href: '/' },
  { label: 'Heatmaps', href: '/heatmaps' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Footer = () => {
  const policies = getPolicies();
  const navigation = getNavigation();

  return (
    <footer className="container flex flex-col gap-20 py-10">
      <section className="flex justify-between gap-20 max-lg:flex-col-reverse">
        <div className="flex flex-col gap-2">
          <Title as="h3" size="6xl" weight={600}>
            Renvex
          </Title>
          <Title as="h4" size="lg" color="primary" weight={600}>
            Markets move fast — we move with precision.
          </Title>
          <Text>
            Renvex ensures every trading decision is informed, verified, and
            deliberate.
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
      <section className="flex items-center justify-between gap-5 py-2 max-md:flex-col-reverse max-md:text-center">
        <Text>
          © {new Date().getFullYear()} Renvex {' '}
          <span className="text-white/50">
            Empowering Trading Clarity Worldwide
          </span>
        </Text>
        <div className="flex items-center gap-4">
          {policies.map(item => (
            <Link key={item.href} href={item.href}>
              <Text className="text-white/50">{item.label}</Text>
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
};

const NavigationBtn = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="flex h-[44px] w-[221px] items-center rounded-2xl bg-[#141414] px-6 transition duration-300 ease-in-out hover:bg-[#171818] max-md:w-full"
    >
      <Text weight={600}>{label}</Text>
    </Link>
  );
};
