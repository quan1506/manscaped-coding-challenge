import styles from "./ShippingAddress.module.css";

type Props = {
  shippingInfo: ShippingInfo;
};

export type ShippingInfo = {
  receiverName: string;
  address: string;
};

const ShippingAddress: React.FC<Props> = ({ shippingInfo }) => {
  const { receiverName, address } = shippingInfo;

  return (
    <div>
      <div className={styles.title}>Shipping Address</div>
      <div className={styles.address}>
        <div>{receiverName} </div>
        <div>{address}</div>
      </div>
    </div>
  );
};

export default ShippingAddress;
