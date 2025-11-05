'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Heading } from '@/shared/ui/components/heading';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Performance Modeling' }),
    text: t('cards.0.description', {
      fallback:
        'Simulate multiple strategies side-by-side to understand how each behaves under real market conditions.',
    }),
  },
  {
    title: t('cards.1.title', { fallback: 'Market Shift Scenarios' }),
    text: t('cards.1.description', {
      fallback:
        'Test how volatility, liquidity changes, and trend reversals affect long-term performance.',
    }),
  },
  {
    title: t('cards.2.title', { fallback: 'Compounding Analysis' }),
    text: t('cards.2.description', {
      fallback:
        'Visualize the cumulative effect of reinvestment and position scaling over time.',
    }),
  },
  {
    title: t('cards.3.title', { fallback: 'Risk-to-Reward Calibrations' }),
    text: t('cards.3.description', {
      fallback:
        'Adjust exposure, compare ratios, and define thresholds for sustainable profitability.',
    }),
  },
];

export const Strategy = () => {
  const t = useTranslations('home.strategy');

  const cards = getCards(t);

  return (
    <section className="flex flex-col gap-10 py-[120px]">
      <div className="container">
        <Heading
          chip={t('heading.chip', {
            fallback: 'Forecast your growth with clarity and control.',
          })}
          title={
            <>
              {t('heading.title.0', { fallback: 'Strategy' })}{' '}
              <span className="text-blue-70">
                {t('heading.title.1', { fallback: 'Before Commitment' })}
              </span>
            </>
          }
          description={t('heading.description', {
            fallback:
              'Before execution comes preparation. Renvex turns assumptions into structured projections, giving you a measurable view of risk, return, and potential growth.',
          })}
        />
      </div>
      <div className="mr-[72px] flex gap-20 max-md:mr-0 max-md:flex-col max-md:items-center max-md:px-4">
        <Image
          className="h-[848px] w-[56%] object-contain max-md:h-[343px] max-md:w-full"
          src="/images/home/phone-frame.png"
          alt="phone frame"
          width={500}
          height={848}
          unoptimized
        />
        <section className="flex flex-col gap-10">
          {cards.map(card => (
            <Card key={card.title} {...card} />
          ))}
          <Title as="h6" size="2xl" color="primary">
            {t('subtitle', {
              fallback:
                'Every decision deserves evidence — we provide the model.',
            })}
          </Title>
        </section>
      </div>
    </section>
  );
};

const Card = ({ text, title }: { title: string; text: string }) => {
  return (
    <article className="flex flex-col gap-4 border-b border-white/10 pt-5 pb-2.5">
      <Title as="h6" size="3xl" weight={600} className="max-md:text-2xl">
        {title}
      </Title>
      <Text size="base">{text}</Text>
    </article>
  );
};
