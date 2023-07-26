import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

import { Roboto } from "next/font/google";
import { useRouter } from "next/router";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Button({
  className,
  children,
  hoverType,
  ...props
}: Partial<
  Omit<React.HTMLProps<HTMLButtonElement>, "children"> & {
    children: string;
    hoverType: "transparent" | "opacity";
  }
>) {
  return (
    <button
      className={[
        styles.button,
        hoverType == "transparent" && styles.transparent,
        roboto.className,
        styles[className || ""],
      ].join(" ")}
      {...(props as any)}
    >
      {children}
    </button>
  );
}
