import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  return (
    <CartProvider>
      {cartIsShown && (
        <Cart
          onClose={() => {
            setCartIsShown(false);
          }}
        />
      )}
      <Header
        onCardClick={() => {
          setCartIsShown(true);
        }}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
