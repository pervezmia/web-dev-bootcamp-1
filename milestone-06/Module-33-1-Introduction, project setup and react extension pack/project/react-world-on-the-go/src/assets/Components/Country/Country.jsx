import React, { useState } from 'react';
import "./Country.css";


const Country = ({country}) => {
    // console.log(country.area.area);

    // const [currencyArr] = Object.values(country.currencies.currencies)
    // const currency = currencyArr[0];
    // console.log(currency);
    // console.log(currency?.name);

    const [Visited, setVisited] = useState(false);
    const handleVisited = () => {
        //basic system

        // if(Visited){
        //     setVisited(false);
        // }
        // else {
        //     setVisited(true);
        // }

        // turnery operator 

        // setVisited(Visited? false : true);

        //third system
        setVisited(!Visited)

    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Common Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}, This is {country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited} className='btn'>
                {Visited? "visited" : "Not visited"}
            </button>
        </div>
    );
};

export default Country;