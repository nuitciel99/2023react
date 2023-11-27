
function MainPage({userData}){

    return(
        <>
            <ul>
                {
                    userData.map(function(item, i){
                    return(
                        <>
                        <li><a href={`/posts/${i}`}>{item.title}</a></li>
                        </>
                    )
                    })
                }
            </ul>
        </>
    )
}

export default MainPage