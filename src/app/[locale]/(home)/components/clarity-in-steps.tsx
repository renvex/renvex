'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    number: 1,
    title: t('cards.0.title', { fallback: 'Align' }),
    description: t('cards.0.description', {
      fallback:
        'Connect with a Renvex market strategist to define your objectives, risk tolerance, and target performance metrics. We help you establish a foundation of clarity — translating goals into actionable parameters before any capital moves.',
    }),
    imgUrl: '/images/home/step-1.jpg',
  },
  {
    number: 2,
    title: t('cards.1.title', { fallback: 'Analyze' }),
    description: t('cards.1.description', {
      fallback:
        'Access your personalized broker matrix, ranked by verified data streams, execution speed, and liquidity strength. Compare real-time metrics, client feedback, and platform reliability — all consolidated into one transparent view.',
    }),
    imgUrl: '/images/home/step-2.jpg',
    main: true,
  },
  {
    number: 3,
    title: t('cards.2.title', { fallback: 'Act' }),
    description: t('cards.2.description', {
      fallback:
        'Activate your tools, monitor volatility, and dynamically adjust your execution framework. Set alerts, refine your strategy with live analytics, and evolve your decisions as markets shift.',
    }),
    imgUrl: '/images/home/step-3.jpg',
  },
];

export const ClarityInSteps = () => {
  const t = useTranslations('home.clarityInSteps');

  const cards = getCards(t);

  return (
    <div className="bg-white">
      <section className="container flex flex-col gap-10 py-[120px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <Chip variant="light">
            <Text size="lg" weight={500} color="blue">
              {t('chip', { fallback: 'Built for structured decision-making' })}
            </Text>
          </Chip>
          <Title
            as="h3"
            size="6xl"
            color="black"
            className="max-md:text-[52px]"
          >
            {t('title', { fallback: 'Clarity in Three Moves' })}
          </Title>
        </div>
        <section className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6 max-md:flex-col">
            {cards.map(card => (
              <Card key={card.number} {...card} />
            ))}
          </div>
          <Text size="2xl" color="blue" className="text-center max-md:text-lg">
            {t('subtitle', { fallback: 'Three steps. Infinite control.' })}
          </Text>
        </section>
      </section>
    </div>
  );
};

const Card = ({
  description,
  imgUrl,
  number,
  title,
  main = false,
}: {
  number: number;
  title: string;
  description: string;
  imgUrl: string;
  main?: boolean;
}) => {
  return (
    <article
      className={cn(
        'relative flex flex-1 flex-col justify-between overflow-hidden rounded-4xl p-10 max-md:flex-none',
        main ? 'h-[600px] max-md:h-[500px]' : 'h-[500px] max-md:h-[400px]',
      )}
    >
      <Image
        className="z-0 object-cover"
        src={imgUrl}
        alt={title}
        fill
        unoptimized
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(276deg,rgba(0,0,0,0.00)_54.14%,#000_99.89%),linear-gradient(129deg,rgba(11,85,177,0.00)_13.56%,#0B55B1_80.96%)]" />
      <section className="flex flex-col gap-2.5">
        <span className="bg-blue-46 z-20 flex h-[56px] w-[73px] items-center justify-center rounded-[48px]">
          <Text size="lg" weight={500}>
            0{number}
          </Text>
        </span>
        <Title
          as="h3"
          size="3xl"
          color="white"
          className="z-20 text-[60px] max-md:text-[32px]"
        >
          {title}
        </Title>
      </section>
      <Text size="base" className="z-20">
        {description}
      </Text>
    </article>
  );
};
