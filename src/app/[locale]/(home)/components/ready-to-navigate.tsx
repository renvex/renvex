'use client';

import { useTranslations } from 'next-intl';

import { useContactDialog } from '@/features/contact-form/model/use-contact-dialog';

import { Link } from '@/i18n/navigation';

import { CallToAction } from '@/shared/ui/components/call-to-action';
import { PhoneIcon } from '@/shared/ui/icons/phone';
import { SearchIcon } from '@/shared/ui/icons/search';
import { Button } from '@/shared/ui/kit/button';

export const ReadyToNavigate = () => {
  const t = useTranslations('home.readyToNavigate');

  const { open } = useContactDialog();

  return (
    <CallToAction
      title={t('title', {
        fallback: 'It has never been so easy to own your financial future.',
      })}
      description={t('description', {
        fallback: 'Your path to informed trading starts here.',
      })}
      buttons={
        <>
          <Button className="z-20" onClick={open}>
            <PhoneIcon />
            {t('buttons.0', { fallback: 'Request a Call' })}
          </Button>
          <Link href="#verified-brokers">
            <Button className="z-20">
              <SearchIcon />
              {t('buttons.1', { fallback: 'Explore Verified Brokers' })}
            </Button>
          </Link>
        </>
      }
    />
  );
};
