'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { cn } from '@/shared/lib/utils/cn';

import { ChevronDownIcon } from '../icons/chevron-down';
import { Text } from './text';

export const Dropdown = ({
  label,
  children,
  contentClassName,
  titleClassName,
}: {
  label: ReactNode;
  children:
    | ReactNode
    | ((props: { setOpen: (open: boolean) => void }) => ReactNode);
  contentClassName?: string;
  titleClassName?: string;
}) => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [pathname]);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger className="outline-0">
        <span className="flex cursor-pointer items-center gap-1 py-1.5 outline-0">
          <Text weight={600} color="black" className={titleClassName}>
            {label}
          </Text>
          <ChevronDownIcon />
        </span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            'z-999 flex w-[172px] flex-col rounded-xl bg-white p-4 max-md:shadow-sm',
            contentClassName,
          )}
          sideOffset={10}
          alignOffset={100}
        >
          <section className="flex flex-col gap-1">
            {typeof children === 'function' ? children({ setOpen }) : children}
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
        'flex cursor-pointer justify-center rounded-2xl p-4 outline-0 transition duration-300 ease-in-out hover:bg-white/10',
        className,
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
};
