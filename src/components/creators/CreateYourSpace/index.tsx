import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Button from "@/components/button";

type Props = {};

export default function CreateYourSpace({}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.section__main}>
        <div className={styles.section__main__text}>
          <h1>Create your space.</h1>

          <div className={styles.section__main__text__bottom}>
            <p>
              Tell your story your way — with different ways to write, style and
              brand your work.
            </p>
            <Button className={styles.section__main__text__bottom__button}>Start writing</Button>
          </div>
        </div>
        <div className={styles.section__main__img}>
          <Image
            src={
              "https://cdn-static-1.medium.com/sites/medium.com/creators/images/earn_kelly_kaki.png"
            }
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={styles.section__blog}>
        <h2>Start a blog.</h2>
        <p>
          Create a blog for free to have a personalized home for your writing.
          Brand your space and share your writing with readers on any device.
        </p>
      </div>
      <div className={styles.section__publication}>
        <h2>Start a publication.</h2>
        <p>
          Collaborate with others or publish under a brand name. Use our story
          submission system and expressive customization options.
        </p>
      </div>
    </section>
  );
}
