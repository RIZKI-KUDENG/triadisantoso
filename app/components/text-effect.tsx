"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `WELCOME TO MY PORTFOLIO`;

export function TextGenerate() {
  return <TextGenerateEffect words={words}  />;
}
