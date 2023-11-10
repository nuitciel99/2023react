import { useState } from 'react';
import './App.css'

function App() {
  let [data, setData] = useState(1);
  let [listData, setListData] = useState(['list1', 'list2', 'list3']);
  let [mView, setMView] = useState(false);
  let today = new Date();
  let time = {
    year:today.getFullYear(),
    month:today.getMonth()+1,
    date:today.getDate()
  }
  return (
    <div className="App">
      <div>{data}</div>
      <button onClick={()=>{setData(data + 1)}}>click</button>
      {
        listData.map(function(item, i){
          return(
            <>
              <div className='flex'>
                <div className='list'>{item}</div>
                <div>{time.year}/{time.month}/{time.date}</div>
              </div>
            </>
          )
        })
      }
      {/* Component */}
      <button onClick={()=>{setMView(!mView)}}>Modal1</button>
      {
        mView == true ? <Modal></Modal> : null
      }
    </div>
  );
}

function Modal(){
  return(
    <>
    <div className='modal'>
      <h3>title</h3>
      <p>hello</p>
    </div>
    </>
  )
}


export default App;
