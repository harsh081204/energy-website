import React from 'react';
import Home from './pages/Home/Home'; // Import the Home component
import './App.css'; // Global styles
import {BrowserRouter,Routes,Route} from 'react-router-dom';


import './styles/global.css';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/gallery' element={<Gallery/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
