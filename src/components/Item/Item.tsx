import React from "react";
import { Checkbox, List, type CheckboxChangeEvent } from "antd";

import styles from "./item.module.scss";

interface IItem {
  title: string;
  index: number;
  onChange: (e: CheckboxChangeEvent) => void;
  completed: boolean;
}

export const Item: React.FC<IItem> = ({ title, index, onChange, completed }) => {
  return (
    <List.Item key={index} style={{ justifyContent: "start" }}>
      <Checkbox checked={completed} onChange={onChange} className={styles.checkbox}></Checkbox>
      <p className={`${styles.item} ${(completed && styles.itemDone)}`}>{title}</p>
    </List.Item>
  );
};
