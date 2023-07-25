import React from "react";
import styles from "./index.module.scss";
import Button from "@/components/button";

type Props = {} & React.HTMLProps<HTMLDivElement>;

export default function Showcase({}: Props) {
  return (
    <div className={[styles.showcase, "membership-center"].join(" ")}>
      <h1>Fuel great thinking.</h1>
      <p>
        Become a Medium member to enjoy unlimited access and directly support
        the writers you read most.
      </p>
      <br />
      <Button
        hoverType="transparent"
        style={{
          backgroundColor: "white",
          borderColor: "white",
          color: "black",
          fontSize: "18px",
        }}
        href="signin"
      >
        Get unlimited access
      </Button>
    </div>
  );
}
