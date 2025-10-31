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
  Tools,
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
      <Tools />
      <FullControl />
      <Strategy />
      <ClarityInSteps />
      <LetsTalk />
      <ReadyToNavigate />
    </main>
  );
}
