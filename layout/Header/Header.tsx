import { startTransition, useEffect, useState, type JSX } from "react";
import styles from "./Header.module.css";
import { type HeaderProps } from "./Header.props";
import cn from "classnames";
import Logo from "../logo.svg";
import { ButtonIcon } from "@/components";
import { motion, useReducedMotion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useRouter } from "next/router";

const MotionDiv = motion.create("div");

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    startTransition(() => {
      setIsOpen(false);
    });
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: "100%",
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
      <ButtonIcon
        appearence="white"
        icon="menu"
        onClick={() => setIsOpen(true)}
      />
      <MotionDiv
        animate={isOpen ? "opened" : "closed"}
        variants={variants}
        initial="closed"
        className={styles.mobilemenu}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuclose}
          appearence="white"
          icon="close"
          onClick={() => setIsOpen(false)}
        />
      </MotionDiv>
    </header>
  );
};
