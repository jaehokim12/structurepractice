
import * as actions from '../action/mic'


const initialState = {
    micState: 'true'
}
const micReducer = (state= initialState, action)=>{
    switch(action.type){
        case actions.MICOFF: 
            return{
                ...state,
                micState: 'false'
        }
        case actions.MICON:
            return{
                ...state,
                micState: 'true'
            }
        default: return state
    }
}
export default micReducer
