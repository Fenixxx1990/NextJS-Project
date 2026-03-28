import { useContext, type JSX } from "react";
import { AppContext } from "@/context/app.context";
import type {
  IFirstLevelMenuItem,
  PageItem,
} from "@/interfaces/menu.interface";
import CoursesIcorn from "./icon/courses.svg";
import ServicesIcorn from "./icon/services.svg";
import BooksIcorn from "./icon/books.svg";
import ProductsIcorn from "./icon/products.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";

const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcorn />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcorn />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcorn />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcorn />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, firstCategory } = useContext(AppContext);

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
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondlevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.scondlevelblock, {
                [styles.scondlevelblockopen]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
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
              [styles.thirdlevelactive]: false,
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
