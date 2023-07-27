import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./index.module.scss";

type Props = {
  side: "left" | "right";
  children: string | ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function SliderButton({ side, children, onClick }: Props) {
  return (
    <button
      className={[
        styles.btn,
        side == "left" ? styles.leftBtn : styles.rightBtn,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
