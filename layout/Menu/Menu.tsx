import type { KeyboardEvent, JSX } from "react";
import { useContext, useState } from "react";
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
import { motion, useReducedMotion } from "framer-motion";

const MotionUl = motion.create("ul");
const MotionLi = motion.create("li");

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const [announce, setAnnounce] = useState<"closed" | "opened" | undefined>(
    undefined,
  );
  const shouldReduceMotion = useReducedMotion();

  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion
        ? {}
        : {
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
      opacity: shouldReduceMotion ? 1 : 0,
      height: 0,
    },
  };

  const openSecondLevel = (secondCatrogry: string): void => {
    if (setMenu) {
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCatrogry) {
            setAnnounce(m.isOpened ? "closed" : "opened");
            m.isOpened = !m.isOpened;
          }
          return m;
        }),
      );
    }
  };

  const openSecondLevelKey = (
    key: KeyboardEvent,
    secondCatrogry: string,
  ): void => {
    if (key.code === "Space" || key.code === "Enter") {
      key.preventDefault();
      openSecondLevel(secondCatrogry);
    }
  };

  const buildFirstLevel = (): JSX.Element => {
    return (
      <ul className={styles.firstlevellist}>
        {firstLevelMenu.map((menu) => (
          <li key={menu.route}>
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
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem): JSX.Element => {
    return (
      <ul className={styles.secondblock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <linearGradient key={m._id.secondCategory}>
              <button
                onKeyDown={(key: KeyboardEvent) =>
                  openSecondLevelKey(key, m._id.secondCategory)
                }
                className={styles.secondlevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                aria-expanded={m.isOpened}
              >
                {m._id.secondCategory}
              </button>
              <MotionUl
                layout
                variants={variants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                className={cn(styles.scondlevelblock)}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </MotionUl>
            </linearGradient>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (
    pages: PageItem[],
    route: string,
    isOpened: boolean,
  ): JSX.Element => {
    return (
      <>
        {pages.map((page) => (
          <MotionLi key={page._id} variants={variantsChildren}>
            <Link
              tabIndex={isOpened ? 0 : -1}
              href={`/${route}/${page.alias}`}
              className={cn(styles.thirdlevel, {
                [styles.thirdlevelactive]:
                  `/${route}/${page.alias}` === router.asPath,
              })}
              aria-current={
                `/${route}/${page.alias}` === router.asPath ? "page" : false
              }
            >
              {page.category}
            </Link>
          </MotionLi>
        ))}
      </>
    );
  };

  return (
    <nav className={styles.menu} role="navigation">
      {announce && (
        <span role="log" className="visualyhidden">
          {announce == "opened" ? "развёрнуто" : "свёрнуто"}
        </span>
      )}
      {buildFirstLevel()}
    </nav>
  );
};
