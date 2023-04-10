import React, { useContext } from 'react';
import { RingContext } from '../GrandFather/GrandFather';

const Sister = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>Sister : {ring}</h2>
        </div>
    );
};

export default Sister;