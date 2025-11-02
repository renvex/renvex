'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('heatmaps.hero');

  return (
    <section className="relative flex h-[600px] justify-center max-md:h-[700px] max-md:justify-end">
      <section className="container">
        <section className="flex h-full w-[551px] flex-col justify-center gap-4 max-md:w-full max-md:justify-end max-md:pb-20">
          <Title as="h1" size="6xl" className="z-20">
            {t('title', { fallback: 'Renvex Market Heatmaps' })}
          </Title>
          <Text size="lg" color="primary" className="z-20">
            {t('subtitle', {
              fallback: 'Live Intelligence. Structured for Precision.',
            })}
          </Text>
          <Text color="grey" className="z-20">
            {t('description.0', {
              fallback:
                'Gain a real-time visual overview of global markets — all in one analytical space. Renvex Heatmaps translate complex data into clear visual signals, helping traders identify liquidity shifts, performance clusters, and volatility hotspots across forex, equities, crypto, and other key assets.',
            })}
            <br />
            <br />
            {t('description.1', {
              fallback: 'Clarity at speed. Insight at scale.',
            })}
          </Text>
        </section>
      </section>
      <Image
        className="object-cover"
        src="/images/heatmaps/hero.jpg"
        alt="hero"
        fill
        unoptimized
      />
      <Image
        className="absolute bottom-0 z-10 w-full max-md:h-[600px] max-md:object-cover"
        src="/images/home/faded.svg"
        alt="faded"
        width={100}
        height={560}
      />
    </section>
  );
};
