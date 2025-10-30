'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/utils/cn';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = () => [
  {
    number: 1,
    title: 'Align',
    description:
      'Connect with a Renvex market strategist to define your objectives, risk tolerance, and target performance metrics. We help you establish a foundation of clarity — translating goals into actionable parameters before any capital moves.',
    imgUrl: '/images/home/step-1.jpg',
  },
  {
    number: 2,
    title: 'Analyze',
    description:
      'Access your personalized broker matrix, ranked by verified data streams, execution speed, and liquidity strength. Compare real-time metrics, client feedback, and platform reliability — all consolidated into one transparent view.',
    imgUrl: '/images/home/step-2.jpg',
    main: true,
  },
  {
    number: 3,
    title: 'Act',
    description:
      'Activate your tools, monitor volatility, and dynamically adjust your execution framework. Set alerts, refine your strategy with live analytics, and evolve your decisions as markets shift.',
    imgUrl: '/images/home/step-3.jpg',
  },
];

export const ClarityInSteps = () => {
  const cards = getCards();

  return (
    <section className="container flex flex-col gap-10 py-[120px]">
      <div className="flex flex-col items-center gap-4 text-center">
        <Chip>
          <Text size="lg" weight={500}>
            Built for structured decision-making
          </Text>
        </Chip>
        <Title as="h3" size="6xl">
          Clarity in Three Moves
        </Title>
      </div>
      <section className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-6 max-md:flex-col">
          {cards.map(card => (
            <Card key={card.number} {...card} />
          ))}
        </div>
        <Text size="2xl" color="primary" className="text-center max-md:text-lg">
          Three steps. Infinite control.
        </Text>
      </section>
    </section>
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
      <div className="absolute inset-0 z-10 bg-[linear-gradient(276deg,rgba(0,0,0,0)_54.14%,#000_99.89%),linear-gradient(129deg,rgba(51,51,51,0)_13.56%,var(--color-grey-7,#121412)_80.96%)]" />
      <section className="flex flex-col gap-2.5">
        <span className="bg-blue-70 z-20 flex h-[56px] w-[73px] items-center justify-center rounded-[48px] shadow-[inset_1px_1px_2px_0_rgba(255,255,255,0.24),0_1px_3px_0_rgba(119,107,248,0.24),0_2px_6px_0_rgba(119,107,248,0.24),0_4px_8px_0_rgba(119,107,248,0.12),0_16px_32px_-8px_rgba(119,107,248,0.48)]">
          <Text size="lg" weight={500}>
            0{number}
          </Text>
        </span>
        <Title as="h3" size="3xl" className="z-20">
          {title}
        </Title>
      </section>
      <Text size="base" className="z-20">
        {description}
      </Text>
    </article>
  );
};
