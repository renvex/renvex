'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getPartners = () => [
  { imgUrl: '/images/home/partner-1.png', text: 'Partner 1' },
  { imgUrl: '/images/home/partner-1.png', text: 'Partner 2' },
  { imgUrl: '/images/home/partner-1.png', text: 'Partner 3' },
  { imgUrl: '/images/home/partner-1.png', text: 'Partner 4' },
  { imgUrl: '/images/home/partner-1.png', text: 'Partner 5' },
  { imgUrl: '/images/home/partner-1.png', text: 'Partner 6' },
];

export const OurPartners = () => {
  const t = useTranslations('home.ourPartners');

  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const partners = getPartners();

  return (
  <section className="container py-20" id="verified-brokers">
      <div className="flex flex-col gap-[55px]">
        <section className="flex flex-col items-center gap-4 text-center">
          <Chip>
            <Text size="lg" weight={500}>
              {t('subtitle', { fallback: 'Confidence built on evidence' })}
            </Text>
          </Chip>
          <Title as="h3" size="6xl" className="max-md:text-[52px]">
            {t('title', { fallback: 'Our Partners' })}
          </Title>
          <Text color="grey">
            {t('description', {
              fallback:
                'Renvex collaborates with globally recognized trading platforms and verified data providers to ensure accuracy and transparency in every comparison.',
            })}
          </Text>
        </section>
        <section className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-10">
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
      </div>
    </section>
  );
};

const PartnerCard = ({ imgUrl, text }: { imgUrl: string; text: string }) => {
  return (
    <div className="flex flex-col items-center gap-1.5 px-1 text-center">
      <Image src={imgUrl} alt={text} width={220} height={80} unoptimized />
      <Text size="lg">{text}</Text>
    </div>
  );
};
