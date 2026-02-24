import { Progress } from "@/component/ui/progress";

export default function LearningStatsCard({ stats }: { stats: { completed: number; inProgress: number; total: number; progress: number } }) {
  return (
    <div className="bg-[#232228] rounded-xl px-8 py-8 w-full shadow-md border border-[#232228]/40">
      <h2 className="text-2xl font-bold text-white mb-8">Learning Stats</h2>
      <div className="flex flex-col gap-4 text-base text-white mb-6">
        <div className="flex justify-between"><span className="text-gray-200">Courses Completed</span><span className="font-medium">{stats.completed}</span></div>
        <div className="flex justify-between"><span className="text-gray-200">Courses In Progress</span><span className="font-medium">{stats.inProgress}</span></div>
        <div className="flex justify-between"><span className="text-gray-200">Total Courses</span><span className="font-medium">{stats.total}</span></div>
      </div>
      <div className="mt-2">
        <div className="flex justify-between text-base font-semibold text-white mb-2">
          <span>Overall Progress</span>
          <span>{stats.progress}%</span>
        </div>
        <Progress value={stats.progress} className="h-1 bg-white rounded-full" />
      </div>
    </div>
  );
} 