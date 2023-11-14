import { useState } from 'react';
import './App.css'
import Modal from '../components/Modal.jsx';

function App() {
  const [vData, setVData] = useState([
    "1. Lorem ipsum dolor sit amet.",
    "2. Consequatur culpa totam laudantium earum!",
    "3. Corrupti a eveniet ipsam fugit!"
  ])
  const [num, setNum] = useState(0)
  const [view, setView] = useState(false)
  const [textData, setTextData] = useState("")

  const listView = function(num){
    setNum(num)
    setView(true)
  }

  const handleClose = ()=>{
    setView(false)
  }
  return(
    <div className="App">
      <div className='num'>
        {num}
      </div>
      <ul className='lists'>
      {
        vData.map(function(item, i){
          return(
            <>
              <li onClick={()=>{listView(i)}}>{item}</li>
            </>
          )
        })
      }
      </ul>
      
      {
        view == true ? <Modal vContent={vData[num]} vNum={num} onClose={handleClose} /> : null
      }
      {textData}<br />
      <input type="text" onChange={(e)=>{setTextData(e.target.value)}} value={textData} />
      <button onClick={()=>{
        let copy = [...vData]
        copy.unshift(textData)
        console.log(copy)
        setVData(copy)
      }}>Input</button>
      <button onClick={()=>{setTextData('')}}>Reset</button>

    </div>
  )
}



export default App;
