import {Link} from 'react-router-dom'
function Card(picture){
    return(
        <div className="card" style={{width: "18rem"}}>
        <img src={picture.img} className="card-img-top" alt="cant find image"/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to='/' className="btn btn-primary">Go somewhere</Link>
        </div>
        </div>


    )
}

export default Card;