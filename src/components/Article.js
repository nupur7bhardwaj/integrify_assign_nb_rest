import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
        
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        
      <TableHead>
          <TableRow>
            <TableCell>Flags &nbsp; &nbsp;</TableCell>
            <TableCell>Name &nbsp; &nbsp;</TableCell>
            <TableCell>Population &nbsp; &nbsp;</TableCell>
            <TableCell>Language &nbsp;&nbsp; </TableCell>
            <TableCell>Region &nbsp; &nbsp;</TableCell>
            <TableCell>  &nbsp;
            </TableCell>
          </TableRow>
          
      </TableHead>

          <TableBody>
            <TableRow>
              <TableCell><img src={flags.svg} alt="" className="img" /></TableCell>
              <TableCell>{name.common}</TableCell>
              <TableCell>{population.toLocaleString()}</TableCell>
              <TableCell>{language}</TableCell>
              <TableCell>{region}</TableCell>
              <TableCell><Link to={`/${name.common}`}className="link"> &rarr; 
              </Link>
              </TableCell>
           </TableRow>
          </TableBody>
      </Table>
         
        </TableContainer>
        
        
        
    </>     
        
  );
}
        
        
          
    
 