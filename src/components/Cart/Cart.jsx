import React from 'react';
import { Toaster } from 'react-hot-toast';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message ;
    if(cart.length === 0){
        message = <p>Please add a item</p>
    }

    return (
        <div>
            <h2>Item added : {cart.length}</h2>
            {message}
            {cart.length > 2 ? <p>please buy more</p> : <p>Goribs</p>}
            {
                cart.map(tshrit => <p className='mb-3 items-center'
                    key={tshrit._id}>
                    {tshrit.name} <button onClick={() => handleRemoveFromCart(tshrit._id)} className='bg-red-500 py-1 px-3 rounded-lg text-white'>X</button>
                    <Toaster/>
                </p>)
            }
            {
                cart.length === 3 && <p>thriple items </p>
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element, compnent
 * 2. ternary operator : 'Condition ' ? 'for true' : 'for false'
 * 3. Logical && : (if the condition is true then the next thing will be    desplayed)
 * 4. Logical || : (if the condition is false then the next thing will be    desplayed)
 * 
 * */ 