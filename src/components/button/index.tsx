import React from "react";
import styles from "./index.module.scss";
import Pages from "@/defaults/pages";

type Props = {
  text: string;
  borderRadius?: string;
  backgroundColor?: string;
  padding?: string;
  fontColor?: string;
};

export default function Button({ text, ...props }: Props) {
  

  return (
    <div
      style={{
        ...props,
      }}
      className={styles.button}
    >
      {text}
    </div>
  );
}
