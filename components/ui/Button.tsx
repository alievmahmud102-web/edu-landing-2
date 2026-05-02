type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  download?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-blue-600 text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25",
  secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
  outline:
    "border border-gray-300 bg-white/80 text-gray-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-base px-8 py-4"
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  className = "",
  download = false,
  target,
  rel
}: ButtonProps) {
  const classes = [
    "inline-block rounded-xl text-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        download={download ? true : undefined}
        aria-disabled={disabled}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
