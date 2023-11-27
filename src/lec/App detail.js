import { useState } from 'react';
import './style.scss'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import { vData } from '../data.js';
import ViewProduct from '../components/product/ViewProduct.js';
import MainComp from '../components/main/MainComp.js';

function App() {
  const [isActive, setIsActive] = useState(false);  
  const [viData, setViData] = useState(vData)
  return(

    <div className="App">
      <nav className='header container'>
        <h1 className='logo'>COM</h1>
        <ul className='menu'>
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/company">Company</NavLink></li>
          <li><NavLink to='/product/0'>Product</NavLink></li>
          <li><NavLink to='/community'>Community</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<MainComp viData={viData} />}></Route>
        <Route path='/company' element={<div className='container h200 bg com flex-center'>Introduction</div>}></Route>
        <Route path='/product/:item' element={<ViewProduct viData={viData}/>}></Route>
        <Route path='/community' element={<div className='container h200 bg comm flex-center'>Community</div>}></Route>
      </Routes>
    </div>
  )
}



export default App;
