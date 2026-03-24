import { type JSX } from "react";
import styles from "./Footer.module.css";
import { type FooterProps } from "./Footer.props";
import cn from "classnames";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};
