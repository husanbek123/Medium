import React from "react";
import styles from "./index.module.scss";
import Logo from "@/components/logo";
import Navigation from "./navigation";
import { useRouter } from "next/router";
import { useToken } from "@/utils/useLocalStorage";
import Pages from "@/defaults/pages";

type Props = {};
export default function Navbar({}: Props) {
  const router = useRouter();
  const token = useToken((state) => state.token);
  const [show, setShow] = React.useState(false);
  const pageOptions = Pages.find((i) => i.path == router.asPath);

  React.useEffect(() => {
    const controlNavbar = () => {
      if (window && window?.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  
  return (
    <header
      className={[styles.navbar, show && styles.hidden].join(" ")}
      style={{
        background: pageOptions?.navbarBackground,
        borderBottom: `2px solid ${
          pageOptions?.navbarBackground == "#4479ff" ? "white" : "black"
        }`,
      }}
    >
      <div className={["container", styles.container].join(" ")}>
        <Logo
          color={router.asPath === "/membership" && !show ? "light" : "dark"}
        />
        <Navigation
          signed={!!token}
          color={
            router.asPath === "/membership" && !show ? "#ffffff" : "#000000"
          }
        />
      </div>
    </header>
  );
}
