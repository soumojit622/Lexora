"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useMutation } from 'convex/react';
import { Rocket, Sparkles, Users } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const CreateTeam = () => {
    const [teamName, setTeamName] = useState('');
    const createTeam = useMutation(api.teams.createTeam);
    const { user }: any = useKindeBrowserClient();
    const router = useRouter();

    const createNewTeam = () => {
        createTeam({
            teamName,
            createdBy: user?.email,
        }).then((resp) => {
            if (resp) {
                toast.success('Team created successfully!', {
                    icon: <Sparkles className="w-5 h-5 text-green-600" />,
                });
                router.push('/dashboard');
            }
        });
    };

    return (
        <div className="px-6 md:px-20 py-24 bg-yellow-100 min-h-screen border-t-4 border-black relative overflow-hidden">
            {/* Decorative Background Shapes */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-white border-4 border-black rotate-12 opacity-10"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-black border-4 border-white -rotate-12 opacity-10"></div>

            {/* Logo */}
            <div className="flex justify-center mb-10">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={160}
                    height={160}
                    className="border-4 border-black shadow-[6px_6px_0_#000] hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center">
                <div className="bg-white/70 border-8 border-black px-10 py-12 w-full md:w-[60%] shadow-[8px_8px_0_#000] text-center backdrop-blur-sm">
                    <h2 className="font-black text-4xl md:text-5xl text-black mb-4 flex justify-center items-center gap-3">
                        What should we call your team?
                    </h2>
                    <p className="text-gray-700 text-lg font-medium mb-8 flex items-center justify-center gap-2">
                        You can always change this later from settings.
                    </p>

                    <div className="w-full text-left">
                        <label className="text-black font-semibold mb-2 block text-sm flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Team Name
                        </label>
                        <Input
                            placeholder="e.g. Dream Team"
                            className="border-4 border-black shadow-[4px_4px_0_#000] rounded-none bg-white text-black font-semibold px-4 py-3 text-lg"
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                    </div>

                    <Button
                        className="mt-10 w-full bg-gradient-to-r from-blue-500 to-blue-500 border-4 border-black rounded-none
  text-white font-bold py-3 shadow-[4px_4px_0_#000]
  hover:shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px]
  active:shadow-[1px_1px_0_#000] active:translate-x-[2px] active:translate-y-[2px]
  transition-all duration-150 text-lg flex items-center justify-center gap-2"
                        disabled={!teamName?.trim()}
                        onClick={createNewTeam}
                    >
                        <Rocket className="w-5 h-5" />
                        Create Team
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default CreateTeam;
