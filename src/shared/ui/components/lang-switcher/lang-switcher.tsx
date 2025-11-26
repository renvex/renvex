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
  { code: 'en', name: 'English', icon: GbIcon },
  { code: 'es', name: 'Español', icon: EsIcon },
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
    () => languages.find(language => language.code === locale),
    [locale],
  );

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger className="outline-0">
        <span className="flex h-[44px] cursor-pointer items-center justify-center gap-1 rounded-2xl bg-white/50 px-6 text-center transition duration-300 ease-in-out hover:bg-white">
          {currentLanguage?.icon()}
          <ChevronDown />
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
              <Text color="black">EN</Text>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setOpen(false);
                switchLanguage('es');
              }}
            >
              <EsIcon />
              <Text color="black">ES</Text>
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

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M11.9467 5.45312H7.79341H4.05341C3.41341 5.45312 3.09341 6.22646 3.54674 6.67979L7.00008 10.1331C7.55341 10.6865 8.45341 10.6865 9.00674 10.1331L10.3201 8.81979L12.4601 6.67979C12.9067 6.22646 12.5867 5.45312 11.9467 5.45312Z"
      fill="black"
    />
  </svg>
);
