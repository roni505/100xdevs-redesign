import CourseHero from "@/ui/course-hero";
import Instructor from "@/ui/instructor";
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
    </main>
  );
};

export default WebDevopsWeb3;
