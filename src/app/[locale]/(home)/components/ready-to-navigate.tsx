'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { PhoneIcon } from '@/shared/ui/icons/phone';
import { SearchIcon } from '@/shared/ui/icons/search';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ReadyToNavigate = () => {
  const t = useTranslations('home.readyToNavigate');

  return (
    <section className="relative container flex h-[733px] flex-col gap-5 overflow-hidden py-20 max-lg:h-auto">
      <DashboardsImage />
      <Image
        className="z-0 object-cover max-lg:hidden"
        src="/images/home/banner.jpg"
        alt="banner"
        fill
        unoptimized
      />
      <Image
        className="absolute bottom-0 z-10 w-full max-lg:hidden"
        src="/images/home/faded.svg"
        alt="faded"
        width={100}
        height={560}
      />
      <section className="mt-auto flex flex-col gap-4">
        <Title
          as="h2"
          className="z-20 text-[80px] leading-[88px] max-lg:text-3xl max-lg:leading-[120%]"
        >
          {t('title', {
            fallback: 'Ready to Navigate the Markets with Confidence?',
          })}
        </Title>
        <Text size="lg" color="primary" weight={600} className="z-20">
          {t('description', {
            fallback: 'Your path to informed trading starts here.',
          })}
        </Text>
        <div className="z-20 flex items-center gap-4 max-md:flex-col max-md:items-start">
          <Button variant="secondary" className="z-20">
            <PhoneIcon />
            {t('buttons.0', { fallback: 'Request a Call' })}
          </Button>
          <Button variant="secondary" className="z-20">
            <SearchIcon />
            {t('buttons.1', { fallback: 'Explore Verified Brokers' })}
          </Button>
        </div>
      </section>
    </section>
  );
};

const DashboardsImage = () => (
  <section className="relative hidden h-[210px] max-lg:block">
    <Image
      className="z-0 object-cover"
      src="/images/home/banner.jpg"
      alt="banner"
      fill
      unoptimized
    />
    <Image
      className="absolute bottom-0 z-10 w-full"
      src="/images/home/faded.svg"
      alt="faded"
      width={100}
      height={356}
    />
  </section>
);
