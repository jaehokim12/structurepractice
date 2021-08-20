import { createStore ,applyMiddleware} from "redux";
import myLogger from "../middleware/myLogger";
import ReduxThunk from 'redux-thunk';

const create = (reducer)=>{
    return createStore(reducer,applyMiddleware(ReduxThunk,myLogger))
}
export default create