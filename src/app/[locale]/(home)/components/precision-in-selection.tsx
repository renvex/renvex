'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: (
      <>
        {t('cards.0.title.0', { fallback: 'Execution' })} <br />
        {t('cards.0.title.1', { fallback: 'Latency' })}
      </>
    ),
    subtitle: t('cards.0.subtitle', {
      fallback: 'Consistency and stability under live market conditions.',
    }),
    description: t('cards.0.description', {
      fallback:
        'We track real-time order processing and system responsiveness during periods of high trading activity.',
    }),
    imgUrl: '/images/home/p-1.jpg',
  },
  {
    title: (
      <>
        {t('cards.1.title.0', { fallback: 'Fee' })}
        <br />
        {t('cards.1.title.1', { fallback: 'Structures' })}
      </>
    ),
    subtitle: t('cards.1.subtitle', {
      fallback: 'Complete transparency with no hidden costs.',
    }),
    description: t('cards.1.description', {
      fallback:
        'All spreads, commissions, and overnight charges are documented and compared across providers.',
    }),
    imgUrl: '/images/home/p-2.jpg',
  },
  {
    title: (
      <>
        {t('cards.2.title.0', { fallback: 'Liquidity' })} <br />
        {t('cards.2.title.1', { fallback: 'Consistency' })}
      </>
    ),
    subtitle: t('cards.2.subtitle', {
      fallback: 'Verified depth of market and sustainable execution quality.',
    }),
    description: t('cards.2.description', {
      fallback:
        'Each platform is tested against volatility events and liquidity fluctuations.',
    }),
    imgUrl: '/images/home/p-3.jpg',
  },
  {
    title: (
      <>
        {t('cards.3.title.0', { fallback: 'Client' })} <br />
        {t('cards.3.title.1', { fallback: 'Satisfaction' })}
      </>
    ),
    subtitle: t('cards.3.subtitle', {
      fallback:
        'Insights based on verified user feedback and engagement metrics.',
    }),
    description: t('cards.3.description', {
      fallback:
        'Ratings are periodically recalibrated to reflect authentic trading experiences.',
    }),
    imgUrl: '/images/home/p-4.jpg',
  },
];

export const PrecisionInSelection = () => {
  const t = useTranslations('home.precisionInSelection');
  const cards = getCards(t);

  return (
    <section className="container flex flex-col gap-10 py-20">
      <section className="flex flex-col items-center gap-4 text-center">
        <Chip>
          <Text
            size="lg"
            weight={500}
            className="max-md:text-base max-md:wrap-break-word"
          >
            {t('subtitle', {
              fallback: 'A data-driven framework for broker evaluation',
            })}
          </Text>
        </Chip>
        <Title as="h3" size="6xl">
          {t('title.0', { fallback: 'Precision in' })}{' '}
          <span className="text-blue-70">
            {t('title.1', { fallback: 'Selection' })}
          </span>
        </Title>
        <Text color="grey" className="w-[700px] text-center max-md:w-full">
          {t('description', {
            fallback:
              'Renvex applies a continuous monitoring system to assess and verify broker performance in real time. Every platform is analyzed using verified data streams and measurable criteria, ensuring that only the most consistent and transparent brokers remain visible.',
          })}
        </Text>
      </section>
      <div className="flex flex-col gap-10">
        <ul className="relative flex flex-col gap-10">
          {cards.map((card, index) => (
            <Card key={card.subtitle} {...card} index={index} />
          ))}
        </ul>
        <Outcome />
      </div>
    </section>
  );
};

const Card = ({
  description,
  imgUrl,
  subtitle,
  title,
  index,
}: {
  imgUrl: string;
  title: ReactNode;
  subtitle: string;
  description: string;
  index: number;
}) => (
  <li
    className="sticky flex h-[600px] flex-col justify-between overflow-hidden rounded-4xl p-5 max-md:!relative max-md:!top-0"
    style={{
      top: `${index * 60}px`, // how much each card stacks down
      zIndex: index,
    }}
  >
    <Image
      className="object-cover"
      src={imgUrl}
      alt={subtitle}
      unoptimized
      fill
    />
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(276deg, rgba(0, 0, 0, 0.00) 63.15%, #000 99.89%), linear-gradient(129deg, rgba(51, 51, 51, 0.00) 13.56%, var(--color-grey-7, #121412) 80.96%)`,
      }}
    ></div>

    <Title as="h3" size="6xl" className="z-20 max-md:text-[52px]">
      {title}
    </Title>

    <section className="ml-auto flex w-[351px] flex-col gap-5 max-md:ml-0 max-md:w-full">
      <Title
        as="h6"
        size="3xl"
        color="grey"
        weight={400}
        className="z-20 leading-[120%] max-md:text-2xl"
      >
        {subtitle}
      </Title>
      <Text size="base" className="z-20">
        {description}
      </Text>
    </section>
  </li>
);

const Outcome = () => {
  const t = useTranslations('home.precisionInSelection.outcome');

  return (
    <li className="relative flex flex-col items-center justify-center gap-5 overflow-hidden rounded-[48px] bg-[radial-gradient(191.04%_100.15%_at_15.32%_0%,var(--color-grey-9,#171818)_0%,var(--color-grey-6,#101010)_66.17%)] px-20 py-10 text-center max-md:px-4">
      <Title as="h3" size="6xl" className="max-lg:text-[52px]">
        {t('title', { fallback: 'Outcome' })}
      </Title>
      <Text size="2xl" className="w-[700px] max-lg:text-lg max-md:w-full">
        {t('description', {
          fallback:
            'A refined network of brokers that meet institutional-grade standards for performance, transparency, and reliability. Every inclusion is earned — never purchased.',
        })}
      </Text>
      <Image
        className="absolute top-0 -right-2 max-lg:top-[72%] max-lg:h-[100px] max-lg:w-[100px] max-lg:rotate-45"
        src="/images/home/outcome-r.svg"
        alt="outcome-r"
        width={286}
        height={248}
      />
      <Image
        className="absolute bottom-0 -left-2 max-lg:bottom-[72%] max-lg:h-[100px] max-lg:w-[100px] max-lg:rotate-45"
        src="/images/home/outcome-l.svg"
        alt="outcome-l"
        width={286}
        height={248}
      />
    </li>
  );
};
