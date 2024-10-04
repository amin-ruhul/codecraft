import Modal from "../ui/modal";
import { Settings } from "lucide-react";
import { Label } from "../ui/label";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

function Setting() {
  return (
    <Modal>
      <Modal.trigger>
        <Settings className="h-5 w-5" />
      </Modal.trigger>

      <Modal.Content
        title="Collaborators"
        description="View and manage project collaborators."
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="autoSave">Auto-save</Label>
            <input type="checkbox" id="autoSave" className="toggle" />
          </div>
          <div className="flex justify-between items-center">
            <Label htmlFor="fontSize">Font Size</Label>
            <Select defaultValue="14">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Font size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12px</SelectItem>
                <SelectItem value="14">14px</SelectItem>
                <SelectItem value="16">16px</SelectItem>
                <SelectItem value="18">18px</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default Setting;
