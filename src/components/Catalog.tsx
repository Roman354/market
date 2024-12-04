import { List } from "../models/type";
import "./CatalogPage.css";

interface CatalogProps {
  listOfBasket: List[];
  setListOfBasket: React.Dispatch<React.SetStateAction<List[]>>;
  favoriteFlag: boolean;
  setFavoriteFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Catalog(props: CatalogProps): JSX.Element {
  function addToBasket(id: number) {
    let tempArr = props.listOfBasket.map((item) =>
      item.id === id ? { ...item, count: (item.count ?? 0) + 1 } : item
    );
    props.setListOfBasket(tempArr);
  }

  function decrementFromBasket(id: number) {
    let tempArr = props.listOfBasket.map((item) =>
      item.id === id ? { ...item, count: (item.count ?? 1) - 1 } : item
    );
    props.setListOfBasket(tempArr);
  }

  function toggleFavorite(id: number) {
    let tempArr = props.listOfBasket.map((item) =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );
    props.setListOfBasket(tempArr);
  }
  const filteredProducts = props.favoriteFlag
    ? props.listOfBasket.filter((product) => product.favorite)
    : props.listOfBasket;

  return (
    <div className="catalogContainer">
      {filteredProducts.map((product) => (
        <div key={product.id} className="productContainer">
          <div>{product.name}</div>
          <div
            onClick={() => {
              toggleFavorite(product.id);
            }}
            className={
              props.listOfBasket.find((a) => product.id === a.id)?.favorite
                ? "favorite"
                : "defaultFavorite"
            }
          ></div>
          <div
            className="img"
            style={{ backgroundImage: `url(${product.img})` }}
          />
          <div>
            {product.price + "р / " + product.weight + product.unitOfMass}
          </div>
          <div style={{ width: "100%", height: " 35px" }}>
            {props.listOfBasket.find((a) => product.id === a.id)?.count ? (
              <div className="countBasketContainer">
                <button
                  className="buttonChangeBasket"
                  onClick={() => {
                    decrementFromBasket(product.id);
                  }}
                >
                  -
                </button>
                <div className="countInBasket">
                  {props.listOfBasket.find((a) => product.id === a.id)?.count}
                </div>
                <button
                  className="buttonChangeBasket"
                  onClick={() => {
                    addToBasket(product.id);
                  }}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="buttonInBasket"
                onClick={() => {
                  addToBasket(product.id);
                }}
              >
                В корзину
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
