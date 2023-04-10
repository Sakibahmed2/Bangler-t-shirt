import React, { useContext } from 'react';
import { RingContext } from '../GrandFather/GrandFather';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>Special person : {ring}</h2>
        </div>
    );
};

export default Special;