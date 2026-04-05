import { type JSX } from "react";
import styles from "./Sort.module.css";
import { SortEnum, type ISortProps } from "./Sort.props";
import cn from "classnames";
import SortIcon from "./sort.svg";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: ISortProps): JSX.Element => {
  return (
    <div
      className={cn(styles.sort, className)}
      role="radiogroup"
      aria-label="Сортировка"
      {...props}
    >
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
        role="radio"
        aria-checked={sort === SortEnum.Rating}
        aria-posinset={1}
        aria-setsize={2}
      >
        <SortIcon className={styles.sorticon} />
        По рейтингу
      </button>
      <button
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
        role="radio"
        aria-checked={sort === SortEnum.Price}
        aria-posinset={2}
        aria-setsize={2}
      >
        <SortIcon className={styles.sorticon} />
        По цене
      </button>
    </div>
  );
};
