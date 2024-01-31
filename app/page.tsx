import HeroBanner from "./components/hero-banner";
import Nav from "./components/nav";
import Actions from "./components/actions";
import Mission from "./components/missions";
import Footer from "./components/footer";
import ContentCont from "./components/content-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 py-16">
      <Nav />
      <ContentCont />
    </main>
  );
}
