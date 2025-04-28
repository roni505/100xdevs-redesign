import Hero from "@/ui/hero";
import Nav from "@/ui/nav";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section>
          <Hero />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
