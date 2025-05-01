import Community from "@/ui/community";
import Footer from "@/ui/footer";
import OpenSourceHero from "@/ui/open-source-hero";
import OurProjects from "@/ui/our-projects";

const OpenSource = () => {
  return (
    <main>
      <section>
        <OpenSourceHero />
      </section>
      <section>
        <OurProjects />
      </section>
      <section>
        <Community />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default OpenSource;
