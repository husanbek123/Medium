import React from "react";
import styles from "./index.module.scss";
import Logo from "@/components/logo";
import FooterNavigation from "./navigation";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <Logo isLink={false} />
      <h3>Every idea needs a Medium</h3>
      <FooterNavigation className={styles.navigation} />
    </div>
  );
}
