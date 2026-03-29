interface MorphingBlobProps {
  className?: string;
  size?: string;
  color?: string;
}

export function MorphingBlob({ className = "", size = "500px", color = "hsl(214 84% 56% / 0.08)" }: MorphingBlobProps) {
  return (
    <div
      className={`morphing-blob pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
      }}
    />
  );
}
