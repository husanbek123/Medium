import Button from "@/components/button";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import AuthModal from "../../modal";
import NiceModal from "@ebay/nice-modal-react";
export default function HomeShowcase() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (window) {
      setLoaded(() => true);
    }
  }, []);
  const showModal = () => {
    NiceModal.show(AuthModal, { name: "Nate" });
  };
  return (
    loaded && (
      <div className={styles.showcase}>
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
