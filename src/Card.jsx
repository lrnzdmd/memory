import "./Card.css"

function Card({data, clickCard}) {
    return (
        <div className="card" data-id={data.id} onClick={clickCard}>
            <img src={data.imgurl} alt={data.name + "image"} data-id={data.id}/>
            <h3 data-id={data.id}>{data.name}</h3>
        </div>
    )
}

export default Card;