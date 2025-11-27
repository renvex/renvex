'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/shared/lib/utils/cn';
import { FiveStarsIcon } from '@/shared/ui/icons/five-stars';
import { TrustPilotIcon } from '@/shared/ui/icons/trust-pilot';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './reviews.module.css';

const getReviews = () => [
  '/images/home/partner-1.svg',
  '/images/home/partner-2.svg',
  '/images/home/partner-3.svg',
  '/images/home/partner-4.svg',
  '/images/home/partner-5.svg',
  '/images/home/partner-6.svg',
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
    <div className="bg-white">
      <section className="container py-20">
        <div className="flex flex-col gap-10">
          <section className="flex flex-col items-center gap-4 text-center">
            <Chip variant="light">
              <Text
                size="lg"
                weight={500}
                color="blue"
                className="max-md:text-sm"
              >
                {t('chip', {
                  fallback: 'Verified reputation through independent insight',
                })}
              </Text>
            </Chip>
            <Title as="h3" size="6xl" color="black">
              {t('title.0', { fallback: 'Partners Rated by' })}{' '}
              <span>{t('title.1', { fallback: 'Traders' })}</span>
            </Title>
            <Text className="text-black/90">
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
          <div className="relative">
            <Image
              className="pointer-events-none absolute top-0 left-0 z-10 max-md:hidden"
              src="/images/home/r-faded-l-light.svg"
              alt="reviews-bg"
              width={725}
              height={136}
              unoptimized
            />
            <section className="overflow-hidden" ref={emblaRef}>
              <div className="flex max-md:gap-0">
                {reviews.map(reviewImgUrl => (
                  <div
                    key={reviewImgUrl}
                    className="flex min-w-[400px] shrink-0 justify-center max-md:max-w-[330px] max-md:min-w-[350px]"
                  >
                    <ReviewCard imgUrl={reviewImgUrl} />
                  </div>
                ))}
              </div>
            </section>
            <Image
              className="pointer-events-none absolute top-0 right-0 z-10 max-md:hidden"
              src="/images/home/r-faded-r-light.svg"
              alt="reviews-right-bg"
              width={725}
              height={136}
              unoptimized
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ReviewCard = ({ imgUrl }: { imgUrl: string }) => (
  <article
    className={cn(
      st.bg,
      'relative mx-2.5 flex h-[329px] w-[400px] flex-col gap-5 overflow-hidden rounded-[48px] px-10 pt-10 pb-[120px] max-md:mx-2 max-md:w-full max-md:max-w-[350px] max-md:px-5 max-md:pt-6 max-md:pb-[72px]',
    )}
  >
    <Image src={imgUrl} alt="review" width={300} height={85} unoptimized />
    <div className="flex items-center justify-between">
      <FiveStarsIcon />
      <TrustPilotIcon />
    </div>
    <Image
      className="absolute bottom-7 left-10 opacity-10 max-md:left-6 max-md:h-[70px] max-md:w-[70px]"
      src="/images/home/star.svg"
      alt="star"
      width={95}
      height={90}
    />
    <Image
      className="absolute right-0 bottom-5 opacity-10 max-md:h-[70px] max-md:w-[210px]"
      src="/images/home/trust.svg"
      alt="star"
      width={248}
      height={88}
    />
  </article>
);
