import React from "react";
import styles from "./index.module.scss";
import Logo from "@/components/logo";
import Navigation from "./navigation";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Navigation  />
    </div>
  );
}
