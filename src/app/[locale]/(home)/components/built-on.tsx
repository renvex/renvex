'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const BuiltOn = () => {
  const t = useTranslations('home.builtOn');

  return (
    <section className="relative flex h-[700px] flex-col bg-white">
      <Image
        className="object-cover max-md:hidden"
        src="/images/home/built-on-bg.jpg"
        alt="built-on"
        fill
        unoptimized
      />
      <div
        className="absolute inset-0 max-md:hidden"
        style={{
          background:
            'linear-gradient(263deg, rgba(255, 255, 255, 0.00) 3.59%, #FFF 56.27%)',
        }}
      />
      <div className="relative hidden max-md:block">
        <Image
          className="h-[400px] w-full object-cover"
          src="/images/home/built-on-bg.jpg"
          alt="built-on"
          width={1920}
          height={700}
        />
        <div
          className="absolute bottom-0 h-[100px] w-full"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.00) 0%, #FFFFFF 50.96%)',
          }}
        />
      </div>
      <section className="container flex h-full flex-col justify-center gap-4 max-md:justify-end max-md:pb-20">
        <Title size="6xl" className="z-10 max-md:text-[32px]" color="black">
          {t('title.0', { fallback: 'Built on' })}{' '}
          <span>{t('title.1', { fallback: 'Verified Data' })}</span>
        </Title>
        <Text color="primary" size="lg" weight={600} className="z-10">
          {t('description', {
            fallback: 'A foundation of precision and proof',
          })}
        </Text>
        <Text color="grey" className="z-10 w-[680px] max-md:w-full">
          {t('description2', {
            fallback:
              'We work alongside leading data providers and regulated platforms to maintain reliable, measurable, and unbiased information. Our framework is built on precision and transparency, ensuring every decision begins with trust and clarity.',
          })}
        </Text>
      </section>
    </section>
  );
};
