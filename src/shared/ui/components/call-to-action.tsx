'use client';

import { Activity, type ReactNode } from 'react';
import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const CallToAction = ({
  title,
  description,
  text,
  buttons,
}: {
  title: string;
  description: string;
  text?: ReactNode;
  buttons: ReactNode;
}) => {
  return (
    <div className="bg-white py-20">
      <section className="relative container flex h-[733px] flex-col gap-5 overflow-hidden max-lg:h-auto">
        <DashboardsImage />
        <Image
          className="z-0 object-cover max-lg:hidden"
          src="/images/home/banner.jpg"
          alt="banner"
          fill
          unoptimized
        />
        <Image
          className="absolute bottom-0 z-10 w-full max-lg:hidden"
          src="/images/home/faded-light.svg"
          alt="faded"
          width={100}
          height={560}
        />
        <section className="mt-auto flex flex-col gap-4">
          <Title
            as="h2"
            color="black"
            className="z-20 text-[80px] leading-[88px] max-lg:text-3xl max-lg:leading-[120%] max-md:text-[52px]"
          >
            {title}
          </Title>
          <Text
            size="lg"
            color="primary"
            className="z-20 opacity-90"
            weight={600}
          >
            {description}
          </Text>
          <Activity mode={text ? 'visible' : 'hidden'}>
            <Text color="black" className="z-20">
              {text}
            </Text>
          </Activity>
          <div className="z-20 flex items-center gap-4 max-md:flex-col max-md:items-start">
            {buttons}
          </div>
        </section>
      </section>
    </div>
  );
};

const DashboardsImage = () => (
  <section className="relative hidden h-[210px] max-lg:block">
    <Image
      className="z-0 object-cover"
      src="/images/home/banner.jpg"
      alt="banner"
      fill
      unoptimized
    />
    <Image
      className="absolute bottom-0 z-10 w-full"
      src="/images/home/faded-light.svg"
      alt="faded"
      width={100}
      height={356}
    />
  </section>
);
