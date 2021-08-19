import { stat } from 'fs'
import * as actions from '../action'


const initialState = {
    micState: true
}
const micReducer = (state= initialState, action)=>{
    switch(action.type){
        case actions.MICOFF: 
            return{
                ...state,
                micState: false
        }
        case action.MICON:
            return{
                ...state,
                micState: true
            }
        default: return state
    }
}