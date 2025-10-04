import styles from "./Typography.module.scss";

type TypographyProps = {
  variant?: "h5" | "h6" | "body1" | "body2";
} & ParentProps;

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body1",
}) => {
  const variantMapping = {
    h5: "h5",
    h6: "h6",
    body1: "p",
    body2: "p",
  } as const;

  const Component = variantMapping[variant];

  return (
    <Component className={styles[variant]} title={children as string}>
      {children}
    </Component>
  );
};

export default Typography;
