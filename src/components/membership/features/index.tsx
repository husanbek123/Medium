import React from "react";
import styles from "./index.module.scss";
import Feature from "./feature";

type Props = {};

export default function Features({}: Props) {
  return (
    <section className={[styles.features, "paddings"].join(" ")}>
      <Feature
        title="Get unlimited access to every story."
        description="Read any article in our entire library across all your devices — with no paywalls, story limits or ads."
      />
      <div className={styles.features__verLine}></div>
      <Feature
        title="Get unlimited access to every story."
        description="Read any article in our entire library across all your devices — with no paywalls, story limits or ads."
      />
    </section>
  );
}
