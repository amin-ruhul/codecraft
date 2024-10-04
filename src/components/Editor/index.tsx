import { Editor } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

import { type LanguageKeys } from "@/App";

export type CodeEditorProps = {
  editorRef: React.MutableRefObject<monaco.editor.IStandaloneCodeEditor | null>;
  code: string | undefined;
  selectedLanguage: LanguageKeys;
  defaultValue: string;
  onChange: (value: string | undefined) => void;
  theme?: "vs-dark" | "light";
};

function CodeEditor({
  editorRef,
  code,
  selectedLanguage,
  defaultValue,
  onChange,
  theme = "vs-dark",
}: CodeEditorProps) {
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
        defaultValue={defaultValue}
        value={code}
        onChange={(value) => onChange(value)}
        onMount={onMount}
        options={{
          fontSize: 17,
        }}
      />
    </>
  );
}

export default CodeEditor;
