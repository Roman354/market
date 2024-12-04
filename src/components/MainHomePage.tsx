import "./HomePage.css";
import Slider from "./Slider";
import Catalog from "./Catalog";
import { List } from "../models/type";

interface MainProps {
  listOfBasket: List[];
  setListOfBasket: React.Dispatch<React.SetStateAction<List[]>>;
  favoriteFlag: boolean;
  setFavoriteFlag: React.Dispatch<React.SetStateAction<boolean>>;
  catalogFlag: boolean;
  setCatalogFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Main(props: MainProps): JSX.Element {
  return props.catalogFlag ? (
    <main className="mainContainer">
      <div style={{ display: "flex" }}>
        <div
          className="catalogButton"
          onClick={() => {
            props.setCatalogFlag(false);
          }}
        >
          На Главную
        </div>
        {props.favoriteFlag ? (
          <div
            className="catalogButton"
            onClick={() => {
              props.setFavoriteFlag(false);
              props.setCatalogFlag(true);
            }}
          >
            Каталог
          </div>
        ) : (
          ""
        )}
      </div>
      <Catalog
        listOfBasket={props.listOfBasket}
        setListOfBasket={props.setListOfBasket}
        setFavoriteFlag={props.setFavoriteFlag}
        favoriteFlag={props.favoriteFlag}
      />
    </main>
  ) : (
    <main className="mainContainer">
      <div
        className="catalogButton"
        onClick={() => {
          props.setFavoriteFlag(false);
          props.setCatalogFlag(true);
        }}
      >
        Каталог
      </div>
      <Slider />
    </main>
  );
}
