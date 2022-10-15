import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Favourites from "./components/pages/Favourites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState();
  const [cartOpened, setCartOpened] = React.useState(false);

  let cartPrice = cartItems
    .map((item) => item.price)
    .reduce((acc, num) => acc + num, 0);

  let headerPrice = cartPrice + cartPrice * 0.05;

  React.useEffect(() => {
    axios
      .get("https://63453b8cdcae733e8fecc9b7.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://63453b8cdcae733e8fecc9b7.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://63453b8cdcae733e8fecc9b7.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://63453b8cdcae733e8fecc9b7.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63453b8cdcae733e8fecc9b7.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToFavourites = (obj) => {
    setFavourites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onRemove={onRemoveItem}
          onClose={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} sum={headerPrice} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              setSearchValue={setSearchValue}
              items={items}
              addToFavourites={addToFavourites}
              onAddToCart={onAddToCart}
            />
          }
        />

        <Route
          path="/favourites"
          element={
            <Favourites
              items={favourites}
              onAddToCart={onAddToCart}
              addToFavourites={addToFavourites}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
