import Modal from "../ui/modal";
import { Button } from "../ui/button";
import { GitBranch } from "lucide-react";
import { type ModalProps } from "@/lib/types";

function GitBranchModal({ isOpen, onOpenChange }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal.trigger>
        <GitBranch />
      </Modal.trigger>

      <Modal.Content
        title="Git Operations"
        description="Manage your git repository, branches, and commits."
      >
        <div className="space-y-4">
          <Button className="w-full justify-start">
            <GitBranch className="mr-2 h-4 w-4" /> Create New Branch
          </Button>
          <Button className="w-full justify-start">
            <GitBranch className="mr-2 h-4 w-4" /> Merge Branches
          </Button>
          <Button className="w-full justify-start">
            <GitBranch className="mr-2 h-4 w-4" /> View Commit History
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default GitBranchModal;
