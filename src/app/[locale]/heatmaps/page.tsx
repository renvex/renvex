import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { CryptoHeatmap } from '@/shared/ui/components/crypto-heatmap';
import { ForexHeatmap } from '@/shared/ui/components/forex-heatmap';
import { LetsTalkCta } from '@/shared/ui/components/lets-talk-cta';
import { MarketHeatmap } from '@/shared/ui/components/market-heatmap';
import { StockHeatmap } from '@/shared/ui/components/stock-heatmap';

import { Hero, Market } from './components';

export const metadata: Metadata = {
  title:
    'Renvex Market Heatmaps | Live Data Visualization for Forex, Stocks & Crypto',
  description:
    'Access live trading heatmaps for forex, equities, and cryptocurrencies. Renvex Heatmaps turn market volatility into visual clarity — helping traders analyze liquidity, performance, and trends in real time.',
  openGraph: {
    title:
      'Renvex Market Heatmaps | Live Data Visualization for Forex, Stocks & Crypto',
    description:
      'Access live trading heatmaps for forex, equities, and cryptocurrencies. Renvex Heatmaps turn market volatility into visual clarity — helping traders analyze liquidity, performance, and trends in real time.',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Renvex Market Heatmaps | Live Data Visualization for Forex, Stocks & Crypto',
    description:
      'Access live trading heatmaps for forex, equities, and cryptocurrencies. Renvex Heatmaps turn market volatility into visual clarity — helping traders analyze liquidity, performance, and trends in real time.',
  },
};

export default async function Heatmaps() {
  const t = await getTranslations('heatmaps.markets');

  return (
    <main>
      <Hero />
      <Market
        chip={t('0.chip', { fallback: 'Currency Flow, Mapped in Real Time' })}
        title={t('0.title', { fallback: 'Forex Overview Map' })}
        text={
          <>
            {t('0.text.0', {
              fallback: 'Watch currency strength evolve tick by tick.',
            })}
            <br />
            {t('0.text.1', {
              fallback:
                'Analyze momentum between major pairs, identify relative performance, and detect volatility clusters instantly.',
            })}
            <br />
            {t('0.text.2', {
              fallback:
                'A live visual matrix designed to turn macro movements into actionable signals.',
            })}
          </>
        }
      >
        <ForexHeatmap />
      </Market>
      <Market
        chip={t('1.chip', {
          fallback: 'See Market Leaders and Laggards Instantly',
        })}
        title={t('1.title', { fallback: 'Equity Performance Grid' })}
        text={
          <>
            {t('1.text.0', {
              fallback:
                'Visualize equity strength and sector rotation across global exchanges. Track capital flow between industries, compare performance ratios, and pinpoint where momentum is accelerating or fading — all in one dynamic interface.',
            })}
          </>
        }
      >
        <StockHeatmap />
      </Market>
      <Market
        chip={t('2.chip', {
          fallback: 'Real-Time View of the Crypto Ecosystem',
        })}
        title={t('2.title', { fallback: 'Digital Asset Matrix' })}
        text={
          <>
            {t('2.text.0', {
              fallback:
                'Capture market shifts across digital currencies with precision.',
            })}
            <br />
            {t('2.text.1', {
              fallback:
                'Monitor live volatility, price deviation, and liquidity movements to spot structural patterns in the crypto landscape before they unfold.',
            })}
            <br />
            {t('2.text.2', {
              fallback:
                'Perfect for traders who move where momentum meets data.',
            })}
          </>
        }
      >
        <CryptoHeatmap />
      </Market>
      <Market
        chip={t('3.chip', {
          fallback: 'A Complete Visual Breakdown of Market Activity',
        })}
        title={t('3.title', { fallback: 'Asset Analytics Board' })}
        text={
          <>
            {t('3.text.0', {
              fallback:
                'Go beyond price charts — explore live data on performance variation, volatility range, and percentage changes across instruments.',
            })}
            <br />
            {t('3.text.1', {
              fallback:
                'The Renvex Asset Board consolidates this data into a single, intuitive view to empower evidence-based portfolio decisions.',
            })}
          </>
        }
      >
        <MarketHeatmap />
      </Market>
      <LetsTalkCta />
    </main>
  );
}
