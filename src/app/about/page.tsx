import AboutHero from "@/ui/about-hero";
import Community from "@/ui/community";
import Footer from "@/ui/footer";
import OurPhilosophy from "@/ui/our-philosophy";

const About = () => {
  return (
    <main>
      <section>
        {/* <div className="fixed bottom-0 left-1/2 z-30 h-1/5 w-1/4 -translate-x-1/2 -translate-y-1/20 bg-black/5 backdrop-blur-sm"></div> */}
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
