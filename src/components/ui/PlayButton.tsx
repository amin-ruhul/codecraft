import { Button } from "./button";
import { Play } from "lucide-react";

type PlayButtonProps = {
  onClick: () => void;
};

function PlayButton({ onClick }: PlayButtonProps) {
  return (
    <Button
      variant="run"
      className=" flex items-center space-x-1"
      onClick={onClick}
    >
      <Play className="w-5 h-5 text-green-200" />
      <p>Run</p>
    </Button>
  );
}

export default PlayButton;
