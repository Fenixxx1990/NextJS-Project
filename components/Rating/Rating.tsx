import { useEffect, useState, type JSX, type KeyboardEvent } from "react";
import styles from "./Rating.module.css";
import { type IRatingProps } from "./Rating.props";
import cn from "classnames";
import StarIcon from "./star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    Array.from({ length: 5 }, (_, i) => <span key={i}></span>),
  );

  const changeDisplay = (i: number): void => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onclick = (i: number): void => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>): void => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  const constructRating = (currentRating: number): void => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onclick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  return <div {...props}>{ratingArray.map((r) => r)}</div>;
};
