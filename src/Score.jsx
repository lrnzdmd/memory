import "./Score.css";

function Score({score}) {
    return (
        <div className="score">
            <h2>Score: {score.score} </h2>
            <h2>Hi-Score: {score.hiscore}</h2>
        </div>
    )
}

export default Score;