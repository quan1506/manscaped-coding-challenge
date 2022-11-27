import { Order } from "./components/OrderCard/OrderCard";
import productImage1 from "./assets/Item1.png";
import productImage2 from "./assets/Item2.png";

const MockOrder: Order = {
  id: "US5426899",
  createdAt: "Mar 6th 2021",
  updatedAt: "Mar 6th 2021",
  products: [
    {
      id: "product-1",
      name: "Ultricies Nibh",
      price: 17.98,
      imgSrc: productImage1,
      quantity: 2,
    },
    {
      id: "product-2",
      name: "Fringilla Sollicitudin Consectetur",
      price: 14.99,
      imgSrc: productImage2,
      quantity: 1,
    },
  ],
  currencyUnit: "$",
  totalPrice: 32.97,
  tags: ["subscription_order", "paid", "unfulfilled"],
  shippingInfo: {
    receiverName: "Ryan Fralick",
    address: "1489 DESERT SPRINGS AVE RICHLAND, Washington 99352 United States",
  },
};

export default MockOrder;
