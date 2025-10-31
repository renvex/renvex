'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './support.module.css';

export const Support = () => {
  const t = useTranslations('contactUs.support');

  return (
    <section
      className={cn('relative container flex flex-col gap-10 py-20', st.bg)}
    >
      <div className="flex gap-10 max-md:flex-col max-md:gap-5">
        <InfoCard
          label={t('info.0.label', { fallback: 'Monday to Friday:' })}
          value={t('info.0.value', { fallback: '9:00 AM – 6:00 PM (GMT)' })}
        />
        <InfoCard
          label={t('info.1.label', { fallback: 'Weekend' })}
          value={t('info.1.value', { fallback: 'Support available via email' })}
        />
      </div>
      <div className="flex flex-col gap-5 max-md:flex-col">
        <Card
          title={t('cards.0.title', { fallback: 'Email Support' })}
          subtitle={t('cards.0.subtitle', {
            fallback: 'Need assistance or have a question?',
          })}
          description={t('cards.0.description', {
            fallback:
              'Our support team replies within 24 hours with clear, actionable guidance.',
          })}
        />
        <Card
          title={t('cards.1.title', { fallback: 'Phone Consultations' })}
          subtitle={t('cards.1.subtitle', {
            fallback: 'Prefer a personal conversation?',
          })}
          description={t('cards.1.description', {
            fallback:
              'Speak directly with a Renvex specialist — no forms, no waiting, just informed answers.',
          })}
        />
      </div>
    </section>
  );
};

const InfoCard = ({ label, value }: { label: string; value: string }) => (
  <article className="flex w-[350px] flex-col gap-2">
    <Text size="lg" color="primary">
      {label}
    </Text>
    <Title as="h6" size="3xl">
      {value}
    </Title>
  </article>
);

const Card = ({
  description,
  subtitle,
  title,
}: {
  title: string;
  subtitle: string;
  description: string;
}) => (
  <article
    className={cn(
      'flex w-max flex-col gap-5 rounded-[48px] px-20 py-10 max-lg:w-full max-md:px-5',
      st.cardBg,
    )}
  >
    <Title
      as="h3"
      size="6xl"
      weight={600}
      className="w-[400px] max-lg:w-full max-md:text-[40px]"
    >
      {title}
    </Title>
    <Text size="2xl" color="primary" weight={400} className="max-md:text-lg">
      {subtitle}
    </Text>
    <Text
      size="2xl"
      weight={400}
      className="w-[716px] max-lg:w-full max-md:text-base"
    >
      {description}
    </Text>
  </article>
);
