import Image from "next/image";
import styles from "./index.module.scss";
import defaultTopUsers from "@/defaults/topUsers";
import { Roboto } from "next/font/google";
import { Avatar } from "@mantine/core";

type Props = {
  image: string;
  name: string;
  description?: string;
  color: string;
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function TopUserCard({
  color,
  ...props
}: Partial<React.HTMLProps<HTMLElement>> & Props) {
  return (
    <div className={[styles.card, roboto.className].join(" ")}>
      <Avatar src={props.image} alt="it's me" size={"sm"} radius={"xl"} />
      <div className={styles.card__titles} style={{ color }}>
        <h2 className={styles.card__titles__name}>{props.name}</h2>
        <p className={styles.card__titles__description} style={{}}>
          {props?.description}
        </p>
      </div>
    </div>
  );
}

export default function TopUserCards({
  data = defaultTopUsers,
  type = "row",
  color = "black",
}: {
  data?: DataTypes.ITopUser[];
  type?: "column" | "row";
  color?: string;
}) {
  return (
    <div
      className={styles.cards}
      style={{
        gridTemplateColumns: type == "row" ? "repeat(3,1fr)" : "repeat(1,1fr)",
      }}
    >
      {data?.map((item, index) => (
        <TopUserCard
          color={color}
          image={item.image}
          name={item.name}
          key={index}
          description={item.description}
        />
      ))}
    </div>
  );
}
