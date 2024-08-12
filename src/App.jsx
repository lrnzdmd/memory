import { useEffect, useRef, useState } from "react";
import "./App.css";
import fetchData from "./fetchData";
import customData from "./customData";
import CardsList from "./CardsList";
import Header from "./Header";


function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState({score:0, hiscore:0});
  const dataRef = useRef(data);
  const [clickedIds, setClickedIds] = useState([]);


  useEffect(() => {
    async function loadData() {
      const downl = await fetchData();
      setData(downl);
    }
    loadData();

    window.addEventListener("keydown", betterCards);
    
  }, []);

  useEffect(() => {
    dataRef.current = data;

  }, [data]);

  useEffect(() => {
    if (score.score > score.hiscore) {
      setScore(prevScore => ({...prevScore, hiscore: prevScore.score}));
    }

  }, [score]);

  const clickCard = (event) => {
    
    console.log(clickedIds);
    const id = event.target.dataset.id;
    if (!clickedIds.includes(id)) {
      setClickedIds(ls => [...ls, id])
      shuffle();
      setScore(prevScore => ({ ...prevScore, score: prevScore.score + 1 }));
    } else {
      const empty = [];
      shuffle();
      setClickedIds(empty)
      setScore(prevScore => ({...prevScore, score: 0}));
    }
    
  }

 function shuffle() {
   
    setData(shuffleArray(dataRef.current));
 
 }

  function betterCards(event) {
    if (event.key === "F") {
      setData(customData);
      window.removeEventListener("keydown", betterCards);
    }
  }

  function shuffleArray(array) {
    
    const shuffled = [...array];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
      
      const j = Math.floor(Math.random() * (i + 1));
      
     
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
  }


  return (
    <>
      <main>
        <Header score={score}></Header>
        <CardsList data={data} clickCard={clickCard}></CardsList>
      </main>
    </>
  );
}

export default App;
