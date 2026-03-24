import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/Pricing/PricingOptions";
import ResultCharts from "./components/resultCharts/ResultCharts";
import { AreaChart } from "recharts";
import DashedLineChart from "./components/area Chart/DashedLineChart";
import CardinalAreaChart from "./components/CardinalAreaChart/CardinalAreaChart";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

const pricingPromise = fetch ("PricingData.json").then(res => res.json());
const marksPromise = axios.get("MarksDataJson.json");


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


        <ResultCharts></ResultCharts>
        <DashedLineChart></DashedLineChart>
        <CardinalAreaChart></CardinalAreaChart>
        <Suspense fallback = {<span className="loading loading-bars loading-xl"></span>} >
          <MarksChart marksPromise = {marksPromise}></MarksChart>
        </Suspense>


      </main>
      


    </>
  );
}

export default App;
