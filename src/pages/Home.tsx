import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");

  const handleJoin = () => {
    if (!roomId) {
      toast.error("Please enter a room id");
      return;
    }
    if (!name) {
      toast.error("Please enter a name");
      return;
    }

    navigate(`/editor/${roomId}`, { state: { name } });
  };

  const handleNewRoomId = () => {
    setRoomId(crypto.randomUUID());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background w-full">
      <div className="flex flex-col gap-2 border min-w-[350px] rounded-md p-6">
        <h1 className="text-2xl font-bold text-foreground text-center my-2">
          Join Room
        </h1>
        <Input
          placeholder="Room id"
          value={roomId}
          className=" text-muted-foreground"
          onChange={(e) => setRoomId(e.target.value)}
        />
        <Input
          placeholder="Name"
          value={name}
          className=" text-muted-foreground"
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex justify-between gap-2 mt-4">
          <Button onClick={handleJoin}>Join</Button>

          <Button
            variant="outline"
            className=" text-muted-foreground"
            onClick={handleNewRoomId}
            disabled={!!roomId}
          >
            New Room ID
          </Button>
        </div>
      </div>
    </div>
  );
}
