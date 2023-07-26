import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import defaultLinks from "@/defaults/links";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import { Menu, Box, Burger } from "@mantine/core";
import Button from "@/components/button";
import { useDisclosure } from "@mantine/hooks";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
type Props = {
  color: string;
  data?: DataTypes.LinkData;
  signed: boolean;
};

export default function Navigation({
  color = "black",
  data = defaultLinks,
  signed = false,
}: Props) {
  const router = useRouter();
  const [opened, { toggle , close}] = useDisclosure(false);
  return (
    !signed && (
      <div className={[styles.navigtion, roboto.className].join(" ")}>
        <div className={styles.navigtion__links}>
          {data
            .filter((item) => item.type == "link")
            .map((item, index) => (
              <Link
                href={item.href}
                className={styles.navigtion__links__link}
                key={index}
                style={{
                  color,
                  borderBottom:
                    router.asPath.slice(1) == item.href
                      ? `1px solid ${color}`
                      : "",
                }}
              >
                {item.title}
              </Link>
            ))}
        </div>
        <div>
          <Box className={styles.navigtion__dropdown}>
            <Menu
              width={200}
              shadow="md"
              withArrow
              styles={{
                arrow: {
                  borderColor: "#000",
                },
                dropdown: {
                  background: "black",
                  border: "none",
                },
              }}
              opened={opened}
              onClose={close}
            >
              <Menu.Target>
                <div>
                  <Burger opened={opened} onClick={toggle} fz={"sm"} />
                </div>
              </Menu.Target>

              <Menu.Dropdown >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "10px 10px",
                  }}
                >
                  {data
                    ?.filter((item) => item.type == "link")
                    ?.map((item, index) => (
                      <Link
                        href={`${item.href}`}
                        className={styles.navigtion__dropdown__links__link}
                        key={index}
                        style={{
                          color: "white",
                          borderBottom:
                            router.asPath.slice(1) == item.href
                              ? `1px solid white`
                              : "",
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                </Box>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </div>
        <div className={styles.navigtion__buttons}>
          {data
            .filter((item) => item.type == "button")
            .map((item, index) => (
              <Button
                onClick={() =>
                  router.asPath !== item.href
                    ? router.push(`/${item.href}`)
                    : null
                }
                style={{ fontSize: ".7em", padding: "5px 10px" }}
                key={index}
              >
                {item.title}
              </Button>
            ))}
        </div>
      </div>
    )
  );
}
