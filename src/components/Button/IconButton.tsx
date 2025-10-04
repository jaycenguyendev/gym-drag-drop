import styles from "./Button.module.scss";

export type IconButtonVariant = "contained" | "icon";

type ButtonProps = {
  onClick?: () => void;
  icon: string;
  variant?: IconButtonVariant;
};

const IconButton: React.FC<ButtonProps> = ({
  onClick,
  icon,
  variant = "icon",
}) => {
  return (
    <button
      className={`${styles.iconButton} ${styles[variant]}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
