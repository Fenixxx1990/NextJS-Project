import { type JSX } from "react";
import { type SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu></Menu>
    </div>
  );
};
