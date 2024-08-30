import { Button } from "./button";
import { Play } from "lucide-react";

type RunButtonProps = {
  onClick: () => void;
};

function RunButton({ onClick }: RunButtonProps) {
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

export default RunButton;
