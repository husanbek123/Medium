import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  color?: "dark" | "light" | undefined | false;
};

export default function Logo({ color = "dark" }: Props) {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src={color == "light" ? "/medium-light.svg" : "/medium.svg"}
        alt=""
        width={100}
        height={60}
      />
      <h2
        style={{
          color: color == "light" ? "white" : "black",
        }}
      >
        Medium
      </h2>
    </Link>
  );
}
