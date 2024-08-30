import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type LanguageSelectorProps = {
  languages: [string, string][];
  onValueChange: (value: string) => void;
  selectedLanguage: string;
};

function LanguageSelector({
  languages,
  onValueChange,
  selectedLanguage,
}: LanguageSelectorProps) {
  return (
    <Select onValueChange={(value) => onValueChange(value)}>
      <SelectTrigger className="w-[180px] bg-[#1E1E1E]  text-slate-300 border border-green-600/20 capitalize">
        <SelectValue placeholder={selectedLanguage} />
      </SelectTrigger>
      <SelectContent className="bg-[#1E1E1E] text-slate-300 border-green-600/20">
        <SelectGroup>
          {languages.map(([language, version]) => (
            <SelectItem value={language} key={language} className="capitalize">
              {language} {`(v${version})`}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelector;
