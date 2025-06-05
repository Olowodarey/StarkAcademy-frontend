import { Button } from "@/component/ui/button";
import Link from "next/link";

interface RecommendedCourse {
  name: string;
  description: string;
  link: string;
}

export default function RecommendedCoursesCard({ courses }: { courses: RecommendedCourse[] }) {
  return (
    <div className="bg-[#232228] rounded-2xl p-8 w-full max-w-3xl mx-auto shadow-lg">
      <h2 className="text-xl font-bold mb-1">Recommended Courses</h2>
      <p className="text-gray-400 text-sm mb-6">Based On Your Learning Progress</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-[#232228] rounded-xl p-6 flex flex-col items-start border border-[#393943]">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#A78BFA] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">i</div>
              <span className="text-purple-400 font-semibold">{course.name}</span>
            </div>
            <p className="text-gray-400 text-xs mb-4">{course.description}</p>
            <Link href={course.link} className="w-full mt-auto">
              <Button variant="outline" className="w-full border-[#A78BFA] text-white hover:bg-[#A78BFA]/10 font-semibold">
                View Course
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 