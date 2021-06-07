import Header from "./components/Layout/Header";
import { useState} from "react"
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown,setcartIsShown]=useState(false)

const showCardHandler=()=>{
  setcartIsShown(true)
}

const hideCardHandler=()=>{
  setcartIsShown(false)
}

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCardHandler}/>}
      <Header onShowCardHandler={showCardHandler}/>
      <main>
        <Meals/>
      </main>
      </CartProvider>
  );
}

export default App;
