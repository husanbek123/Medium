import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import Navbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
