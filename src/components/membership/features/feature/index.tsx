import React from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
  description: string;
} & React.HTMLProps<HTMLDivElement>;




export default function Feature({ title, description }: Props) {
  return (
    <div className={styles.feature}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
