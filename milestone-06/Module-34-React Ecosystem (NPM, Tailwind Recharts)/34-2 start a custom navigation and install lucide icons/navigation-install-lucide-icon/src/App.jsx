import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/Pricing/PricingOptions";

const pricingPromise = fetch ("PricingData.json").then(res => res.json());


function App() {
  return (
    <>
      <header>
          <NavBar></NavBar>
          {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense fallback = {<span className="loading loading-bars loading-xl"></span>}>
          <PricingOptions pricingPromise = {pricingPromise}></PricingOptions>
        </Suspense>
      </main>
      


    </>
  );
}

export default App;
