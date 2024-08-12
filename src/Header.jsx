import Score from "./Score.jsx";
import "./Header.css"

function Header({score}) {
    return (
        <header>
            <h1>Memory Game</h1>
            <Score score={score}></Score>
        </header>
    )
}


export default Header;