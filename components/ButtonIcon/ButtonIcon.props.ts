import type { ButtonHTMLAttributes } from "react";
import up from "./up.svg";
import close from "./close.svg";
import menu from "./menu.svg";

export const icons = {
  up,
  close,
  menu,
};

export type IconName = keyof typeof icons;

export interface IButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearence?: "primary" | "white";
  icon: IconName;
}
