import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

export default function Button({
  className,
  children,
  ...props
}: Partial<
  Omit<React.HTMLProps<HTMLButtonElement>, "children"> & { children: string }
>) {
  return (
    <Link
      href={props.href}
      className={[styles.button, styles[className || ""]].join(" ")}
      {...(props as any)}
    >
      {children}
    </Link>
  );
}
