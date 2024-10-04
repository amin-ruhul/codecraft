import Modal from "../ui/modal";
import { Button } from "../ui/button";
import UserProfile from "../ui/UserProfile";
import { Users } from "lucide-react";
import { type ModalProps } from "@/lib/types";

function Collaborators({ isOpen, onOpenChange }: ModalProps) {
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
          <div className="flex items-center justify-between">
            <UserProfile name="User-1" src="https://github.com/shadcn.png" />
            <Button variant="outline" size="sm">
              Remove
            </Button>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default Collaborators;
