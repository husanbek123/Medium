import React, { ReactElement } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { useRouter } from "next/router";

type Props = {
  active: number;
  setActive: (current: any) => void;
  Step1: any;
  Step2: any;
  Step3: any;
};

const Stapper: React.FC<Props> = ({
  active,
  setActive,
  Step1,
  Step2,
  Step3,
}) => {
  const router = useRouter();
  const nextStep = () => {
    setActive((current: any) => (current < 3 ? current + 1 : current));
  };
  const prevStep = () =>
    setActive((current: any) => (current > 0 ? current - 1 : current));
  React.useEffect(() => {
    router.push(`?step=${active}`);
  }, [active]);
  return (
    <>
      <Stepper
        color="#1a8917"
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
      >
        <Stepper.Step label="First step" description="Create an account">
          <Step1 />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          <Step2 />
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          <Step3 />
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
};
export default Stapper;
