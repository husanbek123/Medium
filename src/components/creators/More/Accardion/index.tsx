import React from "react";
import styles from "./index.module.scss";
import { Group, Avatar, Text, Accordion } from "@mantine/core";

type Props = {};

const charactersList = [
  {
    id: "How do I start writing on Medium?",
    label: "How do I start writing on Medium?",
    content:
      "First, make a free account. Then, to create a story, click on your profile picture in the top-right corner of the page, then “Write a Story.”",
  },

  {
    id: "How can I make money writing on Medium?",
    label: "How can I make money writing on Medium?",
    content:
      "If you join the Medium Partner Program, you can earn money based on how much time members spend reading your work and whenever you convert non-paying readers into members.",
  },

  {
    id: "Who writes on Medium?",
    label: "Who writes on Medium?",
    content:
      "Anyone can write on Medium. Whether you’ve never written before or are ready to create a full publication, it’s easy to get started and we allow you to focus more on big ideas and less on driving clicks. With the option to earn for your work, you can also be directly rewarded for the value you provide readers.",
  },
];

interface AccordionLabelProps {
  label: string;
}

function AccordionLabel({ label }: AccordionLabelProps) {
  return (
    <Group noWrap className={styles.label}>
      <div>
        <Text>{label}</Text>
      </div>
    </Group>
  );
}

function AccardionBody() {
  const items = charactersList.map((item) => (
    <Accordion.Item
      value={item.id}
      key={item.label}
      sx={{
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      className={styles.item}
    >
      <Accordion.Control
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="default">
      {items}
    </Accordion>
  );
}

export default function WritingAccardion({}: Props) {
  return (
    <div className={styles.component}>
      <AccardionBody />
    </div>
  );
}
