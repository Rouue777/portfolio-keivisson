import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";
type IconPosition = "left" | "right";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: IconPosition;
};

type ButtonElementProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonLinkProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof ButtonBaseProps | "href"> & {
    href: string;
    disabled?: boolean;
  };

type ButtonProps = ButtonElementProps | ButtonLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-primary text-white hover:bg-primary-highlight disabled:bg-primary/50 aria-disabled:bg-primary/50",
  secondary:
    "border-border bg-transparent text-text hover:border-primary-highlight hover:bg-background-secondary disabled:text-text-muted aria-disabled:text-text-muted",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
};

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    icon,
    iconPosition = "left",
    size = "md",
    variant = "primary",
    ...elementProps
  } = props;
  const content = (
    <>
      {icon && iconPosition === "left" ? <span aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? <span aria-hidden="true">{icon}</span> : null}
    </>
  );
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in elementProps && typeof elementProps.href === "string") {
    const { disabled, href, onClick, ...linkProps } = elementProps;

    if (disabled) {
      return (
        <a
          className={classes}
          aria-disabled="true"
          tabIndex={-1}
          {...linkProps}
        >
          {content}
        </a>
      );
    }

    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        {...linkProps}
      >
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = elementProps;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {content}
    </button>
  );
}
