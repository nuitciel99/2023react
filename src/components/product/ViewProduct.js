import { useParams } from "react-router-dom";

function ViewProduct(props){
    const { item } = useParams(); 
    return (
        <>
            <div className="container h200 bg pro flex-center">Introduction</div>
            <div className="container">
                <div>
                    <img src={`../img/${props.viData[item].img}`} alt="" />
                    <h2>{props.viData[0].title}</h2>
                    <p>{props.viData[0].content}</p>
                </div>
            </div>
        </>
    )
}

export default ViewProduct;