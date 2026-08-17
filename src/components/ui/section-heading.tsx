import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
} & Omit<ComponentPropsWithoutRef<"header">, "children">;

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-light">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
