import './HomePage.css';
import { useState } from 'react';
import Slider from './Slider';
import Catalog from './Catalog';

export default function Main(): JSX.Element{
    const [catalogFlag, setCatalogFlag] = useState<boolean>(false);
    
    return catalogFlag ? (
        <main className="mainContainer">
            <div className="catalogButton"
                onClick={() => {
                    setCatalogFlag(false)
                }} 
            >
                На Главную
            </div>
            <Catalog/>
        </main>
    ) : (
        <main className="mainContainer">
            <div 
                className="catalogButton"
                onClick={() => {
                    setCatalogFlag(true)
                }} 
            >
                Каталог
            </div>
            <Slider/>
        </main>
    );
};