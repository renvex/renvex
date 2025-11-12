import Image from 'next/image';

import { Link } from '@/i18n/navigation';

import { ImportantNotice } from '@/shared/ui/components/important-notice';
import { LangSwitcher } from '@/shared/ui/components/lang-switcher';
import { MobileMenu } from '@/shared/ui/components/mobile-menu';
import { Navigation } from '@/shared/ui/components/navigation';

export const Header = () => {
  return (
    <header className="relative z-50 flex flex-col">
      <div className="bg-[#2841C1]">
        <section className="container flex items-center justify-between gap-5 py-2">
          <ImportantNotice />
          <LangSwitcher />
        </section>
      </div>
      <section className="absolute top-10 left-1/2 container flex -translate-x-1/2 items-center justify-between py-5 max-md:top-20">
        <Link href="/">
          <Image
            className="max-md:h-[31px] max-md:w-[85px]"
            src="/logo.svg"
            alt="Renvex Logo"
            width={113}
            height={32}
          />
        </Link>
        <div className="max-md:hidden">
          <Navigation />
        </div>
        <div className="hidden max-md:block">
          <MobileMenu />
        </div>
      </section>
    </header>
  );
};
