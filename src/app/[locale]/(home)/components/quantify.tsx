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
    const scriptSrc = 'https://fxverify.com/Content/remote/remote-widgets.js';

    const initWidget = () => {
      if (typeof window !== 'undefined' && (window as any).RemoteCalc) {
        (window as any).RemoteCalc({
          Url: 'https://fxverify.com',
          TopPaneStyle:
            'YmFja2dyb3VuZDogIzIxNjdhNjsgY29sb3I6IHdoaXRlOyBib3JkZXI6IG5vbmU7',
          BottomPaneStyle:
            'YmFja2dyb3VuZDogIzBkNDI3YTsgYm9yZGVyOiBzb2xpZCAwcHggIzJhMmUzOTsgY29sb3I6ICNkYWVmZmM7',
          ButtonStyle:
            'YmFja2dyb3VuZDogIzI2NzFiMTsgY29sb3I6ICNmMmZjZmY7IGJvcmRlci1yYWRpdXM6IDIwcHg7',
          TitleStyle:
            'dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==',
          TextboxStyle:
            'YmFja2dyb3VuZDogIzBkNDI3YTsgY29sb3I6ICNiNmM3ZDM7IGJvcmRlcjogc29saWQgMHB4ICM5MTk0YTE7',
          ContainerWidth: '800',
          HighlightColor: 'rgba(0,0,0,1.0)',
          IsDisplayTitle: false,
          IsShowEmbedButton: false,
          CompactType: 'large',
          DefaultBalance: '20000',
          DefaultPeriod: '12',
          DefaultGain: '7',
          Calculator: 'compounding-calculator',
          ContainerId: 'compounding-calculator-409547',
        });
      }
    };

    // load script if not already loaded
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptSrc;
      script.onload = initWidget;
      document.body.appendChild(script);
    } else {
      initWidget();
    }
  }, [locale]);

  return (
    <div className="bg-white">
      <section className="container flex flex-col gap-10 py-20">
        <Heading
          chip={t('chip', { fallback: 'Planning starts with clarity' })}
          title={
            <span className="text-black">
              {t('title', { fallback: 'Quantify What’s Ahead' })}
            </span>
          }
          description={
            <span className="text-black/90">
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
            </span>
          }
        />
        <article
          className={cn(
            st.bg,
            'mx-auto w-full max-w-[800px] rounded-xl bg-white p-4 max-md:p-2.5',
          )}
        >
          <div
            id="compounding-calculator-409547"
            ref={containerRef}
            className="overflow-hidden rounded-[20px]"
          />
        </article>
      </section>
    </div>
  );
};
