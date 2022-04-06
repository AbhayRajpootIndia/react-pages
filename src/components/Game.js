import React from "react"
import Question from "./Question.js"

export default function Game (props) { 
    
    const [questions, setQuestions] = React.useState([])   
    
    const [submitted, setSubmitted] = React.useState(0)
    
    React.useEffect(function () {
        setQuestions(props.quizData)

    }, [props.quizData])
    
    function selectOption(id, questionId) {
        if (submitted === 0) {
            setQuestions(prev => (prev.map(ques => {
                return(
                    ques.id === questionId ? 
                    {...ques, options: ques.options.map(option => {
                        return (
                            option.id === id ? {...option, selected: true} : {...option, selected: false}
                        )
                    })} : ques
                )
            })))
        }
    }    
    
    const [questionComponents, setQuestionComponents] = React.useState([])
    
    function mapComponents() {
        setQuestionComponents(questions.map(question => {
            return(
                <Question key = {question.question} question = {question} selectOption = {selectOption} submitted = {submitted} submit = {setSubmitted} />
            )
        }))
    }
       
    React.useEffect(function () {
        if (questions.length) 
            mapComponents()
    }, [questions])
    
    const [count, setCount] = React.useState(0)
    
    function submit() {
        if (submitted)
           return
            
        setSubmitted(prev => (prev + 1))
        setQuestions(prev => prev.map(item => item))
        
        
        for (let i = 0; i < questions.length; i++) {
            questions[i].options.map(option => {
                if (option.selected && option.id === questions[i].correctOptionId)
                    setCount(count => (count + 1))
                return option
            })
        }
        
        console.log(count)
    }
    
    function restart() {
        props.setNewGame(prev => (!prev))
        setSubmitted(0)
    }

    return (
        <div className="game-page"> 
            {questionComponents}
            
            {submitted > 0 && <h2 className = "score"> Score: {count}/10 </h2>}
            <div className = "submit-div">
                
                {submitted === 0  && <button className = "submit-button" onClick = {submit}> Submit </button>}
                
                
                {submitted > 0 &&
                 
                    <button className = "submit-button" onClick = {restart}> Play Again </button>
                }
                {submitted > 0 &&  <button className = "submit-button" onClick = {() => props.setGameEnd(true)}> Exit Quiz </button>
                
                }
            </div>
            
        </div>
    ) 
}
