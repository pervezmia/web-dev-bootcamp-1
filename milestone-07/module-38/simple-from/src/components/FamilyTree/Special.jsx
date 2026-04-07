import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({asset}) => {
    const newAsset = useContext(AssetContext);
    console.log("new assets", newAsset);
    return (
        <div>
            <h3>Special</h3>
            <h4>{asset}</h4>
            <p>new assets {newAsset}</p>
        </div>
    );
};

export default Special;