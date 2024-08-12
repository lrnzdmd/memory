import Card from "./Card";
import "./CardsList.css";

function CardsList({data}) {
    console.log(data)
    return (
        <section>
            {data.map(character => (<Card key={character.id} data={character}></Card>))}
        </section>
    )
}

export default CardsList;