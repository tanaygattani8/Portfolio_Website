interface BadgeProps {
  label: string;
  variant?: "default" | "accent";
}

export default function Badge({ label, variant = "default" }: BadgeProps) {
  const variants = {
    default:
      "bg-white/5 text-secondary border border-border hover:border-accent/40 hover:text-white",
    accent:
      "bg-accent/10 text-accent border border-accent/30",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
