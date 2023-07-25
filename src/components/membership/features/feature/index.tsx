import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imgSrc: string;
} & React.HTMLProps<HTMLDivElement>;

export default function Feature({ title, description, imgSrc }: Props) {
  return (
    <div className={styles.feature}>
      <h2>{title}</h2>
      <div>
        <img src={imgSrc} alt="" width={300} height={200} />
      </div>
      <p>{description}</p>
    </div>
  );
}
