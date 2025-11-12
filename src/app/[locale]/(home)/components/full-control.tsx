'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Heading } from '@/shared/ui/components/heading';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Zero Commissions' }),
    description: t('cards.0.description', {
      fallback: 'We take nothing from your trades or profits.',
    }),
  },
  {
    title: t('cards.1.title', { fallback: 'Unrestricted Access' }),
    description: t('cards.1.description', {
      fallback: 'Your platform, your pace — Renvex never intervenes.',
    }),
  },
  {
    title: t('cards.2.title', { fallback: 'Transparent Costs' }),
    description: t('cards.2.description', {
      fallback: 'Every fee is visible, every charge documented.',
    }),
  },
];

export const FullControl = () => {
  const t = useTranslations('home.fullControl');

  const cards = getCards(t);

  return (
    <div className="bg-white">
      <section className="container flex flex-col gap-10 py-[120px]">
        <Heading
          chip={t('chip', { fallback: 'Independence is the rule' })}
          title={
            <span className="text-black">
              {t('title.0', { fallback: 'Full Control.' })}{' '}
              <span>{t('title.1', { fallback: 'No Surprises.' })}</span>
            </span>
          }
          description={
            <span className="text-black/90">
              {t('description.0', { fallback: 'Your' })}{' '}
              <span className="font-bold">
                {t('description.1', { fallback: 'strategy' })}
              </span>{' '}
              {t('description.2', {
                fallback: 'defines the path. Your platform follows it. Your',
              })}{' '}
              <span className="font-bold">
                {t('description.3', { fallback: 'rules' })}
              </span>{' '}
              {t('description.4', { fallback: 'stay intact.' })} <br /> <br />{' '}
              {t('description.5', {
                fallback:
                  'Renvex stands for complete financial autonomy — no hidden terms, no restrictions, no interference. You trade on your own terms; we ensure the framework is transparent and reliable.',
              })}
            </span>
          }
        />
        <section className="flex flex-col gap-6">
          <Text
            size="2xl"
            color="primary"
            className="text-center max-md:text-lg"
          >
            {t('subtitle', {
              fallback: 'We Commit To:',
            })}
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
    </div>
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
    <article className="flex h-[200px] flex-col justify-center gap-2.5 rounded-[48px] bg-white p-10 shadow-[219px_185px_80px_0_rgba(41,66,193,0.00),140px_119px_73px_0_rgba(41,66,193,0.01),79px_67px_62px_0_rgba(41,66,193,0.05),35px_30px_46px_0_rgba(41,66,193,0.08),9px_7px_25px_0_rgba(41,66,193,0.09)] transition duration-300 ease-in-out max-md:h-[90px] max-md:h-auto max-md:text-center">
      <Title
        weight={600}
        className="text-[52px] text-[#2841C1] max-md:text-2xl"
      >
        {title}
      </Title>
      <Text size="base" className="text-black/90">
        {description}
      </Text>
    </article>
  );
};

const WorldMap = () => {
  const t = useTranslations('home.fullControl.worldMap');

  return (
    <section className="relative flex w-1/2 flex-col gap-2.5 overflow-hidden rounded-[48px] pt-[64px] text-center [background:radial-gradient(191.04%_100.15%_at_15.32%_0%,var(--color-blue-30,#6885ED)_0%,var(--color-blue-46,#2841C1)_66.17%)] max-md:h-[400px] max-md:w-full max-md:px-20 max-md:pt-10">
      <Title size="3xl" weight={600} className="max-md:text-2xl">
        {t('title', { fallback: 'The Principle' })}
      </Title>
      <Text size="base" className="max-md:text-sm">
        {t('description.0', { fallback: 'Freedom builds confidence.' })} <br />
        {t('description.1', {
          fallback: 'You steer the direction — we keep the signal steady.',
        })}
      </Text>
      <Image
        className="absolute bottom-0 left-1/2 h-[450px] w-full -translate-x-1/2 object-cover max-md:bottom-5 max-md:h-[200px]"
        src="/images/home/w-map.svg"
        alt="world map"
        width={827}
        height={413}
        unoptimized
      />
    </section>
  );
};
