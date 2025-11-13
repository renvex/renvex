'use client';

import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { cn } from '@/shared/lib/utils/cn';
import { EsIcon } from '@/shared/ui/icons/countries/es';
import { GbIcon } from '@/shared/ui/icons/countries/gb';
import { Text } from '@/shared/ui/kit/text';

import st from './lang-switcher.module.css';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
];

export const LangSwitcher = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [pathname]);

  const locale = useLocale();

  const switchLanguage = useCallback(
    (newLocale: string) => {
      if (newLocale === 'es') {
        router.replace(`${pathname.replace('/en', '')}`);
      } else {
        router.replace(`/${newLocale}${pathname}`);
      }
    },
    [router, pathname],
  );

  const currentLanguage = useMemo(
    () => languages.find(language => language.code === locale)?.name,
    [locale],
  );

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger className="outline-0">
        <span className="flex h-[32px] items-center justify-center rounded-2xl bg-white/10 px-6 text-center">
          <Text>{currentLanguage}</Text>
        </span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(st.bg, 'z-50 flex w-[123px] flex-col rounded-xl p-5')}
          sideOffset={10}
          alignOffset={100}
        >
          <section className="flex flex-col gap-1">
            <DropdownItem
              onClick={() => {
                setOpen(false);
                switchLanguage('en');
              }}
            >
              <GbIcon />
              <Text size="xs" color="black">
                EN
              </Text>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setOpen(false);
                switchLanguage('es');
              }}
            >
              <EsIcon />
              <Text size="xs" color="black">
                ES
              </Text>
            </DropdownItem>
          </section>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export const DropdownItem = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <DropdownMenu.Item
      onSelect={onClick}
      className={cn(
        'flex cursor-pointer items-center justify-center gap-2 rounded-3xl px-6 py-1.5 outline-0 transition duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.10)]',
        className,
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
};
