import Divider from "../Divider/Divider";
import OrderHeader from "../OrderHeader/OrderHeader";
import OrderProductsList, {
  Product,
} from "../OrderProductsList/OrderProductsList";
import ShippingAddress, {
  ShippingInfo,
} from "../ShippingAddress/ShippingAddress";
import Button from "../Button/Button";
import styles from "./OrderCard.module.css";
import Chip from "../Chip/Chip";

type Props = {
  order: Order;
};

export type Order = {
  id: string;
  createdAt: string;
  updatedAt: string;
  products: Product[];
  totalPrice: number;
  currencyUnit: string;
  tags: string[];
  shippingInfo: ShippingInfo;
};

const OrderCard: React.FC<Props> = ({ order }) => {
  const {
    id,
    createdAt,
    updatedAt,
    products,
    totalPrice,
    currencyUnit,
    tags,
    shippingInfo,
  } = order;

  return (
    <div className={styles.orderCard}>
      <OrderHeader orderId={id} createdAt={createdAt} updatedAt={updatedAt} />
      <div className={styles.orderCardContent}>
        <OrderProductsList
          products={products}
          totalPrice={totalPrice}
          currencyUnit={currencyUnit}
        />
        <Divider className={styles.divider} />
        <ShippingAddress shippingInfo={shippingInfo} />
        <div className={styles.orderTags}>
          {tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        <Divider className={styles.divider} />
        <div className={styles.orderActions}>
          <Button>Cancel</Button>
          <Button>Refund</Button>
          <Button>Resend Confirmation</Button>
          <Button>Resend Tracking</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
