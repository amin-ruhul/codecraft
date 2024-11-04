import { create } from "zustand";
import { CODE_SNIPPETS } from "@/constants";
export type LanguageKeys = keyof typeof CODE_SNIPPETS;

export type CursorStyle =
  | "underline"
  | "line"
  | "block"
  | "line-thin"
  | "block-outline"
  | undefined;

export type WordWrap = "off" | "on" | "wordWrapColumn" | "bounded";
export type WordBreak = "normal" | "keepAll" | undefined;

type EditorStore = {
  settings: {
    fontSize: number;
    cursorStyle: CursorStyle;
    wordWrap: WordWrap;
    wordBreak: WordBreak;
  };
  selectedLanguage: LanguageKeys;
  code: string | undefined;
  setFontSize: (fontSize: number) => void;
  setCursorStyle: (cursorStyle: CursorStyle) => void;
  setWordWrap: (wordWrap: WordWrap) => void;
  setWordBreak: (wordBreak: WordBreak) => void;
  setSelectedLanguage: (selectedLanguage: LanguageKeys) => void;
  setCode: (code: string | undefined) => void;
};

export const useEditorStore = create<EditorStore>((set) => ({
  settings: {
    fontSize: 16,
    cursorStyle: "underline",
    wordWrap: "off",
    wordBreak: "normal",
  },
  selectedLanguage: "javascript",
  code: CODE_SNIPPETS["javascript"],
  setFontSize: (fontSize) =>
    set((state) => ({ settings: { ...state.settings, fontSize } })),
  setCursorStyle: (cursorStyle) =>
    set((state) => ({ settings: { ...state.settings, cursorStyle } })),
  setWordWrap: (wordWrap) =>
    set((state) => ({ settings: { ...state.settings, wordWrap } })),
  setWordBreak: (wordBreak) =>
    set((state) => ({ settings: { ...state.settings, wordBreak } })),
  setSelectedLanguage: (selectedLanguage) =>
    set((state) => ({
      settings: { ...state.settings },
      selectedLanguage,
      code: CODE_SNIPPETS[selectedLanguage],
    })),
  setCode: (code) => set(() => ({ code })),
}));
