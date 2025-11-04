'use client';

import { useTranslations } from 'next-intl';

import { useContactDialog } from '@/features/contact-form/model/use-contact-dialog';

import { Link } from '@/i18n/navigation';

import { MessageIcon } from '../icons/message';
import { Button } from '../kit/button';
import { CallToAction } from './call-to-action';

export const LetsTalkCta = () => {
  const t = useTranslations('letsTalkCta');

  return (
    <CallToAction
      title={t('title', { fallback: 'Let’s Talk' })}
      description={t('description', {
        fallback: 'Connect directly with our team.',
      })}
      text={
        <>
          {t('text.0', {
            fallback:
              'Our specialists understand how markets move and how platforms perform under real conditions.',
          })}
          <br />
          {t('text.1', {
            fallback: 'We’ll help you move forward with precision.',
          })}
        </>
      }
      buttons={
        <>
          <Link href="/contact-us">
            <Button variant="secondary" className="z-20">
              <MessageIcon />
              {t('buttons.0', { fallback: 'Send a Message' })}
            </Button>
          </Link>
        </>
      }
    />
  );
};
