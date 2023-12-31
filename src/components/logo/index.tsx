import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  color?: "dark" | "light" | undefined | false;
  isLink?: boolean;
};

export default function Logo({ color = "dark", isLink = true }: Props) {
  return (
    <Link href={isLink ? "/" : ""} className={styles.logo}>
      <Image
        // src={color == "light" ? '/medium-light.svg' : "/medium.svg"}
        src={"/medium_logo.svg"}
        alt=""
        width={100}
        height={60}
        style={{
          filter: color == "light" ? "invert(100%)" : "none",
        }}
      />
    </Link>
  );
}
