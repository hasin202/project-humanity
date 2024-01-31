import Nav from "./components/nav";
import ContentCont from "./components/content-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 py-16 ">
      <Nav />
      <ContentCont />
    </main>
  );
}
