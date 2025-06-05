import Image from "next/image";
import { Button } from "@/component/ui/button";
import { Pencil } from "lucide-react";

export default function ProfileCard({ user }: { user: { name: string; email: string; bio: string; avatar: string } }) {
  return (
    <div className="bg-[#232228] rounded-2xl px-16 py-8 flex flex-col items-center w-full shadow-lg">
      <h2 className="text-xl font-bold mb-1 w-full text-left">Profile</h2>
      <p className="text-gray-400 text-sm mb-4 w-full text-left">Your Personal Information</p>
      <Image src={user.avatar} alt="Profile" width={96} height={96} className="rounded-full mb-3 border-4 border-[#A78BFA]" />
      <h3 className="text-lg font-semibold mt-2">{user.name}</h3>
      <p className="text-gray-300 text-sm mb-1">{user.email}</p>
      <div className="w-full mt-4">
        <p className="text-xs text-gray-400 font-semibold mb-1">Bio</p>
        <p className="text-gray-200 text-sm mb-4">{user.bio}</p>
      </div>
      <Button className="w-full border border-[#A78BFA] text-[#A78BFA] bg-transparent hover:bg-[#A78BFA]/10 mt-2 flex items-center justify-center gap-2">
        Edit Profile <Pencil className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
} 