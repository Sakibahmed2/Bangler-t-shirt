import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshrit from '../tShrirt/tShrit';
import './Home.css'
import Cart from '../Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id)
        if (exist) {
            toast('Already exist')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }

    return (
        <div className='shop-container mt-12 container mx-auto'>
            <div className='item-container grid grid-cols-3 gap-4'>
                {
                    tshirts.map(tshirt => <Tshrit
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshrit>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;