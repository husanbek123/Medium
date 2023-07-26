import React from "react";
import styles from "./index.module.scss";
import MembersSlider from "./MembersSlider";
import Members from "@/defaults/members";

type Props = {};

export default function MembersSection({}: Props) {
  return (
    <section className={[styles.section, "paddings"].join(" ")}>
      <h1>Why I'm a Medium Member...</h1>
      <br />
      <MembersSlider members={Members} />
    </section>
  );
}
