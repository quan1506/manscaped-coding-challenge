import OrderProduct from "../OrderProduct/OrderProduct";
import styles from "./OrderProductsList.module.css";

type Props = {
  products: Product[];
  totalPrice: number;
  currencyUnit: string;
};

export type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  imgSrc: string;
};

const OrderProductsList: React.FC<Props> = ({
  products,
  totalPrice,
  currencyUnit,
}) => {
  return (
    <div>
      <div className={styles.header}>
        <div />
        <div>Product</div>
        <div>Quantity</div>
        <div>Price</div>
      </div>
      <div className={styles.content}>
        {products.map(({ id, imgSrc, name, price, quantity }) => {
          return (
            <OrderProduct
              key={id}
              imgSrc={imgSrc}
              name={name}
              quantity={quantity}
              price={price}
              priceUnit={currencyUnit}
            />
          );
        })}
      </div>
      <div className={styles.footer}>
        <div className={styles.totalTitle}>Total:</div>
        <div />
        <div />
        <div
          className={styles.totalPrice}
        >{`${currencyUnit}${totalPrice}`}</div>
      </div>
    </div>
  );
};

export default OrderProductsList;
