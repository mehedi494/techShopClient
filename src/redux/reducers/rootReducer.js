import { combineReducers } from "redux"
import productReducer from './productReducer';
import {filterReducer} from './filterReducer';


export const rootReducer = combineReducers({
    productReducer,
    filterReducer
})