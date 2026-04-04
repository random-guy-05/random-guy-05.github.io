import { useState } from "react";

export function useCopyToClipboard() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(text: string, successMessage: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(successMessage);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(successMessage);
    }
  }

  function clear() {
    setCopied(null);
  }

  return { copied, copy, clear };
}
