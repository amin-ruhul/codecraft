import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomName() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const nameLength = Math.floor(Math.random() * 3) + 3;
  let name = "";

  for (let i = 0; i < nameLength; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    name += letters[randomIndex];
  }

  return name.charAt(0).toUpperCase() + name.slice(1);
}
