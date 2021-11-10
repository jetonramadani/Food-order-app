import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  return (
    <>
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
    </>
  );
}

export default App;
