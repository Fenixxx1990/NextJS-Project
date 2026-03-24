import { type JSX } from "react";
import styles from "./Header.module.css";
import { type HeaderProps } from "./Header.props";
import cn from "classnames";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};
