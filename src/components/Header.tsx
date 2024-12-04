import { List } from "../models/type";
import "./HomePage.css";

interface HeaderProps {
  listOfBasket: List[];
  setBasketFlag: React.Dispatch<React.SetStateAction<boolean>>;
  favoriteFlag: boolean;
  setFavoriteFlag: React.Dispatch<React.SetStateAction<boolean>>;
  catalogFlag: boolean;
  setCatalogFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <header className="headerContainer">
      <h1>My-test-Shop</h1>
      <div className="headerStash">
        <div
          className="headerIcon headerBasket"
          onClick={() => {
            props.setBasketFlag(true);
          }}
        >
          <p className="countOfProducts">
            {props.listOfBasket.reduce(
              (sum, item) => sum + (item.count || 0),
              0
            )}
          </p>
        </div>
        <div
          className="headerIcon headerFavorite"
          onClick={() => {
            props.setFavoriteFlag(true);
            props.setCatalogFlag(true);
          }}
        ></div>
      </div>
    </header>
  );
}
