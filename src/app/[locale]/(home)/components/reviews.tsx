'use client';

import { useTranslations } from 'next-intl';

import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Reviews = () => {
  const t = useTranslations('home.reviews');

  return (
    <section className="container py-20">
      <div className="flex flex-col gap-10">
        <section className="flex flex-col items-center gap-4 text-center">
          <Chip>
            <Text size="lg" weight={500}>
              {t('chip', {
                fallback: 'Verified reputation through independent insight',
              })}
            </Text>
          </Chip>
          <Title as="h3" size="6xl">
            {t('title.0', { fallback: 'Partners Rated by' })}{' '}
            <span className="text-blue-70">
              {t('title.1', { fallback: 'Traders' })}
            </span>
          </Title>
          <Text color="grey">
            {t('description.0', {
              fallback:
                'Our broker network is validated not only through Renvex analytics but through transparent public feedback.',
            })}
            <br />
            {t('description.1', {
              fallback:
                'See how our verified partners perform on Trustpilot — rated by traders who use them every day.',
            })}
          </Text>
        </section>
      </div>
    </section>
  );
};
