import type {
  TopLevelCategory,
  TopPageModel,
} from "@/interfaces/page.interface";
import type { ProductModel } from "@/interfaces/product.interface";

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
