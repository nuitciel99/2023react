import { useState } from 'react';
import './App.css'
import {Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./assets/css/style.scss"

import NavBar from './components/NavBar.jsx';
import Visual from './components/home/Visual.jsx';
import GalleryList from './components/home/GalleryList.jsx';

function App() {

  


  return(
    <div className="App">

      <NavBar />
      <Visual />
      <GalleryList />
    

    </div>
  )
}



export default App;
