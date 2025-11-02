'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

export const ThankYou = () => {
  const t = useTranslations('thankYou');

  return (
    <section className="relative flex h-[350px] flex-col justify-center gap-10 overflow-hidden p-10">
      <Title as="h5" size="3xl" className="max-md:text-2xl">
        {t('title.0', { fallback: 'Thank you for reaching out to Renvex.' })}{' '}
        <br />
        {t('title.1', { fallback: 'Our team will contact you shortly.' })}
      </Title>
      <Link href="/">
        <Button variant="primary">
          {t('button', { fallback: 'Return to home page' })}
        </Button>
      </Link>
      <Image
        className="absolute -right-10 bottom-0 h-[320px] w-[626px] max-md:hidden"
        src="/images/success.svg"
        alt="success"
        width={606}
        height={230}
      />
    </section>
  );
};
