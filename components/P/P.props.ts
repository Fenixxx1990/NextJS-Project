import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IPProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}
