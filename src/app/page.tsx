import ActiveCohort from "@/ui/active-cohort";
import Community from "@/ui/community";
import Hero from "@/ui/hero";
import Nav from "@/ui/nav";
import OpenSource from "@/ui/open-source";
import PreviousCohort from "@/ui/previous-cohort";
import WhyUs from "@/ui/why-us";
import Footer from "@/ui/footer";

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
        <section>
          <ActiveCohort />
        </section>
        <section>
          <PreviousCohort />
        </section>
        <section>
          <WhyUs />
        </section>
        <section>
          <OpenSource />
        </section>
        <section>
          <Community />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
