import CoursesIcorn from "./icon/courses.svg";
import ServicesIcorn from "./icon/services.svg";
import BooksIcorn from "./icon/books.svg";
import ProductsIcorn from "./icon/products.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
import type { IFirstLevelMenuItem } from "@/interfaces/menu.interface";

export const firstLevelMenu: IFirstLevelMenuItem[] = [
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

export const priceRu = (price: number): string => {
  return price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/gm, " ")
    .concat(" ₽");
};

export const declOfNum = (
  number: number,
  titles: [string, string, string],
): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
