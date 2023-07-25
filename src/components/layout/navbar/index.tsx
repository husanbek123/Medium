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
  console.log(pageOptions?.navbarBackground);
  
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
      }}
    >
      <div className={["container", styles.container].join(" ")}>
        <Logo />
        <Navigation
          signed={!!token}
          color={
            router.asPath === "/membership" ? "#ffffff" : "#000000"
          }
        />
      </div>
    </header>
  );
}
