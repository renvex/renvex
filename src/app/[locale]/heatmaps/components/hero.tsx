'use client';

import { useTranslations } from 'next-intl';

import { PageHero } from '@/shared/ui/components/page-hero';

export const Hero = () => {
  const t = useTranslations('heatmaps.hero');

  return (
    <PageHero
      imgUrl="/images/heatmaps/hero.jpg"
      title={t('title', { fallback: 'Renvex Market Heatmaps' })}
      subtitle={t('subtitle', {
        fallback: 'Live Intelligence. Structured for Precision.',
      })}
      description={
        <>
          {t('description.0', {
            fallback:
              'Gain a real-time visual overview of global markets — all in one analytical space. Renvex Heatmaps translate complex data into clear visual signals, helping traders identify liquidity shifts, performance clusters, and volatility hotspots across forex, equities, crypto, and other key assets.',
          })}
          <br />
          <br />
          {t('description.1', {
            fallback: 'Clarity at speed. Insight at scale.',
          })}
        </>
      }
    />
  );
};
