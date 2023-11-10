import { useState } from 'react';

function App() {
  let [listData, setListData] = useState(1);
  return (
    <div className="App">
      <div>{listData}</div>
      <button onClick={()=>{setListData(listData+1)}}>click</button>
    </div>
  );
}

export default App;
