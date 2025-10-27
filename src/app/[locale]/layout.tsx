import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';

import './globals.css';

const nacelle = localFont({
  src: [
    {
      path: '../../../public/fonts/nacelle/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/nacelle/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/nacelle/semi-bold.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/nacelle/semi-bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/nacelle/bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale ?? 'es'}>
      <body className={cn(nacelle.className, 'antialiased')}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
