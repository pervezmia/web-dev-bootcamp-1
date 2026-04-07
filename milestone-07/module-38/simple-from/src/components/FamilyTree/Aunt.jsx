import React, { use } from "react";
import Cousins from "./Cousins";
import { MoneyContext } from "./FamilyTree";

const Aunt = () => {
    const [money, setMoney] = use(MoneyContext);
    const handleAddMoney = () => {
        setMoney(money + 5000);
    }
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <Cousins name="anam"></Cousins>
        <Cousins name="khushi"></Cousins>
        <button onClick={handleAddMoney}>Add 5000 tk</button>
      </section>
    </div>
  );
};

export default Aunt;
