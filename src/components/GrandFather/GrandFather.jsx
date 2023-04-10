import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0)

const GrandFather = () => {
    const [money, setMoney] = useState(0)

    return (
        <div className='grandpa  container mt-24 mx-auto text-2xl text-center'>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <h2>Grand father</h2>
                    <p>Has money : {money}</p>
                    <section className='flex'>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandFather;


/**
 * 1. create a context and export
 * 2. create a providor and pass the value
 * 3. use useContext to receive the value
 * */ 