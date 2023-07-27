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
        <Image src={img} alt="" width={225} height={225} />
      </div>
      <div className={styles.slide__text}>
        <q>{text}</q>
        <h4>{author}</h4>
      </div>
    </div>
  );
}
