'use client';

import { Activity } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Heading } from '@/shared/ui/components/heading';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-methodology.module.css';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', {
      fallback: 'Continuous data flow from multiple verified providers.',
    }),
    color: 'black',
  },
  {
    title: t('cards.1.title', {
      fallback: 'Manual verification of anomalies and outliers.',
    }),
    color: 'purple',
  },
  {
    title: t('cards.2.title', {
      fallback: 'Performance scoring is recalculated monthly.',
    }),
    color: 'black',
  },
  {
    title: t('cards.3.title', {
      fallback: 'Integration of user sentiment from verified sources.',
    }),
    color: 'purple',
  },
];

export const OurMethodology = () => {
  const t = useTranslations('about.outMethodology');

  const cards = getCards(t);

  return (
    <section className="container flex flex-col gap-10 py-20">
      <Heading
        chip={t('heading.chip', {
          fallback: 'Data that works, systems that adapt',
        })}
        title={t('heading.title', { fallback: 'Our Methodology' })}
        description={
          <>
            {t('heading.description.0', {
              fallback:
                'The Renvex approach combines automated intelligence with human oversight. Our analysts validate algorithmic outputs, while our systems track fluctuations in liquidity, execution quality, and user feedback in real time. This hybrid process ensures that every broker presented remains current, compliant, and competitive — not by promise, but by performance.',
            })}
            <br />
            {t('heading.description.1', {
              fallback:
                'This hybrid process ensures that every broker presented remains current, compliant, and competitive — not by promise, but by performance.',
            })}
          </>
        }
      />
      <div className="flex flex-col gap-6">
        <Text size="2xl" color="primary" className="text-center">
          {t('keyAspects', { fallback: 'Key aspects of our process:' })}
        </Text>
        <section className="flex gap-6 max-[1125px]:flex-wrap max-md:flex-col">
          {cards.map(card => (
            <Card key={card.title} {...card} />
          ))}
        </section>
      </div>
      <section
        className={cn(st.visionBg, 'flex h-[600px] flex-col rounded-4xl p-10')}
      >
        <div className="mt-auto flex w-[700px] flex-col gap-4 max-md:w-full">
          <Title
            as="h3"
            size="6xl"
            color="white"
            className="max-md:text-[52px]"
          >
            {t('ourVision.title', { fallback: 'Our Vision' })}
          </Title>
          <Text color="white" weight={600} size="lg">
            {t('ourVision.subtitle', {
              fallback:
                'Engineering transparency for the next generation of traders',
            })}
          </Text>
          <Text color="white" className="leading-[140%]">
            {t('ourVision.description.0', {
              fallback:
                'Technology moves fast, but integrity must move faster.',
            })}{' '}
            <br />
            {t('ourVision.description.1', {
              fallback:
                'Renvex develops systems that convert complex financial data into usable, verified intelligence — built for clarity, performance, and independence.',
            })}
            <br />
            {t('ourVision.description.2', {
              fallback:
                'We aim to expand our analytical infrastructure globally, providing traders with institutional-level validation tools designed for a transparent financial future.',
            })}
          </Text>
          <Text size="lg" color="white">
            {t('ourVision.footer', {
              fallback: 'Where systems align, confidence follows.',
            })}
          </Text>
        </div>
      </section>
    </section>
  );
};

const Card = ({
  title,
  color = 'purple',
}: {
  title: string;
  color?: string;
}) => {
  return (
    <article
      className={cn(
        'relative flex h-[400px] flex-1 flex-col gap-4 rounded-[48px] px-10 py-20 max-lg:h-auto max-md:p-10',
        color === 'purple' ? st.purpleBg : st.blackBg,
      )}
    >
      <Title
        as="h5"
        size="3xl"
        weight={color === 'purple' ? 600 : 400}
        color={color === 'purple' ? 'white' : 'primary'}
      >
        {title}
      </Title>
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
