import {
  useEffect,
  useRef,
  useState,
  type JSX,
  type KeyboardEvent,
} from "react";
import styles from "./Rating.module.css";
import { type IRatingProps } from "./Rating.props";
import cn from "classnames";
import StarIcon from "./star.svg";

export const Rating = ({
  error,
  tabIndex,
  ref,
  isEditable = false,
  rating,
  setRating,
  ...props
}: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    Array.from({ length: 5 }, (_, i) => <span key={i}></span>),
  );

  // Инициализируем массив рефов с правильной типизацией
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

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

  const handleKey = (e: KeyboardEvent): void => {
    if (!isEditable || !setRating) {
      return;
    }
    if (e.code === "ArrowRight" || e.code === "ArrowUp") {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  // Функция для установки рефа в массив
  const setStarRef =
    (index: number) =>
    (element: HTMLSpanElement | null): void => {
      ratingArrayRef.current[index] = element;
    };

  const computeFocus = (r: number, i: number): number => {
    if (!isEditable) {
      return -1;
    }
    if (!rating && i === 0) {
      return tabIndex ?? 0;
    }
    if (rating === i + 1) {
      return tabIndex ?? 0;
    }
    return -1;
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
          tabIndex={computeFocus(rating, i)}
          onKeyDown={handleKey}
          ref={setStarRef(i)} // Используем фабричную функцию для рефа
          role={isEditable ? "slider" : ""}
          aria-valuenow={rating}
          aria-valuemin={1}
          aria-valuemax={5}
          aria-invalid={error ? "true" : "false"}
          aria-label={isEditable ? "Укажите рейтинг" : `рейтинг ${rating}`}
        >
          <StarIcon />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating, tabIndex]);

  return (
    <div
      ref={ref}
      {...props}
      className={cn(styles.ratingwrapper, { [styles.error]: error })}
    >
      {ratingArray.map((r) => r)}
      {error && (
        <span className={styles.errormessage} role="alert">
          {error.message}
        </span>
      )}
    </div>
  );
};
