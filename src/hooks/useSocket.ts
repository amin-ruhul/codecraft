import { useEffect, useRef } from "react";
import { initSocket } from "@/services/socket";
import { Socket } from "socket.io-client";
import { useSocketStore } from "@/store/socketStore";
import toast from "react-hot-toast";

const useSocket = (roomId: string, name: string) => {
  const socketRef = useRef<Socket | null>(null);
  const { setUsers } = useSocketStore();

  useEffect(() => {
    async function handleSocketConnection() {
      socketRef.current = await initSocket();
      const socketClient = socketRef.current;

      if (!socketClient) return;

      socketClient.on("connect_error", (error) => handleError(error.message));
      socketClient.on("connect_failed", (error) => handleError(error.message));

      socketClient.emit("join-request", {
        roomId,
        user: name,
      });

      socketClient.on("joined", (data) => {
        console.log("joined", data);
        setUsers(data.users);
        if (data.user !== name) {
          toast.success(`${data.user} has joined the room.`);
        }
      });
    }

    handleSocketConnection();

    return () => {
      if (socketRef.current) {
        socketRef.current.off("join-request");
        socketRef.current.off("joined");
        socketRef.current.off("connect_error");
        socketRef.current.off("connect_failed");
        socketRef.current.disconnect();
      }
    };
  }, [roomId, name, setUsers]);

  return socketRef.current;
};

const handleError = (error: string) => {
  toast.error(error);
};

export default useSocket;
