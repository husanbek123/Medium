import React from "react";
import styles from "./index.module.scss";
import Button from "@/components/button";
import Image from "next/image";


type Props = {} & React.HTMLProps<HTMLDivElement>;

export default function Showcase({}: Props) {
  return (
    <div
      className={[styles.showcase, "membership-center", "paddings"].join(" ")}
    >

      <h1>Fuel great thinking.</h1>
      <p>
        Become a Medium member to enjoy unlimited access and directly support
        the writers you read most.
      </p>
      <br />
      <Button
        className={styles.button}
        hoverType="transparent"
        style={{
          backgroundColor: "white",
          borderColor: "white",
          color: "black",
        }}
        href="signin"
      >
        Get unlimited access
      </Button>
    </div>
  );
}
