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
import {
  useEditorSettingStore,
  CursorStyle,
  WordWrap,
  WordBreak,
} from "@/store/editorSetting";

function Setting() {
  const {
    fontSize,
    setFontSize,
    cursorStyle,
    setCursorStyle,
    wordWrap,
    setWordWrap,
    wordBreak,
    setWordBreak,
  } = useEditorSettingStore();

  return (
    <Modal>
      <Modal.trigger>
        <Settings className="h-5 w-5" />
      </Modal.trigger>

      <Modal.Content title="Settings" description="View and manage settings.">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="fontSize">Font Size</Label>
            <Select
              value={fontSize.toString()}
              onValueChange={(value) => setFontSize(parseInt(value))}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Font size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12px</SelectItem>
                <SelectItem value="14">14px</SelectItem>
                <SelectItem value="16">16px</SelectItem>
                <SelectItem value="18">18px</SelectItem>
                <SelectItem value="20">20px</SelectItem>
                <SelectItem value="24">24px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="cursorStyle">Cursor Style</Label>
            <Select
              value={cursorStyle}
              onValueChange={(value) => setCursorStyle(value as CursorStyle)}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Cursor style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="underline">Underline</SelectItem>
                <SelectItem value="line">Line</SelectItem>
                <SelectItem value="block">Block</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="wordWrap">Word Wrap</Label>
            <Select
              value={wordWrap}
              onValueChange={(value) => setWordWrap(value as WordWrap)}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Word wrap" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="off">Off</SelectItem>
                <SelectItem value="on">On</SelectItem>
                <SelectItem value="wordWrapColumn">Word wrap column</SelectItem>
                <SelectItem value="bounded">Bounded</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="wordBreak">Word Break</Label>
            <Select
              value={wordBreak}
              onValueChange={(value) => setWordBreak(value as WordBreak)}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Word break" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="keepAll">Keep all</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default Setting;
