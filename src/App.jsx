import { useEffect, useState } from "react";
import "./App.css";
import fetchData from "./fetchData";
import customData from "./customData";
import CardsList from "./CardsList";
import Header from "./Header";


function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState({score:0, hiscore:0});

  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      setData(data);
    }
    loadData();
    window.addEventListener("keydown", handleKeyPress);
  }, []);

  function handleKeyPress(event) {
    if (event.key === "F") {
      setData(customData);
    }
  }

  return (
    <>
      <main>
        <Header></Header>
        <CardsList data={data}></CardsList>
      </main>
    </>
  );
}

export default App;
