import CourseCard, { CourseCardInput } from "./course-card";
import SectionHeader from "./section-header";

const activeCourse: CourseCardInput[] = [
  {
    title: "Live 0-100 Complete",
    prize: "₹5,589",
    OGprize: "₹7,999",
    discount: "30.13% off",
    src: "/0to100.svg",
  },
  {
    title: "Live 0-1",
    prize: "₹3,489",
    OGprize: "₹5,999",
    discount: "41.84% off",
    src: "/0to1.svg",
  },
  {
    title: "Live 1-100",
    prize: "₹3,989",
    OGprize: "₹5,999",
    discount: "33.51% off",
    src: "/1to100.svg",
  },
  {
    title: "Live Full Stack Open Source Cohort 1 (Finished)",
    prize: "₹3,989",
    OGprize: "₹4,999",
    discount: "20.20% off",
    src: "/full.svg",
  },
];

const PreviousCohort = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-5 lg:px-0">
      <SectionHeader
        title="Previous cohort"
        description="Learn at your own pace with our completed past cohorts"
      />
      <div className="flex flex-wrap items-center gap-8.5 sm:justify-center lg:justify-start">
        {activeCourse.map((course, idx) => (
          <div key={idx}>
            <CourseCard
              src={course.src}
              title={course.title}
              prize={course.prize}
              OGprize={course.OGprize}
              discount={course.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousCohort;
