import { type JSX } from "react";
import styles from "./Htag.module.css";
import { type IHtagProps } from "./Htag.props";

export const Htag = ({
  tag = "h2",
  children,
  ...props
}: IHtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 {...props} className={styles.h1}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...props} className={styles.h2}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 {...props} className={styles.h3}>
          {children}
        </h3>
      );
    default:
      return <></>;
  }
};
