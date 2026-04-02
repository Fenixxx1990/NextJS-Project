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
import { motion } from "framer-motion";

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: { marginBottom: 0 },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

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
              <motion.div
                layout
                variants={variants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                className={cn(styles.scondlevelblock)}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </motion.div>
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
          <motion.div key={page._id} variants={variantsChildren}>
            <Link
              href={`/${route}/${page.alias}`}
              className={cn(styles.thirdlevel, {
                [styles.thirdlevelactive]:
                  `/${route}/${page.alias}` === router.asPath,
              })}
            >
              {page.category}
            </Link>
          </motion.div>
        ))}
      </>
    );
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
