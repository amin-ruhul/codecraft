import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./dialog";

import { X } from "lucide-react";

type ModalProps = {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  children: React.ReactNode;
};

type ModelContentProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

function Modal({ children, isOpen, onOpenChange }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {children}
    </Dialog>
  );
}

function ModalContent({ title, description, children }: ModelContentProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {children}
      <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X />
      </DialogClose>
    </DialogContent>
  );
}

Modal.Content = ModalContent;
Modal.trigger = DialogTrigger;
export default Modal;
