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


  useEffect(() => {
    async function loadData() {
      const downl = await fetchData();
      setData(downl);
    }
    loadData();

    window.addEventListener("keydown", betterCards);
    window.addEventListener("keydown", shuffle);

    
  }, []);

  useEffect(() => {
    dataRef.current = data;

  }, [data]);

 function shuffle(event) {
  if (event.key === "Q") {
    setData(shuffleArray(dataRef.current));
  }
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
      // Genera un indice casuale
      const j = Math.floor(Math.random() * (i + 1));
      
      // Scambia gli elementi
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
  }


  return (
    <>
      <main>
        <Header score={score}></Header>
        <CardsList data={data}></CardsList>
      </main>
    </>
  );
}

export default App;
