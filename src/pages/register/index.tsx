import { useHeaderData as useHeaderLinks } from "@/utils/store";
import styles from "./index.module.scss";
import React from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Stapper from "@/components/stapper";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

export default function Register() {
  const { setData: setHeaderData } = useHeaderLinks((state) => state);
  const [cookies, _] = useCookies(["registered"]);
  const router = useRouter();
  const [active, setActive] = React.useState<number>(0);
  React.useEffect(() => {
    setHeaderData([]);
  }, []);
  React.useEffect(() => {
    if (active == 0 && router.query.step) {
      setActive(() => Number(router.query.step));
    }
  }, [_, router.query.step]);

  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <Stapper
          Step1={Step1}
          Step2={Step2}
          Step3={Step3}
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
}
