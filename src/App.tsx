import { Allotment } from "allotment";
import "allotment/dist/style.css";
import CodeEditor from "./components/Editor";
import { useRef, useState } from "react";
import * as monaco from "monaco-editor";
import { LANGUAGES, CODE_SNIPPETS } from "@/constants";
import ToolBar from "./components/Toolbar";
import useCodeExecution from "./hooks/useCodeExecution";

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

  return (
    <>
      <main className="w-full h-screen px-4">
        <div className="py-2 flex items-center justify-between">
          <div></div>

          <div></div>
        </div>
        <div className="w-full h-[92%] bg-[#1E1E1E]  rounded">
          <Allotment>
            <section>
              <ToolBar
                languages={Object.entries(LANGUAGES)}
                selectedLanguage={selectedLanguage}
                onValueChange={(value: string) =>
                  handleLanguageChange(value as LanguageKeys)
                }
                onExecute={handleCodeExecution}
              />
              <CodeEditor
                editorRef={editorRef}
                code={code}
                selectedLanguage={selectedLanguage}
                defaultValue={CODE_SNIPPETS[selectedLanguage]}
                onChange={(value) => setCode(value)}
              />
            </section>
            <section className=" text-[#CCF9FC] py-6 px-2 text-sm">
              {output.length > 0
                ? output.map((line, i) => <p key={i}>{line}</p>)
                : 'Click "Run Code" to see the output here'}
            </section>
          </Allotment>
        </div>
      </main>
    </>
  );
}

export default App;
