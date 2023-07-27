import React from "react";
import styles from "./index.module.scss";
import Showcase from "@/components/creators/Showcase";
import CreateYourSpace from "@/components/creators/CreateYourSpace";
import FindAndGrow from "@/components/creators/FindAndGrow";
import EarnMoney from "@/components/creators/EarnMoney";
import MoreAboutWriting from "@/components/creators/More";

type Props = {};

export default function Creators({}: Props) {
  return (
    <div className={styles.page}>
      <Showcase />
      <CreateYourSpace />
      <FindAndGrow />
      <EarnMoney />
      <MoreAboutWriting />
    </div>
  );
}
