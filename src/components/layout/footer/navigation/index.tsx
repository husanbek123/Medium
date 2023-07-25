import React from "react";
import styles from "./index.module.scss";
import defaultLinks from "@/defaults/defaultLinks";
import Link from "next/link";

type Props = {};

export default function FooterNavigation({}: Props) {
  return (
    <ul className={styles.list}>
      {defaultLinks.map((item) => (
        <Link href={item.href}>{item.title}</Link>
      ))}
    </ul>
  );
}
