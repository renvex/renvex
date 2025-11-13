'use client';

import type { ReactNode } from 'react';

import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Market = ({
  children,
  title,
  text,
  chip,
}: {
  children: ReactNode;
  title: string;
  text: ReactNode;
  chip: string;
}) => {
  return (
    <section className="container flex flex-col gap-10 py-20">
      <section className="flex flex-col items-center gap-4 text-center">
        <Chip>
          <Text size="lg" color="primary">
            {chip}
          </Text>
        </Chip>
        <Title as="h3" size="6xl">
          {title}
        </Title>
        <Text color="grey" className="w-[700px] text-center max-md:w-full">
          {text}
        </Text>
      </section>
      <div className="h-[600px] w-full rounded-[12px] bg-[rgba(242,242,242,0.08)] p-10 max-md:p-2">
        {children}
      </div>
    </section>
  );
};
