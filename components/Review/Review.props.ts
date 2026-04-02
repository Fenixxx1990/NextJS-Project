import type { ReviewModel } from "@/interfaces/product.interface";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IReviewProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  review: ReviewModel;
}
