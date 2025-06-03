"use client";

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { api } from '@/convex/_generated/api';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export interface TEAM {
    createdBy: String;
    teamName: String;
    _id: String;
}

const SideNavTopSection = ({ user, setActiveTeamInfo }: any) => {
    const menu = [
        { id: 1, name: 'Create Team', path: '/teams/create', icon: Users },
        { id: 2, name: 'Settings', path: '', icon: Settings },
    ];

    const router = useRouter();
    const convex = useConvex();
    const [activeTeam, setActiveTeam] = useState<TEAM>();
    const [teamList, setTeamList] = useState<TEAM[]>();

    useEffect(() => {
        user && getTeamList();
    }, [user]);

    useEffect(() => {
        activeTeam && setActiveTeamInfo(activeTeam);
    }, [activeTeam]);

    const getTeamList = async () => {
        const result = await convex.query(api.teams.getTeam, { email: user?.email });
        setTeamList(result);
        setActiveTeam(result[0]);
    };

    const onMenuClick = (item: any) => {
        if (item.path) router.push(item.path);
    };

    return (
        <div className="font-sans text-black">
            {/* Team Selector Popover */}
            <Popover>
                <PopoverTrigger asChild>
                    <div className="flex items-center gap-3 p-3 border-4 border-black bg-white cursor-pointer shadow-[4px_4px_0_#000] hover:scale-[1.01] transition-transform">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={40}
                            height={40}
                            className="border-2 border-black bg-yellow-200"
                        />
                        <h2 className="flex items-center gap-1 font-extrabold text-[16px]">
                            {activeTeam?.teamName}
                            <ChevronDown className="w-4 h-4" />
                        </h2>
                    </div>
                </PopoverTrigger>

                <PopoverContent className="ml-4 p-4 w-72 bg-yellow-100 border-4 border-black shadow-[4px_4px_0_#000] rounded-md">
                    {/* Team List */}
                    <div className="mb-2">
                        {teamList?.map((team, index) => (
                            <div
                                key={index}
                                className={`p-2 text-sm font-bold border-2 border-black mb-1 cursor-pointer transition
                  ${activeTeam?._id === team._id
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white text-black hover:bg-gray-100'
                                    }`}
                                onClick={() => setActiveTeam(team)}
                            >
                                {team.teamName}
                            </div>
                        ))}
                    </div>

                    <Separator className="bg-black my-3" />

                    {/* Menu Actions */}
                    <div className="flex flex-col gap-y-2">
                        {menu.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => onMenuClick(item)}
                                className="flex items-center gap-2 p-2 border-2 border-black bg-white hover:bg-gray-200 transition cursor-pointer"
                            >
                                <item.icon className="w-4 h-4" />
                                <span className="text-sm font-bold">{item.name}</span>
                            </div>
                        ))}

                        <LogoutLink>
                            <div className="flex items-center gap-2 p-2 border-2 border-black bg-white hover:bg-gray-200 transition cursor-pointer">
                                <LogOut className="w-4 h-4" />
                                <span className="text-sm font-bold">Logout</span>
                            </div>
                        </LogoutLink>
                    </div>


                    <Separator className="bg-black my-3" />

                    {/* User Info */}
                    {user && (
                        <div className="flex items-center gap-3 mt-3">
                            <Image
                                src={user?.picture || '/default-avatar.png'}
                                alt="user"
                                width={36}
                                height={36}
                                className="rounded-full border-2 border-black"
                            />
                            <div>
                                <p className="text-sm font-extrabold leading-none">{user?.given_name} {user?.family_name}</p>
                                <p className="text-xs text-gray-600">{user?.email}</p>
                            </div>
                        </div>
                    )}
                </PopoverContent>
            </Popover>

            {/* All Files Button */}
            <Button
                variant="outline"
                className="w-full justify-start gap-2 font-extrabold mt-8 bg-white text-black border-4 border-black shadow-[4px_4px_0_#000] hover:scale-[1.01] transition-transform"
            >
                <LayoutGrid className="h-5 w-5" />
                All Files
            </Button>
        </div>
    );
};

export default SideNavTopSection;
