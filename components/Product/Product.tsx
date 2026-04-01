import { type JSX } from "react";
import styles from "./Product.module.css";
import { type IProductProps } from "./Product.props";
import cn from "classnames";
import { Card } from "../Card/Card";
import Image from "next/image";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNum, priceRu } from "@/helpers/helpers";
import { Divider } from "../Divider/Divider";

export const Product = ({
  product,
  className,
  ...props
}: IProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <Image src="/skillbox.png" alt={product.title} width={70} height={70} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice && (
          <Tag className={styles.oldprice} color="green">
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.month}>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag className={styles.category} key={c} color="ghost">
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.pricetitle}>цена</div>
      <div className={styles.credittitle}>кредит</div>
      <div className={styles.ratetitle}>
        {product.reviewCount}{" "}
        {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
      </div>
      <Divider className={styles.hr} />
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>
        {product.characteristics.map((c) => (
          <div className={styles.characteristics} key={c.name}>
            <span className={styles.characteristicsname}>{c.name}</span>
            <span className={styles.characteristicsdots}></span>
            <span className={styles.characteristicsvalue}>{c.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.advblock}>
        {product.advantages && (
          <div className={styles.advantages}>
            <div className={styles.advtitle}>Преимущества</div>
            {product.advantages}
          </div>
        )}
        {product.disadvantages && (
          <div className={styles.disadvantages}>
            <div className={styles.advtitle}>Недостатки</div>
            {product.disadvantages}
          </div>
        )}
      </div>
      <Divider className={cn(styles.hr, styles.hr2)} />
      <div className={styles.actions}>
        <Button appearence="primary">Узнать подробнее</Button>
        <Button
          className={styles.reviewbutton}
          appearence="ghost"
          arrow="right"
        >
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
