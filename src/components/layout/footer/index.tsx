import React from "react";
import styles from "./index.module.scss";
import Logo from "@/components/logo";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <Logo isLink={false} />
      <h5>Every idea needs a Medium</h5>
    </div>
  );
}
