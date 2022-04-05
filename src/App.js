import React from "react"
import Start from "./components/Start.js"
import Game from './components/Game.js'
import {nanoid} from "nanoid"


export default function App() {
    
    const [gameEnd, setGameEnd] = React.useState(true)
    
    const [newGame, setNewGame] = React.useState(false)
    
    const [quizData, setQuizData] = React.useState({})
    
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }  
       
    React.useEffect(function () {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then(red => red.json())
        .then(data => setQuizData(data.results.map(ques => {
            const options = [...ques.incorrect_answers, ques.correct_answer]
            
            let optionObject = options.map(option => 
                ({text: option, selected: false, id: nanoid()})
            )
            
            const correctOptionId = optionObject[3].id

            shuffleArray(optionObject)
            
            return (
                {...ques, id: nanoid(), options: optionObject, correctOptionId: correctOptionId}
            )
        })))
    }, [newGame])
    
    function startGame () {
        setGameEnd(false)
        setNewGame(false)
    }
    

    
    return(
        <>
            {gameEnd && <Start startGame = {startGame} />}
            {!gameEnd && <Game quizData = {quizData} setNewGame = {setNewGame}  setGameEnd = {setGameEnd} />}
        </>
    )
}