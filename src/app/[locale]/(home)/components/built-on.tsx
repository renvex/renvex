'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const BuiltOn = () => {
  return (
    <section className="relative h-[700px]">
      <Image
        className="object-cover"
        src="/images/home/built-on-bg.jpg"
        alt="built-on"
        fill
        unoptimized
      />
      <div className="absolute inset-0 bg-linear-to-r from-black to-transparent" />
      <section className="container flex h-full flex-col justify-center gap-4 max-md:justify-end max-md:py-20">
        <Title size="6xl" className="z-10 max-md:text-[32px]">
          Built on <span className="text-blue-70">Verified Data</span>
        </Title>
        <Text color="primary" size="lg" weight={600} className="z-10">
          A foundation of precision and proof
        </Text>
        <Text color="grey" className="z-10 w-[680px] max-md:w-full">
          We work alongside leading data providers and regulated platforms to
          maintain reliable, measurable, and unbiased information. Our framework
          is built on precision and transparency, ensuring every decision begins
          with trust and clarity.
        </Text>
      </section>
    </section>
  );
};
