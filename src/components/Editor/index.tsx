import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import * as monaco from "monaco-editor";
import LanguageSelector from "../ui/LanguageSelector";
import { LANGUAGES, CODE_SNIPPETS } from "@/constants";

function CodeEditor() {
  type LanguageKeys = keyof typeof CODE_SNIPPETS;

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [code, setCode] = useState<string | undefined>();
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageKeys>("javascript");

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };
  console.log(Object.entries(LANGUAGES));

  function handleLanguageChange(value: LanguageKeys) {
    setSelectedLanguage(value);
    setCode(CODE_SNIPPETS[value]);
  }

  return (
    <>
      <div className="w-full bg-[#1E1E1E] py-3 rounded-tl-sm px-2">
        <LanguageSelector
          languages={Object.entries(LANGUAGES)}
          selectedLanguage={selectedLanguage}
          onValueChange={(value: string) =>
            handleLanguageChange(value as LanguageKeys)
          }
        />
      </div>
      <Editor
        className=" rounded-md"
        height="92vh"
        language={selectedLanguage}
        theme="vs-dark"
        defaultValue={CODE_SNIPPETS[selectedLanguage]}
        value={code}
        onChange={(value) => setCode(value)}
        onMount={onMount}
      />
    </>
  );
}

export default CodeEditor;
