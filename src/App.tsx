import { AboutSection, HeroSection, NavBarSection } from "./components";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBarSection />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
