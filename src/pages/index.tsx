import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import TopUserCards from "@/components/topUserCard";
import CardsByOrder from "@/components/cardByOrder";
import HomeShowcase from "@/components/home/showcase";

export default function Home() {
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
