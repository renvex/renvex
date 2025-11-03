'use client';

import { useTranslations } from 'next-intl';

import { PageHero } from '@/shared/ui/components/page-hero';

export const Hero = () => {
  const t = useTranslations('about.hero');

  return (
    <PageHero
      imgUrl="/images/about/hero.jpg"
      title={t('title', { fallback: 'About Renvex' })}
      subtitle={t('subtitle', {
        fallback: 'Built on precision. Driven by verification',
      })}
      description={t('description', {
        fallback:
          'Our purpose is clear: to make every trading decision informed, traceable, and accountable.',
      })}
    />
  );
};
