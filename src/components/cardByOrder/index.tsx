import Image from "next/image";
import styles from "./index.module.scss";
import defaultCardByOrder from "@/defaults/cardByOrder";
import Link from "next/link";
import React, { useState } from "react";
type Props = {
  title: string;
  order: string | number;
  company: {
    name: string;
    image: string;
  };
  date: string;
  read: string;
};
function CardByOrder(props: Props) {
  const [innerWidth, setinnerWidth] = useState<number | null>(null);
  React.useEffect(() => {
    const controlNavbar = () => {
      setinnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", controlNavbar);
    return () => {
      window.removeEventListener("resize", controlNavbar);
    };
  }, []);
  return (
    <div className={styles.card}>
      <div className={styles.card__order}>
        <h2>{`0${props.order}`}</h2>
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__content__company}>
          <div className={styles.card__content__company__image}>
            <Image
              src={props.company.image}
              alt="Image"
              width={25}
              height={25}
            />
          </div>
          <Link href={"#"} className={styles.card__content__company__name}>
            {props.company.name}
          </Link>
        </div>
        <div className={styles.card__content__title}>
          <h3> {Number(innerWidth) > 350 ? props.title : props.title.slice(0,30) + '...'}</h3>
        </div>
        <div className={styles.card__content__info}>
          <p className={styles.card__content__info__date}>{props.date}</p>
          <p> · </p>
          <p className={styles.card__content__info__read}>{props.read}</p>
        </div>
      </div>
    </div>
  );
}

export default function CardsByOrder({
  data = defaultCardByOrder,
}: {
  data?: DataTypes.ICardByOrder[];
}) {
  return (
    <div className={styles.cards}>
      {data?.map((item, index) => (
        <CardByOrder {...item} key={index} order={index + 1} />
      ))}
    </div>
  );
}
