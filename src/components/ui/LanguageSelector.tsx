import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type LanguageSelectorProps = {
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
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={selectedLanguage} />
      </SelectTrigger>
      <SelectContent>
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
