'use client';

import type { TextareaHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

const textAreaVariants = cva(
  'px-6 py-1.5 text-sm h-[109px] resize-none rounded-[16px] text-white/60 placeholder:text-white/60 border transition duration-300 w-full ease-in-out focus:outline-none',
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

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export const TextArea = ({
  className,
  label,
  intent,
  variant,
  hint,
  ...args
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
} & TextAreaVariants) => {
  return (
    <label className="relative flex w-full flex-col gap-1">
      <Text size="xs" color={!hint ? 'white' : 'danger'} className="px-6">
        {hint ? hint : label}
      </Text>
      <textarea
        className={cn(textAreaVariants({ intent, variant }), className)}
        {...args}
      />
    </label>
  );
};
