import styles from "../Divider/Divider.module.css";

type Props = {
  className?: string;
};

const Divider: React.FC<Props> = ({ className }) => {
  return <hr className={`${styles.divider} ${className ? className : ""}`} />;
};

export default Divider;
