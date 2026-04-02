import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

export interface IRatingProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  error?: FieldError;
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
