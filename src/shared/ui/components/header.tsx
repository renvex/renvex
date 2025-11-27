'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { LangSwitcher } from '@/shared/ui/components/lang-switcher';
import { MobileMenu } from '@/shared/ui/components/mobile-menu';
import { Navigation } from '@/shared/ui/components/navigation';

export const Header = () => {
  const pathname = usePathname();
  const locale = useLocale();

  const isLightLogo = useMemo(
    () => pathname === `/${locale}/contact-us` || pathname === '/contact-us',
    [pathname, locale],
  );

  return (
    <header className="relative z-50 flex flex-col">
      <section className="absolute top-2 left-1/2 container flex -translate-x-1/2 items-center justify-between py-5 max-md:top-0">
        <Link href="/">
          <Image
            className="max-md:h-[31px] max-md:w-[85px]"
            src={isLightLogo ? '/logo-light.svg' : '/logo.svg'}
            alt="Renvex Logo"
            width={113}
            height={32}
          />
        </Link>
        <div className="flex items-center gap-4 max-md:flex-row-reverse">
          <div className="max-md:hidden">
            <Navigation />
          </div>
          <div className="hidden max-md:block">
            <MobileMenu />
          </div>
          <LangSwitcher />
        </div>
      </section>
    </header>
  );
};
