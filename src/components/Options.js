import React from "react"
import { nanoid } from 'nanoid'

export default function Options (props) {
    
    const [options, setOptions] = React.useState([])  
    
    React.useEffect(function () {
        setOptions(props.options.map(option => {
            const style = option.selected ? {backgroundColor: "#D6DBF5", borderStyle: "none"} : {backgroundColor: "white"}     
            return( <button 
                        key= {option.id} 
                        className="option-button" 
                        onClick = {() => {props.selectOption(option.id, props.questionId)}}
                        style={style}
                    >
                    {option.text}
                    </button> )
    }))
    }, [props.options])
    
    React.useEffect(function () {
        if (props.submitted) {
            setOptions(props.options.map(option => { 
                
                let style = {}
                
                if (option.id === props.correctOptionId && option.selected)
                    style = {backgroundColor: "#6FD243", borderStyle: "none"}
                else if (option.id === props.correctOptionId)
                    style = {backgroundColor: "#9ADF7B"}
                else if (option.selected)
                    style = {backgroundColor: "#C82236"}
                   
                return( <button 
                            key= {option.id} 
                            className="option-button" 
                            onClick = {() => {props.selectOption(option.id, props.questionId)}}
                            style={style}
                        >
                        {option.text}
                        </button> )
        }))
        }
    }, [props.submitted])
    
    return (
        <div>
            {options}
        </div>
    )
}