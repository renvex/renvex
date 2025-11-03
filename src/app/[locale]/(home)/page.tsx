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
      <Quantify />
      <LetsTalk />
      <ReadyToNavigate />
    </main>
  );
}
