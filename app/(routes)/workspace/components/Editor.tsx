"use client"
import { api } from '@/convex/_generated/api';
import EditorJS, { BlockToolConstructable } from '@editorjs/editorjs';

// @ts-ignore
import Header from '@editorjs/header';
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Checklist from '@editorjs/checklist'
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
// @ts-ignore
import Warning from '@editorjs/warning';

import { useMutation } from 'convex/react';
import React, { useEffect, useRef, useState } from 'react';
import { FILE } from '../../dashboard/components/FileList';
import { toast } from 'sonner';

const rawDocument = {
    time: 1550476186479,
    blocks: [
        {
            data: { text: 'Document Name', level: 2 },
            id: "123",
            type: 'header',
        },
        {
            data: { level: 4 },
            id: "1234",
            type: 'header',
        },
    ],
    version: "2.8.1",
};

const Editor = ({ onSaveTrigger, fileId, fileData }: { onSaveTrigger: any, fileId: any, fileData: FILE }) => {
    const ref = useRef<EditorJS>();
    const updateDocument = useMutation(api.files.updateDocument);
    const [document, setDocument] = useState(rawDocument);

    useEffect(() => {
        fileData && initEditor();
    }, [fileData]);

    useEffect(() => {
        if (onSaveTrigger) {
            onSaveDocument();
        }
    }, [onSaveTrigger]);

    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            data: fileData?.document ? JSON.parse(fileData.document) : rawDocument,
            tools: {
                header: {
                    class: Header as unknown as BlockToolConstructable,
                    shortcut: 'CMD+SHIFT+H',
                    config: { placeholder: 'Enter a Header' },
                },
                list: {
                    class: List as unknown as BlockToolConstructable,
                    inlineToolbar: true,
                    config: { defaultStyle: 'unordered' },
                },
                checklist: {
                    class: Checklist as BlockToolConstructable,
                    inlineToolbar: true,
                },
                paragraph: Paragraph as BlockToolConstructable,
                warning: Warning as BlockToolConstructable,
            },
        });

        ref.current = editor;
    };

    const onSaveDocument = () => {
        if (ref.current) {
            ref.current.save().then((outputData) => {
                updateDocument({
                    _id: fileId,
                    document: JSON.stringify(outputData),
                }).then(
                    () => toast.success('📝 Document Updated!'),
                    () => toast.error('⚠️ Server Error!')
                );
            }).catch((error) => {
                console.error('Saving failed: ', error);
            });
        }
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <div
                id="editorjs"
                className="bg-white border-[4px] border-black shadow-[8px_8px_0_#000] p-6 min-h-[400px] max-w-4xl mx-auto font-mono text-[15px] rounded-none"
            ></div>
        </div>
    );
};

export default Editor;
