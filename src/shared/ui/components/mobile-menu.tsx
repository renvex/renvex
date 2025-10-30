'use client';

import { CategoryIcon } from '@/shared/ui/icons/category';

export const MobileMenu = () => {
  return (
    <section>
      <div className="bg-grey-8 flex h-10 items-center justify-center rounded-2xl px-6">
        <CategoryIcon />
      </div>
    </section>
  );
};
