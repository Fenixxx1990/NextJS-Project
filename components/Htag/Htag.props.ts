import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IHtagProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> {
  tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
}
