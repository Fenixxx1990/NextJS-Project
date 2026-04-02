import type { FieldError } from "react-hook-form";

export interface ITextareaProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> {
  error?: FieldError;
}
