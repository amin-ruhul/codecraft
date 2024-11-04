import { useEffect, useRef } from "react";

import { LANGUAGES, CODE_SNIPPETS } from "@/constants";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import { initSocket } from "@/services/socket";
import { Socket } from "socket.io-client";
import { generateRandomName } from "@/lib/utils";
import toast from "react-hot-toast";
import Footer from "@/components/Footer";
import { useThemeStore } from "@/store/themeStore";
export type LanguageKeys = keyof typeof CODE_SNIPPETS;
import { useEditorStore } from "@/store/editorStore";

function EditorLayout({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const { selectedLanguage, setSelectedLanguage } = useEditorStore();

  const socketRef = useRef<Socket | null>(null);

  function handleError(error: string) {
    toast.error(error);
  }

  useEffect(() => {
    async function handleSocketConnection() {
      socketRef.current = await initSocket();
      const socketClient = socketRef.current;
      if (!socketClient) return;

      socketClient.on("connect_error", (error) => handleError(error.message));
      socketClient.on("connect_failed", (error) => handleError(error.message));

      socketClient.emit("join-request", {
        roomId: 12345678,
        user: generateRandomName(),
      });

      socketClient.on("joined", (data) => {
        console.log("joined", data);

        console.log(`${data.user} has joined the room ${data.roomId}`);
      });
    }

    handleSocketConnection();

    return () => {
      if (socketRef.current) {
        socketRef.current.off("join-request");
        socketRef.current.off("joined");
        socketRef.current.disconnect();
      }
    };
  }, []);

  function handleLanguageChange(value: LanguageKeys) {
    setSelectedLanguage(value);
  }

  return (
    <>
      <>
        <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
          <Header
            theme={theme}
            onThemeChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            languages={Object.entries(LANGUAGES)}
            selectedLanguage={selectedLanguage}
            onValueChange={(value: string) =>
              handleLanguageChange(value as LanguageKeys)
            }
          />
          <div className="flex-1 flex p-4 space-x-4 overflow-hidden">
            <Sidebar />

            {children}
          </div>
          <Footer />
        </div>
      </>
    </>
  );
}

export default EditorLayout;
