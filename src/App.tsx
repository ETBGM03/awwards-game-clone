import { HeroSection } from "./components";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <HeroSection />

      <section className="h-dvh w-screen bg-red-500"></section>
    </main>
  );
}
