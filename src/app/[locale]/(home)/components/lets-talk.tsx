'use client';

import Image from 'next/image';

import { ContactForm } from '@/features/contact-form/ui/contact-form';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const LetsTalk = () => {
  return (
    <section className="container flex gap-10 py-20 max-lg:flex-col">
      <Banner />
      <section className="w-1/2 max-lg:w-full">
        <ContactForm />
      </section>
    </section>
  );
};

const Banner = () => {
  return (
    <section className="relative flex w-1/2 flex-col gap-4 max-lg:w-full">
      <Title
        weight={600}
        className="z-10 text-[120px] leading-[100%] max-md:text-[60px]"
      >
        Let&apos;s Talk
      </Title>
      <Text size="lg" color="primary" weight={600} className="z-10">
        Our experts understand how markets move, how platforms perform, and how
        traders decide.
      </Text>
      <Text color="grey" className="z-10">
        From broker fit to strategy calibration and tooling, we will help you
        move with precision.
      </Text>
      <Image
        className="max-lg:hidden"
        src="/images/home/lets-bg.svg"
        alt="lets-bg"
        fill
        unoptimized
      />
    </section>
  );
};
