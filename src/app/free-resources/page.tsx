import Community from "@/ui/community";
import Content from "@/ui/content";
import Footer from "@/ui/footer";
import FreeResourcesHero from "@/ui/resources-hero";

const FreeResources = () => {
  return (
    <main>
      <section>
        <FreeResourcesHero />
      </section>
      <section>
        <Content />
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

export default FreeResources;
