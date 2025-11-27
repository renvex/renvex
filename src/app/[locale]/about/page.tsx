import type { Metadata } from 'next';

import { LetsTalkCta } from '@/shared/ui/components/lets-talk-cta';

import {
  Hero,
  OurCommitment,
  OurFoundation,
  OurMethodology,
  OurRole,
} from './components';

export const metadata: Metadata = {
  title:
    'About Renvex | Data-Driven Broker Evaluation & Transparency in Trading',
  description:
    'Discover how Renvex redefines broker evaluation through verified data, regulatory validation, and unbiased analysis. Learn about our mission to bring structure, proof, and transparency to global trading.',
  openGraph: {
    title:
      'About Renvex | Data-Driven Broker Evaluation & Transparency in Trading',
    description:
      'Discover how Renvex redefines broker evaluation through verified data, regulatory validation, and unbiased analysis. Learn about our mission to bring structure, proof, and transparency to global trading.',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'About Renvex | Data-Driven Broker Evaluation & Transparency in Trading',
    description:
      'Discover how Renvex redefines broker evaluation through verified data, regulatory validation, and unbiased analysis. Learn about our mission to bring structure, proof, and transparency to global trading.',
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <OurFoundation />
      <OurRole />
      <OurCommitment />
      <OurMethodology />
      <LetsTalkCta submitLabel="contact-us" />
    </main>
  );
}
