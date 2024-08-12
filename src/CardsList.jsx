import Card from "./Card";
import "./CardsList.css";

function CardsList({data, clickCard}) {
    
    return (
        <section>
            {data.map(character => (<Card key={character.id} data={character} clickCard={clickCard}></Card>))}
        </section>
    )
}

export default CardsList;