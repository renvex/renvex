'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './policy-hero.module.css';

export const PolicyHero = ({ title }: { title: string }) => {
  const t = useTranslations('policyHero');

  return (
    <section className="relative container flex h-[400px] flex-col py-20 max-[830px]:overflow-hidden">
      <Ball />
      <div className="mt-auto flex flex-col gap-4">
        <Title as="h1" size="6xl" className="z-20 max-md:text-[32px]">
          {title}
        </Title>
        <Text size="lg" color="primary" weight={600} className="z-20">
          {t('title', { fallback: 'Last Updated:' })} 22.10.2025
        </Text>
      </div>
    </section>
  );
};

const Ball = () => (
  <span
    className={cn(
      st.ball,
      'absolute -top-[650px] left-1/2 h-[816px] w-[816px] -translate-x-1/2',
    )}
  />
);
