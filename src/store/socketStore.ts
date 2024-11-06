import { create } from "zustand";

type User = {
  name: string;
  socketId: string;
  roomId: string;
};

type SocketStore = {
  users: User[];
  setUsers: (users: User[]) => void;
};

export const useSocketStore = create<SocketStore>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));
