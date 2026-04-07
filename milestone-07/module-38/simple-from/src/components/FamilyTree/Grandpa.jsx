import React from 'react';
import Dad from './Dad';
import Aunt from './Aunt';
import Uncle from './Uncle';

const Grandpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Dad asset ={asset}></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;