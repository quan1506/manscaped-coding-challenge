import styles from "./Chip.module.css";

type Props = {
  children?: React.ReactNode;
};

const Chip: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.chip}>
      <span className={styles.label}>{children}</span>
    </div>
  );
};

export default Chip;
