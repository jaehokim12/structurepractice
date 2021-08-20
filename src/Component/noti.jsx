import React, { Component } from 'react'
import './noti.css'
import {connect} from 'react-redux'
import * as actions from '../action/mic'
class noti extends Component {
    constructor(props){
        super(props)
        // console.log(props)
    }
    
    render () {
        const {micoffdispatch,micondispatch}= this.props
        // console.log(this.props)
        return (
            <div className="notiContainer">
                
                <button onClick={micoffdispatch}>micoff</button>
                <button onClick={micondispatch}>micon</button>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return ({MicStatus: state.micState})
}
const mapDispatchToProps = (dispatch) =>({
    micoffdispatch: ()=> dispatch(actions.MicOfffunc()),
    micondispatch: ()=> dispatch(actions.MicOnfunc())
    //dispatch 함수를 컴포넌트에서 실행하면 action함수를 실행해서 action의 타입값을 dispatch()
    //함수에 담아 {type:''}객체를 reducer함수에 전달한다.reducer는 action이라는인자로받아서
    //action.type 으로 접근가능 type에 따라 case 문실행

})
export default connect(mapStateToProps,mapDispatchToProps)(noti)