import {
  BuiltOn,
  ClarityInSteps,
  FullControl,
  Hero,
  LetsTalk,
  PrecisionInSelection,
  ReadyToNavigate,
  RealInsights,
  Strategy,
} from './components';

export default function Home() {
  return (
    <main>
      <Hero />
      <BuiltOn />
      {/* <OurPartners /> */}
      <PrecisionInSelection />
      <RealInsights />
      {/* <Reviews /> */}
      <FullControl />
      <Strategy />
      <ClarityInSteps />
      <LetsTalk />
      <ReadyToNavigate />
    </main>
  );
}
