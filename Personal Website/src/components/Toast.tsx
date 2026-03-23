interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  return (
    <div
      className={`toast ${message ? "toast--visible" : ""}`}
      role="status"
      aria-live="polite"
    >
      {message ?? ""}
    </div>
  );
}
