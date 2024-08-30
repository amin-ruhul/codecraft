import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import * as monaco from "monaco-editor";
import LanguageSelector from "../ui/LanguageSelector";
import { LANGUAGES } from "@/constants";

function CodeEditor() {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [code, setCode] = useState<string | undefined>();
  const [selectedLanguage, setSelectedLanguage] = useState("Javascript");

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };
  console.log(Object.entries(LANGUAGES));

  function handleLanguageChange(value: string) {
    setSelectedLanguage(value);
  }

  return (
    <>
      <div className="w-full bg-[#1E1E1E] py-3 rounded-tl-sm px-2">
        <LanguageSelector
          languages={Object.entries(LANGUAGES)}
          selectedLanguage={selectedLanguage}
          onValueChange={(value: string) => handleLanguageChange(value)}
        />
      </div>
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
