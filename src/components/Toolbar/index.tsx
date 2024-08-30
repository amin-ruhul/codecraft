import LanguageSelector from "../ui/LanguageSelector";
import RunButton from "../ui/RunButton";

type ToolBar = {
  languages: [string, string][];
  onValueChange: (value: string) => void;
  selectedLanguage: string;
  onExecute: () => void;
};

function ToolBar({
  languages,
  onExecute,
  onValueChange,
  selectedLanguage,
}: ToolBar) {
  return (
    <div className="w-full bg-[#1E1E1E] py-3 rounded-tl-sm px-2">
      <div className=" flex items-center justify-between">
        <LanguageSelector
          languages={languages}
          selectedLanguage={selectedLanguage}
          onValueChange={(value: string) => onValueChange(value)}
        />

        <RunButton onClick={onExecute} />
      </div>
    </div>
  );
}

export default ToolBar;
