import React from "react";
import styles from "./index.module.scss";
import WritingAccardion from "./Accardion";

type Props = {};

export default function MoreAboutWriting({}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.section__header}>
        <h1>More about writing on Medium:</h1>
      </div>
      <WritingAccardion />
    </section>
  );
}
