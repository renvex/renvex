import type { useTranslations } from 'next-intl';

import { v } from '@/shared/lib/forms';

export const getContactFormSchema = (t: ReturnType<typeof useTranslations>) =>
  v.object({
    firstName: v.pipe(
      v.string(),
      v.minLength(
        1,
        t('errors.thisFieldIsRequired', {
          fallback: 'This field is required.',
        }),
      ),
    ),
    lastName: v.pipe(
      v.string(),
      v.minLength(
        1,
        t('errors.thisFieldIsRequired', {
          fallback: 'This field is required.',
        }),
      ),
    ),
    email: v.pipe(
      v.string(),
      v.email(
        t('errors.validEmail', {
          fallback: 'Please enter a valid email address.',
        }),
      ),
    ),
    phone: v.pipe(
      v.string(),
      v.minLength(
        1,
        t('errors.thisFieldIsRequired', {
          fallback: 'This field is required.',
        }),
      ),
    ),
    message: v.pipe(v.string()),
  });
