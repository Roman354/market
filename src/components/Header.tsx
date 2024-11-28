import './HomePage.css';

export default function Header(): JSX.Element{
    return(
        <header className="headerContainer">
            <h1>My-test-Shop</h1>
            <div className="headerStash">
                <div className="headerIcon headerBasket"></div>
                <div className="headerIcon headerFavorite"></div>
            </div>
        </header>
    )
};
