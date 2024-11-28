import {
  AboutSection,
  FeaturesSection,
  HeroSection,
  NavBarSection,
  StorySection,
  ContactSection,
  FooterSection,
} from "./components";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBarSection />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <StorySection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
