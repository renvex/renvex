'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

import st from './button.module.css';

const btnVariants = cva('flex cursor-pointer items-center gap-2.5', {
  variants: {
    variant: {
      primary: 'text-white font-bold',
      secondary: 'text-white font-bold',
    },
    size: {
      sm: '',
      md: 'h-[50px] pl-5 pr-6 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = VariantProps<typeof btnVariants>;

export const Button = ({
  children,
  className,
  onClick,
  disabled,
  size,
  variant = 'primary',
  fullWidth = false,
  type = 'button',
  as = 'button',
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  as?: 'button' | 'span';
} & ButtonVariants) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        btnVariants({ variant, size }),
        variant === 'secondary' && st.secondary,
        variant === 'primary' && st.primary,
        fullWidth ? 'w-full justify-center' : 'w-max',
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
};
