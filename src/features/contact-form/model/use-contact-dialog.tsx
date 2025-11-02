'use client';

import { useDialogStore } from '@/shared/ui/kit/dialog';

import { ContactDialogForm } from '../ui/contact-dialog-form';

export const useContactDialog = () => {
  const { setIsOpen, registerContent } = useDialogStore();

  const open = () => {
    setIsOpen(true);
    registerContent({
      content: <ContactDialogForm />,
    });
  };

  const close = () => {
    setIsOpen(false);
  };

  return { open, close };
};
