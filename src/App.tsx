import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/MainHomePage";
import Footer from "./components/Footer";
import { useState } from "react";
import useLocalStorage from "./components/useLocalStorage";
import Basket from "./components/Basket";
import { List } from "./models/type";
import { listOfProduct } from "./models/sources";

function App(): JSX.Element {
  const [basketFlag, setBasketFlag] = useState<boolean>(false);
  const [favoriteFlag, setFavoriteFlag] = useState<boolean>(false);
  const [listOfBasket, setListOfBasket] = useLocalStorage<List[]>("basket", listOfProduct);
  const [catalogFlag, setCatalogFlag] = useState<boolean>(false);

  return (
    <div className="App">
      <Header
        listOfBasket={listOfBasket}
        setBasketFlag={setBasketFlag}
        setFavoriteFlag={setFavoriteFlag}
        favoriteFlag={favoriteFlag}
        catalogFlag={catalogFlag}
        setCatalogFlag={setCatalogFlag}
      />
      <Main
        listOfBasket={listOfBasket}
        setListOfBasket={setListOfBasket}
        setFavoriteFlag={setFavoriteFlag}
        favoriteFlag={favoriteFlag}
        catalogFlag={catalogFlag}
        setCatalogFlag={setCatalogFlag}
      />
      {basketFlag ? (
        <Basket
          setBasketFlag={setBasketFlag}
          listOfBasket={listOfBasket}

          setListOfBasket={setListOfBasket}
        />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}

export default App;
