import { Typography } from "antd";
import styles from "./title.module.scss";

const { Title } = Typography;

interface ITitle {
    title: string;
}

export const TitleUI: React.FC<ITitle> = ({title}) => {
  return (
    <div className={styles.titleContainer}>
      <Title>{title}</Title>
    </div>
  );
};
