import CodeEditor from "./Editor";
import { type CodeEditorProps } from "./Editor";

function CodePanel(props: CodeEditorProps) {
  return (
    <div className="min-h-svh flex-1 overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="h-8 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 flex items-center px-4 space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <CodeEditor {...props} />
    </div>
  );
}

export default CodePanel;
