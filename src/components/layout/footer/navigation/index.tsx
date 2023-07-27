import React from "react";
import styles from "./index.module.scss";
import defaultLinks from "@/defaults/links";
import Link from "next/link";

type Props = {
  className: string;
};

export default function FooterNavigation({ className }: Props) {
  return (
    <ul className={[styles.list, className].join(" ")}>
      {defaultLinks.slice(0, 3).map((item,index) => (
        <Link href={item.href || '#'} key={index}>
          <li>{item.title}</li>
        </Link>
      ))}
    </ul>
  );
}
