import type { Metadata } from 'next';

import { LetsTalk } from '../(home)/components';
import { Banners, Hero, Support } from './components';

export const metadata: Metadata = {
  title: 'Contact Renvex | Speak with a Verified Broker Specialist',
  description:
    'Need clarity before you trade? Contact Renvex for verified insights, personalized broker recommendations, and expert support. Our team provides fast, transparent answers — no bots, no waiting.',
  openGraph: {
    title: 'Contact Renvex | Speak with a Verified Broker Specialist',
    description:
      'Need clarity before you trade? Contact Renvex for verified insights, personalized broker recommendations, and expert support. Our team provides fast, transparent answers — no bots, no waiting.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Renvex | Speak with a Verified Broker Specialist',
    description:
      'Need clarity before you trade? Contact Renvex for verified insights, personalized broker recommendations, and expert support. Our team provides fast, transparent answers — no bots, no waiting.',
  },
};

export default function ContactUsPage() {
  return (
    <main>
      <Hero />
      <LetsTalk />
      <Banners />
      <Support />
    </main>
  );
}
