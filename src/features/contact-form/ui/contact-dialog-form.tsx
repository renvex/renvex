'use client';

import { useState } from 'react';

import { ContactForm } from './contact-form';
import { ThankYou } from './thank-you';

export const ContactDialogForm = () => {
  const [isSuccess, setIsSuccess] = useState(true);

  return isSuccess ? (
    <ThankYou />
  ) : (
    <ContactForm
      onSuccess={() => setIsSuccess(true)}
      vertical
      showPrivacyNote
    />
  );
};
