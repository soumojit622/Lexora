"use client"

import React, { ReactNode, useEffect, useState } from 'react';
import SideNav from './components/SideNav';
import { FileListContext } from '@/app/_context/FilesListContext';
import { useConvex } from 'convex/react';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';
import { api } from '@/convex/_generated/api';

type LayoutPageProps = {
    children: ReactNode;
};

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
    const convex = useConvex();
    const { user }: any = useKindeBrowserClient();
    const [fileList_, setFileList_] = useState();
    const router = useRouter();
    useEffect(() => {
        user && checkTeam();
    }, [user])

    const checkTeam = async () => {
        const result = await convex.query(api.teams.getTeam,
            { email: user?.email });

        if (!result?.length) {
            router.push('teams/create')
        }
    }
    return (
        <div>
            <FileListContext.Provider value={{ fileList_, setFileList_ }}>
                <div className='grid grid-cols-4'>
                    <div className='bg-white h-screen w-72 fixed'>
                        <SideNav />
                    </div>
                    <div className='col-span-4 ml-72'>
                        {children}
                    </div>
                </div>
            </FileListContext.Provider>

        </div>
    );
};

export default LayoutPage;
