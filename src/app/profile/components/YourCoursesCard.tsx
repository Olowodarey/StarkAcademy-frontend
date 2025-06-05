import { Progress } from "@/component/ui/progress";
import { BookOpen } from "lucide-react";

interface Course {
  name: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
}

export default function YourCoursesCard({ courses }: { courses: Course[] }) {
  return (
    <div className="bg-[#232228] rounded-2xl p-8 w-full max-w-2xl mx-auto shadow-lg">
      <h2 className="text-xl font-bold mb-1">Your Courses</h2>
      <p className="text-gray-400 text-sm mb-6">Track Your Progress Across All Courses</p>
      {courses.map((course, idx) => (
        <div key={idx} className="mb-8 last:mb-0">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-base">{course.name}</span>
            <span className="bg-[#232228] text-white text-xs px-3 py-1 rounded-full border border-[#393943]">{course.progress}% Complete</span>
          </div>
          <Progress value={course.progress} className="h-1 bg-[#393943]" />
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
            <BookOpen className="w-4 h-4" />
            <span>{course.completedLessons} of {course.totalLessons} Lesson Completed</span>
          </div>
        </div>
      ))}
    </div>
  );
} 