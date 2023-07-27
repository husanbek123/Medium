import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

type Props = {};

export default function FindAndGrow({}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.section__main}>
        <h1>
          Find and grow your <br /> audience.
        </h1>
        <p>
          With simple tools and features, you have the chance to connect with
          over 100 million curious readers.
        </p>
      </div>
      <div className={styles.section__features}>
        <div>
          <h2>Audience insights.</h2>
          <p>
            Use data to learn what resonates with your readers so you can keep
            growing your audience.
          </p>
          <Image
            src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/creator-find-points-iphones.png"
            alt=""
            width={300}
            height={250}
          />
        </div>
        <div>
          <h2>Audience insights.</h2>
          <p>
            Use data to learn what resonates with your readers so you can keep
            growing your audience.
          </p>
        </div>
        <div>
          <h2>Audience insights.</h2>
          <p>
            Use data to learn what resonates with your readers so you can keep
            growing your audience.
          </p>
        </div>
        <div>
          <h2>Audience insights.</h2>
          <p>
            Use data to learn what resonates with your readers so you can keep
            growing your audience.
          </p>
        </div>
        <div>
          <h2>Audience insights.</h2>
          <p>
            Use data to learn what resonates with your readers so you can keep
            growing your audience.
          </p>
        </div>
        <div>
          <h2>Audience insights.</h2>
          <p>
            Use data to learn what resonates with your readers so you can keep
            growing your audience.
          </p>
        </div>
      </div>
    </section>
  );
}
