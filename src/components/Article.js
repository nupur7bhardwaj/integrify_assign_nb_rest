import React from "react";
import { Link } from "react-router-dom";

export default function Article({
  flags,
  name,
  population,
  region,
  language,
}) {
  return (
    
        <>
        
        <table >
        
        <thead className="table-header">
          
          <tr> 
            <th>Flags &nbsp; &nbsp;</th>
            <th>Name &nbsp; &nbsp;</th>
            <th>Population &nbsp; &nbsp;</th>
            <th>Language &nbsp;&nbsp; </th>
            <th>Region &nbsp; &nbsp;</th>
            <th>  &nbsp;
            </th></tr>
          
          </thead>
          <tbody>
          <tr>
          <td>
          <img src={flags.svg} alt="" className="img" /></td>
         
          <td>{name.common}</td>
          
          <td>{population.toLocaleString()}</td>
          <td>{language}</td>
          <td>{region}</td>
          <td><Link
                to={`/${name.common}`}
                className="link">
              
                &rarr; 
              </Link>
              </td>
              </tr>
              </tbody>
         
              
        
            
        
            
          
        </table>
        
        </>
        
    
  );
}
// <div to={`/${name.common}`}>  </div//
