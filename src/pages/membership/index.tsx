import React from "react";
import styles from "./index.module.scss";
import Showcase from "@/components/membership/showcase";
import Features from "@/components/membership/features";
import TakeYourMind from "@/components/membership/TakeMind";
import MembersSection from "@/components/membership/MembersSection";

type Props = {};

export default function Membership({}: Props) {
  return (
    <div className={[styles.page, "default-font-sizes"].join(" ")}>
      <Showcase />
      <Features />
      <TakeYourMind />
      <MembersSection />
    </div>
  );
}
