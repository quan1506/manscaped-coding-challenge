import styles from "./OrderHeader.module.css";

type Props = {
  orderId: string;
  createdAt: string;
  updatedAt: string;
};

const OrderHeader: React.FC<Props> = ({ orderId, createdAt, updatedAt }) => {
  return (
    <div className={styles.orderHeader}>
      <div className={styles.title}>
        <span>Order</span>
        <span>{orderId}</span>
      </div>
      <div className={styles.date}>
        <span>Created on {createdAt}</span>
        <span>Last updated on {updatedAt}</span>
      </div>
    </div>
  );
};

export default OrderHeader;
