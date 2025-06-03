"use client"
import React, { useContext, useEffect, useState } from 'react'
import SideNavTopSection, { TEAM } from './SideNavTopSection'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import SideNavBottomSection from './SideNavBottomSection';
import { useConvex, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FileListContext } from '@/app/_context/FilesListContext';
import { toast } from 'sonner';

const SideNav = () => {
  const { user }: any = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);
  const [activeTeam, setActiveTeam] = useState<TEAM | any>();
  const convex = useConvex();
  const [totalFiles, setTotalFiles] = useState<Number>();
  const { fileList_, setFileList_ } = useContext(FileListContext);
  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam])
  const onFileCreate = (fileName: string) => {
    console.log(fileName)
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
      archive: false,
      document: '',
      whiteboard: ''
    }).then(resp => {
      if (resp) {
        getFiles();
        toast('File created successfully!')
      }
    }, (e) => {
      toast('Error while creating file')

    })
  }

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, { teamId: activeTeam?._id });
    console.log(result);
    setFileList_(result);
    setTotalFiles(result?.length)
  }
  return (
    <div
      className="fixed h-screen w-72 p-6 flex flex-col justify-between
             bg-sky-300 border-r-4 border-black 
             shadow-[6px_6px_0_#000] text-black"
    >
      <div className="flex-1">
        <SideNavTopSection
          user={user}
          setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
        />
      </div>

      <div className="mt-4">
        <SideNavBottomSection
          totalFiles={totalFiles}
          onFileCreate={onFileCreate}
        />
      </div>
    </div>

  )
}

export default SideNav