'use client';

import Image from 'next/image';

import { PhoneIcon } from '@/shared/ui/icons/phone';
import { SearchIcon } from '@/shared/ui/icons/search';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ReadyToNavigate = () => {
  return (
    <section className="relative container flex h-[733px] flex-col gap-5 overflow-hidden py-20 max-lg:h-auto">
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
        src="/images/home/faded.svg"
        alt="faded"
        width={100}
        height={560}
      />
      <section className="mt-auto flex flex-col gap-4">
        <Title
          as="h2"
          className="z-20 text-[80px] leading-[88px] max-lg:text-3xl max-lg:leading-[120%]"
        >
          Ready to Navigate the Markets with Confidence?
        </Title>
        <Text size="lg" color="primary" weight={600} className="z-20">
          Ready to Navigate the Markets with Confidence?
        </Text>
        <div className="z-20 flex items-center gap-4 max-md:flex-col max-md:items-start">
          <Button variant="secondary" className="z-20">
            <PhoneIcon />
            Request a Call
          </Button>
          <Button variant="secondary" className="z-20">
            <SearchIcon />
            Explore Verified Brokers
          </Button>
        </div>
      </section>
    </section>
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
      src="/images/home/faded.svg"
      alt="faded"
      width={100}
      height={356}
    />
  </section>
);
