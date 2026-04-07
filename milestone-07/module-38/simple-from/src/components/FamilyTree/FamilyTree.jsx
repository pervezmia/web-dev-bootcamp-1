import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const asset = "diamond";
  const newAsset = "gold";
  const [money, setMoney] = useState(0);

  return (
    <div className="family-tree">
      <h3>this is family tree</h3>

      <h5>total family money: {money}</h5>
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;

/* 

*1. create a context using createContext with a default value
* make sure you export the context to be used in other files
*  
*/
