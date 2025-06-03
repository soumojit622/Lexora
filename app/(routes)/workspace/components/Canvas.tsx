import React, { useEffect, useState } from 'react';
import { FILE } from '../../dashboard/components/FileList';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

const Canvas = ({ onSaveTrigger, fileId, fileData }: { onSaveTrigger: any, fileId: any, fileData: FILE }) => {
  const [whiteBoardData, setWhiteBoardData] = useState<any>();
  const updateWhiteboard = useMutation(api.files.updateWhiteboard);

  useEffect(() => {
    onSaveTrigger && saveWhiteboard();
  }, [onSaveTrigger]);

  const saveWhiteboard = () => {
    updateWhiteboard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteBoardData),
    }).then((resp) => console.log("Whiteboard saved ✅", resp));
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div
        className="w-full max-w-6xl h-[670px] mx-auto bg-white border-[4px] border-black 
        shadow-[10px_10px_0px_#000] rounded-none overflow-hidden"
      >
        {fileData && (
          <Excalidraw
            theme="light"
            initialData={{
              elements: fileData?.whiteboard
                ? JSON.parse(fileData.whiteboard)
                : [],
            }}
            onChange={(excalidrawElements, appState, files) =>
              setWhiteBoardData(excalidrawElements)
            }
            UIOptions={{
              canvasActions: {
                saveToActiveFile: false,
                loadScene: false,
                export: false,
                toggleTheme: false,
              },
            }}
          >
            <MainMenu>
              <MainMenu.DefaultItems.ClearCanvas />
              <MainMenu.DefaultItems.SaveAsImage />
              <MainMenu.DefaultItems.ChangeCanvasBackground />
            </MainMenu>
            <WelcomeScreen>
              <WelcomeScreen.Hints.MenuHint />
              <WelcomeScreen.Hints.ToolbarHint />
              <WelcomeScreen.Center>
                <WelcomeScreen.Center.MenuItemHelp />
              </WelcomeScreen.Center>
            </WelcomeScreen>
          </Excalidraw>
        )}
      </div>
    </div>
  );
};

export default Canvas;
