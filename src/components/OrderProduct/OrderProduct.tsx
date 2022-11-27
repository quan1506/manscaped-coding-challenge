import styles from "./OrderProduct.module.css";

type Props = {
  imgSrc: string;
  name: string;
  quantity: number;
  price: number;
  priceUnit: string;
};

const OrderProduct: React.FC<Props> = ({
  imgSrc,
  name,
  quantity,
  price,
  priceUnit,
}) => {
  return (
    <div className={styles.orderProduct}>
      <div>
        <img
          className={styles.productImage}
          src={imgSrc}
          loading="lazy"
          alt="ball"
        />
      </div>
      <div>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productQuantity}>{quantity}</div>
        <div className={styles.productPrice}>{`${priceUnit}${price}`}</div>
      </div>
    </div>
  );
};

export default OrderProduct;
