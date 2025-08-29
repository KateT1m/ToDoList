import { Button } from "antd";

interface IButtonUI {
  title: string;
  activeKey?: string;
  onClick: () => void;
  type?: string;
  isRed?: boolean;
}

export const ButtonUI: React.FC<IButtonUI> = ({
  type,
  activeKey,
  onClick,
  title,
  isRed = false,
}) => {
  return (
    <Button danger={isRed} ghost={isRed} type={activeKey === type ? "primary" : "default"} onClick={onClick}>
      {title}
    </Button>
  );
};
