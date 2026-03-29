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
