import { useState } from 'react';
import './style.scss'
import {Routes, Route, Link, NavLink} from 'react-router-dom'

function App() {
  const [isActive, setIsActive] = useState(false);  
  return(

    <div className="App">
      <nav className='header container'>
        <h1 className='logo'>COM</h1>
        <ul className='menu'>
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/company">Company</NavLink></li>
          <li><NavLink to='/product'>Product</NavLink></li>
          <li><NavLink to='/community'>Community</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<div className='container h100 primary'>Main Page</div>}></Route>
        <Route path='/company' element={<div className='container h200 bg com'>Introduction</div>}></Route>
        <Route path='/product' element={<div className='container h200 bg pro'>Introduction Of Product</div>}></Route>
        <Route path='/community' element={<div className='container h200 bg comm'>Community</div>}></Route>
      </Routes>
    </div>
  )
}



export default App;
