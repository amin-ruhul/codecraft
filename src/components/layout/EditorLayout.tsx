import { LANGUAGES, CODE_SNIPPETS } from "@/constants";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import { Socket } from "socket.io-client";

import Footer from "@/components/Footer";
import { useThemeStore } from "@/store/themeStore";
export type LanguageKeys = keyof typeof CODE_SNIPPETS;
import { useEditorStore } from "@/store/editorStore";

import { useLocation, Navigate, useParams } from "react-router-dom";

function EditorLayout({
  children,
  socketClient,
}: {
  children: React.ReactNode;
  socketClient: Socket | null;
}) {
  const location = useLocation();
  const { roomId } = useParams();
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const { selectedLanguage, setSelectedLanguage } = useEditorStore();

  const name = location.state?.name;

  console.log({ socketClient });

  function handleLanguageChange(value: LanguageKeys) {
    setSelectedLanguage(value);
  }

  if (!name) {
    return <Navigate to={`/?roomId=${roomId}`} />;
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
