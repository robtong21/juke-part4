'use strict'

import {SET_LYRICS} from './constants';
import {createStore} from 'redux'
// import reducer from './reducers/root-reducer'
import {applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import lyricsReducer from './reducers/lyrics-reducer'
import playerReducer from './reducers/player-reducer'
import {combineReducers} from 'redux'


// export default createStore(reducer)
export default createStore(
	combineReducers({
		lyrics: lyricsReducer,
		player: playerReducer
	}),
    // reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(createLogger(), thunkMiddleware))