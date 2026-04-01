import type { ProductModel } from "@/interfaces/product.interface";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IProductProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  product: ProductModel;
}
