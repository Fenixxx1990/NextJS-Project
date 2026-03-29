import { useContext, type JSX } from "react";
import { AppContext } from "@/context/app.context";
import type {
  IFirstLevelMenuItem,
  PageItem,
} from "@/interfaces/menu.interface";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "@/helpers/helpers";

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCatrogry: string): void => {
    if (setMenu) {
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCatrogry) {
            m.isOpened = !m.isOpened;
          }
          return m;
        }),
      );
    }
  };

  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <Link href={`/${menu.route}`}>
              <div
                className={cn(styles.firstlevel, {
                  [styles.firstlevelactive]: menu.id === firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </Link>
            {menu.id === firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem): JSX.Element => {
    return (
      <div className={styles.secondblock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondlevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.scondlevelblock, {
                  [styles.scondlevelblockopen]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
    return (
      <>
        {pages.map((page) => (
          <Link
            key={page._id}
            href={`/${route}/${page.alias}`}
            className={cn(styles.thirdlevel, {
              [styles.thirdlevelactive]:
                `/${route}/${page.alias}` === router.asPath,
            })}
          >
            {page.category}
          </Link>
        ))}
      </>
    );
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
