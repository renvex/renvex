'use client';

import type { PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const textVariants = cva('transition duration-300 ease-in-out', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    },
    color: {
      white: 'text-white',
      primary: 'text-blue-46',
      grey: 'text-grey-47',
      danger: 'text-danger',
      black: 'text-black',
      blue: 'text-blue-46',
      black50: 'text-black/50',
    },
    weight: {
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'white',
    weight: 400,
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

export const Text = ({
  children,
  className,
  color,
  size,
  weight,
  capitalize = false,
  uppercase = false,
  underline = false,
  lineThrough = false,
}: PropsWithChildren<
  TextVariants & {
    className?: string;
    capitalize?: boolean;
    uppercase?: boolean;
    underline?: boolean;
    lineThrough?: boolean;
  }
>) => (
  <p
    className={cn(
      textVariants({ color, size, weight }),
      className,
      capitalize && 'capitalize',
      uppercase && 'uppercase',
      underline &&
        'decoration-skip-ink-none underline-position-from-font underline decoration-solid underline-offset-auto',
      lineThrough && 'line-through',
    )}
  >
    {children}
  </p>
);
