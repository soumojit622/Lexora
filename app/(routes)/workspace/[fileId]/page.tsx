"use client"

import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import { useEffect, useState } from 'react';
import { FILE } from '../../dashboard/components/FileList';
import Workspaceheader from '../components/Workspaceheader';
import Editor from '../components/Editor';
import Canvas from '../components/Canvas';

const WorkspacePage = ({ params }: any) => {
    const [triggerSave, setTriggerSave] = useState(false);
    const convex = useConvex();
    const [fileData, setFileData] = useState<FILE | any>();
    useEffect(() => {
        console.log("FILEID", params.fileId)
        params.fileId && getFileData();
    }, [])

    const getFileData = async () => {
        const result = await convex.query(api.files.getFileById, { _id: params.fileId })
        setFileData(result);
    }
    return (
        <div>
            <Workspaceheader onSave={() => setTriggerSave(!triggerSave)} />

            {/* Workspace Layout  */}
            <div className='grid grid-cols-1
      md:grid-cols-2'>
                {/* Document  */}
                <div className=' h-screen'>
                    <Editor onSaveTrigger={triggerSave}
                        fileId={params.fileId}
                        fileData={fileData}
                    />
                </div>
                {/* Whiteboard/canvas  */}
                <div className=' h-screen border-l'>
                    <Canvas
                        onSaveTrigger={triggerSave}
                        fileId={params.fileId}
                        fileData={fileData}
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkspacePage