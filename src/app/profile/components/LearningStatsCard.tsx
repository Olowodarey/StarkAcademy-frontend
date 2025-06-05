import { Progress } from "@/component/ui/progress";

export default function LearningStatsCard({ stats }: { stats: { completed: number; inProgress: number; total: number; progress: number } }) {
  return (
    <div className="bg-[#232228] rounded-2xl px-16 py-8 w-full shadow-lg">
      <h2 className="text-xl font-bold mb-6">Learning Stats</h2>
      <div className="flex flex-col gap-2 text-base">
        <div className="flex justify-between"><span>Courses Completed</span><span>{stats.completed}</span></div>
        <div className="flex justify-between"><span>Courses In Progress</span><span>{stats.inProgress}</span></div>
        <div className="flex justify-between"><span>Total Courses</span><span>{stats.total}</span></div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between text-sm mb-1">
          <span>Overall Progress</span>
          <span>{stats.progress}%</span>
        </div>
        <Progress value={stats.progress} className="h-1 bg-[#393943]" />
      </div>
    </div>
  );
} 