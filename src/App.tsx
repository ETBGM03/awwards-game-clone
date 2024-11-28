import {
  AboutSection,
  FeaturesSection,
  HeroSection,
  NavBarSection,
  StorySection,
} from "./components";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBarSection />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <StorySection />
    </main>
  );
}
