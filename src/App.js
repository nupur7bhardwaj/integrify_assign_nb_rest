import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";
import Error from "./components/Error";
 

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />}> </Route>
        <Route path="/:name" element={<SingleCountry/>}></Route>
        <Route path="/:error404" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
