'use client';

import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OurPartners = () => {
  return (
    <section className="container py-20">
      <div className="flex flex-col gap-[55px]">
        <section className="flex flex-col items-center gap-4 text-center">
          <Chip>
            <Text size="lg" weight={500}>
              Confidence built on evidence
            </Text>
          </Chip>
          <Title as="h3" size="6xl">
            Our Partners
          </Title>
          <Text color="grey">
            Renvex collaborates with globally recognized trading platforms and
            verified data providers to ensure accuracy and transparency in every
            comparison.
          </Text>
        </section>
      </div>
    </section>
  );
};
