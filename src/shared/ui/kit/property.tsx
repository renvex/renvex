'use client';

import type { ReactNode } from 'react';

export const Property = ({ children }: { children: ReactNode }) => (
  <span className="flex w-[400px] items-center justify-center gap-2 rounded-xl bg-[rgba(242,242,242,0.08)] px-4 py-2 max-md:w-full">
    {children}
  </span>
);
