"use client";
import { useEffect, type JSX } from "react";
import styles from "./Up.module.css";
import { useScrollY } from "@/hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { ButtonIcon } from "@/components";

export const Up = (): JSX.Element => {
  const control = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    control.start({ opacity: (y * 2) / document.body.scrollHeight });
  }, [y, control]);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      animate={control}
      className={styles.up}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon
        appearence="primary"
        icon="up"
        aria-label="Наверх"
        onClick={scrollToTop}
      />
    </motion.div>
  );
};
