/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Heading } from '@/shared/ui/components/heading';

import st from './quantify.module.css';

export const Quantify = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const t = useTranslations('home.quantify');
  const locale = useLocale();

  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://fxverify.com/Content/remote/remote-widgets.js"]',
      )
    ) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://fxverify.com/Content/remote/remote-widgets.js';
      script.onload = () => {
        if (typeof window !== 'undefined' && (window as any).RemoteCalc) {
          (window as any).RemoteCalc({
            Url: 'https://fxverify.com',
            TopPaneStyle:
              'YmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDQzKTsgY29sb3I6IHdoaXRlOyBib3JkZXI6IG5vbmU7',
            BottomPaneStyle:
              'YmFja2dyb3VuZDogcmdiYSgyNCwgMjUsIDI0KTsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICM5MTk0YTE7',
            ButtonStyle:
              'YmFja2dyb3VuZDogcmdiYSg1NSwgNTQsIDU0KTsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==',
            TitleStyle:
              'dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==',
            TextboxStyle:
              'YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICM5MTk0YTE7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7',
            ContainerWidth: '800',
            HighlightColor: 'rgba(0,0,0,1.0)',
            IsDisplayTitle: false,
            Lang: locale,
            IsShowEmbedButton: true,
            CompactType: 'large',
            DefaultBalance: '20000',
            DefaultPeriod: '12',
            DefaultGain: '5',
            Calculator: 'compounding-calculator',
            ContainerId: 'compounding-calculator-605497',
          });
        }
      };
      document.body.appendChild(script);
    } else {
      if (typeof window !== 'undefined' && (window as any).RemoteCalc) {
        (window as any).RemoteCalc({
          Url: 'https://fxverify.com',
          TopPaneStyle:
            'YmFja2dyb3VuZDogcmdiYSg0MiwgNDMsIDQzKTsgY29sb3I6IHdoaXRlOyBib3JkZXI6IG5vbmU7',
          BottomPaneStyle:
            'YmFja2dyb3VuZDogcmdiYSgyNCwgMjUsIDI0KTsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICM5MTk0YTE7',
          ButtonStyle:
            'YmFja2dyb3VuZDogcmdiYSg1NSwgNTQsIDU0KTsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4Ow==',
          TitleStyle:
            'dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==',
          TextboxStyle:
            'YmFja2dyb3VuZDogIzE1MTgxZDsgY29sb3I6ICM5MTk0YTE7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7',
          ContainerWidth: '800',
          HighlightColor: 'rgba(0,0,0,1.0)',
          IsDisplayTitle: false,
          IsShowEmbedButton: true,
          Lang: locale,
          CompactType: 'large',
          DefaultBalance: '20000',
          DefaultPeriod: '12',
          DefaultGain: '5',
          Calculator: 'compounding-calculator',
          ContainerId: 'compounding-calculator-605497',
        });
      }
    }
  }, [locale]);

  return (
    <section className="container flex flex-col gap-10 py-20">
      <Heading
        chip={t('chip', { fallback: 'Planning starts with clarity' })}
        title={t('title', { fallback: 'Quantify What’s Ahead' })}
        description=<>
          {t('description.0', { fallback: 'The' })}{' '}
          <strong>
            {t('description.1', {
              fallback: 'Renvex Compound Interest Calculator',
            })}
          </strong>{' '}
          {t('description.2', {
            fallback:
              'helps you model capital performance under real market conditions — so every decision you make is grounded in measurable data, not assumptions.',
          })}
        </>
      />
      <article
        className={cn(
          st.bg,
          'mx-auto w-full max-w-[800px] px-5 py-8 max-md:p-2.5',
        )}
      >
        <div
          id="compounding-calculator-605497"
          ref={containerRef}
          className="overflow-hidden rounded-[20px]"
        />
      </article>
    </section>
  );
};
