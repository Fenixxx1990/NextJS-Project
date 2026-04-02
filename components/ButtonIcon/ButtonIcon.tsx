import { type JSX } from "react";
import styles from "./ButtonIcon.module.css";
import { type IButtonIconProps, icons } from "./ButtonIcon.props";
import cn from "classnames";

export const ButtonIcon = ({
  appearence = "primary",
  icon,
  className,
  ...props
}: IButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <>
      <button
        className={cn(styles.button, className, {
          [styles.primary]: appearence == "primary",
          [styles.white]: appearence == "white",
        })}
        {...props}
      >
        <IconComp />
      </button>
    </>
  );
};
