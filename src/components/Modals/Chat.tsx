import Modal from "../ui/modal";
import { AvatarImage, Avatar, AvatarFallback } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { MessageSquare } from "lucide-react";

function Chat() {
  return (
    <Modal>
      <Modal.trigger>
        <MessageSquare className="h-5 w-5" />
      </Modal.trigger>

      <Modal.Content
        title="Collaborators"
        description="View and manage project collaborators."
      >
        <div className="h-[300px] overflow-y-auto border rounded p-2 mb-4">
          <div className="flex items-start space-x-2 mb-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@user1" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">User 1</p>
              <p>Hey, I've updated the main function. Can you review it?</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@user2" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">User 2</p>
              <p>Sure, I'll take a look now.</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Input placeholder="Type your message..." />
          <Button>Send</Button>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default Chat;
