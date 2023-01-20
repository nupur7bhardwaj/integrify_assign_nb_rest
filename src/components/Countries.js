import { useState, useEffect } from "react";
import * as React from 'react';
import Article from "./Article";
import Pagination from "./Pagination";



export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [countriesPerPage, setCountriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  

  
  const [searchText, setSearchText] = useState("");
  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctic",
    },
  ];

  const updateCountryPerPage = (resultsPerPage) => {
      setCountriesPerPage(resultsPerPage);
      setCurrentPage(1);
  }


  useEffect(() => {
    document.title = `Countries`;
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
       
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function filterByRegion(region) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  function handleFilterByRegion(e) {
    e.preventDefault();
    filterByRegion();
  }
return (
    <>
      {!countries ? (
        <h1 className="header">
          Loading...
        </h1>
      ) : (
        <section className="container ">
          {/* form */}
          <div className="form-handlesearchcountry">
            <form className= "form"
              onSubmit={handleSearchCountry}
              autoComplete="off"
              
            >
                <span >&#9776;</span>
                <h2 > Countries</h2>
              <input className= "search-input"
                type="text"
                name="search"
                id="search"
                placeholder="Search country by name"
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                
              />
            </form>

            
            
            <form onSubmit={handleFilterByRegion}> 
            <h3 className="form-submit">Select Country by Region</h3>
              <select
                name="filter-by-region"
                id="filter-by-region"
                className="form-submit"
                value={regions.name}
                onChange={(e) => filterByRegion(e.target.value)}
              >
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="table ">
            {countries.slice(((currentPage-1) * countriesPerPage),(currentPage * countriesPerPage)).map((country) => (
              <Article key={country.name.common} {...country} />


              
            ))}

            
            
          </div>
          
          <Pagination totalCountries= {countries.length} countriesPerPage= {countriesPerPage} updateCountryPerPage= {updateCountryPerPage} setCurrentPage= {setCurrentPage} />
        </section>
        
        
        
      )}

      
  
    
  
  </>
)}
