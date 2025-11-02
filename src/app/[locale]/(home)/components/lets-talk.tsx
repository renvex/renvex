'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ContactForm } from '@/features/contact-form/ui/contact-form';
import { ThankYou } from '@/features/contact-form/ui/thank-you';

import { useDialogStore } from '@/shared/ui/kit/dialog';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const LetsTalk = () => {
  const { registerContent, setIsOpen } = useDialogStore();

  const onSuccessForm = () => {
    registerContent({
      content: <ThankYou />,
    });
    setIsOpen(true);
  };

  return (
    <section className="container flex gap-10 py-20 max-lg:flex-col">
      <Banner />
      <section className="w-1/2 max-lg:w-full">
        <ContactForm onSuccess={onSuccessForm} />
      </section>
    </section>
  );
};

const Banner = () => {
  const t = useTranslations('home.letsTalk');

  return (
    <section className="relative flex w-1/2 flex-col gap-4 max-lg:w-full">
      <Title
        weight={600}
        className="z-10 text-[120px] leading-[100%] max-md:text-[60px]"
      >
        {t('title', { fallback: "Let's Talk" })}
      </Title>
      <Text size="lg" color="primary" weight={600} className="z-10">
        {t('description', {
          fallback:
            'Our experts understand how markets move, how platforms perform, and how traders decide.',
        })}
      </Text>
      <Text color="grey" className="z-10">
        {t('description2', {
          fallback:
            'From broker fit to strategy calibration and tooling, we will help you move with precision.',
        })}
      </Text>
      <Image
        className="max-lg:hidden"
        src="/images/home/lets-bg.svg"
        alt="lets-bg"
        fill
        unoptimized
      />
    </section>
  );
};
