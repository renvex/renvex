'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Heading } from '@/shared/ui/components/heading';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getList = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('list.0.title', { fallback: 'No Fund Handling' }),
    description: t('list.0.description', {
      fallback:
        'Renvex never holds client funds or intermediates transactions.',
    }),
  },
  {
    title: t('list.1.title', { fallback: 'No Execution' }),
    description: t('list.1.description', {
      fallback: 'We do not execute trades or influence trading activity.',
    }),
  },
  {
    title: t('list.2.title', { fallback: 'No Advisory Services' }),
    description: t('list.2.description', {
      fallback: 'Our insights are analytical — never financial advice.',
    }),
  },
  {
    title: t('list.3.title', { fallback: 'Independent Analysis' }),
    description: t('list.3.description', {
      fallback:
        'All evaluations are based on data, compliance, and real market performance.',
    }),
  },
  {
    title: t('list.4.title', { fallback: 'Decision Support Tools' }),
    description: t('list.4.description', {
      fallback:
        'Our systems translate raw information into measurable, actionable insight.',
    }),
  },
  {
    title: t('list.5.title', { fallback: 'Transparency at Core' }),
    description: t('list.5.description', {
      fallback:
        'Every comparison and recommendation is structured, traceable, and free from bias.',
    }),
  },
];

export const OurRole = () => {
  const t = useTranslations('about.ourRole');

  const list = getList(t);

  return (
    <section className="container flex flex-col gap-[55px] py-20">
      <Heading
        chip={t('chip', { fallback: 'Independent. Analytical. Unbiased.' })}
        title={t('title', { fallback: 'Our Role' })}
        description={
          <>
            {t('description.0', {
              fallback:
                'Renvex does not handle funds, execute trades, or provide investment advice.',
            })}
            <br />
            {t('description.1', {
              fallback:
                'Our focus is on delivering independent intelligence — tools and evaluations that give traders a verified foundation for every decision.',
            })}
          </>
        }
      />
      <section className="flex flex-col gap-10">
        <div className="relative h-[600px] w-full overflow-hidden rounded-[40px]">
          <Image
            className="z-0 scale-x-[-1] object-cover"
            src="/images/about/role.jpg"
            alt="role"
            fill
            unoptimized
          />
          <Image
            className="absolute bottom-0 z-10 h-[560px] w-full max-md:object-cover"
            src="/images/faded-light-b.svg"
            alt="faded"
            width={100}
            height={560}
          />
        </div>
        <section className="flex flex-col gap-5">
          <ul className="flex gap-10 max-[1040px]:flex-wrap max-md:flex-col">
            {list.map(item => (
              <ListItem key={item.title} {...item} />
            ))}
          </ul>
          <Divider />
          <Text
            size="2xl"
            color="primary"
            className="mx-auto w-[700px] text-center max-md:w-full"
          >
            {t('appendix.0', { fallback: 'We operate at the intersection of' })}{' '}
            <span className="font-bold">
              {t('appendix.1', { fallback: 'data' })}
            </span>{' '}
            {t('appendix.2', { fallback: 'and' })}{' '}
            <span className="font-bold">
              {t('appendix.3', { fallback: 'decision-making' })}
            </span>
            ,{' '}
            {t('appendix.4', {
              fallback:
                'ensuring transparency in an industry that demands it most.',
            })}
          </Text>
        </section>
      </section>
    </section>
  );
};

const ListItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <li className="flex flex-1 flex-col gap-4 py-5">
    <Title as="h6" size="2xl" weight={600}>
      {title}
    </Title>
    <Text size="base" color="black">
      {description}
    </Text>
  </li>
);
