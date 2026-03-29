import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICardProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  color?: "white" | "blue";
  children: React.ReactNode;
}
