import React from "react";
import styles from "./index.module.scss";
import Feature from "./feature";

type Props = {};

export default function Features({}: Props) {
  return (
    <section className={[styles.features, "paddings"].join(" ")}>
      <Feature
        imgSrc="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg"
        title="Get unlimited access to every story."
        description="Read any article in our entire library across all your devices — with no paywalls, story limits or ads."
      />
      <div className={styles.features__verLine}></div>
      <Feature
        imgSrc="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg"
        title="Get unlimited access to every story."
        description="Read any article in our entire library across all your devices — with no paywalls, story limits or ads."
      />
    </section>
  );
}
