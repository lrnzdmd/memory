import "./Card.css"

function Card({data}) {
    return (
        <div className="card">
            <img src={data.imgurl} alt={data.name + "image"} />
            <h3>{data.name}</h3>
        </div>
    )
}

export default Card;