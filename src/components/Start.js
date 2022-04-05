import React from 'react'

export default function Start (props) {
    return (
        <div className = "start-page">
            <div className = "start-page-content">
                <h1 className = "game-title"> Quizzical </h1>
                <p className = "game-intro"> Test your knowledge on various <br/> intresting topics!</p>
                <button className = "game-start-button" onClick = {props.startGame}> Start Quiz </button>
            </div>
        </div>
    )
}