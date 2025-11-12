'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.css';

export const Hero = () => {
  const t = useTranslations('home.hero');

  return (
    <section className="relative flex h-[94vh] flex-col items-center justify-center gap-4 overflow-hidden bg-white max-md:h-[475px] max-md:px-4 max-md:text-center">
      <Ellipse />
      <Image
        className="absolute top-0 left-[45%] z-10 h-[230px] w-[599px] -translate-x-[45%] max-lg:hidden"
        src="/images/home/hero-phone-1.svg"
        alt="Hero Phone 1"
        width={599}
        height={230}
        unoptimized
      />
      <Image
        className="absolute bottom-0 left-0 z-10 h-[456px] w-[589px] max-lg:hidden"
        src="/images/home/hero-phone-2.svg"
        alt="Hero Phone 2"
        width={589}
        height={456}
        unoptimized
      />
      <Image
        className="absolute right-0 bottom-0 z-10 h-[371px] w-[296px] max-lg:hidden"
        src="/images/home/hero-phone-3.svg"
        alt="Hero Phone 3"
        width={296}
        height={371}
        unoptimized
      />
      <Title
        as="h1"
        weight={600}
        className="z-30 text-[265px] leading-[100%] tracking-[-4.956px] max-lg:text-[100px]"
        style={{
          textShadow:
            '156px 322px 100px rgba(0, 0, 0, 0.00), 100px 206px 92px rgba(0, 0, 0, 0.01), 56px 116px 77px rgba(0, 0, 0, 0.05), 25px 51px 57px rgba(0, 0, 0, 0.09), 6px 13px 31px rgba(0, 0, 0, 0.10)',
        }}
      >
        RenveX
      </Title>
      <Text color="primary" size="lg" weight={600} className="z-30">
        {t('subtitle', { fallback: 'Your fixed point in a moving market' })}
      </Text>
      <Text
        color="grey"
        className="z-30 w-[600px] text-center text-black/90 max-md:w-full"
      >
        {t('description', {
          fallback:
            'While others sell promises, Renvex delivers evidence. We connect traders to verified brokers through validated data and independent analysis. Every comparison is factual, structured, and free from external influence.',
        })}
      </Text>
    </section>
  );
};

const Ellipse = () => {
  return (
    <span
      className={cn(
        st.ellipse,
        'absolute -top-[56%] left-1/2 z-0 h-[1023px] w-[1023px] -translate-x-1/2 max-md:-top-[80%] max-md:h-[626px] max-md:w-[626px]',
      )}
    ></span>
  );
};
