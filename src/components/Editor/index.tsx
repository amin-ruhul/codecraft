import { Editor } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

import { LanguageKeys, useEditorStore } from "@/store/editorStore";

export type CodeEditorProps = {
  editorRef: React.MutableRefObject<monaco.editor.IStandaloneCodeEditor | null>;
  code: string | undefined;
  selectedLanguage: LanguageKeys;
  onChange: (value: string | undefined) => void;
  theme?: "vs-dark" | "light";
};

function CodeEditor({
  editorRef,
  code,
  selectedLanguage,
  onChange,
  theme = "vs-dark",
}: CodeEditorProps) {
  const { settings } = useEditorStore();

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <>
      <Editor
        height="92vh"
        language={selectedLanguage}
        theme={theme}
        value={code}
        onChange={(value) => onChange(value)}
        onMount={onMount}
        options={{
          ...settings,
        }}
      />
    </>
  );
}

export default CodeEditor;
