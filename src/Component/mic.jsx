import React, { Component } from 'react'
import './mic.css'
class mic extends Component {
    render () {
        
        const micOff= ()=>{
            const element = document.getElementsByClassName('micContainer')
            console.log("element",element[0])
            element[0].innerHTML= 'micoff'
            
        }
        return (
            <div className="micContainer">
                mic
                <button onClick={micOff}>micoff</button>
            </div>
        )
    }
}

export default mic