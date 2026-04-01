import { type JSX } from "react";
import { type SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import { Search } from "@/components";
import { useRouter } from "next/router";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  const route = useRouter();
  const main = (): void => {
    route.push("/");
  };
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} onClick={main} />
      <Search />
      <Menu></Menu>
    </div>
  );
};
