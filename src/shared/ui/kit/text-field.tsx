'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

const textFieldVariants = cva(
  'px-6 h-[40px] flex justify-center items-center text-sm rounded-[16px] text-white/60 placeholder:text-white/60 border transition duration-300 w-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-[#141414]',
      },
      intent: {
        primary: 'border-[#141414]',
        danger: 'border-danger placeholder:text-danger text-danger',
      },
    },
    defaultVariants: {
      intent: 'primary',
      variant: 'primary',
    },
  },
);

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;

export const TextField = ({
  className,
  label,
  intent,
  variant,
  hint,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
} & TextFieldVariants) => {
  return (
    <label className="relative flex w-full flex-col gap-1">
      <Text size="xs" color={!hint ? 'white' : 'danger'} className="px-6">
        {hint ? hint : label}
      </Text>
      <input
        className={cn(textFieldVariants({ intent, variant }), className)}
        {...args}
      />
    </label>
  );
};
