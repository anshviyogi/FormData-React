import {combineReducers} from 'redux'
import {personalReducer} from './personalReducer'
import {visitorReducer} from './visitorReducer'
import { userIdReducer } from './userIdReducer'

export const reducers = combineReducers({
    personalReducer,
    visitorReducer,
    userIdReducer
})