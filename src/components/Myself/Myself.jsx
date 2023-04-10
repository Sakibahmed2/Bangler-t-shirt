import React, { useContext } from 'react';
import Special from '../Special/Special';
import { MoneyContext } from '../GrandFather/GrandFather';

const Myself = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Myself</h2>
            <p><small>Money : {money}</small></p>
            <Special></Special>
        </div>
    );
};

export default Myself;