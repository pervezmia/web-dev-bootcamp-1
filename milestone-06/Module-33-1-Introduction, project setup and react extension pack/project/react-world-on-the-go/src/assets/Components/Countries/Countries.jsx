import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);
    
    const handleVisitedCountries = (country) => {
        // console.log("handle visited country clicked",country);
        const newVisitedCountries = [...visitedCountries, country];
        console.log(newVisitedCountries);
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlags)
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    
    return (
        <div className=''>

            <h1>My Visited countries: {countries.length}</h1>
            <h3>Total country Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlag.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key = {country.cca3.cca3} > {country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlag.map((flag, index)=> <img key={index} src={flag}></img>)
                }
            </div>
        <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country= {country}
                    handleVisitedCountries = {handleVisitedCountries}
                    handleVisitedFlag = {handleVisitedFlag}
                    ></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;