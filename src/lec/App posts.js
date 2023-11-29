import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import MainPage from '../components/product/MainPage';
import ViewPosts from '../components/posts/ViewPosts';

function App() {
  // useEffect(function(){})
  useEffect(()=>{
    setTimeout(()=>{setBtn(false)},3000);
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      console.log(res.data);
      setUserData(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  const [btn, setBtn] = useState(true)
  const [userData, setUserData] = useState([])
  
  return(

    <div className="App">
      <div className={`box ${ btn ? "view" : ""}`}>
        Hello
      </div>

      <button onClick={()=>{setBtn(!btn)}}>Input</button>
      <a href="/posts">DATA</a> | <a href="/">home</a>
      <Routes>
        <Route path='/' element={<MainPage userData = {userData} />} />
        <Route path='/posts/:id' element={<ViewPosts userData = {userData} />} />
      </Routes>
    </div>
  )
}



export default App;
