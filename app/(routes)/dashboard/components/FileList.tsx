import { FileListContext } from '@/app/_context/FilesListContext';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Archive, MoreHorizontal } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

export interface FILE {
    archive: boolean,
    createdBt: string,
    document: string,
    fileName: string,
    teamId: string,
    whiteboard: string,
    _id: string,
    _creationTime: number
}

function FileList() {
    const { fileList_, setFileList_ } = useContext(FileListContext);
    const [fileList, setFileList] = useState<any>();
    const { user }: any = useKindeBrowserClient();
    const router = useRouter();

    useEffect(() => {
        fileList_ && setFileList(fileList_);
    }, [fileList_]);

    return (
        <div className="mt-10">
            <div className="overflow-x-auto">
                <table className="min-w-full border-4 border-black shadow-[6px_6px_0_#000] bg-white text-sm select-none rounded-none">
                    <thead className="bg-yellow-300 border-b-4 border-black shadow-[3px_3px_0_#000]">
                        <tr>
                            {['File Name', 'Created At', 'Edited', 'Author', 'Actions'].map((heading) => (
                                <th
                                    key={heading}
                                    className="px-6 py-3 text-center align-middle font-extrabold text-black border-r-4 border-black last:border-r-0 select-none"
                                >
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {fileList && fileList.map((file: FILE, index: number) => (
                            <tr
                                key={index}
                                onClick={() => router.push('/workspace/' + file._id)}
                                className="cursor-pointer odd:bg-yellow-50 even:bg-yellow-100 border-b-4 border-black rounded-none"
                            >
                                <td className="px-6 py-4 font-semibold text-black border-r-4 border-black text-center align-middle">{file.fileName}</td>
                                <td className="px-6 py-4 text-black border-r-4 border-black text-center align-middle">{moment(file._creationTime).format('DD MMM YYYY')}</td>
                                <td className="px-6 py-4 text-black border-r-4 border-black text-center align-middle">{moment(file._creationTime).format('DD MMM YYYY')}</td>
                                <td className="px-6 py-4 border-r-4 border-black text-center align-middle">
                                    {user && (
                                        <Image
                                            src={user?.picture}
                                            alt="user"
                                            width={30}
                                            height={30}
                                            className="rounded-none border-2 border-black shadow-[3px_3px_0_#000] inline-block"
                                            onClick={e => e.stopPropagation()}
                                        />
                                    )}
                                </td>
                                <td className="px-6 py-4 border-black text-center align-middle">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <button
                                                className="p-1 border-2 border-black shadow-[3px_3px_0_#000] inline-block"
                                                onClick={e => e.stopPropagation()}
                                            >
                                                <MoreHorizontal className="w-5 h-5 stroke-black" />
                                            </button>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent className="border-4 border-black rounded-none shadow-[6px_6px_0_#000] bg-yellow-50">
                                            <DropdownMenuItem className="gap-3 font-semibold text-black rounded-none cursor-pointer">
                                                <Archive className="h-4 w-4 stroke-black" />
                                                Archive
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FileList;
