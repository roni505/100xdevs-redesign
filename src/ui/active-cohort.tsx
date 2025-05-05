import CourseCard, { CourseCardInput } from "./course-card";
import SectionHeader from "./section-header";

const activeCourse: CourseCardInput[] = [
  {
    title: "Complete Web Development + Devops + Blockchain Cohort",
    prize: "₹5,989",
    OGprize: "₹8,499",
    discount: "29.53% off",
    src: "/allCohort.svg",
  },
  {
    title: "Complete Web development + Devops Cohort",
    prize: "₹4,989",
    OGprize: "₹5,999",
    discount: "16.84% off",
    src: "/webAndDevops.svg",
  },
  {
    title: "Complete Web3/Blockchain Cohort",
    prize: "₹4,989",
    OGprize: "₹5,999",
    discount: "16.84% off",
    src: "/web3.svg",
  },
  {
    title: "Complete Web Development Cohort",
    prize: "₹2,989",
    OGprize: "₹3,999",
    discount: "25.26% off",
    src: "/webDev.svg",
  },
  {
    title: "Complete Devops Cohort",
    prize: "₹2,989",
    OGprize: "₹3,999",
    discount: "25.26% off",
    src: "/devops.svg",
  },
];

const ActiveCohort = () => {
  return (
    <div
      id="active-cohort"
      className="mx-auto flex max-w-6xl flex-col items-center justify-center px-5 lg:px-0"
    >
      <SectionHeader
        title="Active cohort"
        description="Live courses, real-time support, and active community — join now!"
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

export default ActiveCohort;
