import { type JSX } from "react";
import styles from "./Input.module.css";
import { type InputProps } from "./Input.props";
import cn from "classnames";

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={cn(className, styles.input)} {...props} />;
};
