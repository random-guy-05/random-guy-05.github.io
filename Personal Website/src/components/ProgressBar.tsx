interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="progress-shell" aria-hidden="true">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
