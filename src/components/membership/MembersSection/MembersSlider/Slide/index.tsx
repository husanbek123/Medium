import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

type Props = {
  author: string;
  text: string;
  img: string;
};

export default function Slide({ author, img, text }: Props) {
  return (
    <div className={styles.slide}>
      <div className={styles.slide__img}>
        <Image src={img} alt="" width={150} height={150} />
      </div>
      <div className={styles.slide__text}>
        <q>{text}</q>
        <h4>{author}</h4>
      </div>
    </div>
  );
}
