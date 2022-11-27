import MockOrder from "./mockOrder";
import OrderCard from "./components/OrderCard/OrderCard";

function App() {
  return (
    <div>
      <OrderCard order={MockOrder} />
    </div>
  );
}

export default App;
