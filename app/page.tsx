import Image from "next/image";
import HeroBanner from "./components/hero-banner";
import Nav from "./components/nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 py-16">
      <Nav />
      <HeroBanner />
    </main>
  );
}
