import { useState } from 'react';

import '/src/Day-03/Prodstyle.css'
function Product(props) {
    function Click(name){
        alert(`${name} order successful`)
    }
    function Clicked(){
        alert(`order canceal`)
    }
    const [count, setCount ] =useState(0)
    return (
        <div >
            <div className="Continer">
                <div className="productbox">
                    <img src={props.image} alt="image001" className="image" />
                    <h1>productes</h1>
                    <h5>Product Name:{props.name}</h5>
                    <h5>Product Price:{props.price}</h5>
                    <button onClick={()=> setCount(count+1)} id='countbutton1'>➕</button>
                    <span>{count}</span>
                     <button onClick={()=> setCount(count-1)}id='countbutton2'>➖</button>
                    <div>
                    <button onClick={()=>Click("Headphone")} id='Button'>Buy</button>
                    <button onClick={Clicked} id='Button2'>Canceal</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product