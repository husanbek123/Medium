import React from "react";
import styles from "./index.module.scss";
import Button from "@/components/button";
import Image from "next/image";

type Props = {};

export default function TakeYourMind({}: Props) {
  return (
    <section className={styles.section}>
      <h1>Take your mind in new directions.</h1>
      <br />
      <br />
      <Button href="/signin">Get unlimited access</Button>
      <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg" />
    </section>
  );
}
