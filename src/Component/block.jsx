import React, { Component } from 'react'
import './block.css'
import Mic from './mic'
import Noti from './noti'
class block extends Component {
    render () {
        return (
            <div className="blockContainer">
                <Mic></Mic>
                <Noti></Noti>
            </div>
        )
    }
}

export default block