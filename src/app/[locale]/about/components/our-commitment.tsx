'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OurCommitment = () => {
  const t = useTranslations('about.ourCommitment');

  return (
    <section className="relative flex flex-col justify-center py-20 max-md:h-[700px]">
      <div className="z-20 container">
        <section className="flex w-[600px] flex-col gap-4 max-md:w-full">
          <Title as="h3" size="6xl" className="max-md:text-3xl">
            {t('title', { fallback: 'Our Commitment' })}
          </Title>
          <Text size="base" color="primary">
            {t('subtitle', { fallback: 'Trust is proven, not promised' })}
          </Text>
          <Text color="grey">
            {t('description.0', {
              fallback:
                'We continuously monitor all listed brokers, updating data and recalibrating metrics as market conditions evolve.',
            })}
            <br />
            {t('description.1', {
              fallback:
                'Our standards are built to exceed regulation — prioritizing reliability, data integrity, and user security.',
            })}
          </Text>
          <Text size="lg">
            {t('appendix', {
              fallback:
                'At Renvex, every statement can be traced, every recommendation justified. That is how precision becomes trust.',
            })}
          </Text>
        </section>
      </div>
      <Image
        className="object-cover max-md:object-fill"
        src="/images/about/comit.jpg"
        alt="comit"
        fill
        unoptimized
      />
    </section>
  );
};
