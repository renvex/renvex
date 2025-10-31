'use client';

import { Activity } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './banners.module.css';

const getBanners = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Broker Matching Guidance' }),
    subtitle: t('cards.0.subtitle', {
      fallback: 'Need help selecting the right broker?',
    }),
    description: t('cards.0.description', {
      fallback:
        'Our team will help you compare verified options tailored to your strategy, risk level, and market focus.',
    }),
    color: 'purple',
  },
  {
    title: t('cards.1.title', { fallback: 'Platform Navigation Help' }),
    subtitle: t('cards.1.subtitle', { fallback: 'New to Renvex?' }),
    description: t('cards.1.description', {
      fallback:
        'We’ll guide you through our analytics tools, heatmaps, and comparison systems so you can make data-driven choices confidently.',
    }),
    color: 'black',
  },
  {
    title: t('cards.2.title', { fallback: 'Feedback & Insights' }),
    subtitle: t('cards.2.subtitle', {
      fallback: 'Want to share your experience or suggest improvements?',
    }),
    description: t('cards.2.description', {
      fallback:
        'Your feedback helps us refine our platform and maintain transparency across every feature.',
    }),
    color: 'purple',
  },
];

export const Banners = () => {
  const t = useTranslations('contactUs.banners');

  const banners = getBanners(t);

  return (
    <section className="container flex flex-col gap-10 py-20">
      <div className="relative flex h-[350px] flex-col justify-end overflow-hidden rounded-4xl p-10">
        <Image
          src="/images/contact-us/support.jpg"
          alt="support"
          fill
          unoptimized
          className="z-0 object-cover"
        />
        <div className={cn('pointer-events-none absolute z-10', st.overlay)} />
        <Title as="h3" size="6xl" className="z-20 max-md:text-[52px]">
          {t('title', { fallback: 'Get Expert Support' })}
        </Title>
      </div>
      <section className="flex gap-6 max-lg:flex-col">
        {banners.map(banner => (
          <Card key={banner.title} {...banner} />
        ))}
      </section>
    </section>
  );
};

const Card = ({
  title,
  description,
  subtitle,
  color = 'purple',
}: {
  title: string;
  description: string;
  subtitle: string;
  color?: string;
}) => {
  return (
    <article
      className={cn(
        'relative flex h-[400px] flex-1 flex-col gap-4 rounded-[48px] px-10 py-20 max-lg:h-auto max-md:p-7',
        color === 'purple' ? st.purpleBg : st.blackBg,
      )}
    >
      <Title as="h5" size="4xl" className="max-md:text-3xl">
        {title}
      </Title>
      <Text size="lg" weight={600}>
        {subtitle}
      </Text>
      <Text>{description}</Text>
      <Activity mode={color === 'purple' ? 'visible' : 'hidden'}>
        <Image
          className="absolute right-0 bottom-0 max-lg:hidden"
          src="/images/contact-us/graph.svg"
          alt="activity"
          width={285}
          height={285}
        />
      </Activity>
    </article>
  );
};
