'use client';

import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';

import { CryptoHeatmap } from '@/shared/ui/components/crypto-heatmap';
import { ForexHeatmap } from '@/shared/ui/components/forex-heatmap';
import { MarketHeatmap } from '@/shared/ui/components/market-heatmap';
import { StockHeatmap } from '@/shared/ui/components/stock-heatmap';
import { BitcoinCardIcon } from '@/shared/ui/icons/bitcoin-card';
import { ShoppingCartIcon } from '@/shared/ui/icons/shopping-cart';
import { TrendUpIcon } from '@/shared/ui/icons/trend-up';
import { Chip } from '@/shared/ui/kit/chip';
import { Property } from '@/shared/ui/kit/property';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Tools = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const t = useTranslations('home.tools');

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    queueMicrotask(() => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setScrollSnaps(emblaApi.scrollSnapList());
    });

    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const nextSlide = () => {
    emblaApi?.scrollNext();
  };

  const prevSlide = () => {
    emblaApi?.scrollPrev();
  };

  return (
    <div className="overflow-hidden bg-white">
      <section className="container flex flex-col gap-10 py-[120px]">
        <section className="flex flex-col items-center gap-4 text-center">
          <Chip variant="light">
            <Text
              size="lg"
              weight={500}
              color="blue"
              className="max-md:text-sm"
            >
              {t('chip', {
                fallback: 'Technology and expertise aligned to your strategy',
              })}
            </Text>
          </Chip>
          <Title as="h3" size="6xl" color="black">
            {t('title.0', { fallback: 'Strategic Tools for' })}{' '}
            <span>{t('title.1', { fallback: 'Smarter Decisions' })}</span>
          </Title>
          <Text size="base" className="w-[800px] text-black/90 max-md:w-full">
            {t('text', {
              fallback:
                'Renvex unites human insight and adaptive technology to support every step of your decision-making process. Our systems are built to guide, refine, and strengthen.',
            })}
          </Text>
        </section>
        <section className="relative flex flex-col gap-5">
          <Text
            size="2xl"
            color="primary"
            className="text-center max-md:text-base"
          >
            {t('text2', {
              fallback: 'How Renvex supports your trading decisions',
            })}
          </Text>
          <PrevArrow onClick={prevSlide} />
          <div
            className="overflow-hidden rounded-xl bg-white p-4 [box-shadow:0_209px_59px_0_rgba(0,0,0,0),0_134px_54px_0_rgba(0,0,0,0.01),0_75px_45px_0_rgba(0,0,0,0.05),0_33px_33px_0_rgba(0,0,0,0.09),0_8px_18px_0_rgba(0,0,0,0.10)] max-md:p-2"
            ref={emblaRef}
          >
            <div className="flex">
              <SlideLayout>
                <ForexWidget />
              </SlideLayout>
              <SlideLayout>
                <StockWidget />
              </SlideLayout>
              <SlideLayout>
                <CryptoWidget />
              </SlideLayout>
              <SlideLayout>
                <MarketWidget />
              </SlideLayout>
            </div>
          </div>
          <NextArrow onClick={nextSlide} />
          <div className="flex justify-center gap-2 pt-2">
            {scrollSnaps.map((_, index) =>
              index === selectedIndex ? (
                <ActiveDot key={index} />
              ) : (
                <button
                  key={index}
                  className="cursor-pointer"
                  onClick={() => emblaApi?.scrollTo(index)}
                >
                  <Dot />
                </button>
              ),
            )}
          </div>
        </section>
      </section>
    </div>
  );
};

const PrevArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="absolute top-1/2 -left-10 z-10 flex h-[52px] w-[70px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-[43px] bg-[#2841C1] max-lg:top-[110%] max-lg:left-[38%] max-md:left-[28%]"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.56995 18.0703L3.49995 12.0003L9.56995 5.93031"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5 12H3.67"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const NextArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="absolute top-1/2 -right-10 z-10 flex h-[52px] w-[70px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-[43px] bg-[#2841C1] max-lg:top-[110%] max-lg:right-[38%] max-md:right-[28%]"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.4299 5.92969L20.4999 11.9997L14.4299 18.0697"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 12H20.33"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const ForexWidget = () => (
  <>
    <HeatmapLayout>
      <ForexHeatmap />
    </HeatmapLayout>
    <Property variant="light">
      <TrendUpIcon />
      <Text size="lg" color="black">
        Forex heat map
      </Text>
    </Property>
  </>
);

const CryptoWidget = () => {
  const t = useTranslations('home.tools');

  return (
    <>
      <HeatmapLayout>
        <CryptoHeatmap />
      </HeatmapLayout>
      <Property variant="light">
        <BitcoinCardIcon />
        <Text size="lg" color="black">
          {t('crypto', { fallback: 'Crypto heat map' })}
        </Text>
      </Property>
    </>
  );
};

const StockWidget = () => {
  const t = useTranslations('home.tools');

  return (
    <>
      <HeatmapLayout>
        <StockHeatmap />
      </HeatmapLayout>
      <Property variant="light">
        <TrendUpIcon />
        <Text size="lg" color="black">
          {t('stock', { fallback: 'Stock heat map' })}
        </Text>
      </Property>
    </>
  );
};

const MarketWidget = () => {
  const t = useTranslations('home.tools');

  return (
    <>
      <HeatmapLayout>
        <MarketHeatmap />
      </HeatmapLayout>
      <Property variant="light">
        <ShoppingCartIcon />
        <Text size="lg" color="black">
          {t('market', { fallback: 'Asset Market Performance' })}
        </Text>
      </Property>
    </>
  );
};

const HeatmapLayout = ({ children }: { children: ReactNode }) => (
  <div className="h-[569px] w-full">{children}</div>
);

const SlideLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-[0_0_100%] flex-col items-center justify-center gap-4 px-4">
    {children}
  </div>
);

const ActiveDot = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="8"
    viewBox="0 0 80 8"
    fill="none"
  >
    <rect width="80" height="8" rx="3" fill="#292929" />
    <rect width="80" height="8" rx="3" fill="white" />
  </svg>
);

const Dot = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
  >
    <rect width="8" height="8" rx="3" fill="white" />
  </svg>
);
