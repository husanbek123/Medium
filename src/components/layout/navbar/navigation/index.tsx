import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Button from "@/components/button";
import defaultLinks from "@/defaults/defaultLinks";
import { Herr_Von_Muellerhoff, Roboto } from "next/font/google";
import { useRouter } from "next/router";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
type Props = {
  color: string;
  data?: DataTypes.LinkData;
  signed: boolean;
};

export default function Navigation({
  color = "black",
  data = defaultLinks,
  signed = false,
}: Props) {
  const router = useRouter();

  return (
    !signed && (
      <div className={[styles.navigtion, roboto.className].join(" ")}>
        <div className={styles.navigtion__links}>
          {data
            .filter((item) => item.type == "link")
            .map((item, index) => (
              <Link
                href={item.href}
                className={styles.navigtion__links__link}
                key={index}
                style={{
                  color,
                  borderBottom:
                    router.asPath.slice(1) == item.href
                      ? `1px solid ${color}`
                      : "",
                }}
              >
                {item.title}
              </Link>
            ))}
        </div>
        <div className={styles.navigtion__buttons}>
          {data
            .filter((item) => item.type == "button")
            .map((item, index) => (
              <Button href={item.href} key={index}>
                {item.title}
              </Button>
            ))}
        </div>
      </div>
    )
  );
}
