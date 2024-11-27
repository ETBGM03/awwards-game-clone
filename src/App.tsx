import { AboutSection, HeroSection } from "./components";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
