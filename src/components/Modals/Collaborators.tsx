import Modal from "../ui/modal";
import { Button } from "../ui/button";
import { Users } from "lucide-react";
import { type ModalProps } from "@/lib/types";
import { useSocketStore } from "@/store/socketStore";

function Collaborators({ isOpen, onOpenChange }: ModalProps) {
  const { users } = useSocketStore();

  console.log(users);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal.trigger>
        <Users className="h-5 w-5" />
      </Modal.trigger>

      <Modal.Content
        title="Collaborators"
        description="View and manage project collaborators."
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-col max-h-[300px] overflow-y-auto">
            {users.map((user) => (
              <div
                className="flex items-center gap-2 justify-between w-full space-y-2 px-2"
                key={user.socketId}
              >
                <p className="text-primary text-sm capitalize font-semibold">
                  {user.name}
                </p>
                <Button variant="outline" size="sm">
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default Collaborators;
