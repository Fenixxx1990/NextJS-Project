import { type JSX } from "react";
import styles from "./Input.module.css";
import { type IInputProps } from "./Input.props";
import cn from "classnames";

export const Input = ({
  error,
  ref,
  className,
  ...props
}: IInputProps): JSX.Element => {
  return (
    <div className={cn(className, styles.inputwrapper)}>
      <input
        ref={ref}
        className={cn(styles.input, { [styles.error]: error })}
        {...props}
      />
      {error && <span className={styles.errormessage}>{error.message}</span>}
    </div>
  );
};
