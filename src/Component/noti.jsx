import React, { Component } from 'react'
import './noti.css'
import micoff from'./mic'
class noti extends Component {
    
    render () {
        return (
            <div className="notiContainer">
                noti
                <button onClick={micoff}></button>
            </div>
        )
    }
}

export default noti