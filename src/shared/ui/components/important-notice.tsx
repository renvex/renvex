'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';

export const ImportantNotice = () => {
  const t = useTranslations('header.importantNotice');

  return (
    <div className="flex flex-col gap-0.5">
      <Text size="xs" className="max-md:text-xs">
        {t('title', { fallback: 'Important Notice:' })}
      </Text>
      <Text size="xs" className="max-md:text-xs">
        {t('description', {
          fallback:
            'Renvex operates independently and does not hold client funds or provide investment advice.',
        })}
      </Text>
    </div>
  );
};
