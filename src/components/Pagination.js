import React from 'react'

const Pagination1 = ({countriesPerPage, totalCountries, updateCountryPerPage, setCurrentPage}) => {
    const pageNumbers = [];
    
    const totalPages = Math.ceil(totalCountries/countriesPerPage );


    /* to test the no of pages to be dispalyed in pagination*/

    const test = Array.from({length: totalPages}, ( v,i) => i)

    

    for(let i =1; i <= Math.ceil(totalCountries /countriesPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <div>
        <select value={countriesPerPage} name="page" id="page-select" onChange={(event) => updateCountryPerPage(event.target.value)}>
   
    <option value="5" >5</option>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
    <option value="50">50</option>
</select>

{test.map((item) => {
    return <button type="button" key={`button-${item}`}onClick={() => setCurrentPage(item+1)}>{item+1}</button>
    })}
    </div>
  )
}

export default Pagination1