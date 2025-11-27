'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getPartners = () => [
  {
    img: {
      url: '/images/partners/fxpro-b.svg',
      size: { width: 65, height: 65 },
    },
    text: 'Fxpro',
  },
  {
    img: {
      url: '/images/partners/xtb-b.svg',
      size: { width: 148, height: 57 },
    },
    text: 'Xtb',
  },
  {
    img: {
      url: '/images/partners/swiss-b.svg',
      size: { width: 201, height: 50 },
    },
    text: 'Swissquote',
  },
  {
    img: {
      url: '/images/partners/markets-global-b.svg',
      size: { width: 228, height: 29 },
    },
    text: 'IC Markets',
  },
  {
    img: {
      url: '/images/partners/ig-b.svg',
      size: { width: 47, height: 40 },
    },
    text: 'IG Group',
  },
  {
    img: {
      url: '/images/partners/pepper-b.svg',
      size: { width: 191, height: 37 },
    },
    text: 'Pepperstone',
  },
];

export const OurPartners = () => {
  const t = useTranslations('home.ourPartners');

  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({
      delay: 1500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const partners = getPartners();

  return (
    <div className="bg-white">
      <section className="container py-20" id="verified-brokers">
        <div className="flex flex-col gap-[55px]">
          <section className="flex flex-col items-center gap-4 text-center">
            <Chip variant="light">
              <Text
                size="lg"
                weight={500}
                color="blue"
                className="max-md:text-sm"
              >
                {t('subtitle', { fallback: 'Confidence built on evidence' })}
              </Text>
            </Chip>
            <Title
              as="h3"
              size="6xl"
              className="max-md:text-[52px]"
              color="black"
            >
              {t('title', { fallback: 'Our Partners' })}
            </Title>
            <Text className="text-black/90">
              {t('description', {
                fallback:
                  'Renvex collaborates with globally recognized trading platforms and verified data providers to ensure accuracy and transparency in every comparison.',
              })}
            </Text>
          </section>
          <section className="relative">
            <Image
              className="pointer-events-none absolute top-0 left-0 z-10 max-md:hidden"
              src="/images/home/p-faded-left-light.svg"
              alt="partners-bg"
              width={725}
              height={136}
              unoptimized
            />
            <section className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {partners.map(partner => (
                  <div
                    key={partner.text}
                    className="flex min-w-[220px] shrink-0 justify-center"
                  >
                    <PartnerCard {...partner} />
                  </div>
                ))}
              </div>
            </section>
            <Image
              className="pointer-events-none absolute top-0 right-0 z-10 max-md:hidden"
              src="/images/home/p-faded-right-light.svg"
              alt="partners-right-bg"
              width={725}
              height={136}
              unoptimized
            />
          </section>
        </div>
      </section>
    </div>
  );
};

const PartnerCard = ({
  img,
  text,
}: {
  img: { url: string; size: { width: number; height: number } };
  text: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-1.5 px-5 text-center">
      <section className="flex h-[85px] w-[300px] items-center justify-center rounded-[40px] bg-[#ADBFFF]">
        <Image
          src={img.url}
          alt={text}
          width={img.size.width}
          height={img.size.height}
          unoptimized
          style={{ filter: 'invert(0)' }}
        />
      </section>
      <Text size="lg" className="text-[#ADBFFF]">
        {text}
      </Text>
    </div>
  );
};
