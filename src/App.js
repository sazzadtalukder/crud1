import React, { useState } from 'react';

import './App.css';
import Navbar from './MyComponent/Navbar';
import Form from './MyComponent/Form';
import Home from './MyComponent/Home';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom';

function App() {
  const [data,setData] = useState([]);
  const FetchData=(values)=>{
    setData([...data,values]);
  }
  const Delete=(id)=>{
    let DeletedData =data.filter((eld,indd)=>indd!=id)
    setData(DeletedData);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        

        
        <Routes>
          <Route  path="/" element={<Home datas={data} Deletefn={Delete}/>}></Route>
          <Route  path="/form" element={<Form fetch={FetchData}/>} ></Route>
          
        </Routes>
       
        
        </BrowserRouter>
      
    </div>
  );
}

export default App;
