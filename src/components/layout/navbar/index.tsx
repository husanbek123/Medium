import React from "react";
import styles from "./index.module.scss";
import Logo from "@/components/logo";
import Navigation from "./navigation";
import { useRouter } from "next/router";
import { useHeaderData, useToken } from "@/utils/store";
import Pages from "@/defaults/pages";
import defaultLinks from "@/defaults/links";

type Props = {};
export default function Navbar({}: Props) {
  const router = useRouter();
  const token = useToken((state) => state.token);
  const [show, setShow] = React.useState(false);
  const pageOptions = Pages.find((i) => i.path == router.asPath);
  const { data: headerData, setData: setHeaderData } = useHeaderData(
    (state) => state
  );

  React.useEffect(() => {
    const controlNavbar = () => {
      if (window && window?.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    if (router.asPath == "/creators") {
      setHeaderData([
        { type: "link", title: "Sign in", href: "/sigin" },
        {
          type: "button",
          href: "/sigin",
          title: "Start writing",
        },
      ]);
    } else {
      setHeaderData(defaultLinks);
    }

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [router.asPath]);

  return (
    <header
      className={[styles.navbar, show && styles.hidden].join(" ")}
      style={{
        background: pageOptions?.navbarBackground || "white",
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
          data={headerData}
          signed={!!token}
          color={
            router.asPath === "/membership" && !show ? "#ffffff" : "#000000"
          }
        />
      </div>
    </header>
  );
}
