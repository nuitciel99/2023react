

function MainComp(props){

    return(

        <>
            <div className='container h100 primary flex-center'>Main Page</div>
            <div className="container">
                <ul className="visualProduct">
                    {
                        props.viData.map(function(item, i){
                            return(
                                <>
                                    <li className="visualItem">
                                        <a href={`/product/${i}`}>
                                            <img src={`./img/${item.img}`} alt="" />
                                            <div className="bodyWrap">
                                                <h2>{item.title}</h2>
                                                <p>{item.content}</p>
                                            </div>
                                        </a>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>

    )
}

export default MainComp