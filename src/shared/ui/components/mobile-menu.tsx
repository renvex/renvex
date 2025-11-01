'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Close,
  Content,
  Description,
  Portal,
  Root,
  Title as DialogTitle,
  Trigger,
} from '@radix-ui/react-dialog';

import { Link as NavLink } from '@/i18n/navigation';

import { cn } from '@/shared/lib/utils/cn';
import { CategoryIcon } from '@/shared/ui/icons/category';
import { CloseIcon } from '@/shared/ui/icons/close';
import { Title } from '@/shared/ui/kit/title';

const getNavigation = (t: ReturnType<typeof useTranslations>) => [
  { label: t('home', { fallback: 'Home' }), href: '/' },
  { label: t('heatmaps', { fallback: 'Heatmaps' }), href: '/heatmaps' },
  { label: t('about', { fallback: 'About' }), href: '/about' },
  { label: t('contact', { fallback: 'Contact' }), href: '/contact' },
];

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const t = useTranslations('header.navigation');

  const navigation = getNavigation(t);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button className="bg-grey-8 flex h-10 items-center justify-center rounded-2xl px-6">
          <CategoryIcon />
        </button>
      </Trigger>
      <Portal>
        <Content className="fixed top-[45%] left-1/2 z-995 h-[410px] w-[92%] max-w-sm -translate-x-1/2 -translate-y-1/2 animate-[menuOpen_0.3s_ease-out_forwards] overflow-y-auto rounded-2xl bg-[#141414] px-6 py-4">
          <DialogTitle />
          <Description asChild>
            <section className="flex h-full flex-col gap-10">
              <header className="flex items-center justify-between">
                <Title as="h5" size="2xl">
                  Renvex
                </Title>
                <Close>
                  <CloseIcon />
                </Close>
              </header>
              <section className="flex flex-col gap-4">
                {navigation.map(item => (
                  <NavigationItem
                    key={item.href}
                    href={item.href}
                    active={pathname === item.href}
                  >
                    {item.label}
                  </NavigationItem>
                ))}
              </section>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const NavigationItem = ({
  children,
  href,
  active = false,
}: {
  children: ReactNode;
  href: string;
  active?: boolean;
}) => (
  <NavLink href={href}>
    <Title
      as="h6"
      size="2xl"
      className={cn(active && 'text-blue-70', 'py-1.5')}
    >
      {children}
    </Title>
  </NavLink>
);
