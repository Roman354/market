import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/MainHomePage';
import Footer from './components/Footer';
import { useState } from 'react';
import useLocalStorage from './components/useLocalStorage';
import Basket from './components/Basket';
import { List } from './models/type';


const listOfProduct: List[]  = [
    {id: 1, price:180, weight:0.5,unitOfMass:"кг", name: "Сыр", img:  require('./assets/images/product/cheese.png') , count:0, favorite:false},
    {id: 2, price:70, weight:0.2,unitOfMass:"кг", name: "Хлеб", img:  require('./assets/images/product/bread.png') , count:0, favorite:false},
    {id: 3, price:100, weight:0.6,unitOfMass:"кг", name: "Яйца", img:  require('./assets/images/product/eggs.jpg') , count:0, favorite:false},
    {id: 4, price:120, weight:0.2,unitOfMass:"кг", name: "Мороженое", img:  require('./assets/images/product/iceCream.png') , count:0, favorite:false},
    {id: 5, price:105, weight:0.3,unitOfMass:"л", name: "Майонез", img:  require('./assets/images/product/mayonnaise.png') , count:0, favorite:false},
    {id: 6, price:110, weight:1.5,unitOfMass:"л", name: "Молоко", img:  require('./assets/images/product/milk.jpg') , count:0, favorite:false},
    {id: 7, price:44, weight:1.0,unitOfMass:"кг", name: "Лук", img:  require('./assets/images/product/onion.png') , count:0, favorite:false},
    {id: 8, price:220, weight:0.7,unitOfMass:"кг", name: "Колбаса", img:  require('./assets/images/product/sausage.jpg') , count:0, favorite:false},
    {id: 9, price:66, weight:1.0,unitOfMass:"кг", name: "Огурцы", img:  require('./assets/images/product/cucumber.jpg') , count:0, favorite:false},
    {id: 10, price:162, weight:0.3,unitOfMass:"кг", name: "Чипсы", img:  require('./assets/images/product/chips.png') , count:0, favorite:false},
    {id: 11, price:55, weight:1.0,unitOfMass:"кг", name: "Морковь", img:  require('./assets/images/product/carrot.jpg') , count:0, favorite:false},
    {id: 12, price:120, weight:0.5,unitOfMass:"л", name: "Йогурт", img:  require('./assets/images/product/yogurt.jpg') , count:0, favorite:false},
    {id: 13, price:80, weight:0.3,unitOfMass:"кг", name: "Шоколад", img:  require('./assets/images/product/chocolate.jpg') , count:0, favorite:false},
    {id: 14, price:150, weight:0.5,unitOfMass:"кг", name: "Рыба", img:  require('./assets/images/product/fish.png') , count:0, favorite:false},
    {id: 15, price:55, weight:1.0,unitOfMass:"кг", name: "Картошка", img:  require('./assets/images/product/potato.jpg') , count:0, favorite:false},
    {id: 16, price:230, weight:0.5,unitOfMass:"кг", name: "Кофе", img:  require('./assets/images/product/coffee.png') , count:0, favorite:false},
    {id: 17, price:60, weight:0.7,unitOfMass:"кг", name: "Макароны", img:  require('./assets/images/product/pasta.jpg') , count:0, favorite:false},
    {id: 18, price:58, weight:0.8,unitOfMass:"кг", name: "Гречка", img:  require('./assets/images/product/buckwheat.png') , count:0, favorite:false},
    {id: 19, price:108, weight:1.0,unitOfMass:"кг", name: "Джем", img:  require('./assets/images/product/jam.jpeg') , count:0, favorite:false},
];

function App(): JSX.Element{
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
            {basketFlag ? <Basket 
                setBasketFlag={setBasketFlag}
                listOfBasket={listOfBasket}
                listOfProduct={listOfProduct}
                setListOfBasket={setListOfBasket}
            />
            : ""}
            <Footer/>  
        </div>
    );
}

export default App;
