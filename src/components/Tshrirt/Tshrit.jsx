import React from 'react';

const Tshrit = ({tshirt, handleAddToCart}) => {
    const {picture, price, name} = tshirt;
    return (
        <div className='border-2 rounded-md p-4'>
            <img src={picture} alt="" className='w-60 rounded-md' />
            <h3>{name}</h3>
            <p>Price : ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)} className='bg-sky-600 text-white py-3 px-8 my-auto rounded-md'>Buy now</button>
        </div>
    );
};

export default Tshrit;