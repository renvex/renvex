'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/shared/lib/utils/cn';
import { FiveStarsIcon } from '@/shared/ui/icons/five-stars';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './reviews.module.css';

const getReviews = () => [
  {
    description: (
      <>
        <span className="font-bold">
          Good customer support-Although the Vanguard platform is…
        </span>
        <br />
        <br />
        Although the Vanguard platform is complicated for me to navigate being a
        novice in this investment game- Teigan has helped me for months and
        provides an outstanding service with no complaints- always happy to help
        me and responses are pretty fast! I will invest in the future but I
        can...
      </>
    ),
    personName: 'Eddie',
    date: '23 jul 2025',
  },
  {
    description: (
      <>
        <span className="font-bold">
          Good customer support-Although the Vanguard platform is…
        </span>
        <br />
        <br />
        Although the Vanguard platform is complicated for me to navigate being a
        novice in this investment game- Teigan has helped me for months and
        provides an outstanding service with no complaints- always happy to help
        me and responses are pretty fast! I will invest in the future but I
        can...
      </>
    ),
    personName: 'Eddie',
    date: '23 jul 2025',
  },
  {
    description: (
      <>
        <span className="font-bold">
          Good customer support-Although the Vanguard platform is…
        </span>
        <br />
        <br />
        Although the Vanguard platform is complicated for me to navigate being a
        novice in this investment game- Teigan has helped me for months and
        provides an outstanding service with no complaints- always happy to help
        me and responses are pretty fast! I will invest in the future but I
        can...
      </>
    ),
    personName: 'Eddie',
    date: '23 jul 2025',
  },
  {
    description: (
      <>
        <span className="font-bold">
          Good customer support-Although the Vanguard platform is…
        </span>
        <br />
        <br />
        Although the Vanguard platform is complicated for me to navigate being a
        novice in this investment game- Teigan has helped me for months and
        provides an outstanding service with no complaints- always happy to help
        me and responses are pretty fast! I will invest in the future but I
        can...
      </>
    ),
    personName: 'Eddie',
    date: '23 jul 2025',
  },
];

export const Reviews = () => {
  const t = useTranslations('home.reviews');
  const reviews = getReviews();

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <section className="container py-20">
      <div className="flex flex-col gap-10">
        <section className="flex flex-col items-center gap-4 text-center">
          <Chip>
            <Text size="lg" weight={500}>
              {t('chip', {
                fallback: 'Verified reputation through independent insight',
              })}
            </Text>
          </Chip>
          <Title as="h3" size="6xl" className="max-md:text-[52px]">
            {t('title.0', { fallback: 'Partners Rated by' })}{' '}
            <span className="text-blue-70">
              {t('title.1', { fallback: 'Traders' })}
            </span>
          </Title>
          <Text color="grey">
            {t('description.0', {
              fallback:
                'Our broker network is validated not only through Renvex analytics but through transparent public feedback.',
            })}
            <br />
            {t('description.1', {
              fallback:
                'See how our verified partners perform on Trustpilot — rated by traders who use them every day.',
            })}
          </Text>
        </section>
        <section className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 max-md:gap-1">
            {reviews.map((review, index) => (
              <div
                key={`${review.personName}-${index}`}
                className="flex min-w-[400px] shrink-0 justify-center"
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

const ReviewCard = ({
  date,
  description,
  personName,
}: {
  description: ReactNode;
  personName: string;
  date: string;
}) => (
  <article
    className={cn(
      st.bg,
      'relative flex h-[500px] w-[400px] flex-col justify-between overflow-hidden rounded-[48px] px-10 pt-10 pb-[120px] max-md:w-full max-md:max-w-[330px] max-md:px-6 max-md:pt-6 max-md:pb-[72px]',
    )}
  >
    <FiveStarsIcon />
    <Text size="base" className="max-md:text-xs">
      {description}
    </Text>
    <div className="flex items-center justify-between">
      <Text size="2xl" className="max-md:text-base">
        {personName}
      </Text>
      <Text size="base" className="max-md:text-xs">
        {date}
      </Text>
    </div>
    <Image
      className="absolute bottom-0 left-10 opacity-10 max-md:left-6 max-md:h-[70px] max-md:w-[70px]"
      src="/images/home/star.svg"
      alt="star"
      width={95}
      height={90}
    />
    <Image
      className="absolute right-0 bottom-0 opacity-10 max-md:-bottom-2 max-md:h-[70px] max-md:w-[210px]"
      src="/images/home/trust.svg"
      alt="star"
      width={248}
      height={88}
    />
  </article>
);
