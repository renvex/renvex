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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
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

  return (
    <section className="container flex flex-col gap-10 py-[120px]">
      <section className="flex flex-col items-center gap-4 text-center">
        <Chip>
          <Text size="lg" weight={500}>
            {t('chip', {
              fallback: 'Technology and expertise aligned to your strategy',
            })}
          </Text>
        </Chip>
        <Title as="h3" size="6xl" className="max-md:text-[52px]">
          {t('title.0', { fallback: 'Strategic Tools for' })}{' '}
          <span className="text-blue-70">
            {t('title.1', { fallback: 'Smarter Decisions' })}
          </span>
        </Title>
        <Text size="base" color="grey" className="w-[800px] max-md:w-full">
          {t('text', {
            fallback:
              'Renvex unites human insight and adaptive technology to support every step of your decision-making process. Our systems are built to guide, refine, and strengthen.',
          })}
        </Text>
      </section>
      <section className="flex flex-col gap-5">
        <Text
          size="2xl"
          color="primary"
          className="text-center max-md:text-base"
        >
          {t('text2', {
            fallback: 'How Renvex supports your trading decisions',
          })}
        </Text>
        <div
          className="overflow-hidden rounded-xl bg-[rgba(242,242,242,0.08)] p-4 max-md:p-2"
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
  );
};

const ForexWidget = () => (
  <>
    <HeatmapLayout>
      <ForexHeatmap />
    </HeatmapLayout>
    <Property>
      <TrendUpIcon />
      <Text size="lg">Forex heat map</Text>
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
      <Property>
        <BitcoinCardIcon />
        <Text size="lg">{t('crypto', { fallback: 'Crypto heat map' })}</Text>
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
      <Property>
        <TrendUpIcon />
        <Text size="lg">{t('stock', { fallback: 'Stock heat map' })}</Text>
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
      <Property>
        <ShoppingCartIcon />
        <Text size="lg">
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
    <rect width="8" height="8" rx="3" fill="#292929" />
  </svg>
);
