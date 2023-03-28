import goof from '../Images/goofball.jpeg';

function gallery(){
    return(
        <div>
            <img src={goof}></img>


            <a href={goof} download>test </a>
        </div>


    )
}
export default gallery;