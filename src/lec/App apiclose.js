import { useEffect, useState } from 'react';
import './App2.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const keyNum = "84b67f0a-5968-42bb-bdfc-4269e9cb92fc";
  const REST_API_KEY = "08d73f76a3f730c0bf7275139fe41bbf";
  const currentPage = 1;
  const listCnt = 20;
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTitle,setSearchTitle] = useState('사자')
  const [modalView,setModalView] = useState(false)
  const [modalViewNum,setModalViewNum] = useState(0)

  const callApi = async (searchTitle) => {
    try {
      setLoading(true)
      const response = await axios.get(`https://dapi.kakao.com/v2/search/image`, {
        params: {
          query: searchTitle,
          // sort:'recency'
          size:listCnt,
          page:currentPage
        },
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`
        },
      })
      console.log(response.data);
      setUserData(response.data.documents)
    } catch (error) {
      console.error("error title : " + error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    callApi(searchTitle)
  }, [])


const searchBtn = ()=>{
  callApi(searchTitle)
}

const handlerKeyPress = (e)=>{
  if(e.key == "Enter"){
    callApi(searchTitle)
  }
}

const handleModal = (num)=>{
  setModalView(true)
  setModalViewNum(num)
}

const modalClose = () => {
  setModalView(false);
};

  return (
    <div className="App">
      <div className="container">
        <h1>다음 검색 api</h1>
      </div>
      
      {
        loading ?
          (<div className='loading'>로딩...</div>) :
          (
            <div className='container'>
              <div className="row mb-3">
               
                <div className="col d-flex gap-1">
                  <input type="text" className="form-control" 
                  onChange={(e)=>{setSearchTitle(e.target.value)}} onKeyPress={handlerKeyPress}/> 
                  <button className='btn btn-primary' style={{width:'100px'}} onClick={searchBtn} >검색</button>
                </div>
                
              </div>
              <div className='px-0 row'>
              {
                userData.map((item, i) => {
                  return (

                      <div className='col-3' key={i}>
                        <img src={item.thumbnail_url} alt="" className='w-100 rounded m-3' onClick={()=>{handleModal(i)}}/>
                      </div>

                    
                  )
                })
              }
            </div>
            </div>
          )
      }

    {
      modalView == true ? 
      <ModalView viewData={userData} modalNum = {modalViewNum} modalClose={modalClose} /> : null
} 

    </div>
  );
}

function ModalView({viewData,modalNum,modalClose}){
  return (
    <div className="modalView">
      <h3>이미지보기</h3>
      
      <img src={viewData[modalNum].image_url} alt="" width="200px" />
      <div className='d-flex justify-content-end'>
      <button className='btn btn-primary'  onClick={modalClose}>닫기</button>
        
      </div>
    </div>
  )
}

export default App;
