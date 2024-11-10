import { create } from "zustand";

export type CursorStyle =
  | "underline"
  | "line"
  | "block"
  | "line-thin"
  | "block-outline"
  | undefined;

export type WordWrap = "off" | "on" | "wordWrapColumn" | "bounded";
export type WordBreak = "normal" | "keepAll" | undefined;

type EditorSettingStore = {
  fontSize: number;
  cursorStyle: CursorStyle;
  wordWrap: WordWrap;
  wordBreak: WordBreak;
  setFontSize: (fontSize: number) => void;
  setCursorStyle: (cursorStyle: CursorStyle) => void;
  setWordWrap: (wordWrap: WordWrap) => void;
  setWordBreak: (wordBreak: WordBreak) => void;
};

export const useEditorSettingStore = create<EditorSettingStore>((set) => ({
  fontSize: 16,
  cursorStyle: "line",
  wordWrap: "off",
  wordBreak: "normal",
  setFontSize: (fontSize) => set({ fontSize }),
  setCursorStyle: (cursorStyle) => set({ cursorStyle }),
  setWordWrap: (wordWrap) => set({ wordWrap }),
  setWordBreak: (wordBreak) => set({ wordBreak }),
}));
