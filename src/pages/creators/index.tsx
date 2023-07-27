import React from "react";
import styles from "./index.module.scss";
import Showcase from "@/components/creators/Showcase";

type Props = {};

export default function Creators({}: Props) {
  return (
    <div className={styles.page}>
      <Showcase />
    </div>
  );
}
