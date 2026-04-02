import { type JSX } from "react";
import styles from "./Card.module.css";
import { type ICardProps } from "./Card.props";
import cn from "classnames";

export const Card = ({
  ref,
  color = "white",
  children,
  className,
  ...props
}: ICardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === "blue",
      })}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};
