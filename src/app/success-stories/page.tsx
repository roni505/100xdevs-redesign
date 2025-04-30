import Community from "@/ui/community";
import Content from "@/ui/content";
import Footer from "@/ui/footer";
import SuccessStoriesHero from "@/ui/success-stoties-hero";

const SuccessStories = () => {
  return (
    <main>
      <section>
        <SuccessStoriesHero />
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

export default SuccessStories;
