import React from 'react';
import Cousins from './Cousins';

const Uncle = () => {
    return (
        <div>
            <h3>Uncles</h3>
            <section className='flex'>
                <Cousins name = "Rafsan"></Cousins>
                <Cousins name="Sanzid"></Cousins>
            </section>
        </div>
    );
};

export default Uncle;