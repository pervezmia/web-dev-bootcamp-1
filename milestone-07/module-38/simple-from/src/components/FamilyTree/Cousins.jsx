import React from 'react';
import Special from './Special';
import Friends from './Friends';

const Cousins = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === "Rafsan" && <Special asset={asset}></Special>
            }
            {
                name === "khushi" && <Friends></Friends>
            }
        </div>
    );
};

export default Cousins;