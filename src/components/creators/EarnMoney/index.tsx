import React from "react";
import styles from "./index.module.scss";
import Button from "@/components/button";
import Image from "next/image";

type Props = {};

export default function EarnMoney({}: Props) {
  return (
    <section className={styles.section}>
      {/* <Image
        src={
          "https://cdn-static-1.medium.com/sites/medium.com/creators/images/cubes.png"
        }
        alt=""
        width={1000}
        height={400}
      /> */}
      <h1>
        Earn money from <br /> your writing.
      </h1>
      <p>
        Writing has its rewards when you join the Partner Program. <br /> Learn
        how to get paid for content you publish and the audiences you build.
      </p>
      <Button className={styles.section__button}>Learn more</Button>
    </section>
  );
}
