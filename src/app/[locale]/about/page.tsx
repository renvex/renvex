import { LetsTalkCta } from '@/shared/ui/components/lets-talk-cta';

import {
  Hero,
  OurCommitment,
  OurFoundation,
  OurMethodology,
  OurRole,
} from './components';

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <OurFoundation />
      <OurRole />
      <OurCommitment />
      <OurMethodology />
      <LetsTalkCta />
    </main>
  );
}
