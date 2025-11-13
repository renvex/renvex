'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const PageHero = ({
  description,
  subtitle,
  title,
  imgUrl,
}: {
  title: string;
  subtitle: string;
  description: ReactNode;
  imgUrl: string;
}) => {
  return (
    <section className="relative flex h-[600px] justify-center max-md:h-[700px] max-md:justify-end">
      <section className="container">
        <section className="flex h-full w-[551px] flex-col justify-center gap-4 max-md:w-full max-md:justify-end max-md:pb-20">
          <Title as="h1" size="6xl" color="black" className="z-20">
            {title}
          </Title>
          <Text size="lg" color="primary" weight={600} className="z-20">
            {subtitle}
          </Text>
          <Text className="z-20 text-black/90">{description}</Text>
        </section>
      </section>
      <Image
        className="object-cover"
        src={imgUrl}
        alt="hero"
        fill
        unoptimized
      />
      <Image
        className="absolute bottom-0 left-0 z-10 h-full w-full object-cover max-md:h-[700px]"
        src="/images/faded-light-l.svg"
        alt="faded"
        width={100}
        height={560}
      />
    </section>
  );
};
