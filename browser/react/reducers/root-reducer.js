'use strict'
import {SET_LYRICS} from '../constants';

const initialState = {
    text: ''
}

export default function reducer (state = initialState, action) {
    // const newState = Object.assign({}, prevState);
    switch (action.type) {
        case SET_LYRICS:
            // newState.inputValue += action.newValue;
            return Object.assign({}, state, {text: action.lyric});
        default: return state;
    }
//   return newState;
}