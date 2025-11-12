'use client';

import type { TextareaHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

const textAreaVariants = cva(
  'px-6 py-1.5 text-sm h-[109px] resize-none rounded-[16px] border transition duration-300 w-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary:
          'bg-[#141414] text-white/60 placeholder:text-white/60 border-[#141414]',
        secondary:
          'bg-[#F6F6F6] border-[#F6F6F6] text-black/60 placeholder:text-black/60',
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

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export const TextArea = ({
  className,
  label,
  intent,
  variant,
  hint,
  layoutClassName,
  ...args
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
  layoutClassName?: string;
} & TextAreaVariants) => {
  return (
    <label
      className={cn('relative flex w-full flex-col gap-1', layoutClassName)}
    >
      <Text
        size="xs"
        color={hint ? 'danger' : variant === 'secondary' ? 'black50' : 'white'}
        className="px-6"
      >
        {hint ? hint : label}
      </Text>
      <textarea
        className={cn(textAreaVariants({ intent, variant }), className)}
        {...args}
      />
    </label>
  );
};
