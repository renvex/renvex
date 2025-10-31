'use client';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './support.module.css';

export const Support = () => {
  return (
    <section
      className={cn('relative container flex flex-col gap-10 py-20', st.bg)}
    >
      <div className="flex gap-10 max-md:flex-col max-md:gap-5">
        <InfoCard label="Monday to Friday:" value="9:00 AM – 6:00 PM (GMT)" />
        <InfoCard label="Weekend" value="Support available via email" />
      </div>
      <div className="flex flex-col gap-5 max-md:flex-col">
        <Card
          title="Email Support"
          subtitle="Need assistance or have a question?"
          description="Our support team replies within 24 hours with clear, actionable guidance."
        />
        <Card
          title="Phone Consultations"
          subtitle="Prefer a personal conversation?"
          description="Speak directly with a Renvex specialist — no forms, no waiting, just informed answers."
        />
      </div>
    </section>
  );
};

const InfoCard = ({ label, value }: { label: string; value: string }) => (
  <article className="flex w-[350px] flex-col gap-2">
    <Text size="lg" color="primary">
      {label}
    </Text>
    <Title as="h6" size="3xl">
      {value}
    </Title>
  </article>
);

const Card = ({
  description,
  subtitle,
  title,
}: {
  title: string;
  subtitle: string;
  description: string;
}) => (
  <article
    className={cn(
      'flex w-max flex-col gap-5 rounded-[48px] px-20 py-10 max-lg:w-full max-md:px-5',
      st.cardBg,
    )}
  >
    <Title
      as="h3"
      size="6xl"
      weight={600}
      className="w-[400px] max-lg:w-full max-md:text-[40px]"
    >
      {title}
    </Title>
    <Text size="2xl" color="primary" weight={400} className="max-md:text-lg">
      {subtitle}
    </Text>
    <Text
      size="2xl"
      weight={400}
      className="w-[716px] max-lg:w-full max-md:text-base"
    >
      {description}
    </Text>
  </article>
);
