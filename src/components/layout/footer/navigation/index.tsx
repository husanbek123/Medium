import React from "react";
import styles from "./index.module.scss";
import defaultLinks from "@/defaults/links";
import Link from "next/link";

type Props = {};

export default function FooterNavigation({}: Props) {
  return (
    <ul className={styles.list}>
      {defaultLinks.slice(0, 3).map((item) => (
        <Link href={item.href}>
          <li>{item.title}</li>
        </Link>
      ))}
    </ul>
  );
}
