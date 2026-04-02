import { type JSX } from "react";
import styles from "./Textarea.module.css";
import { type ITextareaProps } from "./Textarea.props";
import cn from "classnames";

export const Textarea = ({
  error,
  ref,
  className,
  ...props
}: ITextareaProps): JSX.Element => {
  return (
    <div className={cn(styles.textareawrapper, className)}>
      <textarea
        className={cn(styles.textarea, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errormessage}>{error.message}</span>}
    </div>
  );
};
