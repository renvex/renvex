import type { Metadata } from 'next';

import {
  BuiltOn,
  ClarityInSteps,
  FullControl,
  Hero,
  LetsTalk,
  PrecisionInSelection,
  Quantify,
  ReadyToNavigate,
  RealInsights,
  Strategy,
  Tools,
} from './components';

export const metadata: Metadata = {
  title: 'Renvex | Verified Broker Comparison & Independent Trading Insights',
  description:
    'Compare verified brokers with data you can trust. Renvex delivers independent analysis, live metrics, and transparency for traders who value evidence over marketing — built for clarity, precision, and performance.',
  openGraph: {
    title: 'Renvex | Verified Broker Comparison & Independent Trading Insights',
    description:
      'Compare verified brokers with data you can trust. Renvex delivers independent analysis, live metrics, and transparency for traders who value evidence over marketing — built for clarity, precision, and performance.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renvex | Verified Broker Comparison & Independent Trading Insights',
    description:
      'Compare verified brokers with data you can trust. Renvex delivers independent analysis, live metrics, and transparency for traders who value evidence over marketing — built for clarity, precision, and performance.',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <BuiltOn />
      {/* <OurPartners /> */}
      <PrecisionInSelection />
      <RealInsights />
      {/* <Reviews /> */}
      <Tools />
      <FullControl />
      <Strategy />
      <Quantify />
      <ClarityInSteps />
      <LetsTalk />
      <ReadyToNavigate />
    </main>
  );
}
