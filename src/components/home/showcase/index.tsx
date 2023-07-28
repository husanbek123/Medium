import Button from "@/components/button";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import AuthModal from "../../registerModal";
import NiceModal from "@ebay/nice-modal-react";
import Lottie from "lottie-react";
import WorldAnimation from "@/data/world.json";

export default function HomeShowcase() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (window) {
      setLoaded(() => true);
    }
  }, []);
  const showModal = () => {
    NiceModal.show(AuthModal);
  };
  return (
    loaded && (
      <div className={styles.showcase}>
        <Lottie
          animationData={WorldAnimation}
          className={styles.background}
          width={2000}
        />

        <div className={["container", styles.showcase__container].join(" ")}>
          <div className={styles.showcase__container__textItem}>
            <h1 className={styles.showcase__container__textItem__title}>
              Stay curious.
            </h1>
            <b className={styles.showcase__container__textItem__description}>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </b>
            <Button onClick={showModal}>Start reading</Button>
          </div>
        </div>
      </div>
    )
  );
}
