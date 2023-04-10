import React, { useContext } from 'react';
import { MoneyContext } from '../GrandFather/GrandFather';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h1>Uncle</h1>
            <p><small>Money : {money}</small></p>
            <button onClick={() => setMoney(money + 1000)} className='bg-rose-400 text-lg py-3 text-white rounded-md px-3'>Send 1000tk</button>
        </div>
    );
};

export default Uncle;