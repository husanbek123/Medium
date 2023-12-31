import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import CardsByOrder from "@/components/cardByOrder";
import HomeShowcase from "@/components/home/showcase";
import { useHeaderData } from "@/utils/store";
import { useEffect } from "react";
import defaultLinks from "@/defaults/links";

export default function Home() {
  const {setData,data} = useHeaderData(state=>state)
  useEffect(()=>{
    if (!data.length) {
      setData(defaultLinks)
    }
  },[])
  return (
    <>
      <Head>
        <title>Medium</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <HomeShowcase />
        <CardsByOrder style={{padding : "20px"}}/>
      </div>
    </>
  );
}
