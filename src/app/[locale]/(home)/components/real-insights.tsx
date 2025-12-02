'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Authentic Trading Experiences' }),
    description: t('cards.0.description', {
      fallback: 'Only verified users contribute — no bots, no paid promotion.',
    }),
    img: {
      url: '/images/home/i-1.svg',
      width: 630,
      height: 600,
    },
  },
  {
    title: t('cards.1.title', { fallback: 'Performance in Practice' }),
    description: t('cards.1.description', {
      fallback:
        'Data shows structure, but feedback shows reality. We record how platforms behave when volatility hits.',
    }),
    img: {
      url: '/images/home/i-2.svg',
      width: 630,
      height: 430,
    },
  },
];

export const RealInsights = () => {
  const t = useTranslations('home.realInsights');

  const cards = getCards(t);

  return (
    <div className="bg-white">
      <section className="container flex flex-col gap-10 py-[120px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <Chip variant="light">
            <Text
              size="lg"
              weight={500}
              color="blue"
              className="max-md:text-sm"
            >
              {t('chip', {
                fallback: 'Authentic experiences that cut through speculation',
              })}
            </Text>
          </Chip>
          <Title as="h3" size="6xl" color="black">
            {t('title.0', { fallback: 'Real Insight,' })}{' '}
            <span>{t('title.1', { fallback: 'Real Traders' })}</span>
          </Title>
          <Text size="base" className="w-[700px] text-black/90 max-md:w-full">
            {t('description.0', {
              fallback: 'Markets are shaped by those who trade them.',
            })}
            <br />
            {t('description.1', {
              fallback:
                'Renvex brings together verified perspectives from real users — professionals who operate daily within the platforms you compare. Their insights reveal what numbers can’t: consistency, reliability, and user experience under real conditions.',
            })}
            <br />
            <br />
            <span className="font-bold">
              {t('description2', { fallback: 'What we collect and verify:' })}
            </span>
          </Text>
        </div>
        <section className="flex flex-col gap-6">
          <section className="flex gap-5 max-md:flex-col">
            {cards.map(card => (
              <Card key={card.title} {...card} />
            ))}
          </section>
          <Footer />
        </section>
      </section>
    </div>
  );
};

const Card = ({
  img,
  title,
  description,
}: {
  img: {
    url: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
}) => {
  return (
    <article className="relative flex h-[600px] w-1/2 flex-col gap-2 overflow-hidden rounded-[48px] bg-[#6885ED] px-[100px] py-[60px] text-center max-md:h-[380px] max-md:w-full max-md:p-5">
      <Title size="3xl" weight={600} color="white" className="z-20">
        {title}
      </Title>
      <Text size="base" className="z-20 max-md:text-xs">
        {description}
      </Text>
      <div className="absolute bottom-0 left-1/2 z-0 h-[400px] w-[400px] -translate-x-1/2 transform rounded-full bg-[#2841C1] blur-[150px]"></div>
      <Image
        className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 transform"
        src={img.url}
        alt={title}
        width={img.width}
        height={img.height}
        unoptimized
      />
    </article>
  );
};

const Footer = () => {
  const t = useTranslations('home.realInsights.footer');

  const locale = useLocale();

  return (
    <footer
      className="relative flex h-[300px] flex-col justify-center gap-2 overflow-hidden rounded-[48px] px-[100px] max-md:p-5"
      style={{
        background:
          'linear-gradient(92deg, #6885ED 1.47%, var(--color-blue-46, #2841C1) 96.76%)',
      }}
    >
      <Title as="h6" size="3xl" color="white" className="max-md:text-2xl">
        {t('title.0', { fallback: 'Independent Reviews,' })} <br />
        {locale === 'es' ? null : t('title.1', { fallback: 'Always Current' })}
      </Title>
      <Text size="base" className="z-10 max-md:text-sm">
        {t('description.0', {
          fallback:
            'As brokers evolve, our assessments evolve with them — every update is reviewed and validated.',
        })}{' '}
        <br />
        {locale === 'es'
          ? null
          : t('description.1', {
              fallback:
                'Renvex bridges quantitative data with qualitative truth, giving you a complete picture before you commit.',
            })}
      </Text>
      <Image
        className="absolute right-0 bottom-0 max-md:-bottom-20"
        src="/images/home/i-3.svg"
        alt="graph"
        width={516}
        height={539}
        unoptimized
      />
    </footer>
  );
};
