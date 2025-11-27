'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

const textFieldVariants = cva(
  'px-6 h-[40px] flex justify-center items-center text-sm rounded-[16px] border transition duration-300 w-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary:
          'bg-[#141414] text-white/60 placeholder:text-white/60 border-[#141414]',
        secondary:
          'bg-[#F6F6F6] border-[#F6F6F6] text-black/50 placeholder:text-black/60',
      },
      intent: {
        primary: '',
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
      <Text
        size="xs"
        color={hint ? 'danger' : variant === 'secondary' ? 'black50' : 'white'}
        className="px-6"
      >
        {hint ? hint : label}
      </Text>
      <input
        className={cn(textFieldVariants({ intent, variant }), className)}
        {...args}
      />
    </label>
  );
};
