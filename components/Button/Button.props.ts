import type { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "onAnimateStart"
  | "onDragStart"
  | "onDragEnd"
  | "onDrag"
  | "ref"
  | "onAnimationEnd"
  | "onAnimationStart" // Добавьте все обработчики анимации!
  | "onTransitionStart"
  | "onTransitionEnd"
> {
  children: React.ReactNode;
  appearence?: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
}
