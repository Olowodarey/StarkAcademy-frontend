import Image from "next/image";
import { Button } from "@/component/ui/button";
import { Pencil } from "lucide-react";

export default function ProfileCard({ user }: { user: { name: string; email: string; bio: string; avatar: string } }) {
  return (
    <div className="bg-[#232228] rounded-xl px-8 py-8 flex flex-col items-center w-full shadow-md border border-[#232228]/40">
      <div className="w-full mb-6">
        <h2 className="text-2xl font-bold text-white mb-1">Profile</h2>
        <p className="text-gray-300 text-base">Your Personal Information</p>
      </div>
      <div className="relative mb-6">
        <Image
          src={user.avatar}
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full border-2 border-[#A78BFA] shadow-sm"
        />
      </div>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-1">{user.name}</h3>
        <p className="text-gray-400 text-sm">{user.email}</p>
      </div>
      <div className="w-full mb-8">
        <p className="text-xs text-white font-bold mb-1">Bio</p>
        <p className="text-white text-base">{user.bio}</p>
      </div>
      <Button
        className="border border-[#A78BFA] text-white font-bold bg-transparent hover:bg-[#A78BFA]/10 transition-colors duration-200 flex items-center justify-center gap-2 py-8 rounded-lg text-base w-full md:w-[70%] cursor-pointer"
      >
        Edit Profile <Pencil className="w-5 h-5" />
      </Button>
    </div>
  );
} 