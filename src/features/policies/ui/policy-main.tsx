'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import st from './policy-main.module.css';

export const PolicyMain = ({ children }: { children: ReactNode }) => (
  <main className="container pb-20">
    <article
      className={cn(
        st.bg,
        'flex flex-col gap-10 rounded-[48px] py-20 pr-[300px] pl-20 max-lg:px-10 max-md:rounded-lg max-md:px-4 max-md:py-8',
      )}
    >
      {children}
    </article>
  </main>
);
