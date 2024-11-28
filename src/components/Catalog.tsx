import './CatalogPage.css';


type List ={
    id: number,
    name:string,
    img: string,
}

const listOfProduct: List[]  = [
    {id: 1, name: "Сыр", img:  require('../assets/images/product/cheese.png') },
    {id: 2, name: "Хлеб", img:  require('../assets/images/product/bread.png') },
    {id: 3, name: "Яйца", img:  require('../assets/images/product/eggs.jpg') },
    {id: 4, name: "Мороженое", img:  require('../assets/images/product/iceCream.png') },
    {id: 5, name: "Майонез", img:  require('../assets/images/product/mayonnaise.png') },
    {id: 6, name: "Молоко", img:  require('../assets/images/product/milk.jpg') },
    {id: 7, name: "Лук", img:  require('../assets/images/product/onion.png') },
    {id: 8, name: "Колбаса", img:  require('../assets/images/product/sausage.jpg') },
    {id: 9, name: "Помидоры", img:  require('../assets/images/product/tomato.jpg') },
]

export default function Catalog(): JSX.Element{
  
    return (
        <div className='catalogContainer'>
            {listOfProduct.map(product => 
                <div key={product.id} className="productContainer" >
                    <div className="img" style={{backgroundImage: `url(${product.img})`}} />
                    <div>
                        {product.name}
                    </div>
                </div>
            )}
        </div>
    )
    
   
};