import type { FieldError } from "react-hook-form";

export interface IInputProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  error?: FieldError;
}
