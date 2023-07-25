import React from "react";
import styles from "./index.module.scss";
import Logo from "@/components/logo";
import Navigation from "./navigation";
import { useRouter } from "next/router";
import { useToken } from "@/utils/useLocalStorage";

type Props = {};

export default function Navbar({}: Props) {
  const router = useRouter();
  const token = useToken((state) => state.token);
  return (
    <div className={styles.navbar}>
      <div className={["container", styles.container].join(" ")}>
        <Logo />
        <Navigation
          signed={!!token}
          color={router.asPath == "/membership" ? "white" : "black"}
        />
      </div>
    </div>
  );
}
