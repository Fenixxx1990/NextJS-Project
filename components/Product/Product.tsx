import { useRef, useState, type JSX } from "react";
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
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from "framer-motion";

export const Product = motion(
  ({ ref, product, className, ...props }: IProductProps): JSX.Element => {
    const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
      visible: { opacity: 1, height: "auto" },
      hidden: { opacity: 0, height: 0 },
    };

    const scrollToReviews = (): void => {
      setIsReviewOpen(true);
      reviewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    return (
      <div ref={ref} className={className} {...props}>
        <Card className={styles.product}>
          <div className={styles.logo}>
            <Image
              src="/skillbox.png"
              alt={product.title}
              width={70}
              height={70}
            />
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
            {product.categories.map((c, i) => (
              <Tag className={styles.category} key={`${c}${i}`} color="ghost">
                {c}
              </Tag>
            ))}
          </div>
          <div className={styles.pricetitle}>цена</div>
          <div className={styles.credittitle}>кредит</div>
          <div className={styles.ratetitle}>
            <a href="#ref" onClick={scrollToReviews}>
              {product.reviewCount}&nbsp;
              {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
            </a>
          </div>
          <Divider className={styles.hr} />
          <div className={styles.description}>{product.description}</div>
          <div className={styles.feature}>
            {product.characteristics.map((c, i) => (
              <div className={styles.characteristics} key={`${c.name}${i}`}>
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
              arrow={isReviewOpen ? "down" : "right"}
              onClick={() => setIsReviewOpen(!isReviewOpen)}
            >
              Читать отзывы
            </Button>
          </div>
        </Card>
        <motion.div
          animate={isReviewOpen ? "visible" : "hidden"}
          variants={variants}
          initial="hidden"
          className={cn(styles.reviews)}
        >
          <Card ref={reviewRef} color="blue">
            {product.reviews.map((r) => (
              <div key={r._id}>
                <Review review={r} />
                <Divider />
              </div>
            ))}
            <ReviewForm productId={product._id} />
          </Card>
        </motion.div>
      </div>
    );
  },
);
