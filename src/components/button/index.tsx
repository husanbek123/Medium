import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Button({
  className,
  children,
  hoverType,
  background = "black",
  padding = "10px 15px",
  ...props
}: Partial<
  Omit<React.HTMLProps<HTMLButtonElement>, "children"> & {
    children: string;
    hoverType: "transparent" | "opacity";
    background: string;
    padding: string;
  }
>) {
  return (
    <button
      className={[
        styles.button,
        hoverType == "transparent" && styles.transparent,
        roboto.className,
        styles[className || ""],
        className,
      ].join(" ")}
      style={{ background, padding, ...props.style }}
      {...(props as any)}
    >
      {children}
    </button>
  );
}
