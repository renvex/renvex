'use client';

import type { ReactNode } from 'react';

import { Title } from '@/shared/ui/kit/title';

export const PolicySection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="flex flex-col gap-4">
    <Title
      as="h3"
      className="text-[40px] max-md:text-[32px] max-md:font-normal"
      weight={600}
    >
      {title}
    </Title>
    <div className="flex flex-col">{children}</div>
  </section>
);
