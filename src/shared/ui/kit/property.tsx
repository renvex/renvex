'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';

export const Property = ({
  children,
  variant = 'dark',
}: {
  children: ReactNode;
  variant?: 'dark' | 'light';
}) => (
  <span
    className={cn(
      'flex w-[400px] items-center justify-center gap-2 rounded-xl px-4 py-2 max-md:w-full',
      variant === 'dark' && 'bg-[rgba(242,242,242,0.08)]',
      variant === 'light' && 'bg-black/10',
    )}
  >
    {children}
  </span>
);
