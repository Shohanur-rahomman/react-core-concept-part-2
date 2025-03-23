import { useState } from "react"


export default function Batsmen() {
    const [score, setScore] = useState(0);

    const handleSingle = () => {
        const updataRuns = score + 1;
        setScore(updataRuns);
    }

    const handleFour = () => {
        const update = score + 4;
        setScore(update);
    }
    const handleSix = () => {
        const update = score + 6;
        setScore(update);
    }
    return (
        <div>
            <h2>bangladesh batsmen {score}</h2>
            <button onClick={handleSingle}>single</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}