import { Button } from "./ui/button";
import LanguageSelector from "./ui/LanguageSelector";
import { Moon, Sun } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { LanguageSelectorProps } from "./ui/LanguageSelector";

type HeaderProps = {
  theme: string;
  onThemeChange: () => void;
} & LanguageSelectorProps;

function Header({ theme, onThemeChange, ...rest }: HeaderProps) {
  return (
    <header className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 italic">
          CodeCraft
        </h1>
        <LanguageSelector {...rest} />
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon" onClick={onThemeChange}>
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
        <div className="flex -space-x-2">
          <Avatar className="border-2 border-white dark:border-gray-800">
            <AvatarImage src="https://github.com/shadcn.png" alt="@user1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export default Header;
