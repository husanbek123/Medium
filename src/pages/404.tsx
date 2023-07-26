import Image from "next/image";
import image from "../../public/img404.png";
import { Text, Box } from "@mantine/core";
import Link from "next/link";
import { Roboto } from "next/font/google";
import styles from "../styles/custom404.module.scss";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function Custom404() {
  return (
    <Box
      className={styles.main}
      sx={{
        width: "80%",
        height: "100%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        padding: "50px 0",
        marginTop: "70px",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className={styles.main__image}
      >
        <Image
          src={image}
          alt="404 image"
          width={0}
          height={0}
          layout="responsive"
          style={{
            maxWidth: "450px",
            maxHeight: "450px",
            minWidth: "200px",
            minHeight: "200px",
          }}
        ></Image>
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          gap: "10px",
        }}
        className={styles.main__text}
      >
        <Text
          fz={"18px"}
          color="rgba(0,0,0,.84)"
          className={styles.main__text__notFound}
        >
          PAGE NOT FOUND
        </Text>
        <Text
          fz={"7em"}
          w={"50%"}
          lh={"100%"}
          color="rgba(0,0,0,.3)"
          ff={` medium-marketing-display-font,Georgia,Cambria,"Times New Roman",Times,serif`}
          className={styles.main__text__errorCode}
        >
          404
        </Text>
        <Text
          fz={"3em"}
          lh={"100%"}
          w={"70%"}
          ff={`medium-marketing-display-font,Georgia,Cambria,"Times New Roman",Times,serif`}
          className={styles.main__text__headingText}
        >
          Out of nothing, something.
        </Text>
        <Box className={styles.main__text__description}>
          <Text fz={"20px"} lh={"100%"} w={"80%"}>
            You can find (just about) anything on Medium — apparently even a
            page that doesn’t exist. Maybe these stories about finding what you
            didn’t know you were looking for will take you somewhere new?
          </Text>
          <Link
            href="/"
            className={roboto.className}
            style={{ textDecoration: "underline", color: "#000" }}
          >
            Home
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
