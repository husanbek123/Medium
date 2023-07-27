import React from "react";
import styles from "./index.module.scss";
import Button from "@/components/button";
import Lottie from "lottie-react";
import Animation from "@/data/creators_black_and_light.json";

type Props = {};

export default function Showcase({}: Props) {
  return (
    <section className={styles.showcase}>
      <div className={styles.showcase__text}>
        <div>
          <h5>START A BLOG FOR FREE</h5>
          <h1>Publish, grow, and earn, all in one place.</h1>
        </div>
        <p>
          If you have a story to tell, knowledge to share, or a perspective to
          offer — welcome home. Sign up for free so your writing can thrive in a
          network supported by millions of readers — not ads.
        </p>
        <Button className={styles.showcase__btn} hoverType="transparent">
          Start writing
        </Button>
      </div>
      <div className={styles.showcase__animation}>
        <Lottie
          className={styles.img}
          animationData={Animation}
          style={{
            width: "300px",
          }}
        />
      </div>
    </section>
  );
}
