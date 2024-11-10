import { Button } from "./ui/button";
import { Play, Loader2 } from "lucide-react";

type OutputPanelProps = {
  output: string[];
  onEducate: () => void;
  isCodeExecuting: boolean;
};

function OutputPanel({ output, onEducate, isCodeExecuting }: OutputPanelProps) {
  return (
    <div className="min-h-svh w-[94%] ml-[4%] flex flex-col flex-wrap bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Output</h2>
        <Button
          className="bg-green-500 hover:bg-green-600 text-white"
          onClick={onEducate}
          disabled={isCodeExecuting}
        >
          {isCodeExecuting ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Play className="h-4 w-4 mr-2" />
          )}
          Run
        </Button>
      </div>
      <pre className="flex-1 p-4 break-words whitespace-normal">
        {output.length > 0
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : 'Click "Run Code" to see the output here'}
      </pre>
    </div>
  );
}

export default OutputPanel;
