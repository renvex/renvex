import { v } from '@/shared/lib/forms';

export const getContactFormSchema = () =>
  v.object({
    firstName: v.pipe(v.string(), v.minLength(1, 'This field is required.')),
    lastName: v.pipe(v.string(), v.minLength(1, 'This field is required.')),
    email: v.pipe(v.string(), v.email('Please enter a valid email address.')),
    phone: v.pipe(v.string(), v.minLength(1, 'This field is required.')),
    message: v.pipe(v.string()),
  });
