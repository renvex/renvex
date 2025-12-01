'use client';

import type { ReactNode } from 'react';

import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Heading = ({
  chip,
  description,
  title,
}: {
  chip: string;
  title: ReactNode;
  description: ReactNode;
}) => (
  <section className="flex flex-col items-center gap-4 text-center">
    <Chip variant="light">
      <Text size="lg" weight={500} color="primary" className="max-md:text-sm">
        {chip}
      </Text>
    </Chip>
    <Title as="h3" size="6xl">
      {title}
    </Title>
    <Text
      size="base"
      className="w-[700px] text-center text-black/90 max-md:w-full"
    >
      {description}
    </Text>
  </section>
);
