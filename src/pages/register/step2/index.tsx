import styles from "./index.module.scss";
import { Group, Input } from "@mantine/core";
import { useForm } from "@mantine/form";
import Button from "@/components/button";
import { useCookies } from "react-cookie";
import { useToken } from "@/utils/store";
import React from "react";
export default function Step2() {
  const [cookies, _] = useCookies(["data"]);
  const form = useForm({
    initialValues: { name: "" },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });
  React.useEffect(() => {
    form.setValues({ name: cookies.data.username });
    return () => {
      form.reset();
    };
  }, [cookies?.data?.email]);
  return (
    <div className={styles.step}>
      <div
        style={{
          fontFamily: ` medium-marketing-display-font,Georgia,Cambria,"Times New Roman",Times,serif`,
        }}
      >
        <h2>Almost there!</h2>
        <p>Finish creating your account for the full Medium experience.</p>
      </div>
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        style={{
          fontFamily: `medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif`,
        }}
      >
        <div className={styles.container__fullnameInput}>
          <p className={styles.container__label}>Full name</p>
          <Input
            classNames={{ wrapper: styles.container__fullnameInput__input }}
            variant="unstyled"
            styles={{ wrapper: { borderBottom: "1px solid gray" } }}
            {...form.getInputProps("name")}
          />
        </div>
        <div className={styles.container__email}>
          <p className={styles.container__label}>Your email</p>
          <b className={styles.container__email__email}>{cookies.data.email}</b>
        </div>
        <Group position="center" mt="md">
          <Button padding="10px 15px" type="submit" background="#1a8917">
            Create account
          </Button>
        </Group>
      </form>
    </div>
  );
}
