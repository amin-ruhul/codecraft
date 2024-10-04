import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useRef, useState } from "react";
import * as monaco from "monaco-editor";
import { LANGUAGES, CODE_SNIPPETS } from "@/constants";
import useCodeExecution from "./hooks/useCodeExecution";
import Header from "./components/Heaader";
import Sidebar from "./components/Sidebar";
import CodePanel from "./components/CodePanel";
import OutputPanel from "./components/OutputPanel";
import Footer from "./components/Footer";

export type LanguageKeys = keyof typeof CODE_SNIPPETS;

function App() {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [code, setCode] = useState<string | undefined>(
    CODE_SNIPPETS["javascript"]
  );
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageKeys>("javascript");

  const { output, execute } = useCodeExecution();

  function handleLanguageChange(value: LanguageKeys) {
    setSelectedLanguage(value);
    setCode(CODE_SNIPPETS[value]);
  }

  async function handleCodeExecution() {
    if (!code?.replace(/\s+/g, "")) return;
    await execute({
      language: selectedLanguage,
      version: LANGUAGES[selectedLanguage],
      code,
    });
  }

  const [theme, setTheme] = useState("dark");

  return (
    <>
      <main className={`flex h-screen ${theme === "dark" ? "dark" : ""}`}>
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

            <Allotment>
              <Allotment.Pane preferredSize="60%">
                <CodePanel
                  editorRef={editorRef}
                  code={code}
                  selectedLanguage={selectedLanguage}
                  defaultValue={CODE_SNIPPETS[selectedLanguage]}
                  onChange={(value) => setCode(value)}
                  theme={theme === "dark" ? "vs-dark" : "light"}
                />
              </Allotment.Pane>
              <Allotment.Pane snap preferredSize="30%">
                <OutputPanel output={output} onEducate={handleCodeExecution} />
              </Allotment.Pane>
            </Allotment>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
