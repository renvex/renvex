'use client';

import { type ReactNode } from 'react';

import { Text } from '@/shared/ui/kit/text';

export const PolicyList = ({ values }: { values: ReactNode[] }) => {
  return (
    <ul className="list-disc pl-4">
      {values.map((value, i) => (
        <ListItem key={i}>{value}</ListItem>
      ))}
    </ul>
  );
};

const ListItem = ({ children }: { children: ReactNode }) => (
  <li>
    <Text size="base">{children}</Text>
  </li>
);
