import { type JSX } from "react";
import styles from "./Button.module.css";
import { type IButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({
  appearence = "primary",
  children,
  className,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <>
      <button
        {...props}
        className={cn(styles.button, className, {
          [styles.primary]: appearence == "primary",
          [styles.ghost]: appearence == "ghost",
        })}
      >
        {children}
      </button>
    </>
  );
};
