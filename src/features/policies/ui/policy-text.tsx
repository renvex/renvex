'use client';

import type { PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

export const PolicyText = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => (
  <Text size="base" className={cn(className, 'max-md:text-sm')}>
    {children}
  </Text>
);
