import { type JSX } from "react";
import styles from "./Sidebar.module.css";
import { type SidebarProps } from "./Sidebar.props";
import cn from "classnames";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};
