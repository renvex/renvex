'use client';

import Image from 'next/image';

import { Heading } from '@/shared/ui/components/heading';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = () => [
  {
    title: 'Zero Commissions',
    description: 'We take nothing from your trades or profits.',
  },
  {
    title: 'Unrestricted Access',
    description: 'Your platform, your pace — Renvex never intervenes.',
  },
  {
    title: 'Transparent Costs',
    description: 'Every fee is visible, every charge documented.',
  },
];

export const FullControl = () => {
  const cards = getCards();

  return (
    <section className="container flex flex-col gap-10 py-[120px]">
      <Heading
        chip="Independence is the rule"
        title={
          <>
            Full Control. <span className="text-blue-70">No Surprises.</span>
          </>
        }
        description={
          <>
            Your <span className="font-bold">strategy</span> defines the path.
            Your platform follows it. Your{' '}
            <span className="font-bold">rules</span> stay intact. <br /> <br />{' '}
            Renvex stands for complete financial autonomy — no hidden terms, no
            restrictions, no interference. You trade on your own terms; we
            ensure the framework is transparent and reliable.
          </>
        }
      />
      {/* <div className="flex flex-col items-center gap-4 text-center">
        <Chip>
          <Text size="lg" weight={500}>
            Independence is the rule
          </Text>
        </Chip>
        <Title as="h3" size="6xl">
          Full Control. <span className="text-blue-70">No Surprises.</span>
        </Title>
        <Text color="grey" size="base" className="w-[700px] max-md:w-full">
          Your <span className="font-bold">strategy</span> defines the path.
          Your platform follows it. Your{' '}
          <span className="font-bold">rules</span> stay intact. <br />
          <br /> Renvex stands for complete financial autonomy — no hidden
          terms, no restrictions, no interference. You trade on your own terms;
          we ensure the framework is transparent and reliable.
        </Text>
      </div> */}
      <section className="flex flex-col gap-6">
        <Text size="2xl" color="primary" className="text-center max-md:text-lg">
          How Renvex supports your trading decisions
        </Text>
        <div className="flex gap-6 max-md:flex-col">
          <WorldMap />
          <section className="flex w-1/2 flex-col gap-6 max-md:w-full">
            {cards.map(card => (
              <Card key={card.title} {...card} />
            ))}
          </section>
        </div>
      </section>
    </section>
  );
};

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <article className="flex h-[200px] flex-col justify-center gap-2.5 rounded-[48px] bg-[linear-gradient(149deg,var(--color-grey-20,#333)_13.56%,var(--color-grey-7,#121412)_80.96%)] p-10 transition duration-300 ease-in-out hover:bg-[linear-gradient(92deg,#4033CC_1.47%,var(--color-blue-70,#776BF8)_96.76%)] max-md:h-[90px] max-md:text-center">
      <Title size="3xl" weight={600} className="max-md:text-2xl">
        {title}
      </Title>
      <Text size="base">{description}</Text>
    </article>
  );
};

const WorldMap = () => {
  return (
    <section className="relative flex w-1/2 flex-col gap-2.5 overflow-hidden rounded-[48px] bg-[radial-gradient(191.04%_100.15%_at_15.32%_0%,var(--color-grey-9,#171818)_0%,var(--color-grey-6,#101010)_66.17%)] pt-[64px] text-center max-md:h-[400px] max-md:w-full max-md:px-20 max-md:pt-10">
      <Title size="3xl" weight={600} className="max-md:text-2xl">
        The Principle
      </Title>
      <Text size="base" className="max-md:text-sm">
        Freedom builds confidence. <br />
        You steer the direction — we keep the signal steady.
      </Text>
      <Image
        className="absolute bottom-10 left-1/2 h-[373px] w-full -translate-x-1/2 object-cover max-md:bottom-5 max-md:h-[200px]"
        src="/images/home/w-map.png"
        alt="world map"
        width={500}
        height={413}
        unoptimized
      />
    </section>
  );
};
