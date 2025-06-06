import { Button } from "@/component/ui/button";
import Link from "next/link";

interface RecommendedCourse {
  name: string;
  description: string;
  link: string;
}

export default function RecommendedCoursesCard({ courses }: { courses: RecommendedCourse[] }) {
  return (
    <div className="bg-[#232228] rounded-2xl px-10 py-8 w-full shadow-md">
      <h2 className="text-2xl font-bold text-white mb-1 text-left">Recommended Courses</h2>
      <p className="text-gray-300 text-base mb-8 text-left">Based On Your Learning Progress</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start bg-[#232228] rounded-xl px-0 py-0"
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="bg-[#9747FF] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <span className="text-[#9747FF] font-bold text-lg leading-tight text-left">{course.name}</span>
            </div>
            <p className="text-gray-300 text-xs mb-8 leading-snug text-left">
              {course.description}
            </p>
            <Link href={course.link} className="w-full mt-auto">
              <Button
                variant="outline"
                className="w-full border-2 border-[#A78BFA] text-white hover:text-[#A78BFA] hover:bg-[#A78BFA]/10 font-bold py-3 text-base rounded-lg shadow-[0_0_8px_0_rgba(167,139,250,0.25)] transition-all duration-200 focus:ring-2 focus:ring-[#A78BFA] focus:ring-offset-2 bg-transparent cursor-pointer"
                style={{boxShadow: '0 0 8px 0 #A78BFA'}}
              >
                View Course
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 