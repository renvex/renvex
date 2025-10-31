'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('home.hero');

  return (
    <section className="relative flex h-[94vh] flex-col items-center justify-center gap-4 overflow-hidden max-md:h-[475px]">
      <Image
        className="absolute top-0 left-1/2 z-0 h-[608px] w-[816px] -translate-x-1/2"
        src="/images/home/hero-ellipse.png"
        alt="Hero Ellipse"
        width={816}
        height={608}
        unoptimized
      />
      <Image
        className="absolute -top-[70%] left-1/2 z-10 h-[915px] w-[616px] -translate-x-1/2 max-lg:hidden"
        src="/images/home/hero-phone-1.png"
        alt="Hero Phone 1"
        width={616}
        height={915}
        unoptimized
      />
      <Image
        className="absolute -right-[8%] -bottom-[30%] z-10 h-[695px] w-[468px] max-lg:hidden"
        src="/images/home/hero-phone-2.png"
        alt="Hero Phone 2"
        width={468}
        height={695}
        unoptimized
      />
      <Image
        className="absolute -bottom-[30%] -left-[10%] z-10 h-[798px] w-[537px] max-lg:hidden"
        src="/images/home/hero-phone-3.png"
        alt="Hero Phone 3"
        width={537}
        height={798}
        unoptimized
      />
      <Title
        as="h1"
        weight={600}
        className="z-30 text-[265px] leading-[100%] tracking-[-4.956px] max-lg:text-[100px]"
      >
        RenveX
      </Title>
      <Text color="primary" size="lg" weight={600} className="z-30">
        {t('subtitle', { fallback: 'Your fixed point in a moving market' })}
      </Text>
      <Text color="grey" className="z-30 w-[600px] text-center max-md:w-full">
        {t('description', {
          fallback:
            'While others sell promises, Renvex delivers evidence. We connect traders to verified brokers through validated data and independent analysis. Every comparison is factual, structured, and free from external influence.',
        })}
      </Text>
    </section>
  );
};
