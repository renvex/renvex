'use client';

import type { ElementType, JSX, PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const titleVariants = cva('transition duration-300 ease-in-out', {
  variants: {
    size: {
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
    },
    color: {
      white: 'text-white',
      primary: 'text-blue-46',
      grey: 'text-grey-47',
      white50: 'text-white/50',
      black: 'text-black',
    },
    weight: {
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
  },
  defaultVariants: {
    size: '7xl',
    color: 'white',
    weight: 600,
  },
});

export type TitleVariants = VariantProps<typeof titleVariants>;

export const Title = ({
  children,
  className,
  color,
  weight,
  size,
  as = 'h2',
  capitalize = false,
  uppercase = false,
  style,
}: PropsWithChildren<
  {
    className?: string;
    as?: ElementType;
    capitalize?: boolean;
    uppercase?: boolean;
    style?: React.CSSProperties;
  } & TitleVariants
>) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        titleVariants({ color, weight, size }),
        capitalize && 'capitalize',
        uppercase && 'uppercase',
        className,
      )}
      style={style}
    >
      {children}
    </Tag>
  );
};
