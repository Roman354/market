import { List } from '../models/type';
import './BasketPage.css';


interface BasketProps {
    setBasketFlag: React.Dispatch<React.SetStateAction<boolean>>;
    setListOfBasket: React.Dispatch<React.SetStateAction<List[]>>;  
    listOfBasket:List[];
    listOfProduct:List[];
  
}

export default function Basket(props: BasketProps){

    return(
        <div className="basketBackground" onClick={()=>{props.setBasketFlag(false)}}>
            <div className="basketContainer" onClick={(e)=> e.stopPropagation()}>
                <div className='basketHeader'>
                    {"Колличество товара: "+ props.listOfBasket.reduce((sum, item) => sum + (item.count || 0), 0)}
                    { " ~"+props.listOfBasket.reduce((sum, item) => item.count > 0 ? sum + item.weight*item.count : sum, 0).toFixed(2)+ "кг"}
                </div>
                <div className='basketMain'>
                    {props.listOfBasket.find(item => item.count !== undefined && item.count > 0) ? 
                    <FullBasket 
                        listOfBasket={props.listOfBasket}
                        setListOfBasket={props.setListOfBasket}
                    /> : 
                       <EmptyBasket
                            setBasketFlag={props.setBasketFlag}

                       />
                    }
                </div>
                <div className='basketFooter'>

                {props.listOfBasket.find(item => item.count !== undefined && item.count > 0) ? 
                    <div className='registrationContainer'>
                        <div className='registrationPrice'>Цена заказа: {props.listOfBasket.reduce((sum, item) => item.count > 0 ? sum + item.price*item.count : sum, 0).toFixed(0) + "р"}</div>
                        <button className='registrationButton' onClick={()=>{
                            props.setListOfBasket(props.listOfProduct)
                            props.setBasketFlag(false)
                        }}>Оформить заказ</button>
                    </div>
                    : ""

                }
                </div>
            </div>
        </div>
    )
};

function EmptyBasket(props: { setBasketFlag: React.Dispatch<React.SetStateAction<boolean>> }){
    return(
        <>
            <p className="emptyBasketText" > 
                Похоже в вашей корзине пусто, добавьте товар!
            </p>
            <button className="buttonReturnToShop" onClick={()=>{props.setBasketFlag(false)}}>
                Вернуться к покупкам
            </button>
       </>
    )
}
function FullBasket(props:{listOfBasket: List[],setListOfBasket:React.Dispatch<React.SetStateAction<List[]>> }){
    function addToBasket(id: number){
        let tempArr = props.listOfBasket.map((item) =>
            item.id === id ? { ...item, count: (item.count ?? 0) + 1 } : item
        );
        props.setListOfBasket(tempArr);
    }

    function decrementFromBasket(id: number){
        let tempArr = props.listOfBasket.map((item) =>
            item.id === id ? { ...item, count: (item.count ?? 1) - 1 } : item
        );
        props.setListOfBasket(tempArr);
    }

   

    return(
        <>
            <div className="productsBasketContainer">
            {props.listOfBasket.map((product) => (
                    product.count && product.count > 0 ? (
                        <div key={product.id} className="productBasketContainer">
                            <div className="imgBasketContainer">
                              
                                <div className="imgInBasket" style={{ backgroundImage: `url(${product.img})` }} />
                                <p className="nameProductInBasket">{product.name} {product.count + "x"}</p>
                            </div>
                
                            <div style={{width:"30%"}}>
                                {product.price*product.count + "р / " + (product.weight*product.count).toFixed(2)+ product.unitOfMass }
                            </div>
                            <div className='buttonsCountInBasket'>
                                <button
                                        className='buttonChangeBasket'
                                        onClick={()=> {
                                        decrementFromBasket(product.id)
                                        }}
                                    >-</button>
                                <div className='countInBasket'>{props.listOfBasket.find(a => product.id === a.id)?.count}</div>   
                                <button
                                        className='buttonChangeBasket'
                                    onClick={()=> {
                                        addToBasket(product.id)
                                    }}
                                >+</button>
                            </div> 
                        </div>
                    ) : ""
                ))}
            </div>
       </>
    )
}