import Community from "@/ui/community";
import CourseHero from "@/ui/course-hero";
import Footer from "@/ui/footer";
import Instructor from "@/ui/instructor";
import JoinCommunity from "@/ui/join-community";
import MeetTA from "@/ui/meet-tas";
import Syllabus from "@/ui/syllabus";
import WhyBest from "@/ui/why-best";

const WebDevopsWeb3 = () => {
  return (
    <main>
      <section>
        <CourseHero />
      </section>
      <section>
        <Syllabus />
      </section>
      <section>
        <WhyBest />
      </section>
      <section>
        <Instructor />
      </section>
      <section>
        <MeetTA />
      </section>
      <section>
        <JoinCommunity />
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

export default WebDevopsWeb3;
