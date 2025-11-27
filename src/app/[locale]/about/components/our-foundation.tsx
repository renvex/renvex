'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-foundation.module.css';

export const OurFoundation = () => {
  const t = useTranslations('about.ourFoundation');

  return (
    <section className="flex flex-col gap-10 py-20">
      <div className="flex flex-col items-center gap-4 text-center">
        <Chip>
          <Text size="lg" color="primary" className="max-md:text-sm">
            {t('chip', { fallback: 'Where clarity meets accountability' })}
          </Text>
        </Chip>
        <Title as="h3" size="6xl" color="black">
          {t('title', { fallback: 'Our Foundation' })}
        </Title>
        <Text className="w-[700px] text-black/90 max-md:w-full">
          {t('description.0', {
            fallback:
              'Each Renvex assessment is based on verified data and real market behavior. ',
          })}
          <br />
          {t('description.1', {
            fallback:
              'We combine independent audits, compliance reviews, and live performance tracking to ensure only credible, consistent brokers remain in our network.',
          })}
        </Text>
      </div>
      <section className="relative container flex flex-col gap-6">
        <Text size="2xl" color="primary" className="z-20 text-center">
          {t('corePillars', { fallback: 'Core Pillars' })}
        </Text>
        <Ellipse />
        <div className="z-20 flex gap-6 max-md:flex-col">
          <Card
            title={t('cards.0.title', { fallback: 'Verification First' })}
            description={t('cards.0.description', {
              fallback:
                'Every broker is validated through regulatory checks, live data, and performance testing.',
            })}
            imgUrl="/images/about/f1.svg"
          />
          <Card
            title={t('cards.1.title', { fallback: 'Transparency Always' })}
            description={t('cards.1.description', {
              fallback:
                'No paid listings or hidden incentives — placement is earned through verified results.',
            })}
            imgUrl="/images/about/f2.svg"
          />
        </div>
        <div className="z-20 ml-auto flex gap-6 max-md:ml-0 max-md:flex-col">
          <Card
            title={t('cards.2.title', { fallback: 'Evidence-Based Tools' })}
            description={t('cards.2.description', {
              fallback:
                'Heatmaps, analytics, and comparison dashboards built for measurable decisions.',
            })}
            imgUrl="/images/about/f3.svg"
          />
          <Card
            title={t('cards.3.title', { fallback: 'User Trust' })}
            description={t('cards.3.description', {
              fallback:
                'Insights and reviews from verified traders are regularly verified and updated.',
            })}
            imgUrl="/images/about/f4.svg"
          />
        </div>
      </section>
    </section>
  );
};

const Ellipse = () => (
  <span
    className={cn(
      st.ellipse,
      'absolute top-1/2 left-1/2 h-[1023px] w-[1023px] -translate-x-1/2 -translate-y-1/2',
    )}
  />
);

const Card = ({
  title,
  description,
  imgUrl,
}: {
  title: string;
  description: string;
  imgUrl: string;
}) => (
  <article
    className={cn(
      st.bg,
      'relative flex h-[500px] w-[400px] flex-col gap-5 overflow-hidden rounded-[48px] p-10 max-lg:h-auto max-lg:min-h-[370px] max-lg:w-full',
    )}
  >
    <Title
      size="5xl"
      weight={600}
      color="black"
      className="leading-[120%] tracking-[-1.12px] max-md:text-[32px] max-md:font-normal"
    >
      {title}
    </Title>
    <Text size="base" weight={600} color="black" className="leading-[140%]">
      {description}
    </Text>
    <Image
      className="absolute right-0 -bottom-10 h-[300px] w-[300px] max-lg:-right-20 max-lg:-bottom-46"
      src={imgUrl}
      alt={title}
      width={300}
      height={300}
      unoptimized
    />
  </article>
);
