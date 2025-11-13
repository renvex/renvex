'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import st from './chip.module.css';

export const Chip = ({
  children,
  variant = 'light',
}: {
  children: ReactNode;
  variant?: 'dark' | 'light';
}) => (
  <span
    className={cn(
      'flex h-[56px] max-w-full items-center justify-center rounded-[48px] px-6 max-md:h-auto max-md:py-4 md:w-max',
      variant === 'dark' &&
        'bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%),rgba(255,255,255,0.04)] shadow-[0_8px_40px_-20px_rgba(255,255,255,0.2),inset_1px_1px_0_0_rgba(255,255,255,0.08),inset_0_0_0_1px_rgba(255,255,255,0.06)]',
      variant === 'light' && st.light,
    )}
  >
    {children}
  </span>
);
