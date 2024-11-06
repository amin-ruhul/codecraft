import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useRef } from "react";
import * as monaco from "monaco-editor";
import { LANGUAGES, CODE_SNIPPETS } from "@/constants";
import useCodeExecution from "@/hooks/useCodeExecution";

import CodePanel from "@/components/CodePanel";
import OutputPanel from "@/components/OutputPanel";

import { useThemeStore } from "@/store/themeStore";
export type LanguageKeys = keyof typeof CODE_SNIPPETS;
import EditorLayout from "@/components/layout/EditorLayout";
import { useEditorStore } from "@/store/editorStore";
import { Socket } from "socket.io-client";
import { useParams, useLocation } from "react-router-dom";
import useSocket from "@/hooks/useSocket";
import { useEffect } from "react";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const selectedLanguage = useEditorStore((state) => state.selectedLanguage);
  const code = useEditorStore((state) => state.code);
  const setCode = useEditorStore((state) => state.setCode);
  const { roomId } = useParams();
  const location = useLocation();

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const { output, execute } = useCodeExecution();

  async function handleCodeExecution() {
    if (!code?.replace(/\s+/g, "")) return;
    await execute({
      language: selectedLanguage,
      version: LANGUAGES[selectedLanguage],
      code,
    });
  }
  const name = location.state?.name;

  const socketClient = useSocket(roomId!, name);
  console.log(socketClient);

  function handleCodeChange(value: string | undefined) {
    if (!value) return;

    setCode(value);
    socketClient?.emit("code-change", {
      code: value,
    });
  }

  useEffect(() => {
    socketClient?.on("code-change", (data) => {
      setCode(data.code);
    });
  }, [socketClient]);

  return (
    <EditorLayout socketClient={socketClient}>
      <Allotment>
        <Allotment.Pane preferredSize="60%">
          <CodePanel
            editorRef={editorRef}
            code={code}
            selectedLanguage={selectedLanguage}
            defaultValue={CODE_SNIPPETS[selectedLanguage]}
            onChange={(value) => handleCodeChange(value)}
            theme={theme === "dark" ? "vs-dark" : "light"}
          />
        </Allotment.Pane>
        <Allotment.Pane snap preferredSize="30%">
          <OutputPanel output={output} onEducate={handleCodeExecution} />
        </Allotment.Pane>
      </Allotment>
    </EditorLayout>
  );
}

export default App;
