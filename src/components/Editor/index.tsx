import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import * as monaco from "monaco-editor";

function CodeEditor() {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [code, setCode] = useState<string | undefined>();

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };
  return (
    <>
      <div className="w-full bg-[#1E1E1E] py-3 rounded-tl-sm"></div>
      <Editor
        className=" rounded-md"
        height="92vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue="// some comment"
        value={code}
        onChange={(value) => setCode(value)}
        onMount={onMount}
      />
    </>
  );
}

export default CodeEditor;
