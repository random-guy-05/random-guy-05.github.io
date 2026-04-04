import { useEffect, useRef, useState } from "react";

const PASSWORD_HASH =
  "93cf77c0a088d59e3c8b56846a74238e62ed5fc8aabe3eb9e43843913fc52d69"; // SHA-256 of default password

const STORAGE_KEY = "pg_auth";

function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  return crypto.subtle.digest("SHA-256", msgBuffer).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  });
}

export function PasswordGate({ onUnlocked }: { onUnlocked: () => void }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // If already unlocked this session, skip
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      onUnlocked();
    }
    // Focus input on mount
    inputRef.current?.focus();
  }, [onUnlocked]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const hash = await sha256(input);
    if (hash === PASSWORD_HASH) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      onUnlocked();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setInput("");
    }
  }

  function handleDismissError() {
    setError(false);
  }

  return (
    <div className="password-gate" role="dialog" aria-modal="true" aria-label="Enter password to continue">
      <form className={`password-gate__card${shaking ? " shake" : ""}`} onSubmit={handleSubmit}>
        <div className="password-gate__lock" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h2 className="password-gate__title">Protected Portfolio</h2>
        <p className="password-gate__subtitle">Enter the password to continue</p>
        <div className="password-gate__field">
          <input
            ref={inputRef}
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (error) handleDismissError();
            }}
            placeholder="Password"
            autoComplete="current-password"
            aria-invalid={error}
            aria-describedby={error ? "pw-error" : undefined}
          />
          {error && (
            <p id="pw-error" className="password-gate__error" role="alert">
              Incorrect password
            </p>
          )}
        </div>
        <button type="submit" className="password-gate__submit">
          Unlock
        </button>
      </form>
    </div>
  );
}
