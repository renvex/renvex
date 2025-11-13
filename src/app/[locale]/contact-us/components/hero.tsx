'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('contactUs.hero');

  return (
    <section className="relative flex h-[550px] flex-col max-md:h-[700px]">
      <Image
        className="z-0 object-cover"
        src="/images/contact-us/hero.jpg"
        alt="hero"
        fill
        unoptimized
      />
      <Image
        className="absolute bottom-0 z-10 w-full max-md:h-[600px] max-md:object-cover"
        src="/images/faded-light-b.svg"
        alt="faded"
        width={100}
        height={560}
      />
      <section className="container flex h-full flex-col">
        <div className="mt-auto flex w-[500px] flex-col gap-4 pb-20 max-md:w-full">
          <Title as="h3" size="6xl" className="z-20">
            {t('title', { fallback: 'Contact Us' })}
          </Title>
          <Text size="lg" color="primary" weight={600} className="z-20">
            {t('description', {
              fallback: 'We’re Here to Support Precision Every Step of the Way',
            })}
          </Text>
          <Text color="grey" className="z-20">
            {t('description2', {
              fallback:
                'Need clarity before you act? Contact Renvex for straightforward answers based on verified information.',
            })}
          </Text>
        </div>
      </section>
    </section>
  );
};
