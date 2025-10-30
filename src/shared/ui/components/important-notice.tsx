'use client';

import { Text } from '@/shared/ui/kit/text';

export const ImportantNotice = () => {
  return (
    <div className="flex flex-col gap-0.5">
      <Text size="xs" className="max-md:text-xs">
        Important Notice:
      </Text>
      <Text size="xs" className="max-md:text-xs">
        Renvex operates independently and does not hold client funds or provide
        investment advice.
      </Text>
    </div>
  );
};
