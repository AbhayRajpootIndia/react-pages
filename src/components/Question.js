import React from "react"
import Options from "./Options.js"

export default function Question (props) {
      
    return (
        <div className="question"> 
            <h2> {props.question.question} </h2>
            <Options options = {props.question.options} selectedOption = {props.question.selectedOption} selectOption = {props.selectOption} questionId = {props.question.id} correctOptionId = {props.question.correctOptionId} submitted = {props.submitted} submit = {props.submitted}/>
            <hr style={{width: "100%", border: "0.794239px solid #DBDEF0"}}/>
        </div>
    )
}