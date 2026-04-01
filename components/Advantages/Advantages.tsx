import { type JSX } from "react";
import styles from "./Advantages.module.css";
import { type IHhAdvantages } from "./Advantages.props";
import CheckIcon from "./check.svg";

export const Advantages = ({ advantages }: IHhAdvantages): JSX.Element => {
  return (
    <>
      {advantages.map((a, i) => (
        <div key={i} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
