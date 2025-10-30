'use client';

import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Reviews = () => {
  return (
    <section className="container py-20">
      <div className="flex flex-col gap-10">
        <section className="flex flex-col items-center gap-4 text-center">
          <Chip>
            <Text size="lg" weight={500}>
              Verified reputation through independent insight
            </Text>
          </Chip>
          <Title as="h3" size="6xl">
            Partners Rated by <span className="text-blue-70">Traders</span>
          </Title>
          <Text color="grey">
            Our broker network is validated not only through Renvex analytics
            but through transparent public feedback.
            <br /> See how our verified partners perform on Trustpilot — rated
            by traders who use them every day.
          </Text>
        </section>
      </div>
    </section>
  );
};
