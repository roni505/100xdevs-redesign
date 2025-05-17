import AboutHero from "@/ui/about-hero";
import Community from "@/ui/community";
import Footer from "@/ui/footer";
import OurPhilosophy from "@/ui/our-philosophy";

const About = () => {
  return (
    <main>
      <section>
        <AboutHero />
      </section>
      <section>
        <OurPhilosophy />
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

export default About;
