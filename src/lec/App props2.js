import { useState } from 'react';
import './App.css'

import ModalView from '../components/ModalView.jsx';
function App() {
  const [num, setNum] = useState(0)
  const [data, setData] = useState([
    "1. Lorem ipsum dolor sit amet.",
    "2. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "3. Lorem ipsum dolor sit amet, consectetur adipisicing."
  ])
  const [vModal, setVModal] = useState(false)

  const openList = (i)=>{
    setNum(i)
    setVModal(true)
  }

  const handleClose = ()=>{
    setVModal(false)
  }

  return(
    <div className="App">
      {num}
      <ul className="lists">
        {
          data.map(function(item, i){
            return(
              <>
                <li onClick={()=>{openList(i)}}>{item}</li>
              </>
            )
          })
        }
      </ul>
      <button onClick={()=>{setVModal(!vModal)}}>view</button>

      {
        vModal == true ? <Modal rData = {data} rNum = {num} onClose = {handleClose} /> : null
      }

    </div>
  )
}

// function Modal(props){
//   return (
//     <div className="modal">
//       <h3>Hi</h3>
//       <p>{props.rData[props.rNum]}</p>
//       <div className='btnWrap'>
//         <button>close</button>
//       </div>
//     </div>
//   )
// }

function Modal({rData, rNum, onClose}){
  return (
    <div className="modal">
      <div className='modalBoby'>
        <h3>Hi</h3>
        <p>{rData[rNum]}</p>
      </div>
      
      <div className='btnWrap'>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  )
}

export default App;
