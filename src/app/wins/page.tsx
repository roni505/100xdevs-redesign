import Community from "@/ui/community";
import Footer from "@/ui/footer";
import StoriesContent from "@/ui/stories-content";
import SuccessStoriesHero from "@/ui/success-stoties-hero";

const SuccessStories = () => {
  return (
    <main>
      <section>
        <SuccessStoriesHero />
      </section>
      <section>
        <StoriesContent />
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
