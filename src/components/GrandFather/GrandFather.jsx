import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

const GrandFather = () => {
    return (
        <div className='grandpa  container mt-24 mx-auto text-2xl text-center'>
            <h2>Grand father</h2>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default GrandFather;