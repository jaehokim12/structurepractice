import React, { Component } from 'react'
import './mic.css'
import {connect} from 'react-redux'
import * as actions from '../action/mic'

class mic extends Component {
    constructor(props){
        super(props)
        // console.log(props)
        // MicStatus: true
        // micoffdispatch: () => {…}
        // micondispatch: () => {…}

    }
    
    render () {
        const {MicStatus,micoffdispatch,micondispatch,micOffAsyncdispatch,micONfAsyndispatch}= this.props
        // console.log(this.props)
        const micOff= ()=>{
            const element = document.getElementsByClassName('micContainer')
            // console.log("element",element[0])
            element[0].innerHTML= 'micoff'
            //상태값
        }
        return (
            <div className="micContainer">
                {MicStatus}
                <button onClick={micOffAsyncdispatch}>micoff</button>
                <button onClick={micONfAsyndispatch}>micon</button>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return ({MicStatus: state.micState})
}
const mapDispatchToProps = (dispatch)=>({
    micoffdispatch: ()=> dispatch(actions.MicOfffunc()),
    micondispatch: ()=> dispatch(actions.MicOnfunc()),
    micOffAsyncdispatch: ()=> dispatch(actions.micOffAsync()),
    micONfAsyndispatch: ()=> dispatch(actions.micOnAsync())
})
export default connect(mapStateToProps,mapDispatchToProps)(mic)
